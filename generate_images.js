#!/usr/bin/env node

// ============================================================
// Recipe Image Generator using Hugging Face Inference API (free)
// ============================================================
//
// SETUP:
// 1. Create a free account at https://huggingface.co
// 2. Go to https://huggingface.co/settings/tokens
// 3. Create a new token (read access is fine)
// 4. Run: HF_TOKEN=hf_xxxxx node generate_images.js
//
// This will generate images for all 52 recipes and save them
// to the images/ directory. Takes ~10-15 minutes on free tier.
// ============================================================

const fs = require('fs');
const path = require('path');
const https = require('https');

const HF_TOKEN = process.env.HF_TOKEN;
if (!HF_TOKEN) {
  console.error('Missing HF_TOKEN. Run with: HF_TOKEN=hf_xxxxx node generate_images.js');
  console.error('Get a free token at https://huggingface.co/settings/tokens');
  process.exit(1);
}

const MODEL = 'stabilityai/stable-diffusion-3-medium-diffusers';
const IMG_DIR = path.join(__dirname, 'images');

// Ensure images directory exists
if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR);

// Custom prompts per recipe for best results
const RECIPES = [
  { slug: 'paneer-tikka-masala', prompt: 'Overhead food photography of paneer tikka masala, golden paneer cubes in rich orange-red creamy tomato sauce, served in a dark cast iron skillet, garnished with cilantro and cream swirl, rustic wooden table, warm natural lighting' },
  { slug: 'protein-chana-masala', prompt: 'Overhead food photography of chana masala, chickpea curry in spiced tomato gravy, served in a ceramic bowl, garnished with cilantro and lemon wedge, rustic wooden table, warm natural lighting' },
  { slug: 'black-dal-makhani', prompt: 'Overhead food photography of dal makhani, creamy black lentil curry with cream swirl on top, served in a copper bowl, garnished with butter and cilantro, dark wooden table, warm moody lighting' },
  { slug: 'tofu-tikka-masala', prompt: 'Overhead food photography of tofu tikka masala, golden tofu cubes in creamy orange tikka sauce, served in a deep plate, garnished with cilantro, rustic wooden table, warm natural lighting' },
  { slug: 'palak-paneer', prompt: 'Overhead food photography of palak paneer, bright green spinach curry with white paneer cubes, served in a traditional Indian bowl, garnished with cream, dark wooden table, warm lighting' },
  { slug: 'egg-curry', prompt: 'Overhead food photography of Indian egg curry, halved boiled eggs in rich golden-orange curry sauce, served in a ceramic bowl, garnished with cilantro, wooden table, warm natural lighting' },
  { slug: 'rajma-masala', prompt: 'Overhead food photography of rajma masala, red kidney bean curry in thick tomato gravy, served in a ceramic bowl with rice on the side, garnished with cilantro, wooden table, warm lighting' },
  { slug: 'chickpea-spinach-stuffed-peppers', prompt: 'Overhead food photography of stuffed bell peppers filled with chickpea and spinach mixture topped with melted cheese, in a baking dish, rustic wooden table, warm natural lighting' },
  { slug: 'mediterranean-lentil-feta-bowl', prompt: 'Overhead food photography of a Mediterranean grain bowl with lentils, crumbled feta cheese, cherry tomatoes, cucumber, olives, and a soft-boiled egg, in a wide ceramic bowl, bright natural lighting' },
  { slug: 'crispy-tofu-stir-fry', prompt: 'Overhead food photography of crispy tofu stir fry with colorful vegetables, broccoli, edamame, red bell peppers, snap peas, sesame seeds, served in a dark bowl, wooden table, warm lighting' },
  { slug: 'moong-dal-tadka', prompt: 'Overhead food photography of moong dal tadka, yellow lentil soup with tadka of cumin and red chili on top, served in a ceramic bowl, garnished with cilantro, wooden table, warm lighting' },
  { slug: 'black-bean-enchiladas', prompt: 'Overhead food photography of black bean enchiladas in a baking dish, covered in red enchilada sauce and melted cheese, garnished with sour cream and cilantro, rustic table, warm lighting' },
  { slug: 'protein-adai', prompt: 'Overhead food photography of crispy South Indian lentil pancakes (adai dosa) on a plate, golden brown, served with coconut chutney in a small bowl, banana leaf underneath, warm natural lighting' },
  { slug: 'egg-sambar-rice-bowl', prompt: 'Overhead food photography of a South Indian rice bowl with sambar curry, halved boiled eggs, and rice, served in a steel plate with small bowls of yogurt, warm natural lighting' },
  { slug: 'spicy-mapo-tofu', prompt: 'Overhead food photography of mapo tofu, silky tofu cubes in spicy red Sichuan chili oil sauce with ground peanuts and scallions, served in a ceramic bowl, dark background, dramatic warm lighting' },
  { slug: 'thai-basil-tofu', prompt: 'Overhead food photography of Thai basil stir fry with crispy tofu, fresh Thai basil leaves, red bell peppers, served over jasmine rice in a plate, wooden table, warm natural lighting' },
  { slug: 'kung-pao-tofu', prompt: 'Overhead food photography of kung pao tofu with roasted peanuts, dried red chilies, scallions, zucchini, in a glossy brown sauce, served in a dark bowl, wooden table, warm lighting' },
  { slug: 'tofu-katsu-curry', prompt: 'Overhead food photography of tofu katsu curry, crispy breaded tofu cutlet sliced on a bed of white rice with golden Japanese curry sauce, served on a plate, clean minimal background' },
  { slug: 'spicy-stuffed-poblanos', prompt: 'Overhead food photography of stuffed poblano peppers filled with black beans, quinoa, and melted cheese, on a baking sheet, garnished with sour cream and cilantro, rustic table, warm lighting' },
  { slug: 'pasta-e-fagioli', prompt: 'Overhead food photography of pasta e fagioli, Italian bean and pasta soup with small pasta, white beans, tomatoes, topped with parmesan cheese, served in a rustic bowl, wooden table, warm lighting' },
  { slug: 'eggplant-parmesan', prompt: 'Overhead food photography of baked eggplant parmesan in a baking dish, layers of breaded eggplant with marinara sauce and melted mozzarella, garnished with fresh basil, wooden table, warm lighting' },
  { slug: 'halloumi-chickpea-grain-bowl', prompt: 'Overhead food photography of a grain bowl with grilled halloumi slices, chickpeas, farro, cherry tomatoes, cucumber, olives, and tahini dressing, in a wide ceramic bowl, bright natural lighting' },
  { slug: 'masala-egg-bhurji', prompt: 'Overhead food photography of Indian scrambled eggs (egg bhurji) with onions, tomatoes, green chilies, served on a plate with toast, garnished with cilantro, wooden table, warm morning lighting' },
  { slug: 'besan-chilla-paneer', prompt: 'Overhead food photography of golden chickpea flour pancakes (besan chilla) stuffed with crumbled paneer, folded on a plate, served with green chutney, wooden table, warm morning lighting' },
  { slug: 'cardamom-yogurt-parfait', prompt: 'Overhead food photography of a layered yogurt parfait in a glass jar with Greek yogurt, granola, mixed berries, crushed pistachios, almonds, and seeds, bright natural morning lighting, marble surface' },
  { slug: 'pesarattu-egg-paneer-upma', prompt: 'Overhead food photography of green moong dal crepes (pesarattu) with a fried egg on top, served alongside paneer upma, on a plate, warm morning lighting, wooden table' },
  { slug: 'chilaquiles-with-eggs', prompt: 'Overhead food photography of chilaquiles with fried eggs on top, tortilla chips in green salsa, topped with queso fresco, avocado slices, and cilantro, served in a cast iron skillet, warm lighting' },
  { slug: 'caprese-baked-eggs', prompt: 'Overhead food photography of caprese baked eggs in a skillet, eggs baked with cherry tomatoes, fresh mozzarella, and white beans, garnished with fresh basil, rustic table, warm lighting' },
  { slug: 'shakshuka-with-feta', prompt: 'Overhead food photography of shakshuka, eggs poached in spicy red tomato sauce with crumbled feta cheese and chickpeas, in a cast iron skillet, garnished with herbs, rustic table, warm lighting' },
  { slug: 'paneer-chickpea-power-bowl', prompt: 'Overhead food photography of an Indian power bowl with grilled paneer cubes, chickpeas, brown rice, yogurt raita, and fresh herbs, in a wide bowl, wooden table, bright natural lighting' },
  { slug: 'high-protein-dal-soup', prompt: 'Overhead food photography of a thick creamy dal soup, golden yellow lentil soup with paneer cubes and a swirl of yogurt, served in a ceramic bowl, garnished with cilantro, wooden table, warm lighting' },
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

const DELAY_MS = 8000; // 8 seconds between requests to stay within free tier limits

function generateImage(prompt) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      inputs: prompt + ', 50mm lens, shallow depth of field, professional food magazine quality',
    });

    const options = {
      hostname: 'router.huggingface.co',
      path: `/hf-inference/models/${MODEL}`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HF_TOKEN}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    const req = https.request(options, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        if (res.statusCode !== 200) {
          reject(new Error(`API error ${res.statusCode}: ${buffer.toString()}`));
        } else {
          resolve(buffer);
        }
      });
    });

    req.on('error', (err) => reject(err));
    req.write(postData);
    req.end();
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  // Check which images already exist (for resuming)
  const existing = new Set(fs.readdirSync(IMG_DIR).map(f => f.replace('.jpg', '')));
  const remaining = RECIPES.filter(r => !existing.has(r.slug));

  console.log(`Total recipes: ${RECIPES.length}`);
  console.log(`Already generated: ${existing.size}`);
  console.log(`Remaining: ${remaining.length}`);

  if (remaining.length === 0) {
    console.log('All images already generated!');
    return;
  }

  for (let i = 0; i < remaining.length; i++) {
    const recipe = remaining[i];
    const imgPath = path.join(IMG_DIR, `${recipe.slug}.jpg`);

    console.log(`[${i + 1}/${remaining.length}] Generating: ${recipe.slug}...`);

    try {
      const imageData = await generateImage(recipe.prompt);
      fs.writeFileSync(imgPath, imageData);
      console.log(`  Saved: ${imgPath} (${(imageData.length / 1024).toFixed(0)} KB)`);
    } catch (err) {
      console.error(`  FAILED: ${err.message}`);
      if (err.message.includes('503') || err.message.includes('loading')) {
        console.log('  Model is loading, waiting 30s...');
        await sleep(30000);
        i--; // retry
        continue;
      }
      if (err.message.includes('429')) {
        console.log('  Rate limited, waiting 60s...');
        await sleep(60000);
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
