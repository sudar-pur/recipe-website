#!/usr/bin/env node

// Generate remaining recipe images using Pollinations.ai (free, no API key)
const fs = require('fs');
const path = require('path');
const https = require('https');

const IMG_DIR = path.join(__dirname, 'images');
if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR);

const RECIPES = [
  { slug: 'spiced-lentil-quinoa-salad', prompt: 'Overhead food photography of a lentil and quinoa salad with crumbled feta, cherry tomatoes, cucumber, fresh herbs, and a soft-boiled egg, served in a wide shallow bowl, bright natural lighting' },
  { slug: 'korean-tofu-bibimbap', prompt: 'Overhead food photography of bibimbap in a stone bowl, rice topped with crispy tofu, spinach, bean sprouts, carrots, zucchini, kimchi, and a fried egg, with gochujang sauce, vibrant colors, warm lighting' },
  { slug: 'mexican-quinoa-power-bowl', prompt: 'Overhead food photography of a Mexican quinoa bowl with black beans, roasted sweet potato, corn, avocado, cotija cheese, pepitas, and lime wedge, in a wide bowl, bright colorful, natural lighting' },
  { slug: 'white-bean-kale-ribollita', prompt: 'Overhead food photography of ribollita, thick Tuscan bread soup with white beans, kale, and crusty bread, topped with parmesan, served in a rustic ceramic bowl, wooden table, warm moody lighting' },
  { slug: 'halloumi-lentil-tabbouleh', prompt: 'Overhead food photography of a tabbouleh bowl with grilled halloumi slices, lentils, bulgur wheat, fresh parsley, mint, tomatoes, and cucumber, in a wide bowl, bright Mediterranean lighting' },
  { slug: 'crispy-masala-chickpeas', prompt: 'Overhead food photography of crispy roasted spiced chickpeas in a small bowl next to a white yogurt dip, scattered on a dark surface, garnished with cilantro, warm lighting, snack presentation' },
  { slug: 'paneer-tikka-skewers', prompt: 'Overhead food photography of paneer tikka skewers, charred paneer cubes and colorful bell peppers on metal skewers, served on a slate board with mint yogurt dip, warm lighting' },
  { slug: 'masala-sundal', prompt: 'Overhead food photography of masala sundal, spiced chickpeas with coconut and curry leaves, served in a small traditional bowl, garnished with fresh coconut shavings, warm natural lighting' },
  { slug: 'spicy-garlic-edamame', prompt: 'Overhead food photography of spicy garlic edamame pods in a dark bowl, glistening with garlic and chili oil, sprinkled with sesame seeds and red pepper flakes, dark background, warm lighting' },
  { slug: 'baked-falafel-bites', prompt: 'Overhead food photography of golden baked falafel balls arranged on a plate with a bowl of creamy tahini yogurt dip, garnished with herbs, rustic wooden table, bright natural lighting' },
  { slug: 'greek-egg-muffins', prompt: 'Overhead food photography of egg muffins with spinach, feta cheese, and sun-dried tomatoes, arranged on a cooling rack, golden tops, bright morning lighting, clean marble surface' },
  { slug: 'protein-jeera-rice', prompt: 'Overhead food photography of jeera rice, cumin-speckled basmati rice garnished with fresh cilantro, served in a copper bowl, wooden table, warm natural lighting, simple and elegant' },
  { slug: 'greek-yogurt-raita', prompt: 'Overhead food photography of raita, creamy white yogurt with grated cucumber and spices, served in a small traditional bowl, garnished with cumin and mint, wooden table, warm lighting' },
  { slug: 'garlic-naan', prompt: 'Overhead food photography of garlic naan bread, golden blistered naan with garlic and cilantro, stacked on a wooden board, brushed with butter, rustic table, warm lighting' },
  { slug: 'cilantro-mint-chutney', prompt: 'Overhead food photography of bright green cilantro mint chutney in a small stone mortar bowl, vibrant green color, garnished with a mint leaf, dark wooden surface, natural lighting' },
  { slug: 'coconut-chutney', prompt: 'Overhead food photography of white coconut chutney in a small bowl with tempering of mustard seeds and curry leaves on top, served alongside, wooden table, warm natural lighting' },
  { slug: 'protein-sambar', prompt: 'Overhead food photography of sambar, South Indian lentil and vegetable stew in a steel or ceramic bowl, golden-orange color, garnished with cilantro, wooden table, warm lighting' },
  { slug: 'high-protein-hummus', prompt: 'Overhead food photography of creamy hummus swirled in a shallow bowl, drizzled with olive oil and paprika, with a few whole chickpeas on top, served with pita, bright natural lighting' },
  { slug: 'mexican-rice-and-beans', prompt: 'Overhead food photography of Mexican rice and black beans, fluffy orange-tinted rice mixed with black beans, garnished with cilantro and lime wedge, served in a bowl, warm lighting' },
  { slug: 'miso-soup-with-tofu', prompt: 'Overhead food photography of miso soup with soft tofu cubes, wakame seaweed, and sliced scallions, in a traditional Japanese bowl, minimal clean presentation, soft warm lighting' },
  { slug: 'simple-dal', prompt: 'Overhead food photography of simple dal, golden yellow lentil soup with tadka of cumin, mustard seeds, and curry leaves on top, served in a ceramic bowl, garnished with cilantro and lemon, warm lighting' },
];

