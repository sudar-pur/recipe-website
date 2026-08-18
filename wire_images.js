#!/usr/bin/env node

// Adds image paths to recipes.js for any generated images in images/
const fs = require('fs');
const path = require('path');

const recipesPath = path.join(__dirname, 'js', 'recipes.js');
const imgDir = path.join(__dirname, 'images');

// Find all generated images
const images = new Set(
  fs.readdirSync(imgDir)
    .filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp'))
    .map(f => f.replace(/\.(jpg|png|webp)$/, ''))
);

console.log(`Found ${images.size} images in images/`);

// Load recipes
let src = fs.readFileSync(recipesPath, 'utf8');
const fn = new Function(src.replace(/^const recipes =/, 'var _r =') + '\nreturn _r;');
const recipes = fn();

let updated = 0;
for (const r of recipes) {
  if (images.has(r.slug)) {
    const ext = fs.existsSync(path.join(imgDir, r.slug + '.jpg')) ? 'jpg'
      : fs.existsSync(path.join(imgDir, r.slug + '.png')) ? 'png' : 'webp';
    r.image = `images/${r.slug}.${ext}`;
    updated++;
  }
}

console.log(`Updated ${updated} recipes with image paths`);

// Re-serialize (same serializer as merge script)
function serializeIngredient(ing) {
  let parts = [];
  if (ing.amount !== undefined) parts.push(`amount: ${ing.amount}`);
  if (ing.unit !== undefined) parts.push(`unit: ${JSON.stringify(ing.unit)}`);
  parts.push(`item: ${JSON.stringify(ing.item)}`);
  if (ing.note) parts.push(`note: ${JSON.stringify(ing.note)}`);
  if (ing.protein) parts.push(`protein: ${ing.protein}`);
  return '{ ' + parts.join(', ') + ' }';
}

function serializeValue(val, indent) {
  if (val === null || val === undefined) return 'null';
  if (typeof val === 'number') return val.toString();
  if (typeof val === 'boolean') return val.toString();
  if (typeof val === 'string') return JSON.stringify(val);
  if (Array.isArray(val)) return serializeArray(val, indent);
  if (typeof val === 'object') return serializeObject(val, indent);
  return JSON.stringify(val);
}

function serializeArray(arr, indent) {
  if (arr.length === 0) return '[]';
  const allSimple = arr.every(v => typeof v === 'string' || typeof v === 'number');
  if (allSimple && arr.length <= 5) {
    return '[' + arr.map(v => serializeValue(v, indent + '  ')).join(', ') + ']';
  }
  const inner = indent + '  ';
  const items = arr.map(v => inner + serializeValue(v, inner));
  return '[\n' + items.join(',\n') + '\n' + indent + ']';
}

function serializeObject(obj, indent) {
  const inner = indent + '  ';
  const entries = [];
  const fieldOrder = [
    'slug', 'title', 'image', 'category', 'cuisine', 'difficulty',
    'prepTime', 'cookTime', 'servings',
    'proteinPerServing', 'caloriesPerServing', 'fatPerServing', 'carbsPerServing', 'fiberPerServing',
    'description', 'story', 'proteinModification',
    'ingredients', 'instructions', 'proteinTips', 'substitutions', 'pairings', 'tags'
  ];
  const keys = Object.keys(obj);
  const orderedKeys = fieldOrder.filter(k => keys.includes(k));
  const remainingKeys = keys.filter(k => !fieldOrder.includes(k));
  const allKeys = [...orderedKeys, ...remainingKeys];

  for (const key of allKeys) {
    const val = obj[key];
    if (val === undefined) continue;
    if (key === 'ingredients' && Array.isArray(val)) {
      const ingItems = val.map(ing => inner + '  ' + serializeIngredient(ing));
      entries.push(inner + `ingredients: [\n${ingItems.join(',\n')}\n${inner}]`);
    } else if (key === 'pairings' && Array.isArray(val)) {
      if (val.length === 0) { entries.push(inner + 'pairings: []'); }
      else {
        const pairItems = val.map(p => {
          const pParts = [];
          if (p.item) pParts.push(`item: ${JSON.stringify(p.item)}`);
          if (p.protein) pParts.push(`protein: ${JSON.stringify(p.protein)}`);
          if (p.slug) pParts.push(`slug: ${JSON.stringify(p.slug)}`);
          return inner + '  { ' + pParts.join(', ') + ' }';
        });
        entries.push(inner + `pairings: [\n${pairItems.join(',\n')}\n${inner}]`);
      }
    } else if (['instructions', 'proteinTips', 'substitutions', 'tags'].includes(key) && Array.isArray(val)) {
      if (val.length === 0) { entries.push(inner + `${key}: []`); }
      else {
        const items = val.map(v => inner + '  ' + JSON.stringify(v));
        entries.push(inner + `${key}: [\n${items.join(',\n')}\n${inner}]`);
      }
    } else {
      entries.push(inner + `${key}: ${serializeValue(val, inner)}`);
    }
  }
  return '{\n' + entries.join(',\n') + '\n' + indent + '}';
}

let output = 'const recipes = [\n';
output += recipes.map(r => '  ' + serializeObject(r, '  ')).join(',\n\n');
output += '\n];\n';

fs.writeFileSync(recipesPath, output, 'utf8');
console.log('Successfully wrote updated recipes.js');
