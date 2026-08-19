const recipes = [
  {
    slug: "paneer-tikka-masala",
    title: "Paneer Tikka Masala",
    image: "images/paneer-tikka-masala.jpg",
    category: "dinner",
    cuisine: "Indian",
    difficulty: "hard",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    proteinPerServing: 22,
    caloriesPerServing: 420,
    fatPerServing: 24,
    carbsPerServing: 26,
    fiberPerServing: 3,
    description: "Smoky, charred paneer in a rich and creamy tomato-based tikka sauce. This protein-packed version uses a generous amount of paneer and Greek yogurt instead of cream.",
    story: "This is the dish that started it all for me. When I first got serious about lifting in college, every meal plan I found was built around chicken breast and broccoli on repeat. I needed something with actual flavor that could still hit my protein goals. Paneer was the answer. It's basically a protein brick that soaks up whatever spices you throw at it.\n\nThis version swaps heavy cream for Greek yogurt, which gives the sauce a tangy richness I honestly prefer now. The yogurt also bumps the protein way up. I load it with extra paneer because why wouldn't you, it's the whole point. When I first tracked the macros on this and saw 22g protein per serving, I stopped worrying about whether I was getting enough from my meals.\n\nI make this almost every week. It's the dish I pull out when friends come over and inevitably hit me with the \"but where do you get your protein?\" question. One bowl of this usually ends that conversation.",
    proteinModification: "A standard restaurant paneer tikka masala uses about 6-8oz of paneer for four servings and finishes with heavy cream, delivering roughly 12-15g of protein per serving. We use a generous 12oz of paneer, replaced the cream entirely with Greek yogurt (used both in the marinade and the sauce), pushing protein to 22g per serving without sacrificing any of the richness.",
    ingredients: [
      { amount: 12, unit: "oz", item: "paneer", note: "cut into 1-inch cubes", protein: 84 },
      { amount: 1, unit: "cup", item: "Greek yogurt", note: "divided, half for marinade, half for sauce", protein: 17 },
      { amount: 2, unit: "tbsp", item: "oil" },
      { amount: 1, unit: "large", item: "onion", note: "finely diced" },
      { amount: 4, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "inch", item: "ginger", note: "grated" },
      { amount: 1, unit: "can (14oz)", item: "crushed tomatoes" },
      { amount: 2, unit: "tsp", item: "garam masala" },
      { amount: 1, unit: "tsp", item: "turmeric" },
      { amount: 1, unit: "tsp", item: "cumin powder" },
      { amount: 1, unit: "tsp", item: "coriander powder" },
      { amount: 1, unit: "tsp", item: "paprika" },
      { amount: 0.5, unit: "tsp", item: "chili powder", note: "adjust to taste" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 2, unit: "tbsp", item: "fresh cilantro", note: "chopped, for garnish" },
      { amount: 1, unit: "tbsp", item: "kasuri methi", note: "dried fenugreek leaves" }
    ],
    instructions: [
      "Marinate the paneer cubes in half the Greek yogurt, 1 tsp garam masala, 1/2 tsp turmeric, and a pinch of salt. Let sit for at least 15 minutes.",
      "Heat 1 tbsp oil in a large pan over medium-high heat. Sear the marinated paneer cubes until golden on each side, about 2 minutes per side. Remove and set aside.",
      "In the same pan, add the remaining oil. Sauté the diced onion until golden brown, about 6-7 minutes.",
      "Add the garlic and ginger, cooking for 1 minute until fragrant.",
      "Add the remaining garam masala, cumin, coriander, paprika, chili powder, and remaining turmeric. Stir for 30 seconds.",
      "Pour in the crushed tomatoes and simmer for 10 minutes, stirring occasionally, until the sauce thickens.",
      "Reduce heat to low. Stir in the remaining Greek yogurt, one spoonful at a time, mixing well to prevent curdling.",
      "Add the seared paneer cubes back to the sauce. Crush the kasuri methi between your palms and stir in. Simmer for 5 minutes.",
      "Taste and adjust salt and spice. Garnish with fresh cilantro and serve hot."
    ],
    proteinTips: [
      "Serve over quinoa instead of rice for an extra 4g protein per serving.",
      "Add 1 cup cooked chickpeas to the sauce for an extra 6g protein per serving.",
      "Pair with a Greek yogurt raita on the side for an extra 5g protein."
    ],
    substitutions: [
      "No paneer? Use extra-firm tofu for a lower-calorie, vegan-friendly swap.",
      "No Greek yogurt? Use cashew cream or coconut cream for a dairy-free version.",
      "No kasuri methi? Use a pinch of dried thyme for a similar earthy note.",
      "Swap oil for ghee to deepen the flavor with a more traditional finish."
    ],
    pairings: [
      { item: "Protein Jeera Rice", protein: "8g", slug: "protein-jeera-rice" },
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "indian",
      "paneer",
      "curry",
      "high-protein",
      "gluten-free"
    ]
  },

  {
    slug: "protein-chana-masala",
    title: "Protein-Packed Chana Masala",
    image: "images/protein-chana-masala.jpg",
    category: "dinner",
    cuisine: "Indian",
    difficulty: "hard",
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    proteinPerServing: 25,
    caloriesPerServing: 400,
    fatPerServing: 14,
    carbsPerServing: 38,
    fiberPerServing: 10,
    description: "A hearty, spiced chickpea curry with a generous swirl of cottage cheese stirred in and finished with Greek yogurt. This isn't your standard chana masala, it's engineered to deliver serious protein.",
    story: "Chickpeas are one of the most underrated protein sources out there. I used to eat chana masala just because it tasted good. It wasn't until I started tracking macros that I realized I'd been sitting on a goldmine. A regular version gets you about 12-14g protein per serving, which is decent, but not enough when you're trying to hit 35-40g per meal.\n\nSo I started tinkering. More chickpeas was the obvious move. Then I stirred in cottage cheese directly into the curry. Sounds weird, but it melts right in and adds this creamy richness you'd never expect. A thick finish of Greek yogurt instead of cream seals the deal. Now it hits 25g per serving and honestly tastes better than the original.\n\nThis is one of my favorite meal prep recipes. I'll make a big batch on Sunday, portion it out, and it reheats perfectly all week. The flavors actually get better after a day in the fridge.",
    proteinModification: "Traditional chana masala relies on chickpeas alone for its protein, typically landing around 12-14g per serving. We made two key changes: kept the generous four cans of chickpeas and stirred in a full cup of cottage cheese directly into the curry, plus a generous swirl of Greek yogurt. The result is 25g per serving, nearly double the protein of a standard recipe.",
    ingredients: [
      { amount: 4, unit: "cans (15oz)", item: "chickpeas", note: "drained and rinsed", protein: 84 },
      { amount: 1, unit: "cup", item: "cottage cheese", note: "stirred in at the end", protein: 14 },
      { amount: 2, unit: "tbsp", item: "oil" },
      { amount: 2, unit: "medium", item: "onions", note: "finely diced" },
      { amount: 4, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "inch", item: "ginger", note: "grated" },
      { amount: 2, unit: "medium", item: "tomatoes", note: "diced, or 1 can crushed" },
      { amount: 2, unit: "tsp", item: "coriander powder" },
      { amount: 1.5, unit: "tsp", item: "cumin powder" },
      { amount: 1, unit: "tsp", item: "garam masala" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 1, unit: "tsp", item: "amchur", note: "dry mango powder" },
      { amount: 0.5, unit: "tsp", item: "chili powder" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 0.75, unit: "cup", item: "Greek yogurt", note: "stirred in at the end", protein: 13 },
      { amount: 2, unit: "tbsp", item: "fresh cilantro", note: "chopped" },
      { amount: 1, unit: "", item: "lemon", note: "juiced" }
    ],
    instructions: [
      "Heat oil in a large pot over medium heat. Add onions and cook until deeply golden, about 8-10 minutes.",
      "Add garlic and ginger, sauté for 1 minute.",
      "Add coriander, cumin, turmeric, and chili powder. Stir for 30 seconds until fragrant.",
      "Add diced tomatoes and cook until they break down into a thick paste, about 5-7 minutes.",
      "Add the chickpeas, garam masala, amchur, and salt. Stir to coat. Add 1 cup water.",
      "Bring to a simmer and cook for 15-20 minutes, mashing a few chickpeas against the side of the pot to thicken the sauce.",
      "Stir in the cottage cheese and cook for another 2-3 minutes until it melts into the curry.",
      "Remove from heat. Stir in Greek yogurt and lemon juice.",
      "Garnish with cilantro and serve hot."
    ],
    proteinTips: [
      "Serve over quinoa instead of rice for an extra 4g protein per serving.",
      "Add a boiled egg on top for an extra 6g protein.",
      "Use a Greek yogurt raita on the side for an extra 5g protein."
    ],
    substitutions: [
      "No cottage cheese? Use ricotta or silken tofu blended smooth.",
      "No amchur? Use a squeeze of lemon juice for the same tanginess.",
      "No chickpeas? Use white beans (cannellini or navy) for a similar creamy texture.",
      "Swap oil for ghee to add a richer, nuttier flavor to the base."
    ],
    pairings: [
      { item: "Protein Jeera Rice", protein: "8g", slug: "protein-jeera-rice" },
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "indian",
      "chickpeas",
      "cottage-cheese",
      "one-pot",
      "meal-prep"
    ]
  },

  {
    slug: "black-dal-makhani",
    title: "Black Dal Makhani",
    image: "images/black-dal-makhani.jpg",
    category: "dinner",
    cuisine: "Indian",
    difficulty: "hard",
    prepTime: 15,
    cookTime: 60,
    servings: 4,
    proteinPerServing: 28,
    caloriesPerServing: 420,
    fatPerServing: 18,
    carbsPerServing: 34,
    fiberPerServing: 9,
    description: "Rich, creamy black lentil dal slow-simmered with kidney beans, enriched with cottage cheese blended into the base, and finished with Greek yogurt. A protein powerhouse built on tradition.",
    story: "Dal makhani is one of those slow-cooked dishes that rewards patience. The combination of black lentils and kidney beans simmered low and slow creates this incredibly rich, creamy texture that feels indulgent but is actually packed with protein. It's comfort food that works for you, not against you.\n\nThe traditional version finishes with butter and cream, which tastes amazing but doesn't do much for your macros. I swapped in cottage cheese blended right into the dal. It adds creaminess and a ton of protein without changing the flavor, and I finish with Greek yogurt instead of cream. That takes it from about 15g to 28g protein per serving while cutting the empty calories.\n\nMake this on a Sunday. Let it simmer while you hit the gym or go for a run. Come back to a kitchen that smells incredible and a pot full of fuel for the week ahead. It reheats beautifully, and honestly tastes even better on day two.",
    proteinModification: "Restaurant dal makhani is famous for its butter and cream, but a typical serving delivers only 14-16g of protein. We made three upgrades: increased the dal and rajma quantities significantly, blended a cup of cottage cheese right into the dal for invisible protein and extra creaminess, and replaced cream with Greek yogurt. The protein went from ~15g to 28g per serving, nearly double, while cutting the empty calories from cream and excess butter.",
    ingredients: [
      { amount: 2, unit: "cups", item: "whole urad dal (black lentils)", note: "soaked overnight", protein: 48 },
      { amount: 0.75, unit: "cup", item: "rajma (red kidney beans)", note: "soaked overnight", protein: 18 },
      { amount: 1, unit: "cup", item: "cottage cheese", protein: 14 },
      { amount: 2, unit: "tbsp", item: "butter or ghee" },
      { amount: 1, unit: "large", item: "onion", note: "finely diced" },
      { amount: 4, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "inch", item: "ginger", note: "grated" },
      { amount: 2, unit: "medium", item: "tomatoes", note: "pureed" },
      { amount: 1, unit: "tsp", item: "cumin seeds" },
      { amount: 1, unit: "tsp", item: "garam masala" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 1, unit: "tsp", item: "chili powder" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 0.75, unit: "cup", item: "Greek yogurt", protein: 13 },
      { amount: 4, unit: "cups", item: "water" },
      { amount: 1, unit: "tbsp", item: "kasuri methi", note: "dried fenugreek leaves" }
    ],
    instructions: [
      "Drain the soaked dal and rajma. Add them to a large pot with 4 cups of water. Bring to a boil, then reduce heat and simmer for 45 minutes (or 15 minutes in a pressure cooker) until completely tender.",
      "While dal cooks, prepare your other ingredients.",
      "In a separate pan, heat butter or ghee over medium heat. Add cumin seeds and let them splutter.",
      "Add the diced onion and cook until golden brown, about 8 minutes.",
      "Add garlic and ginger, sauté for 1 minute.",
      "Add the pureed tomatoes, turmeric, chili powder, and salt. Cook until the oil separates from the masala, about 8-10 minutes.",
      "Pour this masala mixture into the cooked dal and rajma. Add garam masala and stir well.",
      "Simmer on low heat for 15 minutes, stirring occasionally, until thick and creamy. Mash some of the dal against the side of the pot.",
      "Add the cottage cheese and stir vigorously until it melts into the dal. Remove from heat. Stir in Greek yogurt and crushed kasuri methi.",
      "Serve hot, garnished with a drizzle of ghee."
    ],
    proteinTips: [
      "Add a boiled egg per serving for an extra 6g protein.",
      "Serve over quinoa instead of rice for an extra 4g protein per serving.",
      "Add a boiled egg on top for an extra 6g protein per serving."
    ],
    substitutions: [
      "No whole urad dal? Use brown lentils, cook time will be shorter but the flavor works.",
      "No rajma? Use pinto beans or black beans as a substitute.",
      "No kasuri methi? Use a pinch of dried oregano or fenugreek powder.",
      "Swap butter for oil to make it lighter, or use ghee for a more traditional finish."
    ],
    pairings: [
      { item: "Protein Jeera Rice", protein: "8g", slug: "protein-jeera-rice" },
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Simple Dal", protein: "10g", slug: "simple-dal" }
    ],
    tags: [
      "indian",
      "lentils",
      "slow-cooked",
      "comfort-food",
      "meal-prep"
    ]
  },

  {
    slug: "tofu-tikka-masala",
    title: "Tofu Tikka Masala",
    image: "images/tofu-tikka-masala.jpg",
    category: "dinner",
    cuisine: "Indian-Fusion",
    difficulty: "hard",
    prepTime: 25,
    cookTime: 30,
    servings: 4,
    proteinPerServing: 28,
    caloriesPerServing: 380,
    fatPerServing: 18,
    carbsPerServing: 18,
    fiberPerServing: 4,
    description: "Crispy, well-seasoned tofu and edamame in a smoky tikka masala sauce. A double-soy protein hit that proves tofu belongs in Indian cooking.",
    story: "I was a tofu skeptic for most of my life. Every version I tried was bland and soggy. It wasn't until I started seriously tracking macros that I gave it a real shot. The calorie-to-protein ratio is just too good to ignore, especially during a cut.\n\nThe key is treating tofu with respect. You have to press it, hit it with a thick yogurt marinade and bold spices, then sear it hard over high heat. That's when tofu clicks, crispy on the outside, creamy on the inside, packed with flavor. I started applying the same tikka technique I use for paneer, and suddenly it all made sense.\n\nThe real move here is the double-soy approach: a full 21oz of tofu plus a cup of edamame stirred into the sauce. That pushes protein to 28g per serving while keeping calories lower than the paneer version. It's become my go-to during a cut. High protein, moderate calories, and genuinely delicious.",
    proteinModification: "Most tofu tikka recipes use a modest 10-12oz of tofu, landing around 12-14g protein per serving. We went aggressive: 21oz of pressed extra-firm tofu, added a full cup of shelled edamame to the sauce, and built the marinade around thick Greek yogurt. The protein hit 28g per serving. The edamame also adds a great texture contrast to the creamy sauce.",
    ingredients: [
      { amount: 21, unit: "oz", item: "extra-firm tofu", note: "pressed and cut into 1-inch cubes", protein: 105 },
      { amount: 1, unit: "cup", item: "shelled edamame", note: "frozen is fine", protein: 17 },
      { amount: 0.75, unit: "cup", item: "Greek yogurt", note: "divided", protein: 13 },
      { amount: 2, unit: "tbsp", item: "oil" },
      { amount: 1, unit: "large", item: "onion", note: "finely diced" },
      { amount: 3, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "inch", item: "ginger", note: "grated" },
      { amount: 1, unit: "can (14oz)", item: "crushed tomatoes" },
      { amount: 2, unit: "tsp", item: "garam masala" },
      { amount: 1, unit: "tsp", item: "turmeric" },
      { amount: 1, unit: "tsp", item: "cumin powder" },
      { amount: 1, unit: "tsp", item: "smoked paprika" },
      { amount: 0.5, unit: "tsp", item: "chili powder" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 2, unit: "tbsp", item: "fresh cilantro", note: "for garnish" }
    ],
    instructions: [
      "Press the tofu for at least 20 minutes between paper towels with a heavy object on top. Cut into 1-inch cubes.",
      "Marinate tofu in half the Greek yogurt, 1 tsp garam masala, 1/2 tsp turmeric, smoked paprika, and a pinch of salt for 15 minutes.",
      "Heat 1 tbsp oil in a large non-stick pan over high heat. Arrange tofu in a single layer and sear without moving for 3-4 minutes until a golden crust forms. Flip and repeat. Remove and set aside.",
      "In the same pan, reduce heat to medium. Add remaining oil and sauté onion until golden, about 6-7 minutes.",
      "Add garlic and ginger, cook for 1 minute.",
      "Add remaining spices and stir for 30 seconds.",
      "Add crushed tomatoes and simmer for 10 minutes until thickened.",
      "Add the edamame and cook for 3 minutes.",
      "Remove from heat slightly. Stir in remaining Greek yogurt gradually.",
      "Add the seared tofu back to the sauce. Simmer for 5 minutes to let flavors meld.",
      "Garnish with cilantro and serve."
    ],
    proteinTips: [
      "Serve over quinoa for an extra 4g protein per serving.",
      "Sprinkle nutritional yeast on top for an extra 4g protein.",
      "Use super-firm tofu (if available) for even more protein density."
    ],
    substitutions: [
      "No extra-firm tofu? Use paneer cubes for a richer, Indian-traditional version.",
      "No edamame? Use green peas or chickpeas for a similar protein and texture boost.",
      "No smoked paprika? Use regular paprika plus a tiny drop of liquid smoke.",
      "Swap Greek yogurt for coconut yogurt to make it fully vegan."
    ],
    pairings: [
      { item: "Protein Jeera Rice", protein: "8g", slug: "protein-jeera-rice" },
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "indian-fusion",
      "tofu",
      "high-protein",
      "lower-calorie",
      "gluten-free"
    ]
  },

  {
    slug: "palak-paneer",
    title: "Palak Paneer",
    image: "images/palak-paneer.jpg",
    category: "dinner",
    cuisine: "Indian",
    difficulty: "hard",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    proteinPerServing: 26,
    caloriesPerServing: 420,
    fatPerServing: 24,
    carbsPerServing: 22,
    fiberPerServing: 6,
    description: "Velvety spinach curry loaded with golden paneer cubes, with cannellini beans blended invisibly into the base for hidden protein. Greek yogurt replaces cream for even more.",
    story: "Palak paneer is one of those recipes that looks and tastes way more impressive than the effort it takes. Spinach pureed into a bright green sauce, golden seared paneer cubes, a few warm spices. It comes together in about 30 minutes and it's naturally low-carb if you skip the rice.\n\nWhat I love about this dish from a nutrition standpoint is how clean it is. Spinach is loaded with iron and micronutrients, paneer brings serious protein, and there's not much else weighing it down. It's perfect for days when I want to crush my protein target without overshooting on carbs or calories.\n\nThe secret weapon in this version is cannellini beans blended right into the spinach puree. You can't taste them, can't see them, but they add a ton of protein and make the sauce even creamier. That kind of invisible upgrade is my favorite hack, all gain, no compromise. The swap from cream to Greek yogurt seals it at 26g protein per serving.",
    proteinModification: "A typical palak paneer uses paneer sparingly, about 6-8oz for four servings, and finishes with cream, landing around 12-14g protein per serving. We use a generous 12oz of paneer, blended a can of cannellini beans into the spinach base (completely invisible but adds protein), and swapped cream for Greek yogurt. The result is 26g per serving, double the protein of what you'd get at a restaurant.",
    ingredients: [
      { amount: 12, unit: "oz", item: "paneer", note: "cut into 1-inch cubes", protein: 84 },
      { amount: 1, unit: "lb", item: "fresh spinach", note: "washed, or 10oz frozen" },
      { amount: 1, unit: "can (15oz)", item: "cannellini beans", note: "drained and rinsed", protein: 17 },
      { amount: 0.5, unit: "cup", item: "Greek yogurt", protein: 9 },
      { amount: 2, unit: "tbsp", item: "ghee or oil" },
      { amount: 1, unit: "medium", item: "onion", note: "roughly chopped" },
      { amount: 3, unit: "cloves", item: "garlic" },
      { amount: 1, unit: "inch", item: "ginger" },
      { amount: 2, unit: "", item: "green chilies", note: "adjust to taste" },
      { amount: 1, unit: "tsp", item: "cumin seeds" },
      { amount: 0.5, unit: "tsp", item: "garam masala" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 0.5, unit: "tsp", item: "lemon juice" }
    ],
    instructions: [
      "Blanch the spinach in boiling water for 2 minutes, then immediately transfer to an ice bath. Squeeze out excess water.",
      "Blend the blanched spinach, cannellini beans, and green chilies into a smooth puree. The beans disappear completely into the spinach. Set aside.",
      "Heat 1 tbsp ghee in a pan over medium-high heat. Lightly fry the paneer cubes until golden on each side, about 1-2 minutes per side. Remove and set aside.",
      "In the same pan, add remaining ghee. Add cumin seeds and let them splutter.",
      "Add chopped onion and cook until softened, about 4-5 minutes.",
      "Add garlic and ginger, sauté for 1 minute.",
      "Add turmeric and cook for 30 seconds.",
      "Pour in the spinach-bean puree and stir well. Cook for 5-7 minutes on medium heat.",
      "Reduce heat to low. Stir in Greek yogurt, one spoonful at a time.",
      "Add the fried paneer cubes, garam masala, salt, and lemon juice. Simmer for 5 minutes.",
      "Serve hot with roti or on its own for a low-carb meal."
    ],
    proteinTips: [
      "Add a boiled egg on the side for an extra 6g protein.",
      "Serve with a side of dal for an extra 8-10g protein.",
      "Use quinoa as a base for an extra 4g protein per serving."
    ],
    substitutions: [
      "No paneer? Use extra-firm tofu for a vegan version with similar protein.",
      "No cannellini beans? Use chickpeas or navy beans blended into the spinach.",
      "No fresh spinach? Use 10oz frozen spinach, thaw and squeeze out excess water.",
      "Swap ghee for coconut oil for a dairy-free option that still adds richness."
    ],
    pairings: [
      { item: "Protein Jeera Rice", protein: "8g", slug: "protein-jeera-rice" },
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Simple Dal", protein: "10g", slug: "simple-dal" }
    ],
    tags: [
      "indian",
      "paneer",
      "spinach",
      "low-carb",
      "gluten-free"
    ]
  },

  {
    slug: "egg-curry",
    title: "Egg Curry (Anda Curry)",
    image: "images/egg-curry.jpg",
    category: "dinner",
    cuisine: "Indian",
    difficulty: "medium",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    proteinPerServing: 25,
    caloriesPerServing: 380,
    fatPerServing: 20,
    carbsPerServing: 14,
    fiberPerServing: 2,
    description: "Hard-boiled eggs simmered in a fragrant, spiced tomato-onion gravy with cottage cheese stirred in, finished with Greek yogurt. A protein-loaded evolution of the classic anda curry.",
    story: "Egg curry is the ultimate budget-friendly protein meal. When I was in grad school, lifting regularly but watching every dollar, this was my lifeline. Eggs are the cheapest protein source you can find, and a solid curry sauce makes them taste like a million bucks.\n\nThe standard version uses two eggs per serving in a thin gravy, about 12-14g protein total, which wasn't cutting it for my needs. So I pushed it: three eggs per serving, cottage cheese stirred right into the sauce for extra richness and protein, and a generous finish of Greek yogurt. What used to be a light weeknight dinner became a legit 25g-protein post-workout meal, and it still costs about three bucks per serving.\n\nThe cottage cheese in the gravy is honestly what makes this version work. It melts in and gives the sauce this creamy body you'd never expect. The whole thing comes together in about 25 minutes, which makes it one of my fastest dinner options after a late gym session.",
    proteinModification: "Traditional anda curry uses 2 eggs per person in a simple tomato gravy, about 12-14g protein per serving. We made two changes: increased to 3 eggs per serving and enriched the gravy with cottage cheese and Greek yogurt. The protein jumped from ~13g to 25g, and the cottage cheese in the gravy adds richness you'd never expect.",
    ingredients: [
      { amount: 12, unit: "", item: "large eggs", note: "hard-boiled and peeled", protein: 72 },
      { amount: 0.75, unit: "cup", item: "cottage cheese", protein: 11 },
      { amount: 2, unit: "tbsp", item: "oil" },
      { amount: 2, unit: "medium", item: "onions", note: "finely diced" },
      { amount: 4, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "inch", item: "ginger", note: "grated" },
      { amount: 2, unit: "medium", item: "tomatoes", note: "pureed" },
      { amount: 1, unit: "tsp", item: "cumin seeds" },
      { amount: 1, unit: "tsp", item: "coriander powder" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 1, unit: "tsp", item: "chili powder" },
      { amount: 0.5, unit: "tsp", item: "garam masala" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 0.5, unit: "cup", item: "Greek yogurt", protein: 9 },
      { amount: 2, unit: "tbsp", item: "fresh cilantro", note: "for garnish" },
      { amount: 0.25, unit: "cup", item: "water" }
    ],
    instructions: [
      "Hard-boil the eggs: Place eggs in a pot, cover with cold water, bring to a boil, then cover and remove from heat. Let sit for 10 minutes. Transfer to ice water, then peel.",
      "Make shallow slits on each egg so the sauce can penetrate.",
      "Heat oil in a large pan over medium heat. Add cumin seeds and let them splutter.",
      "Add onions and cook until golden brown, about 8 minutes.",
      "Add garlic and ginger, sauté for 1 minute.",
      "Add coriander, turmeric, and chili powder. Stir for 30 seconds.",
      "Add pureed tomatoes and salt. Cook until the masala thickens and oil separates, about 8-10 minutes.",
      "Stir in the cottage cheese and cook for 2 minutes until it melts into the gravy.",
      "Add water and bring to a simmer. Gently add the hard-boiled eggs.",
      "Simmer for 5 minutes, spooning sauce over the eggs.",
      "Remove from heat. Stir in Greek yogurt and garam masala.",
      "Garnish with cilantro. Serve with roti or rice."
    ],
    proteinTips: [
      "Use 4 eggs per serving for an extra 6g protein.",
      "Serve over quinoa for an extra 4g protein per serving.",
      "Add a side of Greek yogurt raita for an extra 5g protein."
    ],
    substitutions: [
      "No cottage cheese? Use ricotta or cream cheese stirred into the gravy.",
      "No eggs? Use paneer cubes, sear them first, then simmer in the same gravy.",
      "No fresh tomatoes? Use one 14oz can of crushed tomatoes.",
      "Swap oil for ghee to give the tadka base a more traditional, nutty depth."
    ],
    pairings: [
      { item: "Protein Jeera Rice", protein: "8g", slug: "protein-jeera-rice" },
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "indian",
      "eggs",
      "cottage-cheese",
      "budget-friendly",
      "quick"
    ]
  },

  {
    slug: "rajma-masala",
    title: "Rajma Masala (Kidney Bean Curry)",
    image: "images/rajma-masala.jpg",
    category: "dinner",
    cuisine: "Indian",
    difficulty: "hard",
    prepTime: 10,
    cookTime: 40,
    servings: 4,
    proteinPerServing: 24,
    caloriesPerServing: 420,
    fatPerServing: 14,
    carbsPerServing: 46,
    fiberPerServing: 14,
    description: "Comforting kidney bean curry with an extra-generous portion of beans in a thick, spiced gravy, served with a built-in Greek yogurt raita. A protein-forward take on the ultimate North Indian comfort food.",
    story: "Rajma chawal, kidney beans and rice, is peak comfort food. It's the kind of meal you eat in a bowl on the couch and immediately feel better about everything. The thick, spiced gravy with soft beans over hot rice is one of those combinations that just works on every level.\n\nA standard version gives you about 10-12g protein per serving, which is fine for a side dish but not enough when it's your main meal after training. I doubled down on the beans, four full cans, and mash some against the side of the pot to create this thick, stew-like consistency. A thick Greek yogurt raita on the side adds even more protein and a cool contrast to the warm spices.\n\nThis is serious meal prep material. I'll make a huge batch on the weekend and eat it over rice all week. The flavors develop and deepen overnight, so Monday's lunch is even better than Sunday's dinner. At 24g protein per serving, it pulls its weight without any fancy tricks.",
    proteinModification: "A classic rajma masala relies on kidney beans alone for protein, delivering about 10-12g per serving. We doubled the bean quantity to four full cans and built a thick Greek yogurt raita into every serving. From ~11g to 24g per serving, more than double the protein, and it still tastes exactly like the rajma you grew up eating.",
    ingredients: [
      { amount: 4, unit: "cans (15oz)", item: "red kidney beans", note: "drained and rinsed", protein: 80 },
      { amount: 2, unit: "tbsp", item: "oil or ghee" },
      { amount: 1, unit: "large", item: "onion", note: "finely diced" },
      { amount: 4, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "inch", item: "ginger", note: "grated" },
      { amount: 2, unit: "medium", item: "tomatoes", note: "pureed" },
      { amount: 1, unit: "", item: "bay leaf" },
      { amount: 2, unit: "", item: "green cardamom pods" },
      { amount: 1, unit: "", item: "small cinnamon stick" },
      { amount: 1.5, unit: "tsp", item: "coriander powder" },
      { amount: 1, unit: "tsp", item: "cumin powder" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 1, unit: "tsp", item: "chili powder" },
      { amount: 1, unit: "tsp", item: "garam masala" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 0.5, unit: "cup", item: "water" },
      { amount: 0.75, unit: "cup", item: "Greek yogurt", note: "for raita", protein: 13 },
      { amount: 0.5, unit: "small", item: "cucumber", note: "grated, for raita" },
      { amount: 0.5, unit: "tsp", item: "cumin powder", note: "for raita" },
      { amount: 2, unit: "tbsp", item: "fresh cilantro", note: "for garnish" }
    ],
    instructions: [
      "Heat oil or ghee in a large pot over medium heat. Add bay leaf, cardamom, and cinnamon. Let them sizzle for 30 seconds.",
      "Add the diced onion and cook until deeply golden, about 8-10 minutes.",
      "Add garlic and ginger, cook for 1 minute.",
      "Add coriander, cumin, turmeric, and chili powder. Stir for 30 seconds.",
      "Add pureed tomatoes and salt. Cook until thick and oil separates, about 8-10 minutes.",
      "Add the kidney beans and water. Stir well.",
      "Bring to a simmer and cook for 15-20 minutes, mashing some beans against the side of the pot to thicken the gravy.",
      "Add garam masala. Adjust salt and spice to taste.",
      "Make the raita: Mix Greek yogurt with grated cucumber, cumin, and a pinch of salt.",
      "Remove bay leaf, cardamom, and cinnamon. Garnish with cilantro.",
      "Serve hot over rice with a generous spoonful of raita on each plate."
    ],
    proteinTips: [
      "Add cottage cheese to the gravy for an extra 7g protein per serving.",
      "Serve over quinoa instead of rice for an extra 4g protein.",
      "Top with a boiled egg for an extra 6g protein."
    ],
    substitutions: [
      "No red kidney beans? Use pinto beans or cranberry (borlotti) beans.",
      "No whole spices (bay leaf, cardamom, cinnamon)? Use 1 tsp garam masala added with the ground spices.",
      "No Greek yogurt for raita? Use sour cream or plain yogurt mixed with cucumber.",
      "Swap ghee for oil to keep it lighter."
    ],
    pairings: [
      { item: "Protein Jeera Rice", protein: "8g", slug: "protein-jeera-rice" },
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "indian",
      "beans",
      "comfort-food",
      "meal-prep",
      "budget-friendly"
    ]
  },

  {
    slug: "chickpea-spinach-stuffed-peppers",
    title: "Chickpea & Spinach Stuffed Peppers",
    image: "images/chickpea-spinach-stuffed-peppers.jpg",
    category: "dinner",
    cuisine: "Indian-Mediterranean Fusion",
    difficulty: "hard",
    prepTime: 20,
    cookTime: 35,
    servings: 4,
    proteinPerServing: 27,
    caloriesPerServing: 420,
    fatPerServing: 18,
    carbsPerServing: 32,
    fiberPerServing: 8,
    description: "Bell peppers stuffed with a spiced chickpea-quinoa-cottage cheese filling, topped with melted cheese. A colorful, protein-loaded meal that bridges Indian and Mediterranean flavors.",
    story: "This recipe was born from a Sunday evening fridge clean-out. I had bell peppers that needed to be used, leftover chickpeas, some spinach on its last day, and a block of cheese. I started stuffing the peppers with whatever I had, hit them with cumin and coriander, and something unexpectedly great happened.\n\nThe thing about stuffed peppers is they look like you spent hours in the kitchen, but the actual work is just mixing, stuffing, and baking. I've brought these to potlucks and they always disappear first. The cottage cheese in the filling was a later addition that changed everything. It adds protein without altering the flavor, makes the filling creamier, and keeps everything moist during baking.\n\nSwapping rice for quinoa in the filling was another easy protein win. Between the chickpeas, cottage cheese, quinoa, and cheese on top, you're looking at 27g protein per serving. These reheat really well too, so I usually make a double batch and eat them for lunch throughout the week.",
    proteinModification: "Standard stuffed peppers are mostly rice and vegetables with a sprinkle of cheese, about 10-12g of protein per serving. We overhauled the filling: replaced rice with quinoa, packed it with chickpeas and a full cup of cottage cheese (invisible once mixed in), used a generous 5oz of cheese topping, and added spinach for volume. From 10-12g to 27g, turning a side dish into a main event.",
    ingredients: [
      { amount: 4, unit: "large", item: "bell peppers", note: "halved and deseeded (8 halves)" },
      { amount: 2, unit: "cans (15oz)", item: "chickpeas", note: "drained and roughly mashed", protein: 42 },
      { amount: 5, unit: "oz", item: "fresh spinach", note: "chopped" },
      { amount: 0.75, unit: "cup", item: "quinoa", note: "cooked", protein: 6 },
      { amount: 1, unit: "cup", item: "cottage cheese", protein: 14 },
      { amount: 5, unit: "oz", item: "mozzarella or cheddar", note: "shredded, divided", protein: 30 },
      { amount: 1, unit: "tbsp", item: "olive oil" },
      { amount: 1, unit: "medium", item: "onion", note: "finely diced" },
      { amount: 3, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "tsp", item: "cumin powder" },
      { amount: 1, unit: "tsp", item: "coriander powder" },
      { amount: 0.5, unit: "tsp", item: "garam masala" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 0.5, unit: "tsp", item: "chili flakes" },
      { amount: 1, unit: "tsp", item: "salt" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C). Place halved peppers cut-side up in a baking dish. Drizzle with a little oil and bake for 10 minutes to soften slightly.",
      "While peppers bake, heat olive oil in a pan over medium heat. Sauté onion until softened, about 4-5 minutes.",
      "Add garlic, cumin, coriander, turmeric, and chili flakes. Cook for 1 minute.",
      "Add spinach and cook until wilted, about 2 minutes.",
      "Add mashed chickpeas, cooked quinoa, garam masala, and salt. Mix well. Remove from heat.",
      "Stir in cottage cheese and half the shredded cheese until well combined.",
      "Spoon the filling generously into each pepper half. Top with remaining cheese.",
      "Bake for 20-25 minutes until peppers are tender and cheese is golden and bubbly.",
      "Let cool for 5 minutes before serving."
    ],
    proteinTips: [
      "Add a beaten egg to the filling mixture for an extra 3g protein per serving.",
      "Serve with a side of Greek yogurt for an extra 5g protein.",
      "Sprinkle hemp seeds on top before baking for an extra 3g protein per serving."
    ],
    substitutions: [
      "No quinoa? Use cooked brown rice or couscous as the grain base.",
      "No cottage cheese? Use ricotta, it melts similarly into the filling.",
      "No bell peppers? Use hollowed zucchini halves or portobello mushroom caps.",
      "Swap mozzarella for pepper jack to add a spicy kick."
    ],
    pairings: [
      { item: "High-Protein Hummus", protein: "8g", slug: "high-protein-hummus" },
      { item: "Simple Dal", protein: "10g", slug: "simple-dal" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "fusion",
      "chickpeas",
      "baked",
      "meal-prep",
      "cottage-cheese"
    ]
  },

  {
    slug: "mediterranean-lentil-feta-bowl",
    title: "Mediterranean Lentil & Feta Bowl",
    image: "images/mediterranean-lentil-feta-bowl.jpg",
    category: "dinner",
    cuisine: "Mediterranean",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    proteinPerServing: 29,
    caloriesPerServing: 440,
    fatPerServing: 20,
    carbsPerServing: 36,
    fiberPerServing: 10,
    description: "Warm spiced lentils over greens, topped with feta, a hard-boiled egg, and a tahini-lemon dressing. A hearty bowl that proves protein-forward vegetarian eating spans every cuisine.",
    story: "I put this bowl together when I wanted something that felt lighter and fresher than a heavy curry but still delivered serious protein. Turns out lentils and feta are a match made in heaven. The earthy warmth of the lentils against the salty tang of the feta just works.\n\nThe key is making lentils the star, not just an accent. Most grain bowls treat them as a side thought and end up around 12-14g protein. I made lentils the base, added a full hard-boiled egg per serving, increased the feta to a generous 5oz, and built a tahini-lemon dressing that adds its own protein. The result is 29g per serving, enough to make this a real meal.\n\nThis has become my go-to when I want to switch things up from my usual rotation. It takes about 30 minutes, most of which is just the lentils simmering. I prep the toppings while they cook, assemble the bowls, and dinner's done. Great for meal prep too, just keep the dressing and greens separate until you're ready to eat.",
    proteinModification: "A typical Mediterranean grain bowl delivers around 12-14g of protein, treating lentils and cheese as accents rather than stars. We made lentils the main component, added a full hard-boiled egg per serving, increased the feta to a generous 5oz, and switched to a tahini-lemon dressing which itself adds protein. The result is 29g per serving, enough to make this a real meal, not a side salad.",
    ingredients: [
      { amount: 2, unit: "cups", item: "green or brown lentils", note: "dried", protein: 50 },
      { amount: 5, unit: "oz", item: "feta cheese", note: "crumbled", protein: 30 },
      { amount: 4, unit: "", item: "large eggs", note: "hard-boiled and halved", protein: 24 },
      { amount: 1, unit: "cup", item: "cherry tomatoes", note: "halved" },
      { amount: 1, unit: "medium", item: "cucumber", note: "diced" },
      { amount: 0.25, unit: "cup", item: "red onion", note: "thinly sliced" },
      { amount: 0.25, unit: "cup", item: "kalamata olives", note: "halved" },
      { amount: 2, unit: "cups", item: "arugula or mixed greens" },
      { amount: 1, unit: "tsp", item: "cumin powder" },
      { amount: 1, unit: "", item: "bay leaf" },
      { amount: 2, unit: "tbsp", item: "tahini", protein: 5 },
      { amount: 2, unit: "tbsp", item: "olive oil" },
      { amount: 3, unit: "tbsp", item: "lemon juice" },
      { amount: 1, unit: "clove", item: "garlic", note: "minced, for dressing" },
      { amount: 1, unit: "tsp", item: "dried oregano" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 0.5, unit: "tsp", item: "black pepper" }
    ],
    instructions: [
      "Rinse lentils. Add to a pot with 5 cups water, bay leaf, and cumin. Bring to a boil, then simmer for 20-25 minutes until tender but not mushy. Drain and discard bay leaf.",
      "While lentils cook, hard-boil the eggs: cover with cold water, bring to a boil, cover and remove from heat for 10 minutes, then ice bath and peel. Halve them.",
      "Make the tahini-lemon dressing: whisk together tahini, olive oil, lemon juice, garlic, oregano, 2 tbsp warm water, salt, and pepper until smooth.",
      "Prepare toppings: halve tomatoes, dice cucumber, slice onion, halve olives.",
      "Assemble bowls: start with a bed of arugula, spoon warm lentils over the greens.",
      "Top with cherry tomatoes, cucumber, red onion, olives, and halved hard-boiled eggs.",
      "Crumble feta generously over each bowl.",
      "Drizzle with tahini-lemon dressing and serve."
    ],
    proteinTips: [
      "Add a second egg per serving for an extra 6g protein.",
      "Increase feta to 7oz for an extra 3g protein per serving.",
      "Add a scoop of hummus for an extra 4g protein."
    ],
    substitutions: [
      "No feta? Use goat cheese or halloumi crumbles for a similar salty tang.",
      "No tahini? Use almond butter or sunflower seed butter thinned with lemon juice.",
      "No kalamata olives? Use sun-dried tomatoes for a bold Mediterranean accent.",
      "Swap lentils for canned lentils to cut cook time. Just rinse, warm, and season."
    ],
    pairings: [
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "High-Protein Hummus", protein: "8g", slug: "high-protein-hummus" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "mediterranean",
      "lentils",
      "bowl",
      "eggs",
      "meal-prep"
    ]
  },

  {
    slug: "crispy-tofu-stir-fry",
    title: "Crispy Tofu & Vegetable Stir Fry",
    image: "images/crispy-tofu-stir-fry.jpg",
    category: "dinner",
    cuisine: "Asian-Fusion",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 20,
    servings: 4,
    proteinPerServing: 30,
    caloriesPerServing: 360,
    fatPerServing: 16,
    carbsPerServing: 14,
    fiberPerServing: 5,
    description: "Golden crispy tofu with colorful vegetables and a double portion of edamame in a savory garlic-ginger-soy sauce. A protein powerhouse with two soy sources working together.",
    story: "I started making stir fries in college when I needed meals that were fast, cheap, and packed with protein. The dining hall stir fry station was my go-to, but they always used soggy tofu. I knew I could do better at home.\n\nThe secret to great tofu is cornstarch. Coat it, get your pan screaming hot, and don't touch it for three minutes. That's it. You get a shatteringly crispy exterior with a creamy interior that soaks up whatever sauce you throw at it. It's the difference between tofu that converts people and tofu that confirms their worst suspicions.\n\nThe real protein play here is the double-soy approach: 21oz of pressed tofu plus two full cups of edamame. Between those two, you're hitting 30g protein per serving before counting anything else. This whole thing comes together in about 20 minutes, making it one of my fastest high-protein dinners. I make it at least once a week, usually on days when I get home from the gym starving and need food immediately.",
    proteinModification: "Restaurant stir fries are heavy on vegetables and light on protein, typically 14-16g per serving with modest tofu. We use a generous 21oz of tofu (pressed and cornstarch-coated for maximum crunch) and a full 2 cups of edamame. The result is 30g per serving, double the protein of your average takeout stir fry, with fewer calories than a paneer dish.",
    ingredients: [
      { amount: 21, unit: "oz", item: "extra-firm tofu", note: "pressed and cubed", protein: 105 },
      { amount: 2, unit: "tbsp", item: "cornstarch" },
      { amount: 2, unit: "cups", item: "shelled edamame", protein: 34 },
      { amount: 1, unit: "cup", item: "broccoli florets" },
      { amount: 1, unit: "medium", item: "red bell pepper", note: "sliced" },
      { amount: 1, unit: "cup", item: "snap peas" },
      { amount: 3, unit: "tbsp", item: "soy sauce" },
      { amount: 1, unit: "tbsp", item: "sesame oil" },
      { amount: 2, unit: "tbsp", item: "vegetable oil" },
      { amount: 3, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "inch", item: "ginger", note: "grated" },
      { amount: 1, unit: "tbsp", item: "rice vinegar" },
      { amount: 1, unit: "tbsp", item: "sriracha or chili garlic sauce", note: "optional" },
      { amount: 1, unit: "tbsp", item: "sesame seeds", note: "for garnish" },
      { amount: 2, unit: "", item: "green onions", note: "sliced, for garnish" }
    ],
    instructions: [
      "Press tofu for 20 minutes, then cut into 3/4-inch cubes. Toss with cornstarch until evenly coated.",
      "Heat vegetable oil in a large wok or skillet over high heat. Add tofu in a single layer and cook without moving for 3 minutes until golden. Flip and cook another 2-3 minutes. Remove and set aside.",
      "In the same wok, add a splash more oil if needed. Add garlic and ginger, stir for 30 seconds.",
      "Add broccoli and stir fry for 2 minutes. Add bell pepper, snap peas, and edamame. Cook for 3-4 minutes until vegetables are crisp-tender.",
      "Mix soy sauce, sesame oil, rice vinegar, and sriracha (if using) in a small bowl.",
      "Return tofu to the wok. Pour sauce over everything and toss to coat. Cook for 1 minute.",
      "Garnish with sesame seeds and sliced green onions. Serve over rice or cauliflower rice."
    ],
    proteinTips: [
      "Serve over quinoa for an extra 4g protein per serving.",
      "Add 2 scrambled eggs stirred in for an extra 6g protein per serving.",
      "Sprinkle nutritional yeast on top for an extra 4g protein."
    ],
    substitutions: [
      "No extra-firm tofu? Use tempeh, it's even higher in protein and gets crispy easily.",
      "No edamame? Use sugar snap peas plus a scoop of hemp seeds for protein.",
      "No cornstarch? Use arrowroot powder or tapioca starch for the same crispy coating.",
      "Swap soy sauce for tamari or coconut aminos to make it gluten-free."
    ],
    pairings: [
      { item: "Miso Soup with Tofu", protein: "8g", slug: "miso-soup-with-tofu" },
      { item: "Protein Jeera Rice", protein: "8g", slug: "protein-jeera-rice" },
      { item: "Cilantro-Mint Chutney", protein: "2g", slug: "cilantro-mint-chutney" }
    ],
    tags: [
      "asian-fusion",
      "tofu",
      "stir-fry",
      "quick",
      "meal-prep"
    ]
  },

  {
    slug: "moong-dal-tadka",
    title: "Moong Dal Tadka",
    image: "images/moong-dal-tadka.jpg",
    category: "dinner",
    cuisine: "Indian",
    difficulty: "medium",
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    proteinPerServing: 26,
    caloriesPerServing: 400,
    fatPerServing: 16,
    carbsPerServing: 34,
    fiberPerServing: 8,
    description: "A protein-boosted moong dal made with a generous blend of moong and chana dal, served with halved boiled eggs and a sizzling garlic tadka, alongside thick Greek yogurt.",
    story: "Moong dal tadka was the first dish I ever cooked entirely on my own. I was in my first apartment, missing home cooking, so I called my mom and she walked me through it over the phone. \"It's the easiest dal,\" she told me. \"You can't mess it up.\" She was right. It's forgiving, fast, and produces this silky, comforting texture that's hard to beat.\n\nThe tadka, that final flourish of spices sizzled in ghee and poured over the top, is the best part. Cumin seeds, mustard seeds, curry leaves, and sliced garlic hitting hot ghee is one of the best smells in cooking. It takes the dal from simple to special in about 30 seconds.\n\nThe traditional version is comfort food, but at 10-12g protein per serving, it wasn't doing enough for my goals. My upgraded version blends in chana dal (which has more protein per cup), tops each serving with halved boiled eggs, and comes with a thick side of Greek yogurt. From 10g to 26g protein, it's still the easiest dal you can make, it's just working a lot harder for you now.",
    proteinModification: "Simple moong dal is comfort food, but at 10-12g protein per serving, it's not pulling its weight for anyone tracking macros. We made three changes: blended moong dal with a full cup of protein-dense chana dal, added halved boiled eggs to each serving, and serve it with a thick Greek yogurt side. From 10-12g to 26g per serving, more than double the protein while keeping all the soul of the original.",
    ingredients: [
      { amount: 1, unit: "cup", item: "yellow moong dal", note: "washed and rinsed", protein: 24 },
      { amount: 1, unit: "cup", item: "chana dal", note: "washed and rinsed", protein: 22 },
      { amount: 4, unit: "", item: "large eggs", note: "hard-boiled, halved", protein: 24 },
      { amount: 4, unit: "cups", item: "water" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 2, unit: "tbsp", item: "ghee or oil", note: "for tadka" },
      { amount: 1, unit: "tsp", item: "cumin seeds" },
      { amount: 1, unit: "tsp", item: "mustard seeds" },
      { amount: 2, unit: "", item: "dried red chilies" },
      { amount: 8, unit: "", item: "curry leaves" },
      { amount: 4, unit: "cloves", item: "garlic", note: "thinly sliced" },
      { amount: 1, unit: "medium", item: "tomato", note: "finely diced" },
      { amount: 0.5, unit: "tsp", item: "red chili powder" },
      { amount: 0.75, unit: "cup", item: "Greek yogurt", note: "served on the side", protein: 13 },
      { amount: 2, unit: "tbsp", item: "fresh cilantro", note: "for garnish" },
      { amount: 1, unit: "", item: "lemon", note: "cut into wedges" }
    ],
    instructions: [
      "Wash both dals thoroughly until the water runs clear.",
      "Add both dals to a pot with 4 cups water, turmeric, and salt. Bring to a boil, then reduce heat and simmer for 25-30 minutes until completely soft and mushy. Whisk to break it down. Add more water if needed.",
      "For the tadka: Heat ghee in a small pan over medium-high heat.",
      "Add cumin seeds and mustard seeds. Let them splutter.",
      "Add dried red chilies, curry leaves, and sliced garlic. Sauté until garlic is golden, about 1 minute.",
      "Add diced tomato and chili powder. Cook for 2-3 minutes until tomato softens.",
      "Pour the tadka over the cooked dal. Stir gently.",
      "Hard-boil the eggs, peel, and halve them.",
      "Serve dal topped with halved eggs, with a generous side of Greek yogurt, garnished with cilantro and lemon wedges."
    ],
    proteinTips: [
      "Add an extra egg per serving for an extra 6g protein.",
      "Stir in cottage cheese for an extra 7g protein per serving.",
      "Serve over quinoa for an extra 4g protein per serving."
    ],
    substitutions: [
      "No chana dal? Use red lentils (masoor dal), they cook faster and blend in well.",
      "No curry leaves? Use a bay leaf during cooking, though the flavor won't be identical.",
      "No eggs? Stir in 1 cup cottage cheese for a similar protein boost.",
      "Swap ghee for oil in the tadka for a lighter, dairy-free version."
    ],
    pairings: [
      { item: "Protein Jeera Rice", protein: "8g", slug: "protein-jeera-rice" },
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "indian",
      "lentils",
      "eggs",
      "comfort-food",
      "quick"
    ]
  },

  {
    slug: "black-bean-enchiladas",
    title: "Black Bean & Cheese Enchiladas",
    image: "images/black-bean-enchiladas.jpg",
    category: "dinner",
    cuisine: "Mexican-Inspired",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    proteinPerServing: 35,
    caloriesPerServing: 480,
    fatPerServing: 18,
    carbsPerServing: 42,
    fiberPerServing: 12,
    description: "Hearty enchiladas packed with black beans, cottage cheese, and shredded cheese, smothered in smoky chipotle sauce and topped with Greek yogurt. Protein from every angle.",
    story: "Enchiladas have been in my dinner rotation since college. The problem with most veggie versions at restaurants is they're just cheese wrapped in a tortilla, no substance, no protein worth mentioning. So I started building mine differently.\n\nThe filling is where this recipe earns its keep: double the black beans, cottage cheese mixed right into the filling where it disappears completely but adds major protein, and a generous amount of shredded cheese. I mash about half the beans for texture so you get this thick, substantial filling that doesn't fall apart when you cut into an enchilada. Greek yogurt on top instead of sour cream gives you the same tangy, creamy effect with way more protein.\n\nAt 35g protein per serving, these hold their own against any meat-based enchilada. They freeze well too. I'll make a double batch in two baking dishes, freeze one, and have an easy dinner ready to go for a busy week. Just thaw, bake, and you're eating in 30 minutes.",
    proteinModification: "Veggie enchiladas at most restaurants are cheese-and-not-much-else affairs with about 12-14g of protein. We overhauled the filling: doubled the black beans, added a full cup of cottage cheese (it disappears into the filling but adds major protein), increased the shredded cheese to 7oz, and topped with Greek yogurt instead of sour cream. The result is 35g of protein per serving. The cottage cheese trick is the secret here, you'd never know it's there.",
    ingredients: [
      { amount: 3, unit: "cans (15oz)", item: "black beans", note: "drained and rinsed", protein: 63 },
      { amount: 1, unit: "cup", item: "cottage cheese", protein: 14 },
      { amount: 7, unit: "oz", item: "shredded Mexican blend cheese", note: "divided", protein: 42 },
      { amount: 8, unit: "", item: "corn or flour tortillas", protein: 16 },
      { amount: 2, unit: "cups", item: "enchilada sauce", note: "store-bought or homemade" },
      { amount: 0.5, unit: "cup", item: "Greek yogurt", note: "for topping", protein: 9 },
      { amount: 1, unit: "tbsp", item: "oil" },
      { amount: 1, unit: "medium", item: "onion", note: "diced" },
      { amount: 3, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "tsp", item: "cumin powder" },
      { amount: 0.5, unit: "tsp", item: "smoked paprika" },
      { amount: 1, unit: "", item: "chipotle pepper in adobo", note: "minced (optional)" },
      { amount: 1, unit: "cup", item: "corn kernels", note: "fresh or frozen", protein: 5 },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 2, unit: "tbsp", item: "fresh cilantro", note: "for garnish" },
      { amount: 1, unit: "", item: "lime", note: "cut into wedges" }
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Heat oil in a pan over medium heat. Sauté onion until softened, about 5 minutes. Add garlic, cumin, smoked paprika, and chipotle pepper. Cook for 1 minute.",
      "Add black beans and corn. Mash about half the beans with a fork for texture. Season with salt. Cook for 3 minutes. Remove from heat.",
      "Stir in cottage cheese and half the shredded cheese until well combined.",
      "Spread 1/2 cup enchilada sauce on the bottom of a 9x13 baking dish.",
      "Fill each tortilla with the bean-cheese-cottage cheese mixture, roll tightly, and place seam-side down in the dish.",
      "Pour remaining enchilada sauce over the rolled tortillas. Top with remaining cheese.",
      "Bake for 20-25 minutes until cheese is melted and bubbly.",
      "Let cool for 5 minutes. Top with dollops of Greek yogurt, cilantro, and a squeeze of lime."
    ],
    proteinTips: [
      "Use high-protein tortillas for an extra 5-8g protein per serving.",
      "Add a fried egg on top for an extra 6g protein.",
      "Serve with a side of refried beans for an extra 6g protein."
    ],
    substitutions: [
      "No black beans? Use pinto beans or refried beans for a similar hearty filling.",
      "No cottage cheese? Use ricotta, it disappears into the filling the same way.",
      "No corn tortillas? Use flour tortillas or high-protein wraps for easier rolling.",
      "Swap enchilada sauce for salsa verde for a tangy green enchilada variation."
    ],
    pairings: [
      { item: "Mexican Rice and Beans", protein: "10g", slug: "mexican-rice-and-beans" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" },
      { item: "High-Protein Hummus", protein: "8g", slug: "high-protein-hummus" }
    ],
    tags: [
      "mexican",
      "beans",
      "cheese",
      "baked",
      "cottage-cheese"
    ]
  },

  {
    slug: "protein-adai",
    title: "Protein Adai (Mixed Lentil Pancake)",
    image: "images/protein-adai.jpg",
    category: "dinner",
    cuisine: "South Indian",
    difficulty: "hard",
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    proteinPerServing: 36,
    caloriesPerServing: 460,
    fatPerServing: 18,
    carbsPerServing: 32,
    fiberPerServing: 7,
    description: "Crispy, coarsely-ground four-dal pancakes with eggs folded into the batter and a spiced paneer filling, served with coconut-yogurt chutney. A powerhouse at 36g protein per serving.",
    story: "Adai is the dish that made me realize I'd been overthinking the protein problem. My grandmother made it every Saturday, a thick, crispy pancake ground from four different lentils. I loved it as a kid without knowing anything about nutrition. It was just one of the best things she cooked.\n\nYears later, when I started tracking macros, I looked at adai and did the math. Four dals in the batter: chana dal, toor dal, urad dal, moong dal. Each one is a protein source. The batter itself, before you add anything, is already more protein-dense than most \"protein-forward\" recipes I was finding online. I'd been eating a high-protein meal my entire childhood and didn't even know it.\n\nI've pushed the recipe further by folding beaten eggs into the batter, which improves the texture and adds protein invisibly, and stuffing each adai with spiced paneer crumbles. The coconut-yogurt chutney on the side uses Greek yogurt instead of plain coconut chutney. The result is 36g of protein per serving, one of the highest on the site.",
    proteinModification: "Traditional adai is already protein-rich by Indian standards, hitting about 16-18g per serving from the mixed lentil batter alone. But we pushed it further: folded beaten eggs into the batter (invisible but adds structure and protein), added a generous 6oz paneer stuffing, and built a coconut-yogurt chutney using Greek yogurt. From ~17g to 36g, more than double. This is one of the highest-protein dishes on the site, built entirely on a recipe that South Indian grandmothers have been making for centuries.",
    ingredients: [
      { amount: 0.5, unit: "cup", item: "chana dal", note: "soaked 2 hours", protein: 11 },
      { amount: 0.5, unit: "cup", item: "toor dal", note: "soaked 2 hours", protein: 11 },
      { amount: 0.25, unit: "cup", item: "urad dal", note: "soaked 2 hours", protein: 6 },
      { amount: 0.25, unit: "cup", item: "moong dal", note: "soaked 2 hours", protein: 6 },
      { amount: 4, unit: "", item: "large eggs", note: "beaten and folded into batter", protein: 24 },
      { amount: 6, unit: "oz", item: "paneer", note: "crumbled, for stuffing", protein: 42 },
      { amount: 4, unit: "", item: "dried red chilies" },
      { amount: 1, unit: "tsp", item: "cumin seeds" },
      { amount: 0.5, unit: "tsp", item: "black peppercorns" },
      { amount: 1, unit: "inch", item: "ginger", note: "roughly chopped" },
      { amount: 1, unit: "sprig", item: "curry leaves", note: "about 12 leaves" },
      { amount: 1, unit: "small", item: "onion", note: "finely diced" },
      { amount: 0.25, unit: "cup", item: "fresh coconut", note: "grated (or 2 tbsp desiccated)" },
      { amount: 0.5, unit: "tsp", item: "asafoetida (hing)" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 2, unit: "tbsp", item: "oil", note: "for cooking" },
      { amount: 1, unit: "cup", item: "Greek yogurt", note: "for coconut-yogurt chutney", protein: 17 },
      { amount: 0.25, unit: "cup", item: "fresh coconut", note: "for chutney" },
      { amount: 2, unit: "", item: "green chilies", note: "for chutney" },
      { amount: 0.5, unit: "tsp", item: "mustard seeds", note: "for chutney tempering" },
      { amount: 0.5, unit: "tsp", item: "urad dal", note: "for chutney tempering" }
    ],
    instructions: [
      "Drain the soaked dals. Grind them coarsely in a blender or food processor with the red chilies, cumin, peppercorns, and ginger. Add water sparingly, the batter should be thick and coarse, not smooth like dosa batter.",
      "Stir in the curry leaves, diced onion, grated coconut, asafoetida, and salt.",
      "Beat the eggs and fold them into the batter. This adds protein and helps the adai hold together better.",
      "Prepare the paneer stuffing: Crumble the paneer and mix with a pinch of salt, a pinch of turmeric, and a finely chopped green chili.",
      "Make the coconut-yogurt chutney: Blend Greek yogurt with fresh coconut and green chilies until smooth. Temper with mustard seeds and urad dal sizzled in a tsp of oil, pour over the chutney.",
      "Heat a tawa or non-stick pan over medium-high heat. Add a drizzle of oil.",
      "Pour a ladleful of batter and spread into a thick circle (about 6 inches across). Adai should be thicker than a dosa.",
      "Sprinkle a generous portion of the paneer stuffing over the surface. Press gently into the batter.",
      "Drizzle oil around the edges and cook for 3-4 minutes until the bottom is deep golden and crispy.",
      "Flip carefully and cook the other side for 2-3 minutes.",
      "Serve hot with the coconut-yogurt chutney. Each person gets 2 adai."
    ],
    proteinTips: [
      "Add a fried egg on top of each adai for an extra 6g protein per serving.",
      "Increase paneer stuffing to 10oz for an extra 5g protein per serving.",
      "Serve with a small bowl of sambar for an extra 8g protein, pushing the meal past 50g."
    ],
    substitutions: [
      "No toor dal or urad dal? Use all chana dal and moong dal, the batter will be slightly different but still works.",
      "No paneer for stuffing? Use crumbled firm tofu seasoned the same way.",
      "No fresh coconut? Use 2 tbsp desiccated coconut rehydrated in warm water.",
      "Swap eggs for a flax egg (1 tbsp ground flax + 3 tbsp water per egg) for an eggless version.",
      "No curry leaves? Use a bay leaf and a pinch of lemon zest.",
      "No asafoetida? Skip it entirely, it adds depth but isn't essential.",
      "Can't find all four dals? Use 1 cup red lentils (masoor dal) as a substitute for the mix."
    ],
    pairings: [
      { item: "Coconut Chutney", protein: "3g", slug: "coconut-chutney" },
      { item: "Protein Sambar", protein: "12g", slug: "protein-sambar" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "south-indian",
      "lentils",
      "pancake",
      "eggs",
      "highest-protein"
    ]
  },

  {
    slug: "egg-sambar-rice-bowl",
    title: "Egg Sambar Rice Bowl",
    image: "images/egg-sambar-rice-bowl.jpg",
    category: "dinner",
    cuisine: "South Indian",
    difficulty: "hard",
    prepTime: 15,
    cookTime: 40,
    servings: 4,
    proteinPerServing: 32,
    caloriesPerServing: 440,
    fatPerServing: 14,
    carbsPerServing: 54,
    fiberPerServing: 9,
    description: "A hearty bowl of protein-loaded sambar with extra toor dal, chickpeas, and hard-boiled eggs, served over rice with a yogurt pachadi. The most important dish in South Indian cooking, rebuilt for protein.",
    story: "Sambar is a tangy, warming lentil stew that I grew up eating at almost every meal. It's comfort food for me, the kind of thing I crave when I'm tired or stressed or just want something that feels like home.\n\nBut the thing about traditional sambar is that it's thin. It's meant to be poured over rice and eaten almost like a soup. The dal-to-water ratio is low, so a typical serving gives you maybe 8-10g of protein. When I started tracking macros, I realized one of my favorite dishes was actually one of my weakest protein sources. So I rebuilt it. More toor dal, significantly more, so the sambar is thick and substantial. Chickpeas added right in for extra legume protein. And hard-boiled eggs simmered directly in the sambar, which is actually a legit technique I picked up from family.\n\nThe yogurt pachadi on the side uses Greek yogurt for even more protein. From 8-10g to 32g per serving, same flavors I love, completely different protein delivery. This is my go-to weeknight dinner when I don't want to think too hard about what to cook.",
    proteinModification: "Traditional sambar is thin and light on protein, delivering about 8-10g per serving because the dal-to-water ratio is low. We made it thick and substantial: nearly doubled the toor dal, added a full can of chickpeas (uncommon but delicious), simmered hard-boiled eggs right in the sambar, and built a Greek yogurt pachadi into every serving. From ~9g to 32g, a significant protein increase while keeping the same tamarind-spice flavor profile.",
    ingredients: [
      { amount: 1.5, unit: "cups", item: "toor dal", note: "washed", protein: 33 },
      { amount: 1, unit: "can (15oz)", item: "chickpeas", note: "drained and rinsed", protein: 21 },
      { amount: 8, unit: "", item: "large eggs", note: "hard-boiled and peeled", protein: 48 },
      { amount: 4, unit: "cups", item: "water" },
      { amount: 1, unit: "marble-sized ball", item: "tamarind", note: "soaked in 1/2 cup warm water, strained" },
      { amount: 2, unit: "tbsp", item: "sambar powder" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 1, unit: "medium", item: "drumstick", note: "cut into 3-inch pieces (optional)" },
      { amount: 1, unit: "small", item: "eggplant", note: "cubed" },
      { amount: 1, unit: "medium", item: "tomato", note: "quartered" },
      { amount: 1, unit: "small", item: "onion", note: "quartered" },
      { amount: 6, unit: "", item: "small shallots", note: "or 1 onion quartered" },
      { amount: 2, unit: "tbsp", item: "oil or ghee", note: "for tempering" },
      { amount: 1, unit: "tsp", item: "mustard seeds" },
      { amount: 0.5, unit: "tsp", item: "fenugreek seeds" },
      { amount: 2, unit: "", item: "dried red chilies" },
      { amount: 10, unit: "", item: "curry leaves" },
      { amount: 0.25, unit: "tsp", item: "asafoetida (hing)" },
      { amount: 2, unit: "cups", item: "cooked rice", note: "brown or white, for serving" },
      { amount: 0.75, unit: "cup", item: "Greek yogurt", note: "for pachadi", protein: 13 },
      { amount: 0.5, unit: "small", item: "cucumber", note: "grated, for pachadi" },
      { amount: 0.5, unit: "tsp", item: "mustard seeds", note: "for pachadi tempering" }
    ],
    instructions: [
      "Cook toor dal: Add dal to a pot with 4 cups water and turmeric. Bring to a boil, then simmer for 25-30 minutes (or 10 minutes in a pressure cooker) until completely soft. Mash well with a whisk.",
      "In a separate pot, add the cubed eggplant, drumstick (if using), tomato, onion, and tamarind water. Add sambar powder and salt. Bring to a boil and simmer for 10 minutes until vegetables are tender.",
      "Add the mashed toor dal to the vegetable pot. Stir in the chickpeas. Simmer for 10 minutes until thick and well combined. It should be the consistency of a thick stew, not a thin soup.",
      "Make shallow slits in the hard-boiled eggs. Gently add them to the sambar. Simmer for 5 minutes so they absorb the flavors.",
      "Prepare the tempering: Heat oil in a small pan. Add mustard seeds and fenugreek seeds, let them pop. Add dried red chilies, curry leaves, and asafoetida. Pour sizzling tempering over the sambar.",
      "Make the pachadi: Mix Greek yogurt with grated cucumber and a pinch of salt. Temper with mustard seeds sizzled in a tsp of oil, pour over the yogurt.",
      "Serve sambar over rice, with 2 eggs per person, and a generous side of pachadi."
    ],
    proteinTips: [
      "Add 3 eggs per serving instead of 2 for an extra 6g protein.",
      "Increase toor dal to 2 cups for an extra 5g protein per serving.",
      "Serve with adai instead of rice for a 50g+ protein meal."
    ],
    substitutions: [
      "No toor dal? Use red lentils (masoor dal).",
      "No drumstick? Use green beans or okra.",
      "No tamarind? Use 1 tbsp lemon juice mixed with a pinch of brown sugar.",
      "Swap ghee for coconut oil to keep it dairy-free.",
      "No curry leaves? Use a bay leaf during cooking.",
      "No asafoetida? Skip it, the dish works fine without it.",
      "No sambar powder? Use 1 tsp each of ground cumin, ground coriander, and chili powder.",
      "No fenugreek seeds? Skip them or use a pinch of dried fenugreek leaves (kasuri methi)."
    ],
    pairings: [
      { item: "Coconut Chutney", protein: "3g", slug: "coconut-chutney" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" },
      { item: "Simple Dal", protein: "10g", slug: "simple-dal" }
    ],
    tags: [
      "south-indian",
      "sambar",
      "eggs",
      "lentils",
      "comfort-food"
    ]
  },

  {
    slug: "spicy-mapo-tofu",
    title: "Spicy Mapo Tofu",
    image: "images/spicy-mapo-tofu.jpg",
    category: "dinner",
    cuisine: "Chinese",
    difficulty: "hard",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    proteinPerServing: 28,
    caloriesPerServing: 380,
    fatPerServing: 18,
    carbsPerServing: 26,
    fiberPerServing: 3,
    description: "A fiery Sichuan mapo tofu loaded with doubanjiang and Sichuan peppercorns, built on a vegetable broth base and thickened into a glossy, numbing sauce that delivers serious protein.",
    story: "If you've never experienced true Sichuan \"mala,\" you're missing out. Mala literally translates to numbing-spicy, the Sichuan peppercorns hit your tongue with this electric tingle while the doubanjiang brings deep, fermented heat. It's not just hot for the sake of being hot. There are actual layers of flavor happening, and every bite is a little different depending on how much peppercorn you catch.\n\nWhat I find interesting about capsaicin is that there's actual research showing it can boost your metabolism slightly. The thermogenic effect is real. It raises your body temperature a bit and can support fat oxidation, which is helpful when you're in a cut. I'll take any edge I can get, honestly. And when that edge comes in the form of a dish this good, it doesn't even feel like a sacrifice.\n\nThis version skips the ground pork you see in traditional mapo tofu and goes all-in on extra-firm tofu plus fermented black beans for that deep savory backbone. The ground peanuts on top aren't just garnish, they add crunch, healthy fats, and a bit more protein. Served over rice, this is one of the most satisfying bowls you can make in under 30 minutes.",
    proteinModification: "Traditional mapo tofu uses a small amount of tofu supplemented with ground pork, typically delivering around 18-20g protein per serving. We removed the pork entirely, nearly doubled the tofu to 21oz, added fermented black beans for extra plant protein, and finish with ground peanuts on top. The result is 28g protein per serving from entirely plant-based sources.",
    ingredients: [
      { amount: 21, unit: "oz", item: "extra-firm tofu", note: "drained and cut into 3/4-inch cubes", protein: 105 },
      { amount: 2, unit: "tbsp", item: "doubanjiang", note: "fermented chili bean paste" },
      { amount: 1, unit: "tbsp", item: "fermented black beans", note: "rinsed and roughly chopped" },
      { amount: 1.5, unit: "tsp", item: "Sichuan peppercorns", note: "toasted and ground" },
      { amount: 4, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "inch", item: "ginger", note: "minced" },
      { amount: 4, unit: "stalks", item: "scallions", note: "whites and greens separated, sliced" },
      { amount: 1.5, unit: "cups", item: "vegetable broth" },
      { amount: 2, unit: "tbsp", item: "soy sauce" },
      { amount: 1, unit: "tbsp", item: "chili oil", note: "plus more for drizzling" },
      { amount: 2, unit: "tbsp", item: "vegetable oil" },
      { amount: 1.5, unit: "tbsp", item: "cornstarch", note: "mixed with 2 tbsp water" },
      { amount: 0.25, unit: "cup", item: "roasted peanuts", note: "finely ground, for topping", protein: 7 },
      { amount: 1, unit: "tsp", item: "sugar" },
      { amount: 1, unit: "tsp", item: "sesame oil" }
    ],
    instructions: [
      "Bring a pot of salted water to a gentle boil. Add the tofu cubes and blanch for 2 minutes to firm them up and remove any residual bitterness. Drain carefully and set aside.",
      "Heat the vegetable oil in a large wok or skillet over medium heat. Add the doubanjiang and stir-fry for about 1 minute until the oil turns red and fragrant.",
      "Add the fermented black beans, garlic, ginger, and scallion whites. Stir-fry for 30 seconds until aromatic.",
      "Pour in the vegetable broth, soy sauce, and sugar. Bring to a simmer.",
      "Gently slide the blanched tofu cubes into the sauce. Simmer for 5-6 minutes, carefully stirring occasionally so the tofu absorbs flavor without breaking apart.",
      "Give the cornstarch slurry a stir and pour it into the wok. Gently fold until the sauce thickens and becomes glossy, about 1 minute.",
      "Drizzle in the sesame oil and chili oil. Sprinkle the ground Sichuan peppercorns over the top and give one final gentle stir.",
      "Transfer to a serving bowl. Top with ground peanuts, sliced scallion greens, and an extra drizzle of chili oil. Serve immediately over steamed rice."
    ],
    proteinTips: [
      "Serve over quinoa instead of white rice for an extra 4g protein per serving.",
      "Stir in 2 tbsp of peanut butter into the sauce for an extra 4g protein per serving and a richer texture.",
      "Add a side of steamed edamame for an extra 9g protein."
    ],
    substitutions: [
      "No doubanjiang? Use gochujang mixed with a splash of soy sauce.",
      "No Sichuan peppercorns? Use a pinch of black pepper plus a squeeze of lemon juice.",
      "No fermented black beans? Use an extra tablespoon of soy sauce.",
      "Swap roasted peanuts for cashews or toasted sunflower seeds for a nut-free option."
    ],
    pairings: [
      { item: "Miso Soup with Tofu", protein: "8g", slug: "miso-soup-with-tofu" },
      { item: "Protein Jeera Rice", protein: "8g", slug: "protein-jeera-rice" },
      { item: "Spicy Garlic Edamame", protein: "18g", slug: "spicy-garlic-edamame" }
    ],
    tags: [
      "chinese",
      "sichuan",
      "tofu",
      "spicy",
      "high-protein",
      "vegan",
      "weeknight"
    ]
  },

  {
    slug: "thai-basil-tofu",
    title: "Thai Basil Tofu Stir Fry",
    image: "images/thai-basil-tofu.jpg",
    category: "dinner",
    cuisine: "Thai",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    proteinPerServing: 26,
    caloriesPerServing: 360,
    fatPerServing: 14,
    carbsPerServing: 34,
    fiberPerServing: 3,
    description: "Crispy pan-seared tofu tossed with Thai basil, bird's eye chilis, and a savory-sweet sauce. A fast, fiery weeknight dinner that hits your protein goals.",
    story: "This is the weeknight dinner I reach for when I need something fast, flavorful, and high in protein without a lot of fuss. The whole thing comes together in about 35 minutes, and most of that is just pressing the tofu. The actual cooking is a quick, high-heat stir fry that takes maybe 12 minutes from start to plate.\n\nThe key to this dish, and honestly the key to making tofu worth eating in any stir fry, is getting it actually crispy. That means pressing the water out properly, cutting it into slabs not cubes, and giving it space in a hot pan with enough oil. Don't crowd it. Let each piece get a golden crust before you flip. Once you nail that technique, tofu goes from something you tolerate to something you genuinely look forward to. The bird's eye chilis bring real heat here, and I've noticed my spice tolerance has legitimately built up over the months of cooking dishes like this. What used to wreck me barely registers now.\n\nServed over rice with a generous pile of Thai basil wilted into the sauce, this is one of those meals that tastes like takeout but has way better macros. The oyster sauce gives it a deep savory sweetness, and the chilis cut right through it. If you want to keep it fully vegetarian, mushroom sauce works great as a swap.",
    proteinModification: "A typical Thai basil stir fry uses chicken or a small amount of tofu with lots of vegetables, hitting around 15-18g protein per serving. We use a full 21oz of extra-firm tofu, pressed and seared until crispy, plus serve it over protein-enriched portions to push the total to 26g per serving.",
    ingredients: [
      { amount: 21, unit: "oz", item: "extra-firm tofu", note: "pressed for 15 minutes, cut into 1/2-inch thick slabs", protein: 105 },
      { amount: 2, unit: "cups", item: "Thai basil leaves", note: "packed" },
      { amount: 4, unit: "", item: "bird's eye chilis", note: "thinly sliced, adjust to taste" },
      { amount: 5, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "medium", item: "onion", note: "sliced into thin wedges" },
      { amount: 1, unit: "medium", item: "red bell pepper", note: "sliced into strips" },
      { amount: 2, unit: "tbsp", item: "soy sauce" },
      { amount: 1, unit: "tbsp", item: "oyster sauce", note: "or mushroom sauce for vegetarian" },
      { amount: 1, unit: "tbsp", item: "Thai chili sauce" },
      { amount: 1, unit: "tsp", item: "sugar" },
      { amount: 3, unit: "tbsp", item: "vegetable oil", note: "divided" },
      { amount: 2, unit: "tbsp", item: "cornstarch", note: "for coating tofu" },
      { amount: 4, unit: "cups", item: "cooked jasmine rice", note: "for serving" }
    ],
    instructions: [
      "Press the tofu between paper towels or a clean kitchen towel with a heavy object on top for at least 15 minutes. Cut into 1/2-inch thick slabs, then cut each slab into triangles or rectangles.",
      "Toss the tofu pieces with cornstarch until evenly coated.",
      "Heat 2 tbsp oil in a large wok or skillet over medium-high heat. Lay the tofu pieces in a single layer. Work in batches if needed, don't crowd the pan. Sear for 3-4 minutes per side until golden and crispy. Remove and set aside.",
      "In the same wok, add the remaining 1 tbsp oil over high heat. Add the garlic and bird's eye chilis, stir-frying for 15 seconds.",
      "Add the onion and bell pepper. Stir-fry for 2-3 minutes until slightly softened but still crisp.",
      "Mix together the soy sauce, oyster sauce, Thai chili sauce, and sugar in a small bowl. Pour into the wok.",
      "Return the crispy tofu to the wok. Toss everything together gently for 1 minute so the tofu absorbs the sauce.",
      "Kill the heat and toss in the Thai basil leaves. Stir until just wilted, about 20 seconds.",
      "Serve immediately over jasmine rice."
    ],
    proteinTips: [
      "Add a fried egg on top of each serving for an extra 6g protein.",
      "Swap jasmine rice for quinoa for an extra 4g protein per serving.",
      "Toss in 1/2 cup shelled edamame during the stir fry for an extra 4g protein per serving."
    ],
    substitutions: [
      "No Thai basil? Use Italian basil plus a few mint leaves.",
      "No bird's eye chilis? Use serrano peppers or red pepper flakes.",
      "No oyster sauce? Use hoisin sauce or a mix of soy sauce and a pinch of sugar.",
      "Swap jasmine rice for brown rice or cauliflower rice for fewer carbs."
    ],
    pairings: [
      { item: "Miso Soup with Tofu", protein: "8g", slug: "miso-soup-with-tofu" },
      { item: "Protein Jeera Rice", protein: "8g", slug: "protein-jeera-rice" },
      { item: "Cilantro-Mint Chutney", protein: "2g", slug: "cilantro-mint-chutney" }
    ],
    tags: [
      "thai",
      "tofu",
      "stir-fry",
      "spicy",
      "weeknight",
      "high-protein"
    ]
  },

  {
    slug: "kung-pao-tofu",
    title: "Kung Pao Tofu",
    image: "images/kung-pao-tofu.jpg",
    category: "dinner",
    cuisine: "Chinese",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    proteinPerServing: 28,
    caloriesPerServing: 410,
    fatPerServing: 19,
    carbsPerServing: 32,
    fiberPerServing: 4,
    description: "Crispy cornstarch-coated tofu wok-tossed with roasted peanuts, dried red chilis, and a tangy-sweet kung pao sauce. A double-protein hit from tofu and nuts.",
    story: "Peanuts are one of the most underrated protein sources out there. An ounce of peanuts packs about 7g of protein, which is more than most people realize. When you combine that with a generous amount of tofu, you're getting a double-protein hit that adds up fast. This kung pao tofu delivers 28g per serving, and a big chunk of that comes from the peanuts that most people just think of as a garnish.\n\nThe secret to great kung pao anything is the sauce balance, you want that perfect sweet-sour-savory-spicy ratio. The rice vinegar brings the tang, the hoisin adds depth, and the dried red chilis bring a slow-building heat that's different from fresh chili heat. It creeps up on you. The Sichuan peppercorns add that signature numbing tingle that makes this dish distinctly Sichuan and not just \"Chinese stir fry with peanuts.\"\n\nI coat the tofu in cornstarch before frying, which gives it this incredible shatteringly crispy exterior that holds up even after you toss it in the sauce. That texture contrast between the crunchy tofu, the roasted peanuts, and the tender vegetables is what makes this dish addictive. It reheats surprisingly well too. The tofu loses a tiny bit of crunch but the flavors actually get better the next day.",
    proteinModification: "Traditional kung pao chicken uses about 12oz of chicken for four servings with a small amount of peanuts as garnish, delivering around 22-24g protein. We use 21oz of extra-firm tofu with a cornstarch crust plus a full half cup of roasted peanuts mixed in rather than just sprinkled on top, creating a double-protein combination that hits 28g per serving entirely from plant sources.",
    ingredients: [
      { amount: 21, unit: "oz", item: "extra-firm tofu", note: "pressed, cut into 3/4-inch cubes", protein: 105 },
      { amount: 3, unit: "tbsp", item: "cornstarch", note: "for coating tofu" },
      { amount: 0.5, unit: "cup", item: "roasted peanuts", note: "unsalted", protein: 14 },
      { amount: 8, unit: "", item: "dried red chilis", note: "snipped in half, seeds shaken out for less heat" },
      { amount: 1, unit: "tsp", item: "Sichuan peppercorns" },
      { amount: 4, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "inch", item: "ginger", note: "minced" },
      { amount: 1, unit: "medium", item: "zucchini", note: "diced into 1/2-inch pieces" },
      { amount: 1, unit: "medium", item: "red bell pepper", note: "diced into 1/2-inch pieces" },
      { amount: 3, unit: "stalks", item: "scallions", note: "sliced, whites and greens separated" },
      { amount: 2, unit: "tbsp", item: "soy sauce" },
      { amount: 1, unit: "tbsp", item: "rice vinegar" },
      { amount: 1, unit: "tbsp", item: "hoisin sauce" },
      { amount: 1, unit: "tsp", item: "sesame oil" },
      { amount: 1, unit: "tsp", item: "sugar" },
      { amount: 1, unit: "tbsp", item: "cornstarch", note: "mixed with 2 tbsp water for slurry" },
      { amount: 3, unit: "tbsp", item: "vegetable oil", note: "divided" }
    ],
    instructions: [
      "Press the tofu for at least 15 minutes, then cut into 3/4-inch cubes. Toss with 3 tbsp cornstarch until evenly coated.",
      "Mix the sauce in a small bowl: soy sauce, rice vinegar, hoisin sauce, sesame oil, sugar, and the cornstarch slurry. Set aside.",
      "Heat 2 tbsp vegetable oil in a large wok over medium-high heat. Add the tofu cubes in a single layer and fry undisturbed for 2-3 minutes until the bottom is golden. Flip and repeat until crispy on all sides, about 6-8 minutes total. Remove and set aside.",
      "Add the remaining 1 tbsp oil to the wok over medium heat. Add the dried red chilis and Sichuan peppercorns, stir-frying for 30 seconds until the chilis darken slightly and become fragrant. Be careful not to burn them.",
      "Increase heat to high. Add garlic, ginger, and scallion whites. Stir-fry for 15 seconds.",
      "Add the zucchini and bell pepper. Stir-fry for 2-3 minutes until tender-crisp.",
      "Return the crispy tofu to the wok. Pour in the sauce and toss everything together until the sauce thickens and coats everything, about 1 minute.",
      "Add the roasted peanuts and toss to combine.",
      "Garnish with scallion greens and serve over steamed rice."
    ],
    proteinTips: [
      "Add an extra 1/4 cup peanuts for an additional 7g protein across all servings.",
      "Serve over quinoa instead of rice for an extra 4g protein per serving.",
      "Pair with a side of steamed edamame for an extra 9g protein."
    ],
    substitutions: [
      "No Sichuan peppercorns? Use black pepper with a small squeeze of lime.",
      "No hoisin sauce? Use a mix of soy sauce, peanut butter, and a pinch of sugar.",
      "No zucchini? Use broccoli florets or snap peas.",
      "Swap peanuts for cashews or toasted almonds."
    ],
    pairings: [
      { item: "Miso Soup with Tofu", protein: "8g", slug: "miso-soup-with-tofu" },
      { item: "Protein Jeera Rice", protein: "8g", slug: "protein-jeera-rice" },
      { item: "Spicy Garlic Edamame", protein: "18g", slug: "spicy-garlic-edamame" }
    ],
    tags: [
      "chinese",
      "sichuan",
      "tofu",
      "peanuts",
      "spicy",
      "high-protein",
      "weeknight"
    ]
  },

  {
    slug: "tofu-katsu-curry",
    title: "Tofu Katsu Curry",
    image: "images/tofu-katsu-curry.jpg",
    category: "dinner",
    cuisine: "Japanese",
    difficulty: "hard",
    prepTime: 25,
    cookTime: 35,
    servings: 4,
    proteinPerServing: 26,
    caloriesPerServing: 520,
    fatPerServing: 20,
    carbsPerServing: 62,
    fiberPerServing: 4,
    description: "Thick tofu cutlets coated in crispy panko breadcrumbs, served over rice and smothered in a rich, savory Japanese curry sauce with carrots, onion, and potato.",
    story: "Japanese curry is pure comfort food. It's not like Indian or Thai curry. It's thicker, sweeter, milder, and has this almost stew-like quality that makes you want to eat it on a cold day wrapped in a blanket. The curry sauce is built from a roux, which gives it that velvety texture you can't get any other way. There's a reason Japanese curry houses have lines out the door.\n\nThe star here is the tofu katsu. You take thick slabs of extra-firm tofu, bread them in flour, egg, and panko, then fry until they're shatteringly crispy. The panko crust is key, regular breadcrumbs don't come close to that airy, craggy texture that Japanese panko gives you. When you slice into the cutlet and pour that golden curry sauce over it, the contrast between the crispy exterior and the soft, protein-packed tofu inside is incredible.\n\nThis is definitely more of a weekend project than a Tuesday night dinner, but it's worth the effort. The curry sauce itself comes together pretty easily and you can make extra to freeze. When I meal prep this, I keep the katsu separate from the curry and only combine them right before eating so the crust stays as crispy as possible.",
    proteinModification: "A standard tofu katsu curry at a restaurant uses thin slices of tofu and a cream-heavy curry sauce, delivering around 14-16g protein per serving. We use thick-cut 21oz tofu cutlets with an egg wash that adds protein, and build the curry sauce from scratch without excess cream. The result is 26g protein per serving with a satisfying, crispy cutlet.",
    ingredients: [
      { amount: 21, unit: "oz", item: "extra-firm tofu", note: "pressed well, sliced into 8 thick cutlets", protein: 105 },
      { amount: 0.5, unit: "cup", item: "all-purpose flour", note: "for dredging", protein: 7 },
      { amount: 2, unit: "large", item: "eggs", note: "beaten for egg wash", protein: 12 },
      { amount: 1.5, unit: "cups", item: "panko breadcrumbs", protein: 6 },
      { amount: 0.5, unit: "cup", item: "vegetable oil", note: "for pan-frying the cutlets" },
      { amount: 2, unit: "tbsp", item: "butter" },
      { amount: 1, unit: "large", item: "onion", note: "diced" },
      { amount: 2, unit: "medium", item: "carrots", note: "peeled and cut into 1/2-inch rounds" },
      { amount: 1, unit: "medium", item: "Yukon Gold potato", note: "peeled and cut into 1-inch cubes" },
      { amount: 2, unit: "tbsp", item: "all-purpose flour", note: "for curry roux" },
      { amount: 2, unit: "tbsp", item: "curry powder", note: "Japanese-style preferred (S&B brand)" },
      { amount: 2.5, unit: "cups", item: "vegetable broth" },
      { amount: 1, unit: "tbsp", item: "soy sauce" },
      { amount: 1, unit: "tbsp", item: "ketchup" },
      { amount: 1, unit: "tsp", item: "honey" },
      { amount: 0.5, unit: "tsp", item: "salt" },
      { amount: 4, unit: "cups", item: "cooked short-grain rice", note: "for serving" }
    ],
    instructions: [
      "Press the tofu for at least 20 minutes to remove as much water as possible. Slice into 8 cutlets, about 1/2-inch thick each.",
      "Set up a breading station: flour in one shallow dish, beaten eggs in a second, panko in a third. Season the flour with a pinch of salt and pepper.",
      "Dredge each tofu cutlet in flour, shaking off excess. Dip in egg wash, then press firmly into panko on both sides until well coated. Set on a wire rack.",
      "Start the curry sauce: Melt the butter in a large pot over medium heat. Add the diced onion and cook until softened, about 5 minutes.",
      "Add the 2 tbsp flour and curry powder to the onions. Stir constantly for 2 minutes to cook the roux.",
      "Gradually pour in the vegetable broth, stirring to prevent lumps. Add the carrots and potato.",
      "Stir in the soy sauce, ketchup, and honey. Bring to a simmer and cook for 20-25 minutes until the vegetables are tender and the sauce has thickened. Season with salt to taste.",
      "While the curry simmers, heat the vegetable oil in a large skillet over medium-high heat. The oil should be about 1/4-inch deep. Fry the panko-crusted tofu cutlets for 2-3 minutes per side until deep golden brown and crispy. Drain on a wire rack or paper towels.",
      "Slice each katsu cutlet into strips. Serve 2 cutlets per person over rice, spooning the curry sauce generously over and around the katsu."
    ],
    proteinTips: [
      "Add a soft-boiled egg on the side for an extra 6g protein.",
      "Mix 2 tbsp of nutritional yeast into the panko coating for an extra 2g protein per serving.",
      "Serve with a side of steamed edamame for an extra 9g protein."
    ],
    substitutions: [
      "No panko breadcrumbs? Use crushed cornflakes or regular breadcrumbs.",
      "No Yukon Gold potato? Use sweet potato or russet potato.",
      "No curry powder? Use garam masala plus a pinch of turmeric and cumin.",
      "Swap butter for coconut oil to make it dairy-free."
    ],
    pairings: [
      { item: "Miso Soup with Tofu", protein: "8g", slug: "miso-soup-with-tofu" },
      { item: "Protein Jeera Rice", protein: "8g", slug: "protein-jeera-rice" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "japanese",
      "tofu",
      "curry",
      "katsu",
      "panko",
      "comfort-food",
      "high-protein"
    ]
  },

  {
    slug: "spicy-stuffed-poblanos",
    title: "Spicy Stuffed Poblano Peppers",
    image: "images/spicy-stuffed-poblanos.jpg",
    category: "dinner",
    cuisine: "Mexican",
    difficulty: "hard",
    prepTime: 20,
    cookTime: 35,
    servings: 4,
    proteinPerServing: 28,
    caloriesPerServing: 440,
    fatPerServing: 16,
    carbsPerServing: 48,
    fiberPerServing: 10,
    description: "Smoky poblano peppers packed with a chipotle-spiced black bean and quinoa filling, loaded with melted Mexican cheese and finished with cool Greek yogurt.",
    story: "Poblanos are one of the best peppers for stuffing because they've got this mild, smoky heat that builds without burning your face off. Most stuffed pepper recipes use bell peppers, which are fine, but boring. Poblanos bring actual flavor to the table. And when you add a hit of chipotle in adobo to the filling, you've got layers of heat that keep things interesting. Fun fact about all that capsaicin: it's thermogenic, meaning your body burns a few extra calories just processing the heat. Not a huge deal, but I'll take free calorie burn with my dinner.\n\nThe filling here is where the protein math works out. Quinoa is already one of the few plant-based complete proteins, and when you mix it with black beans, you're stacking amino acids in a way that's genuinely competitive with meat. Throw in a cup of shredded Mexican cheese blend that melts into everything, and each serving hits 28g protein. For a meal that's mostly vegetables and grains, that's serious.\n\nThese are also a meal prep monster. I'll assemble a whole tray on Sunday, stuff the peppers, wrap the tray, and just pop it in the oven when I need dinner during the week. They actually get better after sitting overnight because the filling soaks up all the chipotle flavor. Twenty-five minutes in the oven from the fridge, and you've got a hot meal with legit macros.",
    proteinModification: "Traditional stuffed peppers often rely on rice and vegetables with a light sprinkle of cheese, delivering around 12-15g protein. We swap rice for quinoa (a complete protein), add two full cans of black beans, and use a generous cup of Mexican cheese blend, pushing each serving to 28g protein.",
    ingredients: [
      { amount: 4, unit: "large", item: "poblano peppers", note: "halved lengthwise and seeded" },
      { amount: 2, unit: "cans (15oz)", item: "black beans", note: "drained and rinsed", protein: 42 },
      { amount: 1, unit: "cup", item: "quinoa", note: "cooked (about 0.5 cup dry)", protein: 8 },
      { amount: 1, unit: "cup", item: "Mexican cheese blend", note: "shredded", protein: 48 },
      { amount: 0.75, unit: "cup", item: "corn kernels", note: "fresh or frozen" },
      { amount: 2, unit: "tbsp", item: "chipotle peppers in adobo", note: "minced" },
      { amount: 1, unit: "tsp", item: "cumin" },
      { amount: 3, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "medium", item: "onion", note: "diced" },
      { amount: 1, unit: "tbsp", item: "olive oil" },
      { amount: 0.5, unit: "tsp", item: "salt" },
      { amount: 0.25, unit: "tsp", item: "black pepper" },
      { amount: 0.5, unit: "cup", item: "Greek yogurt", note: "for topping", protein: 9 },
      { amount: 0.25, unit: "cup", item: "fresh cilantro", note: "chopped, for garnish" }
    ],
    instructions: [
      "Preheat oven to 375°F. Line a baking sheet with parchment paper.",
      "Halve the poblano peppers lengthwise and remove the seeds and membranes. Place cut-side up on the baking sheet and drizzle lightly with olive oil.",
      "Heat olive oil in a large skillet over medium heat. Sauté the diced onion until softened, about 4-5 minutes. Add the garlic and cumin, cooking for 1 minute until fragrant.",
      "Add the drained black beans, cooked quinoa, corn kernels, and minced chipotle peppers to the skillet. Stir well and cook for 3-4 minutes until heated through. Season with salt and pepper.",
      "Remove from heat and stir in half of the shredded cheese, letting it melt into the filling.",
      "Spoon the filling generously into each poblano half, mounding it up. Top each pepper with the remaining cheese.",
      "Bake for 25-30 minutes until the peppers are tender and the cheese is bubbly and golden.",
      "Let cool for 5 minutes, then top each pepper with a dollop of Greek yogurt and a sprinkle of fresh cilantro. Serve two halves per person."
    ],
    proteinTips: [
      "Mix 0.5 cup of cottage cheese into the filling before stuffing for an extra 7g protein per serving.",
      "Use a three-cheese blend (add cotija) for a more complex flavor and a slight protein bump.",
      "Serve alongside a simple black bean soup for a complete high-protein Mexican meal."
    ],
    substitutions: [
      "No poblano peppers? Use bell peppers or Anaheim peppers.",
      "No quinoa? Use cooked rice or couscous.",
      "No chipotle peppers in adobo? Use smoked paprika with a dash of cayenne.",
      "Swap Mexican cheese blend for Monterey Jack or crumbled queso fresco."
    ],
    pairings: [
      { item: "Mexican Rice and Beans", protein: "10g", slug: "mexican-rice-and-beans" },
      { item: "High-Protein Hummus", protein: "8g", slug: "high-protein-hummus" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "mexican",
      "dinner",
      "high-protein",
      "spicy",
      "stuffed-peppers",
      "quinoa",
      "black-beans",
      "meal-prep"
    ]
  },

  {
    slug: "pasta-e-fagioli",
    title: "Pasta e Fagioli",
    image: "images/pasta-e-fagioli.jpg",
    category: "dinner",
    cuisine: "Italian",
    difficulty: "hard",
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    proteinPerServing: 24,
    caloriesPerServing: 420,
    fatPerServing: 10,
    carbsPerServing: 58,
    fiberPerServing: 9,
    description: "A rustic Italian soup with ditalini pasta and cannellini beans in a rich tomato-parmesan broth, thickened by blending half the beans into the base.",
    story: "Italian grandmothers figured out the protein problem centuries ago. They just didn't call it that. Beans and pasta together make a complete protein, covering all the essential amino acids your muscles need to recover. Pasta e fagioli is peasant food in the best possible sense: cheap, filling, and nutritionally way smarter than it looks on paper. It's the kind of recipe that survived for generations because it actually works.\n\nThe real secret to this version is blending one full can of cannellini beans directly into the broth. It transforms the base from a thin tomato soup into something thick and creamy without adding a drop of cream or butter. The second can goes in whole so you get that satisfying bite of tender beans in every spoonful. Finish with a really generous shower of parmesan, not the dusty stuff from the green can, but actual parmigiano-reggiano that melts into the hot soup and adds umami plus an extra protein bump.\n\nI make a big pot of this on Sunday nights when the weather turns cold. It reheats better than almost any soup I know. The pasta absorbs a little more broth overnight, the flavors deepen, and you end up with something closer to a thick stew by day two. At 24g protein per bowl, it's a legit post-gym dinner that warms you up from the inside.",
    proteinModification: "Traditional pasta e fagioli typically uses a modest amount of beans and a light broth, delivering about 12-14g protein per serving. We use two full cans of cannellini beans (blending one into the broth for creaminess) and finish with generous parmesan, bringing each serving to 24g protein.",
    ingredients: [
      { amount: 8, unit: "oz", item: "ditalini pasta", note: "or small shells", protein: 13 },
      { amount: 2, unit: "cans (15oz)", item: "cannellini beans", note: "one can drained, one with liquid", protein: 34 },
      { amount: 1, unit: "can (14oz)", item: "crushed tomatoes" },
      { amount: 4, unit: "cups", item: "vegetable broth" },
      { amount: 2, unit: "medium", item: "carrots", note: "diced" },
      { amount: 2, unit: "stalks", item: "celery", note: "diced" },
      { amount: 1, unit: "large", item: "onion", note: "diced" },
      { amount: 4, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 2, unit: "tbsp", item: "olive oil" },
      { amount: 1, unit: "tsp", item: "Italian seasoning" },
      { amount: 0.5, unit: "tsp", item: "salt" },
      { amount: 0.25, unit: "tsp", item: "black pepper" },
      { amount: 1, unit: "cup", item: "parmesan cheese", note: "freshly grated, plus extra for serving", protein: 40 },
      { amount: 0.25, unit: "cup", item: "fresh basil", note: "torn" }
    ],
    instructions: [
      "Take one can of cannellini beans (with its liquid) and blend until smooth using a blender or immersion blender. Set aside.",
      "Heat olive oil in a large pot or Dutch oven over medium heat. Add the diced onion, carrots, and celery. Cook for 6-7 minutes until the vegetables are softened.",
      "Add the minced garlic and Italian seasoning, stirring for 1 minute until fragrant.",
      "Pour in the crushed tomatoes, vegetable broth, and the blended bean puree. Stir to combine and bring to a simmer.",
      "Add the second can of drained whole beans. Simmer for 15 minutes, stirring occasionally, until the broth thickens slightly and the flavors meld.",
      "Add the ditalini pasta directly into the soup. Cook for 8-10 minutes, stirring frequently to prevent sticking, until the pasta is al dente.",
      "Remove from heat and stir in half of the grated parmesan. Season with salt and pepper to taste.",
      "Ladle into bowls and top with the remaining parmesan and torn fresh basil. Drizzle with a little extra olive oil if desired."
    ],
    proteinTips: [
      "Use a parmesan rind simmered in the broth for deeper flavor, then grate extra parmesan on top for more protein.",
      "Stir in a cup of cottage cheese before serving for an extra 7g protein per serving. It melts right into the hot soup.",
      "Swap regular ditalini for a chickpea or lentil-based pasta to add another 8-10g protein per serving."
    ],
    substitutions: [
      "No ditalini pasta? Use elbow macaroni or small shells.",
      "No cannellini beans? Use great northern beans or navy beans.",
      "No parmesan cheese? Use pecorino romano or nutritional yeast for a vegan option.",
      "Swap crushed tomatoes for fire-roasted diced tomatoes for a smokier flavor."
    ],
    pairings: [
      { item: "High-Protein Hummus", protein: "8g", slug: "high-protein-hummus" },
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "italian",
      "dinner",
      "high-protein",
      "soup",
      "pasta",
      "cannellini-beans",
      "comfort-food"
    ]
  },

  {
    slug: "eggplant-parmesan",
    title: "Baked Eggplant Parmesan",
    image: "images/eggplant-parmesan.jpg",
    category: "dinner",
    cuisine: "Italian",
    difficulty: "hard",
    prepTime: 30,
    cookTime: 40,
    servings: 4,
    proteinPerServing: 26,
    caloriesPerServing: 460,
    fatPerServing: 22,
    carbsPerServing: 34,
    fiberPerServing: 7,
    description: "Crispy panko-crusted eggplant slices layered with ricotta, mozzarella, and marinara, baked until bubbly and golden. All the flavor of the classic, none of the frying.",
    story: "Most eggplant parm at restaurants is a greasy, fried mess hiding under a blanket of mozzarella. Don't get me wrong, it tastes amazing. But when I checked the macros once, I found roughly 12g protein and 600+ calories per serving, most of it from the deep-fry oil. That's not a meal, that's a setback. So I started baking instead of frying, and honestly, I might prefer it now. The panko gets genuinely crispy in the oven, especially when you mix parmesan right into the breadcrumb coating. You get crunch without the grease.\n\nThe protein play here is all about the cheese strategy. Instead of just dumping mozzarella on top and calling it a day, we layer in ricotta between the eggplant slices. It adds creaminess and a serious protein boost. Then the mozzarella goes on top for that classic stretchy, bubbly pull. The parmesan in the breadcrumbs does double duty: flavor and protein. When you add up the eggs in the wash, the ricotta layer, the mozz, and the parm in the breading, each serving lands at 26g protein. That's more than double a typical version.\n\nThe key step most people skip is salting the eggplant slices first. Lay them out, sprinkle with salt, let them sit for 15-20 minutes, then pat dry. This draws out the bitter moisture and means your eggplant actually gets crispy instead of steaming in its own liquid. It takes patience, but it makes all the difference.",
    proteinModification: "Standard eggplant parmesan uses minimal cheese and relies on frying, delivering about 10-12g protein per serving. We bake instead of fry, mix parmesan directly into the panko coating, add a full ricotta layer, and use generous mozzarella, pushing protein to 26g per serving while cutting calories.",
    ingredients: [
      { amount: 2, unit: "large", item: "eggplants", note: "sliced into 0.5-inch rounds" },
      { amount: 2, unit: "large", item: "eggs", note: "beaten for egg wash", protein: 12 },
      { amount: 1.5, unit: "cups", item: "panko breadcrumbs", protein: 6 },
      { amount: 0.75, unit: "cup", item: "parmesan cheese", note: "grated, divided", protein: 30 },
      { amount: 1, unit: "cup", item: "ricotta cheese", protein: 14 },
      { amount: 8, unit: "oz", item: "mozzarella cheese", note: "shredded or sliced", protein: 48 },
      { amount: 2, unit: "cups", item: "marinara sauce" },
      { amount: 0.25, unit: "cup", item: "fresh basil", note: "torn" },
      { amount: 1, unit: "tsp", item: "salt", note: "plus more for salting eggplant" },
      { amount: 0.5, unit: "tsp", item: "black pepper" },
      { amount: 0.5, unit: "tsp", item: "garlic powder" },
      { amount: 2, unit: "tbsp", item: "olive oil", note: "for brushing" }
    ],
    instructions: [
      "Lay the eggplant slices on a wire rack or paper towels, sprinkle both sides generously with salt, and let sit for 20 minutes to draw out moisture. Pat completely dry with paper towels.",
      "Preheat oven to 400°F. Line two baking sheets with parchment paper and lightly brush with olive oil.",
      "Set up a breading station: beaten eggs in one shallow dish, and panko mixed with 0.5 cup grated parmesan, garlic powder, salt, and pepper in another.",
      "Dip each eggplant slice in egg wash, then press into the panko-parmesan mixture, coating both sides. Place on the prepared baking sheets.",
      "Bake the breaded eggplant slices for 20-25 minutes, flipping halfway through, until golden and crispy on both sides.",
      "Reduce oven temperature to 375°F. Spread 0.5 cup marinara sauce on the bottom of a 9x13 baking dish. Layer half the baked eggplant slices over the sauce.",
      "Dollop half the ricotta in spoonfuls over the eggplant, then spread another 0.75 cup marinara on top. Add half the mozzarella.",
      "Repeat with the remaining eggplant, ricotta, marinara, and mozzarella. Sprinkle the remaining 0.25 cup parmesan on top.",
      "Bake for 15-20 minutes until the cheese is melted, bubbly, and golden brown on top.",
      "Let rest for 5-10 minutes before cutting. Top with torn fresh basil and serve."
    ],
    proteinTips: [
      "Mix an egg into the ricotta layer for extra binding and another 3g protein per serving.",
      "Serve with a side of white beans tossed in olive oil and garlic for a complete Italian protein plate.",
      "Use part-skim ricotta and mozzarella, they actually have slightly more protein per ounce than full-fat versions."
    ],
    substitutions: [
      "No panko breadcrumbs? Use Italian-seasoned regular breadcrumbs or crushed crackers.",
      "No ricotta cheese? Use cottage cheese blended until smooth.",
      "No fresh mozzarella? Use shredded low-moisture mozzarella.",
      "Swap eggplant for thick-sliced zucchini for a milder flavor."
    ],
    pairings: [
      { item: "High-Protein Hummus", protein: "8g", slug: "high-protein-hummus" },
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "italian",
      "dinner",
      "high-protein",
      "baked",
      "eggplant",
      "cheese",
      "comfort-food"
    ]
  },

  {
    slug: "halloumi-chickpea-grain-bowl",
    title: "Grilled Halloumi & Chickpea Grain Bowl",
    image: "images/halloumi-chickpea-grain-bowl.jpg",
    category: "dinner",
    cuisine: "Mediterranean",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    proteinPerServing: 30,
    caloriesPerServing: 520,
    fatPerServing: 24,
    carbsPerServing: 50,
    fiberPerServing: 8,
    description: "A hearty grain bowl with golden-seared halloumi, crispy roasted chickpeas, and fresh vegetables drizzled with a creamy lemon-tahini dressing.",
    story: "Halloumi is criminally underrated in the protein world. It packs about 7g of protein per ounce, similar to paneer, but it has one massive advantage: it doesn't melt when you cook it. You can throw it in a screaming hot pan, sear it until it's got a deep golden crust on both sides, and it holds its shape perfectly. It gets this chewy, almost meaty texture on the inside with a crispy shell on the outside. If you've never seared halloumi before, you're about to have a moment.\n\nThe roasted chickpeas are the other star here. Toss them with olive oil and spices, spread them on a sheet pan, and roast them at high heat until they're crunchy. They add this snackable, crispy texture to the bowl that you don't get from regular canned chickpeas. Combined with farro, which has more protein than rice or quinoa at about 7g per cooked cup, this bowl hits a legitimate 30g of protein per serving. The tahini dressing ties everything together with that nutty, lemony flavor that makes Mediterranean food so addictive.\n\nThis is a great weeknight dinner because everything can be prepped in parallel. While the farro simmers and the chickpeas roast, you chop the veggies and whisk the dressing. Sear the halloumi last so it's hot when you assemble. The whole thing comes together in about 35 minutes, and leftovers hold up well for lunch the next day. Just sear fresh halloumi if you want that crispy texture again.",
    proteinModification: "A standard Mediterranean grain bowl with just vegetables and grains delivers about 10-12g protein. We added thick-sliced seared halloumi (about 17g protein per serving) and roasted spiced chickpeas (about 4g per serving), plus chose protein-rich farro over rice, bringing the total to 30g per serving.",
    ingredients: [
      { amount: 10, unit: "oz", item: "halloumi cheese", note: "sliced into 0.5-inch thick slabs", protein: 70 },
      { amount: 1, unit: "can (15oz)", item: "chickpeas", note: "drained, rinsed, and patted very dry", protein: 21 },
      { amount: 1.5, unit: "cups", item: "farro", note: "dry, or substitute bulgur wheat", protein: 12 },
      { amount: 1, unit: "cup", item: "cherry tomatoes", note: "halved" },
      { amount: 1, unit: "medium", item: "cucumber", note: "diced" },
      { amount: 0.25, unit: "cup", item: "red onion", note: "thinly sliced" },
      { amount: 0.25, unit: "cup", item: "kalamata olives", note: "halved" },
      { amount: 2, unit: "tbsp", item: "fresh mint", note: "chopped" },
      { amount: 2, unit: "tbsp", item: "fresh parsley", note: "chopped" },
      { amount: 3, unit: "tbsp", item: "olive oil", note: "divided" },
      { amount: 1, unit: "tsp", item: "cumin" },
      { amount: 1, unit: "tsp", item: "paprika" },
      { amount: 0.5, unit: "tsp", item: "salt" },
      { amount: 0.25, unit: "tsp", item: "black pepper" },
      { amount: 3, unit: "tbsp", item: "tahini", protein: 5 },
      { amount: 2, unit: "tbsp", item: "lemon juice", note: "fresh" },
      { amount: 1, unit: "clove", item: "garlic", note: "minced, for dressing" },
      { amount: 3, unit: "tbsp", item: "water", note: "for dressing, adjust to thin" }
    ],
    instructions: [
      "Cook the farro according to package directions (usually about 25-30 minutes in salted boiling water). Drain and set aside.",
      "Preheat oven to 425°F. Toss the dried chickpeas with 1 tbsp olive oil, cumin, paprika, salt, and pepper. Spread on a baking sheet in a single layer and roast for 25-30 minutes, shaking the pan halfway through, until golden and crispy.",
      "While the chickpeas roast, make the lemon-tahini dressing: whisk together the tahini, lemon juice, minced garlic, and water until smooth and pourable. Add more water a tablespoon at a time if needed. Season with a pinch of salt.",
      "Prep the vegetables: halve the cherry tomatoes, dice the cucumber, thinly slice the red onion, and halve the olives. Chop the fresh herbs.",
      "When the chickpeas have about 5 minutes left, heat 1 tbsp olive oil in a non-stick or cast iron skillet over medium-high heat. Sear the halloumi slices for 2-3 minutes per side until deeply golden brown. Remove and slice into strips.",
      "Assemble the bowls: divide the cooked farro among 4 bowls. Top each with cherry tomatoes, cucumber, red onion, olives, roasted chickpeas, and seared halloumi strips.",
      "Drizzle generously with the lemon-tahini dressing. Garnish with fresh mint and parsley. Serve immediately."
    ],
    proteinTips: [
      "Use two cans of chickpeas instead of one for an extra 4g protein per serving.",
      "Add a soft-boiled egg on top for an extra 6g protein per serving.",
      "Stir a spoonful of Greek yogurt into the tahini dressing for an extra 2-3g protein per serving."
    ],
    substitutions: [
      "No halloumi? Use paneer or extra-firm tofu, pan-fried until golden.",
      "No farro? Use quinoa, bulgur wheat, or brown rice.",
      "No tahini? Use Greek yogurt thinned with lemon juice.",
      "Swap kalamata olives for sun-dried tomatoes if you prefer less brininess."
    ],
    pairings: [
      { item: "High-Protein Hummus", protein: "8g", slug: "high-protein-hummus" },
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "mediterranean",
      "grain-bowl",
      "halloumi",
      "chickpeas",
      "high-protein",
      "meal-prep"
    ]
  },

  {
    slug: "masala-egg-bhurji",
    title: "Masala Egg Bhurji",
    image: "images/masala-egg-bhurji.jpg",
    category: "breakfast",
    cuisine: "Indian",
    difficulty: "medium",
    prepTime: 5,
    cookTime: 10,
    servings: 4,
    proteinPerServing: 31,
    caloriesPerServing: 380,
    fatPerServing: 20,
    carbsPerServing: 16,
    fiberPerServing: 2,
    description: "Indian-spiced scrambled eggs with cottage cheese folded in, served with a side of Greek yogurt. A 31g-protein breakfast that comes together in 10 minutes flat.",
    story: "Egg bhurji is what got me through early morning gym sessions in college. Fifteen minutes from pan to plate, and loaded with protein. If you can scramble eggs, you can make this. It's just scrambled eggs with way more going on in the flavor department.\n\nThe original version uses two eggs per serving, which gives you maybe 12g of protein. Fine for a light morning, but useless if you just did a heavy squat session. I pushed it to four eggs and started stirring in cottage cheese during the last minute of cooking. The cottage cheese melts slightly into the eggs, creating these amazing pockets of richness that make it taste way more indulgent than it is.\n\nI make this almost every morning. Sometimes I wrap it in a roti, sometimes I eat it with toast, and sometimes I just eat it straight from the pan while standing in my kitchen at 6 AM before the gym. No judgment.",
    proteinModification: "Standard egg bhurji uses 2 eggs per serving and that's about it, roughly 12-14g of protein. We made two changes: increased to 4 eggs per serving (16 total) and folded in cottage cheese which softens in the heat and creates incredible richness. Always serve with a side of Greek yogurt. From ~13g to 31g, turning a light breakfast into a serious protein bomb.",
    ingredients: [
      { amount: 16, unit: "", item: "large eggs", protein: 96 },
      { amount: 0.5, unit: "cup", item: "cottage cheese", protein: 7 },
      { amount: 1, unit: "tbsp", item: "butter or ghee" },
      { amount: 1, unit: "medium", item: "onion", note: "finely diced" },
      { amount: 1, unit: "medium", item: "tomato", note: "finely diced" },
      { amount: 2, unit: "", item: "green chilies", note: "finely chopped" },
      { amount: 0.5, unit: "tsp", item: "cumin seeds" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 0.5, unit: "tsp", item: "chili powder" },
      { amount: 0.5, unit: "tsp", item: "salt" },
      { amount: 2, unit: "tbsp", item: "fresh cilantro", note: "chopped" },
      { amount: 0.75, unit: "cup", item: "Greek yogurt", note: "served on the side", protein: 13 }
    ],
    instructions: [
      "Crack all eggs into a bowl, add turmeric and salt, and whisk lightly. Don't over-beat, you want some variation in texture.",
      "Heat butter or ghee in a large non-stick pan over medium heat. Add cumin seeds and let them splutter.",
      "Add diced onion and sauté for 2-3 minutes until slightly softened.",
      "Add green chilies and diced tomato. Cook for 2 minutes until tomato softens but still holds its shape.",
      "Add chili powder and stir for 15 seconds.",
      "Pour in the eggs. Let them set for about 30 seconds on the bottom, then gently fold and stir with a spatula.",
      "When eggs are about 75% set, add the cottage cheese. Fold it in gently, the residual heat will soften it slightly.",
      "Continue folding until eggs are just set but still slightly creamy. Remove from heat immediately.",
      "Garnish with cilantro. Serve with Greek yogurt on the side and toast or roti."
    ],
    proteinTips: [
      "Serve on high-protein bread or wrap for an extra 5-8g protein.",
      "Add 2 tbsp hemp seeds sprinkled on top for an extra 5g protein per serving.",
      "Increase to 4 eggs per serving for an extra 6g protein."
    ],
    substitutions: [
      "No cottage cheese? Use crumbled paneer or extra-firm tofu.",
      "No ghee? Use butter or a neutral oil like avocado oil.",
      "No green chilies? Use a pinch of cayenne pepper or red pepper flakes.",
      "Swap eggs for crumbled firm tofu with black salt (kala namak) for a vegan version."
    ],
    pairings: [
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Cilantro-Mint Chutney", protein: "2g", slug: "cilantro-mint-chutney" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "indian",
      "eggs",
      "cottage-cheese",
      "quick",
      "high-protein"
    ]
  },

  {
    slug: "besan-chilla-paneer",
    title: "Besan Chilla with Paneer Stuffing",
    image: "images/besan-chilla-paneer.jpg",
    category: "breakfast",
    cuisine: "Indian",
    difficulty: "hard",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    proteinPerServing: 25,
    caloriesPerServing: 360,
    fatPerServing: 16,
    carbsPerServing: 28,
    fiberPerServing: 4,
    description: "Savory chickpea flour pancakes enriched with eggs and Greek yogurt, stuffed with spiced paneer. A naturally gluten-free, protein-dense Indian breakfast.",
    story: "Besan chilla is essentially a high-protein, gluten-free pancake made from chickpea flour. If you haven't tried it, you're missing out. It's one of the best vehicles for protein I've found, and it takes about fifteen minutes start to finish.\n\nI discovered the protein potential of besan when I started reading nutrition labels more carefully. Chickpea flour has nearly double the protein of regular wheat flour. But a traditional chilla still only hits about 10-12g of protein. Not enough for a real breakfast. So I rebuilt it, added beaten eggs directly into the batter for structure and protein, mixed in Greek yogurt for tang and an extra boost, and packed in a generous paneer stuffing instead of the usual light sprinkle.\n\nNow each chilla delivers 25g of protein, and it's still naturally gluten-free. This is my weekend breakfast ritual. I'll make a few of these, eat them with green chutney, and I'm set until lunch.",
    proteinModification: "A traditional besan chilla delivers about 10-12g of protein from the chickpea flour alone. We enriched the batter with beaten eggs and Greek yogurt (both add protein while improving texture), and packed a generous 8oz of spiced paneer inside. From 10-12g to 25g, more than double the protein, and it's still naturally gluten-free.",
    ingredients: [
      { amount: 1.5, unit: "cups", item: "besan (chickpea flour)", protein: 32 },
      { amount: 2, unit: "", item: "large eggs", note: "beaten into the batter", protein: 12 },
      { amount: 0.5, unit: "cup", item: "Greek yogurt", note: "mixed into batter", protein: 9 },
      { amount: 0.5, unit: "cup", item: "water", note: "approximately, for batter consistency" },
      { amount: 8, unit: "oz", item: "paneer", note: "crumbled, for stuffing", protein: 56 },
      { amount: 1, unit: "small", item: "onion", note: "finely diced" },
      { amount: 1, unit: "", item: "green chili", note: "finely chopped" },
      { amount: 2, unit: "tbsp", item: "fresh cilantro", note: "chopped" },
      { amount: 0.5, unit: "tsp", item: "cumin seeds" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 0.5, unit: "tsp", item: "chili powder" },
      { amount: 0.5, unit: "tsp", item: "coriander powder" },
      { amount: 1, unit: "tsp", item: "salt", note: "divided between batter and stuffing" },
      { amount: 2, unit: "tbsp", item: "oil", note: "for cooking" },
      { amount: 0.5, unit: "cup", item: "green chutney", note: "for serving" }
    ],
    instructions: [
      "Make the batter: Whisk together besan, beaten eggs, Greek yogurt, turmeric, half the salt, and enough water to make a smooth, pourable batter (like thin pancake batter). Let rest for 10 minutes.",
      "Prepare the filling: Mix crumbled paneer with half the diced onion, green chili, coriander powder, chili powder, and remaining salt.",
      "Stir the remaining onion, cumin seeds, and cilantro into the batter.",
      "Heat a non-stick pan or tawa over medium heat. Add a drizzle of oil.",
      "Pour a ladleful of batter and quickly spread it into a thin circle (about 6-7 inches).",
      "Cook for 2 minutes until the bottom is golden and edges start to lift.",
      "Place a generous portion of the paneer filling on one half of the chilla.",
      "Fold the other half over the filling and press gently. Cook for another minute on each side.",
      "Serve hot with green chutney."
    ],
    proteinTips: [
      "Serve with a side of Greek yogurt for an extra 5g protein.",
      "Increase paneer filling to 12oz for an extra 5g protein per serving.",
      "Add hemp seeds to the batter for an extra 3g protein per serving."
    ],
    substitutions: [
      "No besan (chickpea flour)? Use a mix of lentil flour or oat flour.",
      "No paneer? Use crumbled firm tofu or halloumi.",
      "No green chutney? Use a quick blend of cilantro, mint, green chili, and lemon juice.",
      "Swap oil for ghee for a richer, more traditional flavor."
    ],
    pairings: [
      { item: "Cilantro-Mint Chutney", protein: "2g", slug: "cilantro-mint-chutney" },
      { item: "Coconut Chutney", protein: "3g", slug: "coconut-chutney" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "indian",
      "chickpea-flour",
      "gluten-free",
      "eggs",
      "paneer"
    ]
  },

  {
    slug: "cardamom-yogurt-parfait",
    title: "Cardamom Greek Yogurt Parfait with Nuts & Seeds",
    image: "images/cardamom-yogurt-parfait.jpg",
    category: "breakfast",
    cuisine: "Indian-Inspired",
    difficulty: "medium",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    proteinPerServing: 21,
    caloriesPerServing: 380,
    fatPerServing: 18,
    carbsPerServing: 36,
    fiberPerServing: 5,
    description: "Thick Greek yogurt blended with almond butter and cardamom, layered with nuts, hemp seeds, and berries. A no-cook, 21g-protein breakfast that tastes like dessert.",
    story: "This parfait came from trying to find a no-cook, high-protein breakfast I could assemble half-asleep at 5:30 AM. I wanted something that tasted good enough to actually look forward to, but required zero cooking and zero thought on a Monday morning.\n\nThe cardamom is what makes this stand out from every other yogurt parfait out there. It transforms plain Greek yogurt into something that tastes almost like dessert. The almond butter stirred into the yogurt was my other key move. It adds 4g of protein per serving while making the yogurt incredibly thick and rich.\n\nI make four of these in mason jars every Sunday night. They keep perfectly in the fridge for 3-4 days. Grab one on the way out the door. Twenty-one grams of protein before you even think about cooking.",
    proteinModification: "A typical yogurt parfait with regular yogurt and granola provides about 8-10g of protein. We made four upgrades: thick Greek yogurt as the base (triple the protein of regular yogurt), stirred in almond butter for richness and protein, added hemp seeds (one of the most protein-dense seeds available), and topped with extra nuts. The result is 21g per serving, double a standard parfait, and it tastes like dessert.",
    ingredients: [
      { amount: 3, unit: "cups", item: "Greek yogurt", note: "plain, full-fat or 2%", protein: 51 },
      { amount: 3, unit: "tbsp", item: "almond butter", note: "stirred into yogurt", protein: 10 },
      { amount: 0.25, unit: "cup", item: "almonds", note: "roughly chopped", protein: 6 },
      { amount: 0.25, unit: "cup", item: "pistachios", note: "roughly chopped", protein: 6 },
      { amount: 3, unit: "tbsp", item: "hemp seeds", protein: 10 },
      { amount: 3, unit: "tbsp", item: "chia seeds", protein: 5 },
      { amount: 2, unit: "tbsp", item: "pumpkin seeds", protein: 5 },
      { amount: 2, unit: "tbsp", item: "honey or maple syrup" },
      { amount: 0.5, unit: "tsp", item: "cardamom powder" },
      { amount: 0.25, unit: "tsp", item: "cinnamon" },
      { amount: 0.5, unit: "cup", item: "granola", note: "low-sugar preferred", protein: 4 },
      { amount: 0.5, unit: "cup", item: "mixed berries", note: "fresh or frozen" },
      { amount: 1, unit: "pinch", item: "saffron threads", note: "optional, soaked in 1 tbsp warm milk" }
    ],
    instructions: [
      "Mix Greek yogurt with almond butter, cardamom, cinnamon, and saffron milk (if using). Stir vigorously until the almond butter is fully incorporated and the yogurt is thick and creamy.",
      "Prepare 4 mason jars or containers for meal prep.",
      "Layer 1: Add a few tablespoons of granola to the bottom of each jar.",
      "Layer 2: Spoon a generous layer of the almond butter-spiced yogurt.",
      "Layer 3: Add mixed berries.",
      "Layer 4: Sprinkle hemp seeds, chia seeds, pumpkin seeds, chopped almonds, and pistachios.",
      "Layer 5: Add another layer of spiced yogurt.",
      "Top with remaining nuts, a final sprinkle of hemp and chia seeds, and a drizzle of honey.",
      "Cover and refrigerate. Best eaten within 3-4 days."
    ],
    proteinTips: [
      "Use skyr instead of Greek yogurt for an extra 3-4g protein per serving.",
      "Add 1 scoop unflavored protein powder to the yogurt for an extra 6-8g protein per serving.",
      "Double the almond butter for an extra 4g protein per serving."
    ],
    substitutions: [
      "No almond butter? Use cashew butter or sunflower seed butter.",
      "No hemp seeds? Use flax seeds or additional chia seeds.",
      "No saffron threads? Use a drop of vanilla extract plus a pinch of turmeric for color.",
      "Swap granola for toasted rolled oats for less added sugar."
    ],
    pairings: [
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Cilantro-Mint Chutney", protein: "2g", slug: "cilantro-mint-chutney" },
      { item: "Coconut Chutney", protein: "3g", slug: "coconut-chutney" }
    ],
    tags: [
      "no-cook",
      "meal-prep",
      "nuts",
      "seeds",
      "quick"
    ]
  },

  {
    slug: "pesarattu-egg-paneer-upma",
    title: "Pesarattu with Egg & Paneer Upma",
    image: "images/pesarattu-egg-paneer-upma.jpg",
    category: "breakfast",
    cuisine: "South Indian (Andhra)",
    difficulty: "hard",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    proteinPerServing: 35,
    caloriesPerServing: 420,
    fatPerServing: 14,
    carbsPerServing: 40,
    fiberPerServing: 6,
    description: "Crispy green moong dal crepes with an egg cracked directly on top, filled with a savory paneer upma. An Andhra-style breakfast that delivers 35g of protein before lunch.",
    story: "Pesarattu is a green moong dal crepe that's naturally packed with protein. The batter is just ground moong dal, ginger, and chilies. No rice flour, no filler. It's one of the most protein-dense bases you can start with for a breakfast.\n\nThe traditional version is already solid on protein because green moong dal is one of the most protein-dense lentils out there. But I wanted more. Cracking an egg directly onto the pesarattu as it cooks is actually a classic street food technique. I didn't invent it, just adopted it. The egg sets into the crepe, giving it structure and an extra protein hit. Then I started crumbling paneer into the upma filling, and the combination of the crispy green moong crepe, the set egg, and the savory paneer filling became my single favorite breakfast.\n\nAt 35g of protein, it's more than most people get at lunch. Make the batter the night before, and the whole thing comes together in about twenty minutes on a weekend morning.",
    proteinModification: "Plain pesarattu with ginger chutney delivers about 14-16g of protein per serving, already better than most breakfasts. We added three protein layers: an egg cracked directly onto each crepe as it cooks (classic street food technique), a paneer upma filling with 6oz of crumbled paneer, and a side of Greek yogurt. From ~15g to 35g, more than double the protein. Every component adds protein, nothing is wasted.",
    ingredients: [
      { amount: 2, unit: "cups", item: "whole green moong dal", note: "soaked 4-6 hours", protein: 48 },
      { amount: 1, unit: "inch", item: "ginger", note: "for batter" },
      { amount: 2, unit: "", item: "green chilies", note: "for batter" },
      { amount: 0.5, unit: "tsp", item: "cumin seeds", note: "for batter" },
      { amount: 1, unit: "tsp", item: "salt", note: "divided" },
      { amount: 4, unit: "", item: "large eggs", protein: 24 },
      { amount: 2, unit: "tbsp", item: "oil", note: "for cooking" },
      { amount: 6, unit: "oz", item: "paneer", note: "crumbled, for upma", protein: 42 },
      { amount: 0.25, unit: "cup", item: "semolina (rava)", note: "for upma", protein: 6 },
      { amount: 1, unit: "small", item: "onion", note: "finely diced, for upma" },
      { amount: 0.5, unit: "tsp", item: "mustard seeds", note: "for upma" },
      { amount: 8, unit: "", item: "curry leaves", note: "for upma" },
      { amount: 1, unit: "", item: "green chili", note: "chopped, for upma" },
      { amount: 0.5, unit: "tsp", item: "turmeric", note: "for upma" },
      { amount: 0.5, unit: "cup", item: "water", note: "for upma" },
      { amount: 0.75, unit: "cup", item: "Greek yogurt", note: "served on the side", protein: 13 },
      { amount: 1, unit: "inch", item: "ginger", note: "grated, for ginger chutney" },
      { amount: 2, unit: "", item: "green chilies", note: "for ginger chutney" },
      { amount: 1, unit: "tbsp", item: "lemon juice", note: "for ginger chutney" }
    ],
    instructions: [
      "Make the batter: Drain soaked moong dal. Grind with ginger, green chilies, cumin seeds, and just enough water to make a thick, spreadable batter (thinner than adai, thicker than dosa). Add salt.",
      "Make the paneer upma: Heat 1 tsp oil in a small pan. Add mustard seeds, let them pop. Add curry leaves, green chili, and diced onion. Cook until onion is soft. Add semolina and toast for 1-2 minutes. Add water, turmeric, and salt. Stir until thick. Fold in crumbled paneer. Set aside.",
      "Make the ginger chutney: Blend ginger, green chilies, lemon juice, and a pinch of salt into a coarse paste.",
      "Heat a non-stick tawa or pan over medium-high heat. Add a drizzle of oil.",
      "Pour a ladleful of moong batter and spread into a thin circle (about 7-8 inches).",
      "Immediately crack one egg directly onto the surface of the pesarattu. Spread the egg gently with the back of a spoon.",
      "Let cook for 2-3 minutes until the bottom is golden and crispy and the egg is mostly set.",
      "Place a generous line of paneer upma along the center of the pesarattu.",
      "Fold the pesarattu over the upma filling.",
      "Serve immediately with ginger chutney and a generous side of Greek yogurt."
    ],
    proteinTips: [
      "Add 2 tbsp of chana dal to the moong dal batter for an extra 3g protein per serving.",
      "Increase paneer in the upma to 10oz for an extra 5g protein per serving.",
      "Serve with sambar on the side for an extra 8g protein, pushing past 45g total."
    ],
    substitutions: [
      "No whole green moong dal? Use yellow moong dal or a mix of moong and chana dal.",
      "No semolina (rava)? Use broken wheat (dalia) or coarse rice flour.",
      "No paneer? Use crumbled firm tofu or grated halloumi.",
      "Swap oil for ghee for a more traditional South Indian flavor.",
      "No curry leaves? Use a bay leaf and a pinch of lemon zest."
    ],
    pairings: [
      { item: "Coconut Chutney", protein: "3g", slug: "coconut-chutney" },
      { item: "Protein Sambar", protein: "12g", slug: "protein-sambar" },
      { item: "Cilantro-Mint Chutney", protein: "2g", slug: "cilantro-mint-chutney" }
    ],
    tags: [
      "south-indian",
      "andhra",
      "moong-dal",
      "eggs",
      "breakfast"
    ]
  },

  {
    slug: "chilaquiles-with-eggs",
    title: "Chilaquiles with Eggs and Black Beans",
    image: "images/chilaquiles-with-eggs.jpg",
    category: "breakfast",
    cuisine: "Mexican",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    proteinPerServing: 28,
    caloriesPerServing: 480,
    fatPerServing: 24,
    carbsPerServing: 42,
    fiberPerServing: 8,
    description: "Crispy baked tortilla chips smothered in chipotle-tomatillo salsa, loaded with scrambled eggs and black beans for a high-protein breakfast that hits hard.",
    story: "This is the ultimate post-workout breakfast. I discovered chilaquiles after a rough morning at the gym when the only place open was a little taqueria near my apartment. One plate of these and I was sold, except the restaurant version was mostly chips and salsa with a single fried egg on top. Great flavor, maybe 12g of protein. Not gonna cut it.\n\nSo I rebuilt it at home. Eight eggs scrambled into the mix, a full can of black beans stirred through, and enough queso fresco crumbled on top to make it feel indulgent. The chipotle peppers in adobo give it this deep, smoky heat that wakes you up better than coffee. And the thing about that heat is that capsaicin from the chipotles actually increases satiety, which means you stay full longer after a big breakfast. Pretty handy when you're trying to stay in a caloric window and not reach for snacks by 10am.\n\nThe trick is baking your own tortilla chips instead of frying them. Cut corn tortillas into wedges, toss with a little oil, bake until crispy. They hold up better in the salsa without turning to mush, and you skip a ton of unnecessary fat. This whole plate comes together in under 30 minutes, and at 28g protein per serving, it's a legit meal.",
    proteinModification: "A typical restaurant chilaquiles plate relies on a single egg and a handful of chips, delivering about 10-14g protein. We scramble 8 eggs directly into the dish, add a full can of black beans, and finish with generous crumbles of queso fresco, pushing each serving to 28g protein without changing the soul of the dish.",
    ingredients: [
      { amount: 10, unit: "small", item: "corn tortillas", note: "cut into wedges", protein: 10 },
      { amount: 1, unit: "tbsp", item: "olive oil", note: "for baking tortillas" },
      { amount: 8, unit: "large", item: "eggs", note: "beaten", protein: 48 },
      { amount: 1, unit: "can (15oz)", item: "black beans", note: "drained and rinsed", protein: 21 },
      { amount: 2, unit: "tbsp", item: "chipotle peppers in adobo", note: "minced" },
      { amount: 1, unit: "medium", item: "jalapeño", note: "seeded and diced" },
      { amount: 1.5, unit: "cups", item: "tomatillo salsa" },
      { amount: 4, unit: "oz", item: "queso fresco", note: "crumbled", protein: 24 },
      { amount: 0.25, unit: "cup", item: "Mexican crema", note: "or Greek yogurt" },
      { amount: 1, unit: "medium", item: "avocado", note: "sliced" },
      { amount: 0.25, unit: "cup", item: "fresh cilantro", note: "chopped" },
      { amount: 2, unit: "whole", item: "limes", note: "cut into wedges" },
      { amount: 0.5, unit: "tsp", item: "salt" },
      { amount: 1, unit: "tbsp", item: "butter", note: "for scrambling eggs" }
    ],
    instructions: [
      "Preheat oven to 400°F. Cut the corn tortillas into wedges, toss with olive oil and a pinch of salt, and spread on a baking sheet in a single layer. Bake for 10-12 minutes until golden and crispy, flipping halfway through.",
      "While the chips bake, heat the tomatillo salsa in a large skillet over medium heat. Stir in the minced chipotle peppers and diced jalapeño. Let simmer for 5 minutes until the flavors meld.",
      "In a separate non-stick pan, melt the butter over medium heat. Pour in the beaten eggs and scramble gently, cooking until just set with large, soft curds. Season with salt. Remove from heat.",
      "Add the drained black beans to the salsa and stir to warm through, about 2 minutes.",
      "Add the baked tortilla chips to the salsa-bean mixture and toss gently to coat. You want the chips to absorb some salsa while still keeping a bit of crunch.",
      "Top the chips with the scrambled eggs, distributing evenly across the skillet.",
      "Crumble the queso fresco over everything, drizzle with Mexican crema, and add sliced avocado on top.",
      "Finish with chopped cilantro and lime wedges on the side. Serve immediately from the skillet."
    ],
    proteinTips: [
      "Add an extra egg or two per serving to push protein above 30g without changing the flavor profile.",
      "Swap Mexican crema for full-fat Greek yogurt to add another 3g protein per serving.",
      "Stir in a second can of black beans if you want to push the plant-based protein even higher."
    ],
    substitutions: [
      "No queso fresco? Use crumbled feta cheese.",
      "No Mexican crema? Use sour cream thinned with a little lime juice.",
      "No tomatillo salsa? Use a blend of crushed tomatoes with diced green chiles.",
      "Swap corn tortillas for baked tortilla chips to skip the frying step."
    ],
    pairings: [
      { item: "Mexican Rice and Beans", protein: "10g", slug: "mexican-rice-and-beans" },
      { item: "High-Protein Hummus", protein: "8g", slug: "high-protein-hummus" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "mexican",
      "breakfast",
      "high-protein",
      "spicy",
      "eggs",
      "black-beans",
      "meal-prep"
    ]
  },

  {
    slug: "caprese-baked-eggs",
    title: "Caprese Baked Eggs",
    image: "images/caprese-baked-eggs.jpg",
    category: "breakfast",
    cuisine: "Italian",
    difficulty: "medium",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    proteinPerServing: 24,
    caloriesPerServing: 390,
    fatPerServing: 20,
    carbsPerServing: 30,
    fiberPerServing: 6,
    description: "Eggs baked in a garlicky cherry tomato and white bean base with cubes of fresh mozzarella, finished with fresh basil and crusty bread for dipping.",
    story: "Think of this as shakshuka's Italian cousin. Same concept, eggs baked in a flavorful tomato base, but with mozzarella, white beans, and basil instead of cumin and feta. I stumbled onto this combination one Sunday morning when I had leftover cherry tomatoes and a ball of fresh mozz that needed to get used up. Threw some beans in because I always throw beans in, cracked some eggs on top, and twenty-five minutes later I had one of my favorite breakfasts.\n\nThe white beans are the protein hack that makes this work. They sink into the tomato base as it bakes and become almost invisible in terms of texture, but they add substantial heft to the macros. A full can of cannellini beans spread across four servings means each plate gets a nice protein foundation before you even count the eggs and mozzarella. Combined, each serving hits 24g protein without feeling heavy or overstuffed. It's a bright, fresh, almost elegant breakfast that happens to have the macros of a serious meal.\n\nThe key is using fresh mozzarella, not the shredded stuff from a bag. Cut it into cubes and nestle them into the tomato base around the eggs. They get soft and melty but hold their shape, creating these pockets of stretchy cheese that you scoop up with crusty bread. A bit of red pepper flakes in the tomato base gives it just enough warmth to wake things up. This is my go-to when I want to impress someone at brunch without actually doing much work.",
    proteinModification: "A standard baked eggs dish typically relies on eggs alone for protein, delivering about 12-14g per serving. We add a full can of white beans to the base and generous cubes of fresh mozzarella throughout, pushing each serving to 24g protein while keeping the dish light and fresh.",
    ingredients: [
      { amount: 8, unit: "large", item: "eggs", protein: 48 },
      { amount: 8, unit: "oz", item: "fresh mozzarella", note: "cut into 0.5-inch cubes", protein: 48 },
      { amount: 1, unit: "can (15oz)", item: "cannellini beans", note: "drained and rinsed", protein: 17 },
      { amount: 2, unit: "cups", item: "cherry tomatoes", note: "halved" },
      { amount: 0.25, unit: "cup", item: "fresh basil", note: "torn, plus more for garnish" },
      { amount: 3, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 2, unit: "tbsp", item: "olive oil" },
      { amount: 0.5, unit: "tsp", item: "red pepper flakes" },
      { amount: 0.5, unit: "tsp", item: "salt" },
      { amount: 0.25, unit: "tsp", item: "black pepper" },
      { amount: 4, unit: "slices", item: "crusty bread", note: "for serving", protein: 12 }
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Heat olive oil in a large oven-safe skillet (cast iron works great) over medium heat. Add the minced garlic and red pepper flakes, cooking for 30 seconds until fragrant.",
      "Add the halved cherry tomatoes and cook for 5-6 minutes, stirring occasionally, until they start to break down and release their juices.",
      "Add the drained cannellini beans to the skillet and stir to combine. Season with salt and pepper. Cook for 2 minutes until warmed through.",
      "Scatter the mozzarella cubes evenly throughout the tomato-bean mixture.",
      "Using a spoon, make 8 small wells in the mixture. Crack one egg into each well.",
      "Transfer the skillet to the oven and bake for 12-15 minutes, until the egg whites are set but the yolks are still slightly runny (or longer if you prefer fully set yolks).",
      "Remove from oven, scatter torn fresh basil over the top, and let rest for 2-3 minutes.",
      "Serve directly from the skillet with crusty bread for dipping and scooping."
    ],
    proteinTips: [
      "Add a second can of cannellini beans to push the protein closer to 28g per serving.",
      "Sprinkle grated parmesan over the top before baking for an extra 2-3g protein and a crispy crust.",
      "Serve with a side of Greek yogurt mixed with herbs for dipping the bread, adds another 5g protein."
    ],
    substitutions: [
      "No fresh mozzarella? Use burrata or shredded low-moisture mozzarella.",
      "No cannellini beans? Use great northern beans or chickpeas.",
      "No fresh basil? Use a teaspoon of pesto stirred in at the end.",
      "Swap crusty bread for gluten-free bread to make it gluten-free."
    ],
    pairings: [
      { item: "High-Protein Hummus", protein: "8g", slug: "high-protein-hummus" },
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "italian",
      "breakfast",
      "high-protein",
      "baked-eggs",
      "mozzarella",
      "cannellini-beans",
      "weekend-brunch"
    ]
  },

  {
    slug: "shakshuka-with-feta",
    title: "Spicy Shakshuka with Feta and Chickpeas",
    image: "images/shakshuka-with-feta.jpg",
    category: "breakfast",
    cuisine: "Mediterranean",
    difficulty: "medium",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    proteinPerServing: 26,
    caloriesPerServing: 380,
    fatPerServing: 18,
    carbsPerServing: 32,
    fiberPerServing: 7,
    description: "A fiery skillet of eggs poached in spiced tomato sauce with chickpeas for extra protein, topped with crumbled feta and fresh herbs.",
    story: "Shakshuka is one of the best high-protein breakfasts that isn't just eggs and toast. It's a one-skillet situation, eggs poached in a spiced tomato sauce, and it's been a staple in North African and Middle Eastern kitchens forever. But most versions top out around 12-14g of protein per serving because they're mostly tomato sauce with a couple of eggs floating in it. The move that most people skip is chickpeas. Dump a can of chickpeas into the sauce before you nestle the eggs in, and you've just added roughly 4g of protein per serving without changing the flavor profile at all. They absorb all that spiced tomato goodness and give you something to actually chew on between bites of egg and bread.\n\nThe harissa is what makes this version special. Two tablespoons stirred into the base gives this a slow burn that wakes you up better than coffee. And there's decent evidence that capsaicin increases thermogenesis, your body burns slightly more calories digesting spicy food. It's not a huge difference, but I'll take free calories burned with my breakfast. Between the eight eggs, the chickpeas, and the feta crumbled on top, you're looking at 26g of protein per serving. That's a real breakfast.\n\nI make this almost every weekend. It takes about 25 minutes from cutting board to table, and the whole thing happens in one skillet. Tear off some crusty bread, dip it into that spicy tomato sauce, scoop up some egg and chickpeas and feta. That's a morning done right. It also reheats surprisingly well if you undercook the eggs slightly, so meal prep is an option if you're into that.",
    proteinModification: "A traditional shakshuka with 2 eggs per serving delivers about 12-14g protein. We added a full can of chickpeas to the sauce (roughly 4g extra per serving) and 4oz of crumbled feta on top (another 4g per serving), pushing the total to 26g protein per serving without changing the classic flavor.",
    ingredients: [
      { amount: 8, unit: "large", item: "eggs", protein: 48 },
      { amount: 4, unit: "oz", item: "feta cheese", note: "crumbled", protein: 24 },
      { amount: 1, unit: "can (15oz)", item: "chickpeas", note: "drained and rinsed", protein: 21 },
      { amount: 1, unit: "can (28oz)", item: "crushed tomatoes" },
      { amount: 2, unit: "tbsp", item: "harissa paste" },
      { amount: 1, unit: "medium", item: "onion", note: "diced" },
      { amount: 3, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "medium", item: "bell pepper", note: "diced" },
      { amount: 1, unit: "tsp", item: "cumin" },
      { amount: 1, unit: "tsp", item: "paprika" },
      { amount: 0.5, unit: "tsp", item: "red pepper flakes" },
      { amount: 2, unit: "tbsp", item: "olive oil" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 0.5, unit: "tsp", item: "black pepper" },
      { amount: 2, unit: "tbsp", item: "fresh cilantro", note: "chopped, for garnish" },
      { amount: 2, unit: "tbsp", item: "fresh parsley", note: "chopped, for garnish" },
      { amount: 4, unit: "slices", item: "crusty bread", note: "for dipping", protein: 12 }
    ],
    instructions: [
      "Heat olive oil in a large oven-safe skillet over medium heat. Add the diced onion and bell pepper, cooking until softened, about 5 minutes.",
      "Add the garlic, cumin, paprika, and red pepper flakes. Stir for 30 seconds until fragrant.",
      "Stir in the harissa paste and cook for another 30 seconds, letting it bloom in the oil.",
      "Pour in the crushed tomatoes and add the drained chickpeas. Season with salt and pepper. Stir well and let the sauce simmer for 8-10 minutes until it thickens slightly.",
      "Use the back of a spoon to make 8 small wells in the sauce. Crack one egg into each well.",
      "Cover the skillet with a lid, reduce heat to medium-low, and cook for 6-8 minutes until the egg whites are set but the yolks are still slightly runny.",
      "Remove from heat. Crumble the feta cheese evenly over the top.",
      "Garnish with chopped cilantro and parsley. Serve immediately straight from the skillet with crusty bread for dipping."
    ],
    proteinTips: [
      "Add a second can of chickpeas for an extra 4g protein per serving.",
      "Serve with a side of Greek yogurt (2% or full-fat) for an extra 5g protein per serving.",
      "Use 10 eggs instead of 8 for an extra 3g protein per serving."
    ],
    substitutions: [
      "No feta cheese? Use crumbled goat cheese or cotija.",
      "No harissa paste? Use a mix of tomato paste, cayenne, and smoked paprika.",
      "No chickpeas? Use white beans or lentils.",
      "Swap crusty bread for pita or naan for scooping."
    ],
    pairings: [
      { item: "High-Protein Hummus", protein: "8g", slug: "high-protein-hummus" },
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "mediterranean",
      "breakfast",
      "eggs",
      "chickpeas",
      "high-protein",
      "one-pan",
      "spicy"
    ]
  },

  {
    slug: "paneer-chickpea-power-bowl",
    title: "Paneer & Chickpea Power Bowl",
    image: "images/paneer-chickpea-power-bowl.jpg",
    category: "lunch",
    cuisine: "Indian-Fusion",
    difficulty: "hard",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    proteinPerServing: 35,
    caloriesPerServing: 500,
    fatPerServing: 20,
    carbsPerServing: 48,
    fiberPerServing: 9,
    description: "Grilled spiced paneer, roasted chickpeas, and a boiled egg over brown rice, with thick Greek yogurt raita and mint chutney. A protein-loaded Indian lunch bowl at 35g per serving.",
    story: "This bowl is my answer to the Chipotle bowl. You know how everyone builds their own bowl at Chipotle? I wanted one that hit even harder on protein, with better flavors and more going on in every bite.\n\nThe combination of paneer and chickpeas and an egg is deliberate overkill. Together with the yogurt raita, they deliver 35g of protein in a single bowl. And the whole thing tastes incredible. You've got the charred, spiced paneer, the crispy roasted chickpeas, cool raita, tangy pickled onions, and bright mint chutney. Every bite is different.\n\nI meal prep these bowls every Sunday. Cook the rice, grill the paneer, roast the chickpeas, boil the eggs, make the raita and chutney. Assembly takes five minutes. I've turned at least three coworkers into meal preppers with this recipe.",
    proteinModification: "Most veggie grain bowls hover around 16-18g of protein, treating protein as a garnish. We went all-in with three protein sources: generous grilled paneer (10oz), roasted chickpeas, and a hard-boiled egg per serving. The raita is built with thick Greek yogurt for even more protein. From ~17g to 35g, more than double, making this bowl rival any chicken-based meal.",
    ingredients: [
      { amount: 10, unit: "oz", item: "paneer", note: "cut into strips or cubes", protein: 70 },
      { amount: 2, unit: "cans (15oz)", item: "chickpeas", note: "drained and patted dry", protein: 42 },
      { amount: 4, unit: "", item: "large eggs", note: "hard-boiled", protein: 24 },
      { amount: 2, unit: "cups", item: "brown rice", note: "cooked", protein: 10 },
      { amount: 1, unit: "cup", item: "Greek yogurt", note: "for raita", protein: 17 },
      { amount: 1, unit: "small", item: "cucumber", note: "grated, for raita" },
      { amount: 0.5, unit: "small", item: "red onion", note: "thinly sliced" },
      { amount: 2, unit: "tbsp", item: "lemon juice" },
      { amount: 2, unit: "tbsp", item: "olive oil", note: "divided" },
      { amount: 1, unit: "tsp", item: "garam masala" },
      { amount: 1, unit: "tsp", item: "cumin powder" },
      { amount: 1, unit: "tsp", item: "coriander powder" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 1, unit: "tsp", item: "chili powder" },
      { amount: 1, unit: "tsp", item: "chaat masala", note: "for chickpeas" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 0.25, unit: "cup", item: "fresh mint leaves", note: "for chutney" },
      { amount: 0.25, unit: "cup", item: "fresh cilantro", note: "for chutney" },
      { amount: 1, unit: "", item: "green chili", note: "for chutney" }
    ],
    instructions: [
      "Preheat oven to 425°F (220°C). Toss chickpeas with 1 tbsp olive oil, chaat masala, cumin, and a pinch of salt. Spread on a baking sheet and roast for 25-30 minutes until crispy.",
      "While chickpeas roast, hard-boil the eggs, then peel and halve them.",
      "Make the raita: Mix Greek yogurt with grated cucumber, a pinch of cumin, salt, and a squeeze of lemon. Refrigerate.",
      "Make quick pickled onions: Toss sliced red onion with lemon juice and a pinch of salt.",
      "Make mint chutney: Blend mint, cilantro, green chili, 2 tbsp lemon juice, 2 tbsp water, and a pinch of salt.",
      "Marinate paneer in remaining olive oil, garam masala, coriander, turmeric, chili powder, and salt.",
      "Heat a grill pan over high heat. Cook paneer for 2-3 minutes per side until charred.",
      "Assemble bowls: brown rice base, grilled paneer, roasted chickpeas, halved egg. Top with raita, pickled onions, and mint chutney."
    ],
    proteinTips: [
      "Use quinoa instead of brown rice for an extra 4g protein per serving.",
      "Increase paneer to 14oz for an extra 5g protein per serving.",
      "Add edamame to the bowl for an extra 5g protein per serving."
    ],
    substitutions: [
      "No paneer? Use extra-firm tofu or halloumi cheese.",
      "No chaat masala? Use a pinch each of cumin, amchur, and black salt.",
      "Swap brown rice for quinoa or cauliflower rice for fewer carbs.",
      "No Greek yogurt? Use coconut yogurt to make it dairy-free."
    ],
    pairings: [
      { item: "Cilantro-Mint Chutney", protein: "2g", slug: "cilantro-mint-chutney" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" },
      { item: "Simple Dal", protein: "10g", slug: "simple-dal" }
    ],
    tags: [
      "indian-fusion",
      "bowl",
      "paneer",
      "chickpeas",
      "eggs",
      "meal-prep"
    ]
  },

  {
    slug: "high-protein-dal-soup",
    title: "High-Protein Dal Soup",
    image: "images/high-protein-dal-soup.jpg",
    category: "lunch",
    cuisine: "Indian",
    difficulty: "medium",
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    proteinPerServing: 30,
    caloriesPerServing: 340,
    fatPerServing: 10,
    carbsPerServing: 36,
    fiberPerServing: 10,
    description: "A warming, velvety soup made from a generous amount of red and yellow lentils with cottage cheese blended in for invisible protein, topped with Greek yogurt and toasted paneer croutons.",
    story: "I wanted a lentil soup that felt like actual soup, something I could eat at my desk with a spoon, not a full rice-and-dal situation, but that still delivered serious protein. Most lentil soups at restaurants give you maybe 10-12g per bowl. That's not a meal.\n\nThe trick is using a combination of red and yellow lentils. Red lentils break down completely, creating that silky, creamy base, while yellow lentils hold their shape slightly, adding texture. But even with generous lentils, a standard version still falls short on protein.\n\nThe cottage cheese is the secret weapon. Blended right into the soup, it vanishes completely while adding substantial protein and making the texture even more luxurious. The paneer croutons on top, small cubes toasted until golden, add crunch and even more protein. At 30g per serving, this is a soup that can anchor a meal. I keep batches of this in the freezer for those weeks when I don't have time to meal prep.",
    proteinModification: "A standard lentil soup delivers about 10-12g of protein per serving. We made three upgrades: increased the lentil ratio substantially (1 cup each of two types), blended in a full cup of cottage cheese (completely invisible but adds ~7g per serving and incredible creaminess), and top each bowl with toasted paneer croutons (5oz) and a thick swirl of Greek yogurt. From ~11g to 30g, nearly 3x the protein without losing any of that silky, comforting texture.",
    ingredients: [
      { amount: 1, unit: "cup", item: "red lentils (masoor dal)", protein: 24 },
      { amount: 1, unit: "cup", item: "yellow lentils (toor dal)", protein: 22 },
      { amount: 5, unit: "cups", item: "water or vegetable broth" },
      { amount: 1, unit: "cup", item: "cottage cheese", protein: 14 },
      { amount: 5, unit: "oz", item: "paneer", note: "cut into small cubes, for croutons", protein: 35 },
      { amount: 1, unit: "tbsp", item: "ghee or oil" },
      { amount: 1, unit: "medium", item: "onion", note: "diced" },
      { amount: 3, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "inch", item: "ginger", note: "grated" },
      { amount: 1, unit: "medium", item: "carrot", note: "diced" },
      { amount: 1, unit: "tsp", item: "cumin powder" },
      { amount: 1, unit: "tsp", item: "coriander powder" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 0.5, unit: "tsp", item: "garam masala" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 0.5, unit: "cup", item: "Greek yogurt", note: "for swirling on top", protein: 9 },
      { amount: 1, unit: "", item: "lemon", note: "juiced" },
      { amount: 2, unit: "tbsp", item: "fresh cilantro", note: "for garnish" }
    ],
    instructions: [
      "Wash both lentils thoroughly.",
      "Heat ghee in a large pot over medium heat. Sauté onion until softened, about 5 minutes.",
      "Add garlic, ginger, and carrot. Cook for 2 minutes.",
      "Add cumin, coriander, and turmeric. Stir for 30 seconds.",
      "Add both lentils and water or broth. Bring to a boil.",
      "Reduce heat and simmer for 25-30 minutes until lentils are completely tender.",
      "Add cottage cheese to the pot. Use an immersion blender to blend until smooth and creamy. The cottage cheese will disappear completely.",
      "Stir in garam masala, salt, and lemon juice. Adjust consistency with more water if needed.",
      "Toast the paneer croutons: Fry paneer cubes in a small pan with a little oil until golden on all sides.",
      "Serve in bowls topped with a swirl of Greek yogurt, golden paneer croutons, and fresh cilantro."
    ],
    proteinTips: [
      "Add a boiled egg per serving for an extra 6g protein.",
      "Increase paneer croutons to 7oz for an extra 3g protein per serving.",
      "Stir in 2 tbsp peanut butter while blending for an extra 4g protein per serving."
    ],
    substitutions: [
      "No toor dal? Use moong dal or additional red lentils.",
      "No paneer? Use crumbled firm tofu.",
      "No ghee? Use coconut oil or butter.",
      "No cottage cheese? Use ricotta or extra Greek yogurt stirred in at the end."
    ],
    pairings: [
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" },
      { item: "Protein Jeera Rice", protein: "8g", slug: "protein-jeera-rice" }
    ],
    tags: [
      "indian",
      "soup",
      "lentils",
      "cottage-cheese",
      "meal-prep"
    ]
  },

  {
    slug: "spiced-lentil-quinoa-salad",
    title: "Spiced Lentil & Quinoa Salad",
    image: "images/spiced-lentil-quinoa-salad.jpg",
    category: "lunch",
    cuisine: "Indian-Mediterranean Fusion",
    difficulty: "hard",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    proteinPerServing: 31,
    caloriesPerServing: 440,
    fatPerServing: 16,
    carbsPerServing: 46,
    fiberPerServing: 11,
    description: "A hearty salad of French lentils and quinoa with hard-boiled eggs, generous feta, and chickpeas, tossed in a cumin-lemon dressing. Great warm or cold, with 31g of protein per bowl.",
    story: "I created this salad for a specific purpose: I needed a high-protein lunch that tasted good cold. Most of my go-to recipes require reheating, which isn't always possible at the office or on the go.\n\nFrench lentils are the hero because they hold their shape beautifully even after days in the fridge. But lentils alone weren't enough protein. So I started layering: quinoa (a complete protein), chickpeas, a hard-boiled egg, and generous feta. Every ingredient is pulling weight on the macro front.\n\nThis is my summer lunch staple. I make a big batch on Sundays and eat it all week. It actually gets better as it sits, the cumin-lemon dressing soaking into the lentils and quinoa. Add the feta and egg just before eating for the best texture.",
    proteinModification: "Most grain salads are light on protein, around 10-12g per serving. We made this one work: a generous lentil base, quinoa as a complete protein, chickpeas for a triple-legume approach, a hard-boiled egg per serving, and 5oz of crumbled feta. From 10-12g to 31g, enough to make this a real lunch that keeps you full for hours, not just a side salad.",
    ingredients: [
      { amount: 1.25, unit: "cups", item: "French green lentils (Puy lentils)", note: "dried", protein: 31 },
      { amount: 0.75, unit: "cup", item: "quinoa", note: "dried", protein: 6 },
      { amount: 1, unit: "can (15oz)", item: "chickpeas", note: "drained and rinsed", protein: 21 },
      { amount: 4, unit: "", item: "large eggs", note: "hard-boiled and quartered", protein: 24 },
      { amount: 5, unit: "oz", item: "feta cheese", note: "crumbled", protein: 30 },
      { amount: 1, unit: "cup", item: "cherry tomatoes", note: "halved" },
      { amount: 1, unit: "medium", item: "cucumber", note: "diced" },
      { amount: 0.25, unit: "cup", item: "red onion", note: "finely diced" },
      { amount: 0.25, unit: "cup", item: "fresh parsley", note: "chopped" },
      { amount: 0.25, unit: "cup", item: "fresh mint", note: "chopped" },
      { amount: 3, unit: "tbsp", item: "olive oil" },
      { amount: 2, unit: "tbsp", item: "lemon juice" },
      { amount: 1, unit: "tsp", item: "cumin powder" },
      { amount: 0.5, unit: "tsp", item: "coriander powder" },
      { amount: 0.25, unit: "tsp", item: "chili flakes" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 0.5, unit: "tsp", item: "black pepper" }
    ],
    instructions: [
      "Cook lentils: Add lentils to a pot with 3.5 cups water and a pinch of salt. Bring to a boil, reduce heat, and simmer for 20-25 minutes until tender but holding their shape. Drain and cool slightly.",
      "Cook quinoa: Rinse quinoa and cook with 1.5 cups water according to package directions. Fluff with a fork and cool slightly.",
      "Hard-boil the eggs, peel, and quarter them.",
      "Make the dressing: Whisk together olive oil, lemon juice, cumin, coriander, chili flakes, salt, and pepper.",
      "In a large bowl, combine lentils, quinoa, and drained chickpeas.",
      "Add cherry tomatoes, cucumber, red onion, parsley, and mint.",
      "Pour dressing over everything and toss gently.",
      "Top with crumbled feta and quartered eggs.",
      "Serve warm, at room temperature, or cold. Keeps 4-5 days in the fridge."
    ],
    proteinTips: [
      "Add cottage cheese for an extra 5g protein per serving.",
      "Increase to 2 eggs per serving for an extra 6g protein.",
      "Toss in edamame for an extra 5g protein per serving."
    ],
    substitutions: [
      "No Puy lentils? Use regular green or brown lentils.",
      "No quinoa? Use bulgur wheat or couscous.",
      "No feta cheese? Use crumbled goat cheese or paneer.",
      "Swap fresh herbs for a teaspoon of dried parsley and dried mint if needed."
    ],
    pairings: [
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "High-Protein Hummus", protein: "8g", slug: "high-protein-hummus" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "fusion",
      "salad",
      "lentils",
      "eggs",
      "meal-prep"
    ]
  },

  {
    slug: "korean-tofu-bibimbap",
    title: "Korean Tofu Bibimbap",
    image: "images/korean-tofu-bibimbap.jpg",
    category: "lunch",
    cuisine: "Korean",
    difficulty: "hard",
    prepTime: 30,
    cookTime: 25,
    servings: 4,
    proteinPerServing: 28,
    caloriesPerServing: 450,
    fatPerServing: 16,
    carbsPerServing: 52,
    fiberPerServing: 5,
    description: "Gochujang-marinated tofu served over rice with sauteed vegetables, kimchi, and a fried egg on top, a vibrant Korean rice bowl that doubles as perfect meal prep.",
    story: "Bibimbap is one of the best meal prep formats out there, and once you realize that, it changes how you approach cooking for the week. Every component, the tofu, the spinach, the bean sprouts, the carrots, the zucchini, cooks separately and keeps perfectly in the fridge for four or five days. Sunday afternoon, put on a podcast, knock out all the components in about an hour, and you've got lunches handled for the entire week. Just assemble a bowl, fry an egg, and you're eating in five minutes.\n\nThe gochujang marinade on the tofu is what takes this from a basic rice bowl to something you actually crave. Gochujang is this incredible Korean fermented chili paste. It's sweet, funky, spicy, and savory all at once. Marinating the tofu in it before pan-frying creates this caramelized crust that's almost impossible to stop eating. And gochujang adds real heat, which is a bonus. Some research suggests capsaicin can help reduce post-workout inflammation, so there's that little extra benefit on top of the flavor.\n\nThe fried egg on top is a must. When you break that runny yolk and it mixes with the gochujang sauce and the warm rice, that's the moment. Every bite after that is a slightly different combination of vegetables, crispy tofu, and egg. It never gets boring. This bowl hits 28g protein without even trying hard, and it tastes like something you'd pay $18 for at a trendy Korean restaurant.",
    proteinModification: "A standard vegetarian bibimbap relies on vegetables and a small amount of tofu, typically hitting around 12-15g protein per serving. We use a full 21oz of gochujang-marinated tofu and add a fried egg on top of each bowl, pushing the protein to 28g per serving, nearly double, while keeping the dish authentically Korean.",
    ingredients: [
      { amount: 21, unit: "oz", item: "extra-firm tofu", note: "pressed and sliced into 1/2-inch thick rectangles", protein: 105 },
      { amount: 3, unit: "tbsp", item: "gochujang", note: "divided, 2 tbsp for marinade, 1 tbsp for sauce" },
      { amount: 2, unit: "tbsp", item: "soy sauce", note: "divided" },
      { amount: 1, unit: "tbsp", item: "sesame oil", note: "plus more for vegetables" },
      { amount: 1, unit: "tsp", item: "sugar" },
      { amount: 4, unit: "large", item: "eggs", protein: 24 },
      { amount: 4, unit: "cups", item: "cooked short-grain rice", protein: 16 },
      { amount: 6, unit: "oz", item: "fresh spinach", note: "blanched and squeezed dry" },
      { amount: 1, unit: "cup", item: "bean sprouts", note: "blanched" },
      { amount: 2, unit: "medium", item: "carrots", note: "julienned" },
      { amount: 1, unit: "medium", item: "zucchini", note: "julienned" },
      { amount: 0.5, unit: "cup", item: "kimchi" },
      { amount: 2, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 2, unit: "tbsp", item: "vegetable oil", note: "divided" },
      { amount: 1, unit: "tbsp", item: "rice vinegar" },
      { amount: 1, unit: "tbsp", item: "sesame seeds", note: "for garnish" }
    ],
    instructions: [
      "Mix the marinade: 2 tbsp gochujang, 1 tbsp soy sauce, 1 tbsp sesame oil, and sugar. Coat the pressed tofu slices and let marinate for at least 15 minutes (or up to overnight in the fridge).",
      "Prepare the vegetables: Blanch the spinach in boiling water for 30 seconds, drain, squeeze out excess water, and season with a dash of sesame oil and a pinch of salt. Blanch bean sprouts for 1 minute, drain, and season the same way.",
      "Sauté the carrots in a splash of sesame oil over medium-high heat for 2 minutes until just tender. Season with a pinch of salt. Repeat with the zucchini. Set each vegetable aside separately.",
      "Heat 1 tbsp vegetable oil in a large skillet over medium-high heat. Pan-fry the marinated tofu for 3-4 minutes per side until caramelized and slightly charred on the edges. Remove and slice into bite-sized pieces.",
      "Make the bibimbap sauce: Stir together the remaining 1 tbsp gochujang, 1 tbsp soy sauce, 1 tbsp rice vinegar, and 1 tsp sesame oil.",
      "Fry the eggs: Wipe the skillet, add 1 tbsp vegetable oil over medium heat, and fry the 4 eggs sunny-side up until the whites are set but the yolks are still runny.",
      "Assemble the bowls: Divide the rice among 4 bowls. Arrange the tofu, spinach, bean sprouts, carrots, zucchini, and kimchi in sections on top of the rice.",
      "Place a fried egg on top of each bowl. Drizzle with the bibimbap sauce and sprinkle with sesame seeds. Mix everything together before eating."
    ],
    proteinTips: [
      "Use quinoa instead of rice for an extra 4g protein per serving.",
      "Add 1/4 cup shelled edamame to each bowl for an extra 4g protein.",
      "Double the egg, use 2 per bowl for an extra 6g protein per serving."
    ],
    substitutions: [
      "No gochujang? Use sriracha mixed with a little miso paste.",
      "No kimchi? Use quick-pickled cabbage with rice vinegar and chili flakes.",
      "Swap short-grain rice for cauliflower rice to make it lower carb.",
      "No bean sprouts? Use shredded cabbage or julienned daikon."
    ],
    pairings: [
      { item: "Miso Soup with Tofu", protein: "8g", slug: "miso-soup-with-tofu" },
      { item: "Spicy Garlic Edamame", protein: "18g", slug: "spicy-garlic-edamame" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "korean",
      "tofu",
      "bibimbap",
      "spicy",
      "meal-prep",
      "high-protein",
      "rice-bowl"
    ]
  },

  {
    slug: "mexican-quinoa-power-bowl",
    title: "Mexican Quinoa Power Bowl",
    image: "images/mexican-quinoa-power-bowl.jpg",
    category: "lunch",
    cuisine: "Mexican",
    difficulty: "hard",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    proteinPerServing: 26,
    caloriesPerServing: 520,
    fatPerServing: 22,
    carbsPerServing: 58,
    fiberPerServing: 12,
    description: "A loaded grain bowl with quinoa, black beans, roasted sweet potato, avocado, and cotija cheese drizzled with a lime-cilantro dressing.",
    story: "This is my go-to meal prep lunch, and I've been making it almost every week for the past two years. The beauty of it is that everything cooks in one batch on Sunday afternoon. Roast the sweet potatoes, cook the quinoa, drain the beans, pickle the onions, make the dressing, all of it done in about 45 minutes of mostly passive time. Then I portion it into four containers and I'm set through Thursday.\n\nThe quinoa and black bean combo is the foundation, and it's no accident. Together they form a complete protein, quinoa covers the amino acids that beans are missing, and vice versa. It's one of the cleanest ways to stack plant-based protein without relying on processed stuff. The pepitas (pumpkin seeds) are the stealth move here. They add a great crunch and an extra 5g protein per serving that most people wouldn't think to include.\n\nThe lime-cilantro dressing ties it all together. It's just lime juice, olive oil, minced garlic, and a bunch of chopped cilantro blended until smooth. Bright, fresh, and cuts through the richness of the avocado and cotija. I drizzle Greek yogurt on top too, partly for the tangy contrast and partly because it adds another protein bump. At 26g per bowl, this is legitimately competitive with any chicken-and-rice meal, and it's way more interesting to eat.",
    proteinModification: "A standard grain bowl relies on grains and vegetables with minimal protein additions, typically hitting 10-14g per serving. We build the base with quinoa (a complete protein), add a full can of black beans, crumble on cotija cheese, include pepitas, and finish with a Greek yogurt drizzle to reach 26g per serving.",
    ingredients: [
      { amount: 1, unit: "cup", item: "quinoa", note: "dry, rinsed", protein: 8 },
      { amount: 1, unit: "can (15oz)", item: "black beans", note: "drained and rinsed", protein: 21 },
      { amount: 2, unit: "medium", item: "sweet potatoes", note: "peeled and cubed", protein: 4 },
      { amount: 1, unit: "medium", item: "avocado", note: "sliced" },
      { amount: 3, unit: "oz", item: "cotija cheese", note: "crumbled", protein: 18 },
      { amount: 1, unit: "cup", item: "corn kernels", note: "fresh or frozen", protein: 5 },
      { amount: 0.25, unit: "cup", item: "pepitas", note: "pumpkin seeds", protein: 9 },
      { amount: 0.5, unit: "cup", item: "Greek yogurt", note: "for drizzle", protein: 9 },
      { amount: 1, unit: "small", item: "red onion", note: "thinly sliced for pickling" },
      { amount: 0.25, unit: "cup", item: "apple cider vinegar", note: "for pickling onion" },
      { amount: 1, unit: "tsp", item: "sugar", note: "for pickling onion" },
      { amount: 3, unit: "tbsp", item: "olive oil", note: "divided" },
      { amount: 3, unit: "tbsp", item: "lime juice", note: "about 2 limes" },
      { amount: 0.5, unit: "cup", item: "fresh cilantro", note: "chopped" },
      { amount: 2, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 0.5, unit: "tsp", item: "salt" },
      { amount: 0.25, unit: "tsp", item: "black pepper" }
    ],
    instructions: [
      "Preheat oven to 400°F. Toss the cubed sweet potatoes with 1 tbsp olive oil, salt, and pepper. Spread on a baking sheet and roast for 25-30 minutes, flipping halfway, until tender and caramelized.",
      "While the sweet potatoes roast, cook the quinoa: combine 1 cup quinoa with 2 cups water in a saucepan, bring to a boil, reduce heat, cover, and simmer for 15 minutes. Fluff with a fork.",
      "Make the pickled onions: toss the sliced red onion with apple cider vinegar, sugar, and a pinch of salt in a small bowl. Let sit for at least 20 minutes.",
      "Make the lime-cilantro dressing: whisk together 2 tbsp olive oil, lime juice, minced garlic, half the chopped cilantro, salt, and pepper. Set aside.",
      "If using frozen corn, warm it in a dry skillet over medium-high heat for 3-4 minutes until slightly charred.",
      "Assemble the bowls: divide the quinoa among 4 bowls. Top each with black beans, roasted sweet potato, corn, pickled red onion, avocado slices, and crumbled cotija cheese.",
      "Drizzle the lime-cilantro dressing over each bowl, add a spoonful of Greek yogurt, and sprinkle with pepitas and remaining cilantro.",
      "Serve immediately, or store components separately for meal prep and assemble throughout the week."
    ],
    proteinTips: [
      "Add a second can of black beans to the batch for an extra 4g protein per serving.",
      "Swap Greek yogurt drizzle for a thicker Greek yogurt-lime sauce using 1 cup yogurt for more protein.",
      "Toast the pepitas in a dry pan to enhance their flavor. You'll eat more of them, and more pepitas means more protein."
    ],
    substitutions: [
      "No cotija cheese? Use crumbled feta or queso fresco.",
      "No pepitas? Use sunflower seeds or toasted almonds.",
      "No sweet potatoes? Use butternut squash cubes roasted the same way.",
      "Swap quinoa for brown rice or cauliflower rice."
    ],
    pairings: [
      { item: "Mexican Rice and Beans", protein: "10g", slug: "mexican-rice-and-beans" },
      { item: "High-Protein Hummus", protein: "8g", slug: "high-protein-hummus" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "mexican",
      "lunch",
      "high-protein",
      "grain-bowl",
      "quinoa",
      "black-beans",
      "meal-prep",
      "power-bowl"
    ]
  },

  {
    slug: "white-bean-kale-ribollita",
    title: "White Bean & Kale Ribollita",
    image: "images/white-bean-kale-ribollita.jpg",
    category: "lunch",
    cuisine: "Italian",
    difficulty: "hard",
    prepTime: 15,
    cookTime: 40,
    servings: 4,
    proteinPerServing: 22,
    caloriesPerServing: 380,
    fatPerServing: 12,
    carbsPerServing: 48,
    fiberPerServing: 10,
    description: "A thick Tuscan bread soup loaded with cannellini beans and lacinato kale, simmered with a parmesan rind until rich and stew-like.",
    story: "Ribollita literally means \"reboiled\" in Italian, and it's one of those recipes that gets better the longer it sits. It's a Tuscan peasant soup that was originally made from yesterday's leftover minestrone, thickened with stale bread and reheated the next day. That bread breaks down and turns the whole thing from a soup into almost a stew, thick, hearty, and way more satisfying than you'd expect from something that's basically vegetables and beans.\n\nThe double dose of cannellini beans is what makes this work for protein goals. Two full cans go in, and by the time they've simmered for 30-plus minutes, some of them start to break down and thicken the broth naturally. That, combined with the bread, gives you a texture that feels rich and substantial. The parmesan rind is the secret move. Toss it in while the soup simmers and it slowly melts, releasing this deep umami flavor that makes the whole pot taste like it's been cooking for hours. Then you grate more fresh parmesan on top when you serve it. At 22g protein per bowl, this is legitimately filling.\n\nThis is one of my favorite freezer meals. I'll make a double batch, portion it into containers, and freeze half. It reheats from frozen perfectly, actually better than fresh, because all those flavors have had time to merge together. The bread gets even thicker and more stew-like. It's the kind of meal that makes eating well feel effortless, which is basically the whole game when you're trying to stay consistent with nutrition.",
    proteinModification: "Traditional ribollita uses a moderate amount of beans and focuses more on bread and vegetables, delivering about 10-12g protein per serving. We use two full cans of cannellini beans, simmer with a parmesan rind, and finish with generous grated parmesan to reach 22g protein per serving.",
    ingredients: [
      { amount: 2, unit: "cans (15oz)", item: "cannellini beans", note: "drained and rinsed", protein: 34 },
      { amount: 1, unit: "bunch", item: "lacinato kale", note: "stems removed, leaves chopped" },
      { amount: 4, unit: "oz", item: "crusty bread", note: "cubed and toasted, like sourdough or ciabatta", protein: 8 },
      { amount: 1, unit: "can (14oz)", item: "crushed tomatoes" },
      { amount: 4, unit: "cups", item: "vegetable broth" },
      { amount: 2, unit: "medium", item: "carrots", note: "diced" },
      { amount: 2, unit: "stalks", item: "celery", note: "diced" },
      { amount: 1, unit: "large", item: "onion", note: "diced" },
      { amount: 4, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "sprig", item: "fresh rosemary" },
      { amount: 1, unit: "tsp", item: "dried thyme" },
      { amount: 1, unit: "piece", item: "parmesan rind", note: "about 2-3 inches, for simmering" },
      { amount: 2, unit: "tbsp", item: "olive oil", note: "plus more for drizzling" },
      { amount: 0.75, unit: "cup", item: "parmesan cheese", note: "freshly grated, for serving", protein: 30 },
      { amount: 0.5, unit: "tsp", item: "salt" },
      { amount: 0.25, unit: "tsp", item: "black pepper" }
    ],
    instructions: [
      "Heat olive oil in a large pot or Dutch oven over medium heat. Add the diced onion, carrots, and celery. Cook for 6-7 minutes until softened and lightly golden.",
      "Add the minced garlic, rosemary sprig, and dried thyme. Stir for 1 minute until fragrant.",
      "Pour in the crushed tomatoes and vegetable broth. Add the drained cannellini beans and the parmesan rind. Bring to a simmer.",
      "Cook for 20 minutes, stirring occasionally, letting the flavors develop and some of the beans begin to break down and thicken the broth.",
      "Add the chopped kale and stir until wilted, about 3-4 minutes.",
      "Add the cubed, toasted bread and stir it into the soup. The bread will absorb the broth and start to break down, thickening the soup into a stew-like consistency.",
      "Simmer for another 10 minutes, stirring occasionally. Remove the rosemary sprig and parmesan rind (scrape any remaining soft cheese from the rind back into the pot).",
      "Season with salt and pepper to taste. Ladle into bowls, top generously with grated parmesan, and finish with a drizzle of good olive oil."
    ],
    proteinTips: [
      "Stir a beaten egg into the hot soup just before serving. It creates silky ribbons and adds 6g protein per serving.",
      "Serve with an extra slice of toasted bread rubbed with garlic and topped with ricotta for a protein-rich side.",
      "Add a third can of cannellini beans for an extra 4g protein per serving if you want a thicker, more bean-heavy version."
    ],
    substitutions: [
      "No lacinato kale? Use curly kale or Swiss chard.",
      "No cannellini beans? Use great northern beans or navy beans.",
      "No parmesan rind? Use a tablespoon of grated parmesan stirred in for umami.",
      "Swap crusty bread for gluten-free bread to make it gluten-free."
    ],
    pairings: [
      { item: "High-Protein Hummus", protein: "8g", slug: "high-protein-hummus" },
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "italian",
      "lunch",
      "high-protein",
      "soup",
      "stew",
      "cannellini-beans",
      "kale",
      "meal-prep",
      "freezer-friendly"
    ]
  },

  {
    slug: "halloumi-lentil-tabbouleh",
    title: "Halloumi & Lentil Tabbouleh Bowl",
    image: "images/halloumi-lentil-tabbouleh.jpg",
    category: "lunch",
    cuisine: "Mediterranean",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    proteinPerServing: 28,
    caloriesPerServing: 480,
    fatPerServing: 22,
    carbsPerServing: 44,
    fiberPerServing: 9,
    description: "A protein-loaded twist on classic tabbouleh, swapping in lentils for most of the bulgur and topping with golden grilled halloumi slices.",
    story: "Traditional tabbouleh is mostly herbs and bulgur, light, fresh, and honestly one of the most refreshing things you can eat on a hot day. But it's not much of a meal on its own. You're looking at maybe 5-6g of protein per serving, which is fine as a side dish but doesn't cut it when you need actual fuel. The fix is simple: swap in cooked lentils for most of the bulgur. Lentils have a similar earthy, nutty vibe that works perfectly with the parsley and lemon, and a cup of cooked lentils brings about 18g of protein to the table. You keep a small amount of bulgur for that traditional texture, but the lentils do the heavy lifting.\n\nThen you add grilled halloumi on top and the whole thing becomes a legitimate 28g-protein lunch. I grill the halloumi in thick slices so you get those char marks and that squeaky, satisfying chew. The key with halloumi is high heat, short time. You want a golden crust before the inside gets too soft. Slice it up and lay it right on top of the tabbouleh so the warm cheese hits the cool, lemony salad. That temperature contrast is everything.\n\nThis is one of my go-to meal prep lunches. The lentil tabbouleh base actually tastes better after a day in the fridge because the lentils and bulgur soak up all that lemon dressing and the herbs stay bright. I'll make a big batch on Sunday, portion it into containers, and just sear fresh halloumi each day before I eat. Takes two minutes and you've got a lunch that's fresh, filling, and packed with protein.",
    proteinModification: "Standard tabbouleh is mostly bulgur and herbs, delivering about 5-6g protein per serving. We replaced most of the bulgur with cooked green lentils (about 18g protein per cup) and added 8oz of grilled halloumi on top, bringing the total to 28g protein per serving while keeping the fresh, herby character of the original.",
    ingredients: [
      { amount: 8, unit: "oz", item: "halloumi cheese", note: "sliced into 0.5-inch thick slabs", protein: 56 },
      { amount: 1, unit: "cup", item: "green or brown lentils", note: "dry, cooked and cooled", protein: 25 },
      { amount: 0.5, unit: "cup", item: "bulgur wheat", note: "fine or medium grain" },
      { amount: 1, unit: "large bunch", item: "flat-leaf parsley", note: "about 2 cups finely chopped" },
      { amount: 0.25, unit: "cup", item: "fresh mint", note: "finely chopped" },
      { amount: 2, unit: "medium", item: "tomatoes", note: "seeded and diced" },
      { amount: 1, unit: "medium", item: "cucumber", note: "diced" },
      { amount: 3, unit: "tbsp", item: "lemon juice", note: "fresh, about 2 lemons" },
      { amount: 3, unit: "tbsp", item: "olive oil", note: "plus extra for grilling halloumi" },
      { amount: 1, unit: "clove", item: "garlic", note: "minced" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 0.5, unit: "tsp", item: "black pepper" }
    ],
    instructions: [
      "Cook the lentils: rinse 1 cup dry lentils, place in a pot with 3 cups water, bring to a boil, then reduce heat and simmer for 20-25 minutes until tender but not mushy. Drain any excess water and let cool.",
      "Prepare the bulgur: place bulgur in a bowl, pour 0.5 cup boiling water over it, cover, and let sit for 15 minutes until the water is absorbed. Fluff with a fork and let cool.",
      "While the lentils and bulgur cook, prep the vegetables and herbs: finely chop the parsley and mint, seed and dice the tomatoes, and dice the cucumber.",
      "Make the dressing: whisk together the lemon juice, olive oil, minced garlic, salt, and pepper.",
      "In a large bowl, combine the cooled lentils, bulgur, parsley, mint, tomatoes, and cucumber. Pour the dressing over everything and toss to combine. Taste and adjust lemon juice and salt as needed.",
      "Heat a grill pan or skillet over medium-high heat. Brush the halloumi slices lightly with olive oil. Grill for 2-3 minutes per side until golden char marks form.",
      "Slice the grilled halloumi into strips. Divide the tabbouleh among 4 bowls and top each with grilled halloumi strips. Serve immediately or refrigerate the tabbouleh base for meal prep."
    ],
    proteinTips: [
      "Add a handful of toasted pine nuts or slivered almonds for an extra 3-4g protein per serving.",
      "Serve with a side of hummus for an extra 5g protein per serving.",
      "Crumble some feta on top alongside the halloumi for an extra 3-4g protein per serving."
    ],
    substitutions: [
      "No halloumi? Use paneer or extra-firm tofu, pan-fried until golden.",
      "No bulgur wheat? Use couscous or quinoa.",
      "No flat-leaf parsley? Use cilantro for a different but fresh flavor.",
      "Swap lentils for canned chickpeas to save cooking time."
    ],
    pairings: [
      { item: "High-Protein Hummus", protein: "8g", slug: "high-protein-hummus" },
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "mediterranean",
      "lunch",
      "halloumi",
      "lentils",
      "tabbouleh",
      "high-protein",
      "meal-prep"
    ]
  },

  {
    slug: "crispy-masala-chickpeas",
    title: "Crispy Masala Roasted Chickpeas with Yogurt Dip",
    image: "images/crispy-masala-chickpeas.jpg",
    category: "snack",
    cuisine: "Indian",
    difficulty: "medium",
    prepTime: 5,
    cookTime: 35,
    servings: 4,
    proteinPerServing: 18,
    caloriesPerServing: 240,
    fatPerServing: 8,
    carbsPerServing: 26,
    fiberPerServing: 7,
    description: "Crunchy, addictive chickpeas roasted with chaat masala, served with a thick, spiced Greek yogurt dipping sauce. A high-protein snack that replaces chips without compromise.",
    story: "I have a chip problem. Or rather, I had a chip problem. I could demolish a bag of chips while watching a game and not even notice. The problem is that chips are basically zero protein and all carbs and fat.\n\nRoasted chickpeas fixed that. Same satisfying crunch, but with actual nutritional value. The chaat masala coating gives them that tangy, savory hit that makes them dangerously snackable. The yogurt dip isn't optional, it's built into the recipe because it adds protein and gives you something creamy to contrast the crunch.\n\nThe key is patience. You need to roast them long enough for the centers to dry out, or they'll be crunchy on the outside but soft inside. They should rattle when you shake the pan. I keep a container of these on my desk at all times.",
    proteinModification: "A typical snack portion of roasted chickpeas gives you about 6-8g of protein, better than chips but still modest. We increased the chickpea quantity to 3 cans for more generous portions and built a thick Greek yogurt dipping sauce right into the recipe (it's not optional). The yogurt dip alone adds 5g per serving. From 6-8g to 18g, more than double the protein, making this a snack that actually contributes to your daily goals.",
    ingredients: [
      { amount: 3, unit: "cans (15oz)", item: "chickpeas", note: "drained, rinsed, and patted very dry", protein: 63 },
      { amount: 1, unit: "tbsp", item: "olive oil" },
      { amount: 1.5, unit: "tsp", item: "chaat masala" },
      { amount: 0.5, unit: "tsp", item: "cumin powder" },
      { amount: 0.5, unit: "tsp", item: "chili powder" },
      { amount: 0.5, unit: "tsp", item: "amchur (dry mango powder)", note: "optional" },
      { amount: 0.5, unit: "tsp", item: "salt" },
      { amount: 0.25, unit: "tsp", item: "black salt (kala namak)", note: "optional but recommended" },
      { amount: 0.75, unit: "cup", item: "Greek yogurt", note: "for dip", protein: 13 },
      { amount: 0.5, unit: "tsp", item: "cumin powder", note: "for dip" },
      { amount: 0.5, unit: "tsp", item: "chaat masala", note: "for dip" },
      { amount: 1, unit: "pinch", item: "salt", note: "for dip" },
      { amount: 1, unit: "tbsp", item: "fresh cilantro", note: "chopped, for dip" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C). Line a baking sheet with parchment paper.",
      "Pat chickpeas very dry with paper towels or a clean kitchen towel. The drier they are, the crunchier they'll get.",
      "Toss chickpeas with olive oil and spread in a single layer on the baking sheet.",
      "Roast for 30-35 minutes, shaking the pan every 10 minutes, until golden and crunchy.",
      "While hot, toss with chaat masala, cumin, chili powder, amchur, salt, and black salt.",
      "Make the dip: Mix Greek yogurt with cumin, chaat masala, salt, and chopped cilantro.",
      "Let chickpeas cool completely, they get crunchier as they cool.",
      "Serve with the yogurt dip. Store chickpeas in an airtight container for up to 5 days (store dip separately)."
    ],
    proteinTips: [
      "Pair with a handful of roasted peanuts for an extra 7g protein.",
      "Sprinkle nutritional yeast on the chickpeas for an extra 4g protein.",
      "Double the yogurt dip portion for an extra 5g protein."
    ],
    substitutions: [
      "No amchur powder? Use a squeeze of lemon juice after roasting.",
      "No black salt? Use regular sea salt with a tiny pinch of asafoetida.",
      "No chaat masala? Use equal parts cumin, coriander, and a pinch of citric acid.",
      "Swap chickpeas for roasted edamame or white beans."
    ],
    pairings: [
      { item: "Cilantro-Mint Chutney", protein: "2g", slug: "cilantro-mint-chutney" },
      { item: "Coconut Chutney", protein: "3g", slug: "coconut-chutney" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "indian",
      "snack",
      "chickpeas",
      "yogurt-dip",
      "meal-prep"
    ]
  },

  {
    slug: "paneer-tikka-skewers",
    title: "Paneer Tikka Skewers",
    image: "images/paneer-tikka-skewers.jpg",
    category: "snack",
    cuisine: "Indian",
    difficulty: "hard",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    proteinPerServing: 22,
    caloriesPerServing: 300,
    fatPerServing: 16,
    carbsPerServing: 14,
    fiberPerServing: 3,
    description: "Generous paneer cubes marinated in a thick spiced yogurt and charred to perfection on skewers, served with a yogurt-mint dip. A high-protein snack that hits harder than most people's dinners.",
    story: "Paneer tikka is the dish I bring to every barbecue, every tailgate, every Fourth of July party. While everyone else is grilling burgers and hot dogs, I'm grilling these, and by the end of the night, mine are always gone first.\n\nThere's something about the combination of smoky char and the creamy, spiced yogurt marinade that's universally appealing. Even my most committed meat-eating friends grab these off the grill before reaching for the burgers. The marinade does double duty, yogurt tenderizes and adds protein while the spices build a crust that chars beautifully over high heat.\n\nAs a snack or appetizer, each serving delivers 22g of protein, more than most people's entire lunch. I also make these as a pre-gym snack sometimes. A few skewers with the yogurt-mint dip, and I'm fueled up and ready to go.",
    proteinModification: "Standard paneer tikka as an appetizer uses modest paneer portions with a thin marinade, about 12-14g protein per serving. We loaded up the skewers with 12oz of paneer (an extra-generous portion), used a thick Greek yogurt marinade that clings to every cube, and built a yogurt-mint dipping sauce right in. From ~13g to 22g, making this snack hit harder than most people's actual meals.",
    ingredients: [
      { amount: 12, unit: "oz", item: "paneer", note: "cut into 1.5-inch cubes", protein: 84 },
      { amount: 1, unit: "large", item: "bell pepper", note: "cut into chunks" },
      { amount: 1, unit: "medium", item: "red onion", note: "cut into chunks" },
      { amount: 0.75, unit: "cup", item: "Greek yogurt", note: "divided, half for marinade, half for dip", protein: 13 },
      { amount: 1, unit: "tbsp", item: "oil" },
      { amount: 1, unit: "tbsp", item: "lemon juice" },
      { amount: 1, unit: "tsp", item: "cumin powder" },
      { amount: 1, unit: "tsp", item: "coriander powder" },
      { amount: 1, unit: "tsp", item: "paprika" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 0.5, unit: "tsp", item: "garam masala" },
      { amount: 0.5, unit: "tsp", item: "chili powder" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 0.25, unit: "cup", item: "fresh mint leaves", note: "for dip" },
      { amount: 1, unit: "", item: "green chili", note: "for dip" }
    ],
    instructions: [
      "Make the marinade: Mix half the Greek yogurt with oil, lemon juice, and all the spices.",
      "Add paneer cubes, bell pepper, and onion chunks to the marinade. Toss to coat. Marinate for at least 30 minutes (or up to 4 hours in the fridge).",
      "Make the yogurt-mint dip: Blend remaining Greek yogurt with mint leaves, green chili, a squeeze of lemon, and a pinch of salt.",
      "If using wooden skewers, soak them in water for 20 minutes.",
      "Thread marinated paneer and vegetables alternately onto skewers.",
      "Grill method: Cook on a preheated grill or grill pan over medium-high heat for 3-4 minutes per side until charred.",
      "Oven method: Place skewers on a foil-lined baking sheet. Broil on high for 5-6 minutes per side until charred spots appear.",
      "Serve hot with yogurt-mint dip on the side."
    ],
    proteinTips: [
      "Add extra paneer cubes to each skewer for an extra 5g protein.",
      "Make a double batch, these work great as meal prep protein add-ons throughout the week.",
      "Pair with roasted chickpeas for a high-protein snack plate."
    ],
    substitutions: [
      "No paneer? Use extra-firm tofu or halloumi cheese.",
      "No Greek yogurt? Use cashew cream for a dairy-free marinade.",
      "No garam masala? Use a mix of cinnamon, cardamom, and clove.",
      "Swap bell pepper and onion for mushrooms and zucchini chunks.",
      "No paneer? Use extra-firm tofu or halloumi, pressed and cubed the same way."
    ],
    pairings: [
      { item: "Cilantro-Mint Chutney", protein: "2g", slug: "cilantro-mint-chutney" },
      { item: "Garlic Naan", protein: "6g", slug: "garlic-naan" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "indian",
      "paneer",
      "grilled",
      "snack",
      "appetizer"
    ]
  },

  {
    slug: "masala-sundal",
    title: "Masala Sundal",
    image: "images/masala-sundal.jpg",
    category: "snack",
    cuisine: "South Indian",
    difficulty: "medium",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    proteinPerServing: 19,
    caloriesPerServing: 260,
    fatPerServing: 10,
    carbsPerServing: 26,
    fiberPerServing: 7,
    description: "Spiced chickpeas tempered with mustard seeds, curry leaves, and fresh coconut, a classic South Indian temple snack, served with a thick Greek yogurt dip for extra protein.",
    story: "I remember my grandmother making huge batches of sundal, sometimes with chickpeas, sometimes with black-eyed peas or peanuts, and eating it at temple visits growing up. It's one of those snacks that I never thought of as \"healthy\" back then. It was just good.\n\nWhat I didn't appreciate until I started paying attention to nutrition is that sundal is essentially a protein snack. Chickpeas, tempered with mustard seeds and curry leaves, finished with fresh coconut. Simple, satisfying, and way more filling than anything you'd grab from a vending machine or gas station.\n\nI've scaled up the portions and added a Greek yogurt dip that plays perfectly off the coconut and spice. At 19g of protein, it's my go-to afternoon snack and pre-workout fuel. I make a big batch on Sunday and portion it out for the week. It holds up great in the fridge and tastes just as good at room temperature.",
    proteinModification: "Traditional sundal is served in small portions at temples and festivals, maybe 6-8g of protein per serving. We increased the chickpea quantity for a more substantial snack portion, added peanuts for extra protein and crunch (a variation some families already do), and paired it with a thick Greek yogurt dip seasoned with curry leaves and mustard. From ~7g to 19g, turning a temple snack into a proper protein-forward afternoon fuel.",
    ingredients: [
      { amount: 3, unit: "cans (15oz)", item: "chickpeas", note: "drained and rinsed", protein: 63 },
      { amount: 0.25, unit: "cup", item: "roasted peanuts", protein: 7 },
      { amount: 0.25, unit: "cup", item: "fresh coconut", note: "grated (or 2 tbsp desiccated)" },
      { amount: 2, unit: "tbsp", item: "oil" },
      { amount: 1, unit: "tsp", item: "mustard seeds" },
      { amount: 1, unit: "tsp", item: "urad dal" },
      { amount: 2, unit: "", item: "dried red chilies", note: "broken in half" },
      { amount: 10, unit: "", item: "curry leaves" },
      { amount: 0.25, unit: "tsp", item: "asafoetida (hing)" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 1, unit: "tbsp", item: "lemon juice" },
      { amount: 0.75, unit: "cup", item: "Greek yogurt", note: "for dip", protein: 13 },
      { amount: 0.5, unit: "tsp", item: "mustard seeds", note: "for yogurt dip tempering" },
      { amount: 4, unit: "", item: "curry leaves", note: "for yogurt dip tempering" },
      { amount: 1, unit: "pinch", item: "salt", note: "for dip" }
    ],
    instructions: [
      "Heat oil in a large pan over medium heat. Add mustard seeds and let them pop.",
      "Add urad dal and fry until golden, about 30 seconds.",
      "Add broken red chilies, curry leaves, and asafoetida. Sizzle for 10 seconds.",
      "Add the drained chickpeas and turmeric. Toss to coat in the tempering. Cook for 3-4 minutes until heated through.",
      "Add roasted peanuts, grated coconut, salt, and lemon juice. Toss well.",
      "Make the yogurt dip: Season Greek yogurt with a pinch of salt. Temper with mustard seeds and curry leaves sizzled in a tsp of oil, pour over the yogurt.",
      "Serve sundal warm or at room temperature with the yogurt dip on the side."
    ],
    proteinTips: [
      "Use black-eyed peas or a mix of chickpeas and black-eyed peas for variety and similar protein.",
      "Double the peanuts for an extra 4g protein per serving.",
      "Add 2 tbsp hemp seeds for an extra 3g protein per serving."
    ],
    substitutions: [
      "No fresh coconut? Use unsweetened desiccated coconut rehydrated in warm water.",
      "No curry leaves? Use a bay leaf and a pinch of lemon zest.",
      "No asafoetida? Omit it or use a small pinch of garlic powder.",
      "Swap chickpeas for black-eyed peas or green moong for a traditional variation."
    ],
    pairings: [
      { item: "Coconut Chutney", protein: "3g", slug: "coconut-chutney" },
      { item: "Cilantro-Mint Chutney", protein: "2g", slug: "cilantro-mint-chutney" },
      { item: "Greek Yogurt Raita", protein: "8g", slug: "greek-yogurt-raita" }
    ],
    tags: [
      "south-indian",
      "chickpeas",
      "snack",
      "temple-food",
      "coconut"
    ]
  },

  {
    slug: "spicy-garlic-edamame",
    title: "Spicy Garlic Edamame",
    image: "images/spicy-garlic-edamame.jpg",
    category: "snack",
    cuisine: "Japanese",
    difficulty: "easy",
    prepTime: 5,
    cookTime: 8,
    servings: 4,
    proteinPerServing: 18,
    caloriesPerServing: 220,
    fatPerServing: 10,
    carbsPerServing: 12,
    fiberPerServing: 4,
    description: "Frozen edamame tossed in a sizzling garlic, sesame, and chili sauce. The ultimate high-protein snack that takes less than 15 minutes from freezer to bowl.",
    story: "This is the ultimate gym snack, and I'm genuinely surprised more lifters don't know about it. Eighteen grams of protein with almost no prep. You can go from frozen bag to finished snack in under 15 minutes, and it requires basically zero cooking skill. If you can boil water and stir a pan, you can make this. Pop them out of the pods while watching a game instead of reaching for chips, and you're getting real protein instead of empty carbs.\n\nThe garlic situation here is aggressive, and that's intentional. I use a full eight cloves because the garlic flavor needs to be loud enough to hit you through the pods. When you suck the edamame out of the pod, you should be getting garlic, salt, sesame, and heat all at once. The sriracha and red pepper flakes bring a one-two punch of spice. The sriracha is immediate and vinegary, while the red pepper flakes have a slower, lingering burn. The capsaicin from the chili flakes also has a slight thermogenic effect that can help during a cut, which is a nice bonus on top of a snack that's already dialed in nutritionally.\n\nI keep a bag of frozen edamame in my freezer at all times specifically for this recipe. It's my go-to when I check my macros at 8pm and realize I'm short on protein for the day. Fifteen minutes later, I've got a bowl of something that actually tastes good and closes the gap. No protein shake required.",
    proteinModification: "Plain steamed edamame already delivers solid protein at about 17g per cup, but most people find it bland and boring. This recipe keeps the protein intact while transforming the flavor with garlic, sesame, and chili, making it something you'll actually want to eat regularly. The sesame seeds add an extra gram of protein per serving.",
    ingredients: [
      { amount: 1, unit: "lb", item: "frozen edamame", note: "in pods", protein: 72 },
      { amount: 8, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 1, unit: "tbsp", item: "sesame oil" },
      { amount: 1, unit: "tbsp", item: "vegetable oil" },
      { amount: 1, unit: "tbsp", item: "soy sauce" },
      { amount: 1, unit: "tbsp", item: "sriracha", note: "adjust to taste" },
      { amount: 0.5, unit: "tsp", item: "red pepper flakes", note: "adjust to taste" },
      { amount: 1, unit: "tbsp", item: "sesame seeds" },
      { amount: 0.5, unit: "tsp", item: "salt" },
      { amount: 0.5, unit: "tsp", item: "sugar" }
    ],
    instructions: [
      "Bring a large pot of salted water to a boil. Add the frozen edamame and cook for 4-5 minutes until tender. Drain well and pat dry with paper towels. Removing excess water is important for getting the sauce to stick.",
      "Heat the sesame oil and vegetable oil in a large skillet or wok over medium heat. Add the minced garlic and red pepper flakes. Sauté for about 1 minute until the garlic is fragrant and just starting to turn golden. Don't let it burn.",
      "Add the drained edamame to the skillet. Toss to coat in the garlic oil.",
      "Drizzle in the soy sauce and sriracha. Toss everything together over medium-high heat for 2-3 minutes so the sauce coats the pods and reduces slightly.",
      "Transfer to a serving bowl. Sprinkle with sesame seeds and an extra pinch of salt if desired. Serve warm and eat by popping the beans out of the pods."
    ],
    proteinTips: [
      "Shell the edamame before cooking for easier eating and to make a great salad topper.",
      "Double the batch, leftovers keep in the fridge for 2-3 days and taste great cold.",
      "Pair with a protein shake for a post-workout combo totaling 40g+ protein."
    ],
    substitutions: [
      "No sriracha? Use sambal oelek or any hot sauce.",
      "No sesame oil? Use chili oil for a different kick.",
      "Swap soy sauce for coconut aminos to make it soy-free.",
      "No edamame? Use shelled lupini beans for a similar high-protein snack."
    ],
    pairings: [],
    tags: [
      "japanese",
      "edamame",
      "snack",
      "spicy",
      "high-protein",
      "quick",
      "easy"
    ]
  },

  {
    slug: "baked-falafel-bites",
    title: "Baked Falafel Bites with Yogurt Tahini",
    image: "images/baked-falafel-bites.jpg",
    category: "snack",
    cuisine: "Mediterranean",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 25,
    servings: 6,
    proteinPerServing: 20,
    caloriesPerServing: 290,
    fatPerServing: 10,
    carbsPerServing: 32,
    fiberPerServing: 7,
    description: "Crispy baked falafel made with two cans of chickpeas and fresh herbs, served with a creamy yogurt-tahini dipping sauce for a high-protein snack.",
    story: "Traditional falafel is deep-fried, which makes it absolutely delicious but also adds a lot of empty calories from oil. A serving of fried falafel can hit 400-500 calories, and most of that extra is just from the frying. Baking them gets you nearly the same crunch, especially if you brush them with olive oil and bake at a high 400°F, with way fewer calories. The trick is to make sure your chickpeas are really well drained and patted dry before processing. Excess moisture is the enemy of crispy baked falafel. You want the mixture to hold together when you shape it but not be wet at all.\n\nI'll be honest about the protein here: falafel on its own isn't a protein bomb. A serving of five baked falafel balls gives you about 12-13g of protein from the chickpeas alone. That's decent for a snack but not spectacular. The yogurt-tahini sauce is where you close the gap. A generous serving of Greek yogurt mixed with tahini, lemon, and garlic adds another 7-8g of protein. Between the two, you're at about 20g protein for a snack, which is a solid number. If you want to go further, stuff them in a whole wheat pita with some extra hummus and veggies and you've got a full meal pushing 30g.\n\nThese are fantastic for meal prep. I make a big batch of 30 on a Sunday, it takes maybe 40 minutes total, and keep them in the fridge all week. They reheat great in a toaster oven or air fryer to get that crunch back. Five falafel with a container of the yogurt-tahini sauce is a grab-and-go snack that beats any protein bar I've ever had, and it's actual food.",
    proteinModification: "Standard fried falafel delivers about 12-13g protein per serving with significantly more calories from oil. We bake instead of fry to cut empty calories, and pair with a protein-rich Greek yogurt-tahini sauce that adds 7-8g protein, bringing the total to 20g per serving.",
    ingredients: [
      { amount: 2, unit: "cans (15oz)", item: "chickpeas", note: "drained, rinsed, and patted very dry", protein: 42 },
      { amount: 0.5, unit: "cup", item: "fresh parsley", note: "roughly chopped" },
      { amount: 0.5, unit: "cup", item: "fresh cilantro", note: "roughly chopped" },
      { amount: 4, unit: "cloves", item: "garlic" },
      { amount: 0.5, unit: "medium", item: "onion", note: "roughly chopped" },
      { amount: 1.5, unit: "tsp", item: "cumin" },
      { amount: 1, unit: "tsp", item: "coriander" },
      { amount: 0.5, unit: "tsp", item: "salt" },
      { amount: 0.25, unit: "tsp", item: "black pepper" },
      { amount: 3, unit: "tbsp", item: "all-purpose flour", note: "just enough to bind" },
      { amount: 0.5, unit: "tsp", item: "baking powder" },
      { amount: 2, unit: "tbsp", item: "olive oil", note: "for brushing" },
      { amount: 1, unit: "cup", item: "Greek yogurt", note: "for sauce", protein: 17 },
      { amount: 2, unit: "tbsp", item: "tahini", note: "for sauce" },
      { amount: 1, unit: "tbsp", item: "lemon juice", note: "for sauce" },
      { amount: 1, unit: "clove", item: "garlic", note: "minced, for sauce" },
      { amount: 1, unit: "pinch", item: "salt", note: "for sauce" }
    ],
    instructions: [
      "Preheat oven to 400°F. Line a baking sheet with parchment paper and brush lightly with olive oil.",
      "Make sure your chickpeas are very dry. Spread them on a towel and pat them down. This is the most important step for crispy baked falafel.",
      "Add the chickpeas, parsley, cilantro, garlic, onion, cumin, coriander, salt, and pepper to a food processor. Pulse 15-20 times until the mixture is coarsely ground but not pureed. You want some texture, not hummus.",
      "Transfer to a bowl. Add the flour and baking powder, then stir until the mixture holds together when you squeeze it in your hand. If it's too wet, add another tablespoon of flour.",
      "Scoop the mixture into roughly 30 balls (about 1.5 tablespoons each). Place them on the prepared baking sheet and flatten slightly into thick discs.",
      "Brush the tops generously with olive oil. Bake for 12 minutes, then flip each falafel, brush the other side with oil, and bake for another 10-12 minutes until golden and crispy on both sides.",
      "While the falafel bake, make the yogurt-tahini sauce: whisk together the Greek yogurt, tahini, lemon juice, minced garlic, and a pinch of salt until smooth.",
      "Serve the falafel warm with the yogurt-tahini sauce for dipping. Store leftovers in the fridge for up to 5 days."
    ],
    proteinTips: [
      "Stuff falafel in a whole wheat pita with hummus for an extra 8-10g protein.",
      "Double the yogurt-tahini sauce if you want a more generous dip, adds another 4g protein.",
      "Crumble feta on top of the falafel for an extra 3-4g protein per serving."
    ],
    substitutions: [
      "No chickpeas? Use canned white beans, well drained.",
      "Swap all-purpose flour for chickpea flour to make it gluten-free.",
      "No tahini? Use sunflower seed butter for a nut-free option.",
      "No fresh herbs? Use 1 tbsp each dried parsley and dried cilantro."
    ],
    pairings: [],
    tags: [
      "mediterranean",
      "snack",
      "falafel",
      "chickpeas",
      "baked",
      "high-protein",
      "meal-prep"
    ]
  },

  {
    slug: "greek-egg-muffins",
    title: "Greek-Style Egg Muffins",
    image: "images/greek-egg-muffins.jpg",
    category: "snack",
    cuisine: "Mediterranean",
    difficulty: "medium",
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    proteinPerServing: 20,
    caloriesPerServing: 250,
    fatPerServing: 14,
    carbsPerServing: 6,
    fiberPerServing: 1,
    description: "Portable egg muffins loaded with feta, spinach, sun-dried tomatoes, and kalamata olives, like a Greek omelet you can grab and go.",
    story: "These are the ultimate grab-and-go protein snack. Make a batch of 12 on Sunday, keep them in the fridge, and grab 3 whenever you need a quick protein hit. They reheat in 30 seconds in the microwave and taste like a Greek omelet in portable form. Each serving of 3 gives you about 20g of protein, mostly from the eggs and feta. No cooking required during the week, no dishes, no excuses about not having time to eat something with actual protein in it.\n\nThe Greek flavor profile here is what keeps me making these instead of plain egg muffins. The feta gets slightly melty and salty throughout, the spinach wilts down to almost nothing so you barely notice it but you're still getting your greens, the sun-dried tomatoes add this concentrated burst of sweetness, and the kalamata olives give you that briny punch. A little oregano ties it all together. It's a legitimately good-tasting snack, not one of those \"eat it because it's healthy\" situations.\n\nThe key to good egg muffins is not overfilling the tin. Fill each cup about three-quarters full. They puff up in the oven and then settle back down as they cool. Grease the tin well with olive oil or use silicone muffin liners, because egg sticks to everything. I've also learned to let them cool in the tin for a few minutes before popping them out. They hold up well in the fridge for 4-5 days, and you can even freeze them for up to a month. Throw three in a ziplock bag, toss it in your gym bag, and you've got a post-workout snack ready whenever you need it.",
    proteinModification: "Standard egg muffins with just eggs deliver about 12-13g protein per 3-muffin serving. We added a generous amount of crumbled feta cheese throughout the batter, boosting each serving to 20g protein while adding the salty, tangy flavor that makes these taste like a real Greek omelet.",
    ingredients: [
      { amount: 10, unit: "large", item: "eggs", protein: 60 },
      { amount: 4, unit: "oz", item: "feta cheese", note: "crumbled", protein: 24 },
      { amount: 2, unit: "cups", item: "fresh spinach", note: "roughly chopped" },
      { amount: 0.25, unit: "cup", item: "sun-dried tomatoes", note: "chopped" },
      { amount: 0.25, unit: "cup", item: "kalamata olives", note: "chopped" },
      { amount: 1, unit: "tsp", item: "dried oregano" },
      { amount: 0.5, unit: "tsp", item: "black pepper" },
      { amount: 1, unit: "tbsp", item: "olive oil", note: "for greasing the muffin tin" }
    ],
    instructions: [
      "Preheat oven to 375°F. Generously grease a 12-cup muffin tin with olive oil, making sure to coat the sides well.",
      "Crack all 10 eggs into a large bowl and whisk until well combined. Season with oregano and black pepper. Don't add extra salt, the feta and olives bring plenty.",
      "Fold in the crumbled feta, chopped spinach, sun-dried tomatoes, and kalamata olives. Stir until everything is evenly distributed.",
      "Pour the egg mixture evenly into the 12 muffin cups, filling each about three-quarters full.",
      "Bake for 18-20 minutes until the muffins are puffed up and set in the center. A toothpick inserted in the middle should come out clean.",
      "Let the muffins cool in the tin for 3-4 minutes before carefully running a butter knife around the edges and removing them.",
      "Serve warm or let cool completely and store in an airtight container in the fridge for up to 5 days. Reheat in the microwave for 30 seconds."
    ],
    proteinTips: [
      "Add 2 tbsp of hemp hearts to the egg mixture for an extra 3g protein per serving.",
      "Use 12 eggs instead of 10 for an extra 3g protein per serving.",
      "Pair with a handful of almonds for an extra 6g protein as a snack combo."
    ],
    substitutions: [
      "No feta? Use goat cheese or shredded mozzarella.",
      "Swap spinach for chopped kale or arugula.",
      "No kalamata olives? Use capers or green olives.",
      "No sun-dried tomatoes? Use roasted red peppers."
    ],
    pairings: [],
    tags: [
      "mediterranean",
      "snack",
      "eggs",
      "feta",
      "meal-prep",
      "grab-and-go",
      "high-protein"
    ]
  },

  {
    slug: "protein-jeera-rice",
    title: "Protein Jeera Rice",
    image: "images/protein-jeera-rice.jpg",
    category: "side",
    cuisine: "Indian",
    difficulty: "medium",
    prepTime: 5,
    cookTime: 20,
    servings: 4,
    proteinPerServing: 8,
    caloriesPerServing: 240,
    fatPerServing: 5,
    carbsPerServing: 40,
    fiberPerServing: 2,
    description: "Fragrant basmati rice mixed with quinoa and tempered with whole cumin seeds and turmeric for a simple side that sneaks in extra protein.",
    story: "This is the rice I make with basically everything. Regular jeera rice is good, but it's mostly just carbs, maybe 4g of protein per serving if you're lucky. I started mixing in quinoa and honestly, you can barely tell the difference once the cumin and turmeric do their thing.\n\nIt's dead simple to meal prep too. I'll make a big batch on Sunday and portion it out for the week. The quinoa keeps its texture better than plain rice when you reheat it, which is a nice bonus. Eight grams of protein from a side dish adds up fast when you're stacking it with a curry or dal.",
    proteinModification: "Traditional jeera rice uses only basmati rice, delivering about 4g protein per serving. By replacing half the rice with quinoa, we bump the protein to 8g per serving without changing the flavor profile.",
    ingredients: [
      { amount: 0.75, unit: "cup", item: "basmati rice", note: "rinsed", protein: 4 },
      { amount: 0.75, unit: "cup", item: "quinoa", note: "rinsed", protein: 6 },
      { amount: 2.75, unit: "cups", item: "water" },
      { amount: 1, unit: "tbsp", item: "ghee or oil" },
      { amount: 1.5, unit: "tsp", item: "cumin seeds" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 1, unit: "", item: "bay leaf" },
      { amount: 2, unit: "", item: "green cardamom pods" },
      { amount: 2, unit: "tbsp", item: "fresh cilantro", note: "chopped, for garnish" }
    ],
    instructions: [
      "Rinse the basmati rice and quinoa separately until the water runs clear. Soak the rice for 10 minutes, then drain.",
      "Heat ghee or oil in a medium pot over medium heat. Add cumin seeds, bay leaf, and cardamom pods. Let them sizzle for 30 seconds until fragrant.",
      "Add the drained rice and quinoa. Stir gently to coat in the ghee and toast for 1 minute.",
      "Add water, turmeric, and salt. Stir once and bring to a boil.",
      "Reduce heat to low, cover with a tight-fitting lid, and cook for 15 minutes without lifting the lid.",
      "Turn off the heat and let it sit covered for 5 minutes. Fluff with a fork, remove the bay leaf and cardamom pods, and garnish with cilantro."
    ],
    proteinTips: [
      "Use a full 1:1 ratio of quinoa to rice for even more protein.",
      "Stir in a handful of roasted cashews or peanuts for an extra 3-4g protein per serving.",
      "Pair with a protein-rich dal or curry to build a complete high-protein meal."
    ],
    substitutions: [
      "No quinoa? Use amaranth or millet for added protein.",
      "Swap ghee for coconut oil to make it dairy-free.",
      "No basmati rice? Use jasmine rice or long grain white rice.",
      "No cardamom pods? Use a pinch of ground cardamom."
    ],
    pairings: [],
    tags: [
      "indian",
      "rice",
      "quinoa",
      "meal-prep",
      "easy",
      "vegan"
    ]
  },

  {
    slug: "greek-yogurt-raita",
    title: "Greek Yogurt Raita",
    image: "images/greek-yogurt-raita.jpg",
    category: "side",
    cuisine: "Indian",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    proteinPerServing: 8,
    caloriesPerServing: 80,
    fatPerServing: 1,
    carbsPerServing: 8,
    fiberPerServing: 1,
    description: "A cool, creamy cucumber raita made with Greek yogurt instead of regular yogurt for triple the protein and a thicker, more satisfying texture.",
    story: "My mom's raita was always made with regular yogurt, thin, watery, and honestly kind of an afterthought on the plate. When I switched to Greek yogurt, it changed everything. It's thicker, tangier, and has roughly three times the protein.\n\nI eat this with pretty much every Indian meal now. It takes five minutes to throw together, it cools down spicy food, and it's basically free protein. Eight grams from a condiment? I'll take that every single time.",
    proteinModification: "Traditional raita uses regular yogurt with about 3g protein per serving. Swapping in Greek yogurt bumps it to 8g per serving with a thicker, creamier result.",
    ingredients: [
      { amount: 1.5, unit: "cups", item: "Greek yogurt", protein: 26 },
      { amount: 1, unit: "medium", item: "cucumber", note: "grated and squeezed dry" },
      { amount: 2, unit: "tbsp", item: "fresh mint", note: "finely chopped" },
      { amount: 0.5, unit: "tsp", item: "cumin powder", note: "toasted" },
      { amount: 0.25, unit: "tsp", item: "chaat masala" },
      { amount: 0.5, unit: "tsp", item: "salt" },
      { amount: 0.25, unit: "tsp", item: "black pepper" },
      { amount: 1, unit: "pinch", item: "cayenne pepper" }
    ],
    instructions: [
      "Grate the cucumber on a box grater. Squeeze out as much water as possible using a clean kitchen towel or your hands. This is important. Watery raita is sad raita.",
      "In a bowl, whisk the Greek yogurt until smooth.",
      "Add the squeezed cucumber, chopped mint, cumin powder, chaat masala, salt, and black pepper. Mix well.",
      "Taste and adjust salt. Add a pinch of cayenne if you want a little heat.",
      "Refrigerate for at least 15 minutes before serving to let the flavors come together."
    ],
    proteinTips: [
      "Use a higher-protein Greek yogurt brand for up to 10g protein per serving.",
      "Add a tablespoon of hemp seeds for an extra 3g protein without changing the taste.",
      "Double the portion, it's low calorie enough to eat generously."
    ],
    substitutions: [
      "No Greek yogurt? Use regular plain yogurt, strained for 30 minutes.",
      "No fresh mint? Use 1/2 tsp dried mint.",
      "Swap cucumber for grated carrot or diced tomato.",
      "No chaat masala? Use a mix of cumin powder and a pinch of citric acid."
    ],
    pairings: [],
    tags: [
      "indian",
      "yogurt",
      "no-cook",
      "gluten-free",
      "quick",
      "condiment"
    ]
  },

  {
    slug: "garlic-naan",
    title: "Garlic Naan",
    image: "images/garlic-naan.jpg",
    category: "side",
    cuisine: "Indian",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 18,
    servings: 6,
    proteinPerServing: 6,
    caloriesPerServing: 210,
    fatPerServing: 5,
    carbsPerServing: 32,
    fiberPerServing: 1,
    description: "Soft, pillowy stovetop naan made with Greek yogurt in the dough and brushed with garlic butter right off the skillet.",
    story: "I got tired of buying frozen naan that tasted like cardboard. Making it from scratch sounds intimidating but it's really just mixing dough and cooking it in a hot skillet. The Greek yogurt in the dough is the key. It makes the naan softer and adds protein that regular naan doesn't have.\n\nThe garlic butter at the end is essential. I brush it on hot so it melts right into the surface. These come out better than most restaurant naan, and I'm not just saying that. My roommate who grew up eating naan at every meal confirmed it.",
    proteinModification: "Standard naan uses water or milk in the dough, yielding about 4g protein per piece. Adding Greek yogurt to the dough bumps each naan to 6g protein while making the texture softer.",
    ingredients: [
      { amount: 2, unit: "cups", item: "all-purpose flour", protein: 26 },
      { amount: 0.5, unit: "cup", item: "Greek yogurt", protein: 9 },
      { amount: 0.25, unit: "cup", item: "warm water" },
      { amount: 1, unit: "tsp", item: "sugar" },
      { amount: 1, unit: "tsp", item: "instant yeast" },
      { amount: 0.5, unit: "tsp", item: "baking powder" },
      { amount: 0.75, unit: "tsp", item: "salt" },
      { amount: 1, unit: "tbsp", item: "oil" },
      { amount: 3, unit: "tbsp", item: "butter", note: "melted" },
      { amount: 4, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 2, unit: "tbsp", item: "fresh cilantro", note: "chopped" }
    ],
    instructions: [
      "Dissolve sugar and yeast in the warm water. Let it sit for 5 minutes until foamy.",
      "In a large bowl, mix flour, baking powder, and salt. Add the Greek yogurt, yeast mixture, and oil. Mix until a shaggy dough forms.",
      "Knead on a lightly floured surface for 3-4 minutes until smooth and slightly tacky. Cover and let rest for 30 minutes.",
      "While the dough rests, mix the melted butter with minced garlic. Set aside.",
      "Divide the dough into 6 equal pieces. Roll each piece into an oval about 1/4 inch thick.",
      "Heat a cast iron skillet or heavy pan over high heat. When very hot, place one naan on the dry skillet.",
      "Cook for 1-2 minutes until the bottom has golden brown spots and the top starts to bubble. Flip and cook for another 1 minute.",
      "Remove from the skillet and immediately brush with garlic butter. Sprinkle with cilantro. Repeat with remaining dough."
    ],
    proteinTips: [
      "Swap half the all-purpose flour with whole wheat flour for extra fiber and slightly more protein.",
      "Serve alongside a high-protein dal or curry to build a complete meal.",
      "Brush with a mix of garlic butter and nutritional yeast for a cheesy flavor and extra protein."
    ],
    substitutions: [
      "No instant yeast? Use 1 tsp baking powder extra for a quick version.",
      "Swap all-purpose flour for whole wheat flour for more fiber.",
      "No Greek yogurt? Use sour cream or buttermilk.",
      "Swap butter for olive oil to make it dairy-free."
    ],
    pairings: [],
    tags: [
      "indian",
      "bread",
      "naan",
      "stovetop",
      "garlic"
    ]
  },

  {
    slug: "cilantro-mint-chutney",
    title: "Cilantro Mint Chutney",
    image: "images/cilantro-mint-chutney.jpg",
    category: "side",
    cuisine: "Indian",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 0,
    servings: 8,
    proteinPerServing: 2,
    caloriesPerServing: 25,
    fatPerServing: 1,
    carbsPerServing: 3,
    fiberPerServing: 1,
    description: "A bright, spicy green chutney made with cilantro, mint, and green chili, blended with a Greek yogurt base for a touch of creaminess and protein.",
    story: "Green chutney is one of those things that makes everything taste better. I put it on sandwiches, stir it into rice, drizzle it on eggs, it goes with literally anything. Most versions are just herbs and water, but I blend mine with a little Greek yogurt to give it body and sneak in some protein.\n\nIt takes ten minutes, lasts a week in the fridge, and turns boring meals into something you actually look forward to eating. I always have a jar of this ready to go.",
    proteinModification: "Traditional green chutney is just herbs, chili, and water with negligible protein. Adding Greek yogurt as the base gives each serving about 2g of protein and a creamier texture.",
    ingredients: [
      { amount: 2, unit: "cups", item: "fresh cilantro", note: "packed, stems and leaves" },
      { amount: 1, unit: "cup", item: "fresh mint leaves", note: "packed" },
      { amount: 1, unit: "", item: "green chili", note: "adjust to taste" },
      { amount: 0.5, unit: "cup", item: "Greek yogurt", protein: 9 },
      { amount: 2, unit: "tbsp", item: "lemon juice" },
      { amount: 0.5, unit: "tsp", item: "cumin powder" },
      { amount: 0.5, unit: "tsp", item: "salt" },
      { amount: 2, unit: "tbsp", item: "water", note: "as needed for blending" }
    ],
    instructions: [
      "Wash the cilantro and mint thoroughly. Roughly chop them, no need to be precise since they're going in the blender.",
      "Add cilantro, mint, green chili, Greek yogurt, lemon juice, cumin powder, and salt to a blender or food processor.",
      "Blend until smooth, adding water a tablespoon at a time if needed. You want a thick but pourable consistency.",
      "Taste and adjust salt, lemon, and chili level. Transfer to an airtight jar.",
      "Refrigerate for at least 30 minutes before serving. Keeps well in the fridge for up to a week."
    ],
    proteinTips: [
      "Use a thicker dollop of Greek yogurt to make this more of a dip with higher protein.",
      "Stir a tablespoon of hemp seeds into the blender for an extra 3g protein per serving.",
      "Use this as a high-flavor, low-calorie topping to make any protein-rich dish more exciting."
    ],
    substitutions: [
      "No fresh mint? Use 1/2 tsp dried mint rehydrated in water.",
      "No green chili? Use a pinch of cayenne pepper or jalapeno.",
      "Swap Greek yogurt for coconut yogurt to make it dairy-free."
    ],
    pairings: [],
    tags: [
      "indian",
      "chutney",
      "condiment",
      "no-cook",
      "gluten-free",
      "quick"
    ]
  },

  {
    slug: "coconut-chutney",
    title: "Coconut Chutney",
    image: "images/coconut-chutney.jpg",
    category: "side",
    cuisine: "Indian",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 5,
    servings: 6,
    proteinPerServing: 3,
    caloriesPerServing: 90,
    fatPerServing: 5,
    carbsPerServing: 8,
    fiberPerServing: 2,
    description: "A classic South Indian coconut chutney with roasted chana dal for extra protein, finished with a crackling mustard seed tempering.",
    story: "You can't eat dosa or idli without coconut chutney. It's not a rule, but it kind of is. This is the version I grew up eating, and the one thing I didn't need to modify much. Roasted chana dal is already in the traditional recipe, and it's a legit source of protein.\n\nI just bump up the chana dal a bit more than my mom uses. The tempering at the end with mustard seeds, curry leaves, and dried red chili is what takes it from good to essential. I make a big batch every time I meal prep dosas for the week.",
    proteinModification: "Traditional coconut chutney already uses some chana dal for texture. We increase the chana dal from the typical 1 tablespoon to 3 tablespoons, boosting protein to 3g per serving while keeping the classic flavor.",
    ingredients: [
      { amount: 1, unit: "cup", item: "fresh or frozen grated coconut", protein: 3 },
      { amount: 3, unit: "tbsp", item: "roasted chana dal", protein: 5 },
      { amount: 1, unit: "", item: "green chili", note: "adjust to taste" },
      { amount: 0.5, unit: "inch", item: "ginger" },
      { amount: 0.5, unit: "cup", item: "water", note: "as needed for blending" },
      { amount: 0.5, unit: "tsp", item: "salt" },
      { amount: 1, unit: "tbsp", item: "oil", note: "for tempering" },
      { amount: 1, unit: "tsp", item: "mustard seeds" },
      { amount: 1, unit: "tsp", item: "urad dal" },
      { amount: 1, unit: "", item: "dried red chili", note: "broken in half" },
      { amount: 6, unit: "", item: "curry leaves" }
    ],
    instructions: [
      "Blend the grated coconut, roasted chana dal, green chili, ginger, salt, and water until you get a smooth but slightly textured paste. Add water gradually, you want it thick, not watery.",
      "Transfer the chutney to a serving bowl.",
      "For the tempering, heat oil in a small pan over medium-high heat. Add mustard seeds and wait for them to pop.",
      "Add urad dal and fry until golden, about 30 seconds. Add the dried red chili and curry leaves. Let them sizzle for 10 seconds.",
      "Pour the hot tempering directly over the coconut chutney. Stir gently and serve."
    ],
    proteinTips: [
      "Add an extra tablespoon of roasted chana dal for more protein and a nuttier flavor.",
      "Pair with protein dosas or high-protein idli for a complete South Indian meal.",
      "Stir in a spoonful of Greek yogurt for extra creaminess and 2-3g more protein."
    ],
    substitutions: [
      "No fresh coconut? Use unsweetened desiccated coconut soaked in warm water.",
      "No roasted chana dal? Use roasted peanuts for similar body.",
      "No curry leaves? Use a bay leaf, removed before serving.",
      "No urad dal for tempering? Use cumin seeds instead."
    ],
    pairings: [],
    tags: [
      "indian",
      "south-indian",
      "chutney",
      "condiment",
      "gluten-free",
      "vegan"
    ]
  },

  {
    slug: "protein-sambar",
    title: "Protein Sambar",
    image: "images/protein-sambar.jpg",
    category: "side",
    cuisine: "Indian",
    difficulty: "hard",
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    proteinPerServing: 12,
    caloriesPerServing: 220,
    fatPerServing: 5,
    carbsPerServing: 28,
    fiberPerServing: 6,
    description: "A hearty South Indian lentil and vegetable stew made with toor dal, mixed vegetables, and tamarind, loaded with enough dal to deliver serious protein.",
    story: "Sambar is comfort food for me. It's the thing I ate almost every single day growing up, with rice, with idli, with dosa, with literally anything. When I started tracking macros, I realized sambar was already doing a lot of heavy lifting on the protein front because of the toor dal.\n\nMost restaurant versions are heavy on the water and light on the dal. My version goes heavier on the lentils and packs in extra vegetables. Twelve grams of protein from a side dish is no joke, especially when it tastes this good. I make a huge pot on Sundays and it gets better every day as the flavors develop.",
    proteinModification: "Restaurant sambar is often thin and watery with minimal dal, delivering about 6-7g protein per serving. We use a full cup of toor dal for four servings, keeping the stew thick and protein-dense at 12g per serving.",
    ingredients: [
      { amount: 1, unit: "cup", item: "toor dal", note: "rinsed", protein: 22 },
      { amount: 3, unit: "cups", item: "water", note: "for cooking dal" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 1, unit: "cup", item: "mixed vegetables", note: "drumstick, carrot, eggplant, cut into pieces" },
      { amount: 1, unit: "medium", item: "tomato", note: "chopped" },
      { amount: 1, unit: "small", item: "onion", note: "chopped" },
      { amount: 1, unit: "tbsp", item: "tamarind paste" },
      { amount: 2, unit: "tbsp", item: "sambar powder" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 1.5, unit: "cups", item: "water", note: "for adjusting consistency" },
      { amount: 1, unit: "tbsp", item: "oil", note: "for tempering" },
      { amount: 1, unit: "tsp", item: "mustard seeds" },
      { amount: 0.5, unit: "tsp", item: "cumin seeds" },
      { amount: 1, unit: "", item: "dried red chili" },
      { amount: 6, unit: "", item: "curry leaves" },
      { amount: 0.25, unit: "tsp", item: "asafoetida" },
      { amount: 2, unit: "tbsp", item: "fresh cilantro", note: "for garnish" }
    ],
    instructions: [
      "Cook toor dal with 3 cups water and turmeric in a pressure cooker for 3 whistles (or simmer in a pot for 25-30 minutes until very soft). Mash the dal until smooth and set aside.",
      "In a separate pot, bring 1.5 cups water to a boil. Add the chopped vegetables and cook until tender, about 8-10 minutes.",
      "Add the chopped tomato, onion, tamarind paste, sambar powder, and salt to the vegetables. Simmer for 5 minutes.",
      "Add the mashed dal to the vegetable mixture. Stir well and bring to a gentle boil. Adjust consistency with water. Sambar should be like a thick soup, not a paste.",
      "For the tempering, heat oil in a small pan over medium-high heat. Add mustard seeds and let them pop. Add cumin seeds, dried red chili, curry leaves, and asafoetida. Let everything sizzle for 10 seconds.",
      "Pour the tempering into the sambar and stir. Simmer for another 2-3 minutes.",
      "Garnish with fresh cilantro and serve hot with rice, idli, or dosa."
    ],
    proteinTips: [
      "Add a handful of fresh spinach in the last few minutes for extra nutrition.",
      "Use an extra quarter cup of toor dal for even more protein per serving.",
      "Pair with protein jeera rice for a meal with 20g+ protein from sides alone."
    ],
    substitutions: [
      "No toor dal? Use masoor dal (red lentils) for a quicker cook.",
      "No tamarind paste? Use 1 tbsp lemon juice plus 1 tsp brown sugar.",
      "No sambar powder? Use 1 tsp each cumin, coriander, and chili powder.",
      "No curry leaves? Use a bay leaf or skip entirely.",
      "No curry leaves? Use a bay leaf during cooking.",
      "No asafoetida? Skip it, the dish works fine without it.",
      "No toor dal? Use red lentils (masoor dal), they cook faster but work well."
    ],
    pairings: [],
    tags: [
      "indian",
      "south-indian",
      "dal",
      "lentils",
      "stew",
      "vegan",
      "gluten-free",
      "meal-prep"
    ]
  },

  {
    slug: "high-protein-hummus",
    title: "High-Protein Hummus",
    image: "images/high-protein-hummus.jpg",
    category: "side",
    cuisine: "Mediterranean",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 0,
    servings: 6,
    proteinPerServing: 8,
    caloriesPerServing: 180,
    fatPerServing: 9,
    carbsPerServing: 16,
    fiberPerServing: 4,
    description: "A smooth, creamy hummus loaded with extra chickpeas, tahini, fresh lemon, garlic, and cumin for maximum protein and flavor.",
    story: "Store-bought hummus is fine but it's usually more oil and filler than actual chickpeas. When I started making it at home, I realized I could pack in way more chickpeas and actually get meaningful protein out of it. Eight grams per serving from a dip, that's better than most snacks people eat.\n\nI keep this in the fridge at all times. It goes with veggies, on wraps, as a spread on sandwiches, or just eaten with a spoon when I need something quick between the gym and dinner. The trick is to blend it long enough that it gets really smooth, like three to four minutes in the food processor, not thirty seconds.",
    proteinModification: "Standard hummus recipes use one can of chickpeas for six servings, delivering about 4-5g protein each. We use two full cans and a generous amount of tahini, pushing protein to 8g per serving.",
    ingredients: [
      { amount: 2, unit: "cans (15oz)", item: "chickpeas", note: "drained, reserve liquid", protein: 42 },
      { amount: 0.25, unit: "cup", item: "tahini", protein: 12 },
      { amount: 3, unit: "tbsp", item: "lemon juice" },
      { amount: 2, unit: "cloves", item: "garlic" },
      { amount: 0.5, unit: "tsp", item: "cumin powder" },
      { amount: 0.75, unit: "tsp", item: "salt" },
      { amount: 2, unit: "tbsp", item: "olive oil" },
      { amount: 3, unit: "tbsp", item: "aquafaba", note: "reserved chickpea liquid" },
      { amount: 1, unit: "pinch", item: "paprika", note: "for garnish" }
    ],
    instructions: [
      "Drain the chickpeas, reserving about 3 tablespoons of the liquid (aquafaba). For extra smooth hummus, rub the chickpeas between your hands to remove the skins. This step is optional but worth it.",
      "Add tahini and lemon juice to a food processor. Blend for 1 minute until the mixture is thick and whipped.",
      "Add garlic, cumin, and salt. Blend for another 30 seconds.",
      "Add the chickpeas in two batches, blending each time for about 1 minute. Scrape down the sides as needed.",
      "With the processor running, drizzle in the olive oil and aquafaba. Blend for 2-3 minutes total until very smooth and creamy.",
      "Taste and adjust salt and lemon. Transfer to a bowl, drizzle with olive oil, and sprinkle with paprika."
    ],
    proteinTips: [
      "Stir in a tablespoon of hemp seeds before serving for an extra 3g protein per serving.",
      "Use edamame in place of one can of chickpeas for a different flavor and even more protein.",
      "Eat with high-protein crackers or whole wheat pita for a protein-stacked snack."
    ],
    substitutions: [
      "No tahini? Use sunflower seed butter or cashew butter.",
      "No aquafaba? Use a splash of cold water to blend smooth.",
      "Swap chickpeas for white beans to make white bean hummus.",
      "No lemon juice? Use lime juice or a splash of white vinegar."
    ],
    pairings: [],
    tags: [
      "mediterranean",
      "chickpeas",
      "dip",
      "no-cook",
      "vegan",
      "gluten-free",
      "meal-prep"
    ]
  },

  {
    slug: "mexican-rice-and-beans",
    title: "Mexican Rice and Beans",
    image: "images/mexican-rice-and-beans.jpg",
    category: "side",
    cuisine: "Mexican",
    difficulty: "medium",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    proteinPerServing: 10,
    caloriesPerServing: 290,
    fatPerServing: 6,
    carbsPerServing: 46,
    fiberPerServing: 5,
    description: "Fluffy cilantro-lime rice mixed with seasoned black beans for a protein-packed side that pairs with any Mexican-inspired meal.",
    story: "This is my go-to side when I'm making burrito bowls or anything Tex-Mex at home. Rice alone doesn't bring much to the table protein-wise, but once you mix in black beans, the numbers start looking real. Ten grams of protein from a side dish, and it takes like twenty-five minutes total.\n\nThe cilantro and lime are what make it. Without them it's just rice and beans, fine, but boring. With them, it's the thing everyone asks you to make again. I squeeze the lime juice in right at the end so it stays fresh and bright.",
    proteinModification: "Plain Mexican rice has about 3-4g protein per serving. By mixing in a full can of seasoned black beans, we bring it up to 10g per serving with added fiber as a bonus.",
    ingredients: [
      { amount: 1, unit: "cup", item: "long grain white rice", note: "rinsed", protein: 4 },
      { amount: 2, unit: "cups", item: "water" },
      { amount: 1, unit: "can (15oz)", item: "black beans", note: "drained and rinsed", protein: 21 },
      { amount: 1, unit: "tbsp", item: "oil" },
      { amount: 2, unit: "cloves", item: "garlic", note: "minced" },
      { amount: 0.5, unit: "tsp", item: "cumin powder" },
      { amount: 0.25, unit: "tsp", item: "chili powder" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 0.25, unit: "cup", item: "fresh cilantro", note: "chopped" },
      { amount: 2, unit: "tbsp", item: "lime juice", note: "about 1 lime" },
      { amount: 1, unit: "tbsp", item: "butter" }
    ],
    instructions: [
      "Heat oil in a medium pot over medium heat. Add garlic, cumin, and chili powder. Stir for 30 seconds until fragrant.",
      "Add the rinsed rice and stir to coat in the spices. Toast for 1 minute.",
      "Add water and salt. Bring to a boil, then reduce heat to low, cover, and cook for 15 minutes.",
      "While the rice cooks, warm the black beans in a small saucepan with a pinch of cumin and salt.",
      "When the rice is done, remove from heat and let it sit covered for 5 minutes. Fluff with a fork.",
      "Stir in the butter until melted, then fold in the warm black beans, cilantro, and lime juice.",
      "Taste and adjust salt and lime. Serve immediately or store for meal prep."
    ],
    proteinTips: [
      "Use two cans of black beans and less rice for an even higher protein ratio.",
      "Swap white rice for brown rice for extra fiber and slightly more protein.",
      "Top with a dollop of Greek yogurt instead of sour cream for extra protein."
    ],
    substitutions: [
      "No black beans? Use pinto beans or kidney beans.",
      "Swap white rice for brown rice for extra fiber.",
      "No fresh cilantro? Use 1 tsp dried cilantro or fresh parsley.",
      "No lime juice? Use lemon juice or a splash of white vinegar."
    ],
    pairings: [],
    tags: [
      "mexican",
      "rice",
      "beans",
      "meal-prep",
      "vegan",
      "gluten-free"
    ]
  },

  {
    slug: "miso-soup-with-tofu",
    title: "Miso Soup with Tofu",
    image: "images/miso-soup-with-tofu.jpg",
    category: "side",
    cuisine: "Japanese",
    difficulty: "easy",
    prepTime: 5,
    cookTime: 10,
    servings: 4,
    proteinPerServing: 8,
    caloriesPerServing: 90,
    fatPerServing: 3,
    carbsPerServing: 6,
    fiberPerServing: 1,
    description: "A simple Japanese miso soup loaded with extra firm tofu cubes, wakame seaweed, and green onion for a light but protein-rich side.",
    story: "I started making miso soup because I wanted a warm, low-calorie side that actually had protein. Most restaurant versions give you like three tiny cubes of tofu floating in broth. I load mine up with a full block of firm tofu, and suddenly it's a legitimate 8g of protein per bowl.\n\nThe whole thing takes ten minutes and it's incredibly soothing after a hard workout. I'll drink a bowl of this while I'm cooking my main meal. The key is to never boil the miso. You kill the flavor and the probiotics. Just stir it in at the end once the heat is off.",
    proteinModification: "Restaurant miso soup typically has a few token tofu cubes, delivering about 3g protein per serving. We use a full 14oz block of extra firm tofu, bringing each serving to 8g protein.",
    ingredients: [
      { amount: 14, unit: "oz", item: "extra firm tofu", note: "cut into 1/2-inch cubes", protein: 70 },
      { amount: 4, unit: "cups", item: "water" },
      { amount: 1, unit: "piece (4-inch)", item: "kombu", note: "dried kelp, optional for dashi" },
      { amount: 3, unit: "tbsp", item: "white miso paste" },
      { amount: 2, unit: "tbsp", item: "dried wakame seaweed" },
      { amount: 2, unit: "", item: "green onions", note: "thinly sliced" },
      { amount: 1, unit: "tsp", item: "soy sauce" }
    ],
    instructions: [
      "If using kombu, place it in a pot with the water and let it soak for 10 minutes. Then heat over medium until small bubbles appear, remove the kombu just before the water boils. If skipping kombu, just bring the water to a gentle simmer.",
      "Rehydrate the dried wakame by soaking in a small bowl of warm water for 5 minutes. Drain and set aside.",
      "Add the tofu cubes to the simmering broth and cook for 3-4 minutes until heated through.",
      "Remove the pot from heat. Scoop out about half a cup of the hot broth into a small bowl. Add the miso paste and whisk until completely dissolved.",
      "Pour the dissolved miso back into the pot and stir gently. Do not boil after adding miso.",
      "Add the wakame and soy sauce. Stir gently.",
      "Ladle into bowls and top with sliced green onions. Serve immediately."
    ],
    proteinTips: [
      "Use super firm or high-protein tofu for up to 12g protein per serving.",
      "Add a soft-boiled egg to each bowl for an extra 6g protein.",
      "Stir in a tablespoon of silken tofu for extra creaminess and protein."
    ],
    substitutions: [
      "No kombu? Use 1 tsp dashi powder dissolved in water.",
      "No white miso? Use yellow miso; reduce quantity slightly if using red miso.",
      "No wakame? Use thinly sliced napa cabbage or fresh spinach.",
      "No extra firm tofu? Use firm tofu, cubed and patted dry."
    ],
    pairings: [],
    tags: [
      "japanese",
      "soup",
      "tofu",
      "light",
      "quick",
      "vegan"
    ]
  },

  {
    slug: "simple-dal",
    title: "Simple Dal",
    image: "images/simple-dal.jpg",
    category: "side",
    cuisine: "Indian",
    difficulty: "medium",
    prepTime: 5,
    cookTime: 25,
    servings: 4,
    proteinPerServing: 10,
    caloriesPerServing: 190,
    fatPerServing: 5,
    carbsPerServing: 24,
    fiberPerServing: 5,
    description: "A quick, everyday toor or masoor dal with turmeric and a simple cumin-mustard seed-garlic tempering that delivers 10g of protein per serving.",
    story: "This is the most basic recipe in my rotation and probably the one I cook the most. Simple dal with rice is the meal I make when I don't feel like thinking. It takes twenty-five minutes, uses ingredients I always have on hand, and gives me 10g of protein just from the side dish.\n\nI learned this from watching my dad. He could make dal with his eyes closed. The tempering at the end is what takes it from bland lentil soup to something you actually crave. When that garlic hits the hot oil and you hear the mustard seeds pop, you know dinner's about to be good.",
    proteinModification: "This dal is naturally high in protein, no modification needed. We just make sure to use a full cup of dry lentils for four servings instead of skimping, which keeps the protein at an honest 10g per serving.",
    ingredients: [
      { amount: 1, unit: "cup", item: "masoor dal or toor dal", note: "rinsed", protein: 24 },
      { amount: 3, unit: "cups", item: "water" },
      { amount: 0.5, unit: "tsp", item: "turmeric" },
      { amount: 1, unit: "tsp", item: "salt" },
      { amount: 0.5, unit: "medium", item: "tomato", note: "chopped" },
      { amount: 1, unit: "tbsp", item: "ghee or oil", note: "for tempering" },
      { amount: 1, unit: "tsp", item: "cumin seeds" },
      { amount: 0.5, unit: "tsp", item: "mustard seeds" },
      { amount: 3, unit: "cloves", item: "garlic", note: "sliced" },
      { amount: 1, unit: "", item: "dried red chili" },
      { amount: 0.25, unit: "tsp", item: "asafoetida" },
      { amount: 6, unit: "", item: "curry leaves" },
      { amount: 2, unit: "tbsp", item: "fresh cilantro", note: "for garnish" },
      { amount: 1, unit: "tsp", item: "lemon juice" }
    ],
    instructions: [
      "Rinse the dal until the water runs clear. Add it to a pot with 3 cups water, turmeric, and chopped tomato.",
      "Bring to a boil, then reduce heat to medium-low. Skim off any foam that rises to the top. Simmer for 18-20 minutes until the dal is completely soft and breaking apart.",
      "Mash the dal with the back of a spoon or a whisk until it reaches your preferred consistency. Add salt and adjust with more water if it's too thick.",
      "For the tempering, heat ghee or oil in a small pan over medium-high heat. Add mustard seeds and wait for them to pop.",
      "Add cumin seeds, sliced garlic, dried red chili, curry leaves, and asafoetida. Stir for 30 seconds until the garlic is golden.",
      "Pour the hot tempering directly into the dal. It should sizzle, that's the sound of flavor.",
      "Stir in lemon juice, garnish with cilantro, and serve hot with rice or roti."
    ],
    proteinTips: [
      "Use toor dal for slightly higher protein content compared to masoor dal.",
      "Stir in a quarter cup of Greek yogurt at the end for an extra 4g protein per serving.",
      "Pair with protein jeera rice for a simple meal with 18-20g protein."
    ],
    substitutions: [
      "No masoor dal? Use toor dal or yellow moong dal.",
      "Swap ghee for oil to make it dairy-free and vegan.",
      "No asafoetida? Skip it or add a pinch of garlic powder.",
      "No curry leaves? Use a bay leaf or skip entirely.",
      "No curry leaves? Use a bay leaf during the tadka.",
      "No asafoetida? Skip it entirely, it adds depth but isn't essential."
    ],
    pairings: [],
    tags: [
      "indian",
      "dal",
      "lentils",
      "easy",
      "quick",
      "vegan",
      "gluten-free",
      "meal-prep"
    ]
  }
];