const DELAY_MS = 12000; // 12 seconds between requests

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const makeRequest = (requestUrl, redirects) => {
      if (redirects > 5) return reject(new Error('Too many redirects'));

      const parsedUrl = new URL(requestUrl);
      const mod = parsedUrl.protocol === 'https:' ? https : require('http');

      mod.get(requestUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return makeRequest(res.headers.location, redirects + 1);
        }
        if (res.statusCode !== 200) {
          const chunks = [];
          res.on('data', c => chunks.push(c));
          res.on('end', () => reject(new Error(`HTTP ${res.statusCode}: ${Buffer.concat(chunks).toString().slice(0, 200)}`)));
          return;
        }
        const chunks = [];
        res.on('data', chunk => chunks.push(chunk));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      }).on('error', reject);
    };
    makeRequest(url, 0);
  });
}

async function main() {
  // Check which already exist
  const existing = new Set(fs.readdirSync(IMG_DIR).map(f => f.replace(/\.(jpg|png|webp)$/, '')));
  const remaining = RECIPES.filter(r => !existing.has(r.slug));

  console.log(`Total to generate: ${RECIPES.length}`);
  console.log(`Already exist: ${RECIPES.length - remaining.length}`);
  console.log(`Remaining: ${remaining.length}`);

  if (remaining.length === 0) {
    console.log('All images already generated!');
    return;
  }

  for (let i = 0; i < remaining.length; i++) {
    const recipe = remaining[i];
    const imgPath = path.join(IMG_DIR, `${recipe.slug}.jpg`);
    const fullPrompt = recipe.prompt + ', 50mm lens, shallow depth of field, professional food magazine quality';
    const encodedPrompt = encodeURIComponent(fullPrompt);
    const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${Math.floor(Math.random() * 100000)}`;

    console.log(`[${i + 1}/${remaining.length}] Generating: ${recipe.slug}...`);

    try {
      const imageData = await downloadImage(url);
      // Verify it's actually an image (starts with JPEG or PNG magic bytes)
      if (imageData.length < 5000) {
        console.error(`  FAILED: Response too small (${imageData.length} bytes), likely an error`);
        continue;
      }
      fs.writeFileSync(imgPath, imageData);
      console.log(`  Saved: ${imgPath} (${(imageData.length / 1024).toFixed(0)} KB)`);
    } catch (err) {
      console.error(`  FAILED: ${err.message}`);
      if (err.message.includes('429')) {
        console.log('  Rate limited, waiting 30s...');
        await sleep(30000);
        i--; // retry
        continue;
      }
    }

    if (i < remaining.length - 1) {
      await sleep(DELAY_MS);
    }
  }

  console.log('\nDone! Run the following to wire images into recipes:');
  console.log('  node wire_images.js');
}

main().catch(console.error);
