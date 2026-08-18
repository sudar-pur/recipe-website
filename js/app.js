// ============ UTILITY FUNCTIONS ============

function fractionize(num) {
  if (num === 0) return '';
  const whole = Math.floor(num);
  const decimal = num - whole;
  const fractions = {
    0.125: '\u215B', 0.25: '\u00BC', 0.33: '\u2153', 0.333: '\u2153',
    0.375: '\u215C', 0.5: '\u00BD', 0.625: '\u215D', 0.67: '\u2154',
    0.667: '\u2154', 0.75: '\u00BE', 0.875: '\u215E'
  };
  const closest = Object.keys(fractions).reduce((prev, curr) =>
    Math.abs(curr - decimal) < Math.abs(prev - decimal) ? curr : prev
  );
  if (decimal < 0.06) return whole.toString();
  if (whole === 0) return fractions[closest] || num.toFixed(1);
  return whole + ' ' + (fractions[closest] || '');
}

function formatAmount(amount, scale) {
  const scaled = amount * scale;
  if (scaled === Math.floor(scaled)) return scaled.toString();
  return fractionize(scaled);
}

function getCategoryColor(category) {
  const colors = {
    dinner: 'var(--color-dinner)',
    breakfast: 'var(--color-breakfast)',
    lunch: 'var(--color-lunch)',
    snack: 'var(--color-snack)',
    side: 'var(--color-side)'
  };
  return colors[category] || 'var(--color-primary)';
}

function getCategoryIcon(category) {
  const icons = {
    dinner: '\uD83C\uDF5B',
    breakfast: '\uD83C\uDF73',
    lunch: '\uD83C\uDF5C',
    snack: '\uD83C\uDF7F',
    side: '\uD83E\uDD57'
  };
  return icons[category] || '\uD83C\uDF5D';
}

// Cuisine group normalization map
const cuisineGroupMap = {
  'South Indian': 'Indian',
  'South Indian (Andhra)': 'Indian',
  'Indian-Fusion': 'Indian',
  'Indian-Inspired': 'Indian',
  'Indian-Mediterranean Fusion': 'Fusion',
  'Mexican-Inspired': 'Mexican',
  'Asian-Fusion': 'Asian',
  'Thai': 'Asian',
  'Chinese': 'Asian',
  'Japanese': 'Asian',
  'Korean': 'Asian'
};

function getCuisineGroup(cuisine) {
  return cuisineGroupMap[cuisine] || cuisine;
}

const proteinSourceMap = {
  'Paneer':        ['paneer'],
  'Tofu':          ['tofu'],
  'Eggs':          ['egg'],
  'Chickpeas':     ['chickpea', 'chana', 'besan'],
  'Lentils & Dal': ['lentil', 'dal', 'moong', 'masoor', 'toor', 'urad'],
  'Beans':         ['beans', 'rajma'],
  'Halloumi':      ['halloumi'],
  'Edamame':       ['edamame']
};

function getRecipeProteinSources(recipe) {
  const sources = new Set();
  for (const ing of recipe.ingredients) {
    if (!ing.protein || ing.protein < 10) continue;
    const itemLower = ing.item.toLowerCase();
    for (const [group, keywords] of Object.entries(proteinSourceMap)) {
      if (keywords.some(kw => itemLower.includes(kw))) {
        sources.add(group);
      }
    }
  }
  return [...sources];
}

function getDifficultyClass(difficulty) {
  return 'difficulty-' + (difficulty || 'medium');
}

// ============ HOMEPAGE ============

function initHomepage() {
  const grid = document.getElementById('recipes-grid');
  const filtersContainer = document.getElementById('category-filters');
  const cuisineFiltersContainer = document.getElementById('cuisine-filters');
  if (!grid || !filtersContainer) return;

  let activeCategory = 'all';
  let activeCuisine = 'all';
  let activeProteins = new Set();

  // Render category filter buttons
  const categories = ['all', 'dinner', 'breakfast', 'lunch', 'snack', 'side'];
  filtersContainer.innerHTML = categories.map(cat =>
    `<button class="filter-btn ${cat === 'all' ? 'active' : ''}" data-category="${cat}">
      ${cat === 'all' ? 'All Recipes' : cat}
    </button>`
  ).join('');

  // Extract unique cuisine groups and render cuisine filter buttons
  if (cuisineFiltersContainer) {
    const cuisineGroups = [...new Set(recipes.map(r => getCuisineGroup(r.cuisine)))].sort();
    cuisineFiltersContainer.innerHTML = [
      `<button class="filter-btn cuisine-btn active" data-cuisine="all">All Cuisines</button>`,
      ...cuisineGroups.map(c =>
        `<button class="filter-btn cuisine-btn" data-cuisine="${c}">${c}</button>`
      )
    ].join('');

    cuisineFiltersContainer.addEventListener('click', (e) => {
      if (!e.target.classList.contains('cuisine-btn')) return;
      activeCuisine = e.target.dataset.cuisine;
      cuisineFiltersContainer.querySelectorAll('.cuisine-btn').forEach(btn =>
        btn.classList.toggle('active', btn === e.target)
      );
      applyFilters();
    });
  }

  // Render protein filter buttons
  const proteinFiltersContainer = document.getElementById('protein-filters');
  if (proteinFiltersContainer) {
    const proteinGroups = Object.keys(proteinSourceMap);
    proteinFiltersContainer.innerHTML = [
      `<button class="filter-btn protein-btn active" data-protein="all">All Proteins</button>`,
      ...proteinGroups.map(p =>
        `<button class="filter-btn protein-btn" data-protein="${p}">${p}</button>`
      )
    ].join('');

    proteinFiltersContainer.addEventListener('click', (e) => {
      if (!e.target.classList.contains('protein-btn')) return;
      const selected = e.target.dataset.protein;

      if (selected === 'all') {
        activeProteins.clear();
      } else {
        if (activeProteins.has(selected)) {
          activeProteins.delete(selected);
        } else {
          activeProteins.add(selected);
        }
      }

      // Update button states
      const allBtn = proteinFiltersContainer.querySelector('[data-protein="all"]');
      if (activeProteins.size === 0) {
        proteinFiltersContainer.querySelectorAll('.protein-btn').forEach(btn =>
          btn.classList.toggle('active', btn === allBtn)
        );
      } else {
        allBtn.classList.remove('active');
        proteinFiltersContainer.querySelectorAll('.protein-btn').forEach(btn => {
          if (btn.dataset.protein !== 'all') {
            btn.classList.toggle('active', activeProteins.has(btn.dataset.protein));
          }
        });
      }

      applyFilters();
    });
  }

  // Render all recipes initially
  renderRecipeGrid(grid, recipes);

  // Category filter click handlers
  filtersContainer.addEventListener('click', (e) => {
    if (!e.target.classList.contains('filter-btn')) return;
    activeCategory = e.target.dataset.category;
    filtersContainer.querySelectorAll('.filter-btn').forEach(btn =>
      btn.classList.toggle('active', btn === e.target)
    );
    applyFilters();
  });

  function applyFilters() {
    const filtered = recipes.filter(r => {
      const categoryMatch = activeCategory === 'all' || r.category === activeCategory;
      const cuisineMatch = activeCuisine === 'all' || getCuisineGroup(r.cuisine) === activeCuisine;
      let proteinMatch = true;
      if (activeProteins.size > 0) {
        const recipeSources = getRecipeProteinSources(r);
        proteinMatch = recipeSources.some(src => activeProteins.has(src));
      }
      return categoryMatch && cuisineMatch && proteinMatch;
    });
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="no-results">
        <p>No recipes match the selected filters. Try a different combination.</p>
      </div>`;
    } else {
      renderRecipeGrid(grid, filtered);
    }
  }

  // Update recipe count in hero
  const countEl = document.getElementById('recipe-count');
  if (countEl) countEl.textContent = recipes.length;

  const avgProtein = Math.round(recipes.reduce((sum, r) => sum + r.proteinPerServing, 0) / recipes.length);
  const avgEl = document.getElementById('avg-protein');
  if (avgEl) avgEl.textContent = avgProtein + 'g';
}

function renderRecipeGrid(container, recipeList) {
  container.innerHTML = recipeList.map(recipe => `
    <a href="recipe.html?r=${recipe.slug}" class="recipe-card">
      <div class="recipe-card-image ${recipe.image ? '' : 'card-bg-' + recipe.category}">
        ${recipe.image
          ? `<img src="${recipe.image}" alt="${recipe.title}" loading="lazy">`
          : `<span class="card-icon">${getCategoryIcon(recipe.category)}</span>`
        }
        <span class="recipe-card-category cat-${recipe.category}">${recipe.category}</span>
        <span class="recipe-card-protein">${recipe.proteinPerServing}g protein</span>
      </div>
      <div class="recipe-card-body">
        <h3 class="recipe-card-title">${recipe.title}</h3>
        <p class="recipe-card-desc">${recipe.description}</p>
        <div class="recipe-card-meta">
          <span>\u23F1 ${recipe.prepTime + recipe.cookTime} min</span>
          <span>\uD83C\uDF7D ${recipe.servings} servings</span>
          <span>\uD83C\uDF0D ${recipe.cuisine}</span>
          ${recipe.difficulty === 'easy' ? `<span class="difficulty-badge difficulty-easy">easy</span>` : ''}
        </div>
      </div>
    </a>
  `).join('');
}

// ============ RECIPE PAGE ============

function initRecipePage() {
  const container = document.getElementById('recipe-container');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('r');
  const recipe = recipes.find(r => r.slug === slug);

  if (!recipe) {
    container.innerHTML = `
      <div style="text-align:center; padding: 80px 24px;">
        <h2>Recipe not found</h2>
        <p style="margin: 16px 0;">The recipe you're looking for doesn't exist.</p>
        <a href="index.html" class="jump-to-recipe">Browse All Recipes</a>
      </div>`;
    return;
  }

  document.title = `${recipe.title} | Deep Roots`;

  container.innerHTML = `
    ${recipe.image ? `
    <div class="recipe-hero-image">
      <img src="${recipe.image.replace('w=600&h=400', 'w=1200&h=500')}" alt="${recipe.title}">
    </div>
    ` : ''}

    <div class="recipe-breadcrumb">
      <a href="index.html">Home</a> / <a href="index.html">${capitalize(recipe.category)}</a> / ${recipe.title}
    </div>

    <h1 class="recipe-title">${recipe.title}</h1>
    <p class="recipe-subtitle">${recipe.description}</p>

    <div class="recipe-meta-bar">
      <div class="recipe-meta-item">
        <span class="recipe-meta-label">Prep Time</span>
        <span class="recipe-meta-value">${recipe.prepTime} min</span>
      </div>
      <div class="recipe-meta-item">
        <span class="recipe-meta-label">Cook Time</span>
        <span class="recipe-meta-value">${recipe.cookTime} min</span>
      </div>
      <div class="recipe-meta-item">
        <span class="recipe-meta-label">Total Time</span>
        <span class="recipe-meta-value">${recipe.prepTime + recipe.cookTime} min</span>
      </div>
      <div class="recipe-meta-item">
        <span class="recipe-meta-label">Servings</span>
        <span class="recipe-meta-value">${recipe.servings}</span>
      </div>
      ${recipe.difficulty === 'easy' ? `
      <div class="recipe-meta-item">
        <span class="recipe-meta-label">Difficulty</span>
        <span class="difficulty-badge difficulty-easy">easy</span>
      </div>
      ` : ''}
    </div>

    <div class="recipe-nutrition-bar">
      <div class="nutrition-item">
        <span class="nutrition-value protein-highlight">${recipe.proteinPerServing}g</span>
        <span class="nutrition-label">Protein</span>
      </div>
      <div class="nutrition-item">
        <span class="nutrition-value">${recipe.caloriesPerServing}</span>
        <span class="nutrition-label">Calories</span>
      </div>
      ${recipe.fatPerServing != null ? `
      <div class="nutrition-item">
        <span class="nutrition-value">${recipe.fatPerServing}g</span>
        <span class="nutrition-label">Fat</span>
      </div>
      ` : ''}
      ${recipe.carbsPerServing != null ? `
      <div class="nutrition-item">
        <span class="nutrition-value">${recipe.carbsPerServing}g</span>
        <span class="nutrition-label">Carbs</span>
      </div>
      ` : ''}
      ${recipe.fiberPerServing != null ? `
      <div class="nutrition-item">
        <span class="nutrition-value">${recipe.fiberPerServing}g</span>
        <span class="nutrition-label">Fiber</span>
      </div>
      ` : ''}
    </div>

    <div class="nutrition-personalize-row">
      <button class="personalize-btn" id="personalize-btn">Personalize Nutrition</button>
      <a href="#" class="personalize-reset" id="personalize-reset" style="display:none">Reset</a>
    </div>

    <a href="#recipe-card" class="jump-to-recipe">\u2193 Jump to Recipe</a>

    <div class="recipe-story">
      ${recipe.story.split('\n\n').map(p => `<p>${p}</p>`).join('')}
    </div>

    ${recipe.proteinModification ? `
    <div class="protein-modification">
      <h3>The Protein Upgrade</h3>
      <p>${recipe.proteinModification}</p>
    </div>
    ` : ''}

    <div class="recipe-card-full" id="recipe-card">
      <h2>${recipe.title}</h2>

      <div class="serving-scaler">
        <label for="servings-select">Servings:</label>
        <select id="servings-select" data-default="${recipe.servings}">
          <option value="1" ${recipe.servings === 1 ? 'selected' : ''}>1</option>
          <option value="2" ${recipe.servings === 2 ? 'selected' : ''}>2</option>
          <option value="4" ${recipe.servings === 4 ? 'selected' : ''}>4</option>
          <option value="6" ${recipe.servings === 6 ? 'selected' : ''}>6</option>
          <option value="8" ${recipe.servings === 8 ? 'selected' : ''}>8</option>
          <option value="12" ${recipe.servings === 12 ? 'selected' : ''}>12</option>
        </select>
        <span class="protein-per-serving" id="protein-display">${recipe.proteinPerServing}g protein per serving</span>
      </div>

      <button class="print-btn" onclick="window.print()">
        \uD83D\uDDA8 Print Recipe
      </button>

      <div class="ingredients-section">
        <h3>Ingredients</h3>
        <ul class="ingredients-list" id="ingredients-list">
          ${renderIngredients(recipe.ingredients, 1, recipe.servings)}
        </ul>
      </div>

      <div class="instructions-section">
        <h3>Instructions</h3>
        <ol class="instructions-list">
          ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
        </ol>
      </div>

      <div class="protein-tips">
        <h3>Boost Your Protein</h3>
        <ul>
          ${recipe.proteinTips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
      </div>

      ${recipe.substitutions && recipe.substitutions.length > 0 ? `
      <div class="substitution-tips">
        <h3>Ingredient Substitutions</h3>
        <ul>
          ${recipe.substitutions.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>
      ` : ''}

      ${recipe.pairings && recipe.pairings.length > 0 ? `
      <div class="recipe-pairings">
        <h3>Pairs Well With</h3>
        <div class="pairings-grid">
          ${recipe.pairings.map(p => {
            const pairedRecipe = p.slug ? recipes.find(r => r.slug === p.slug) : null;
            const img = pairedRecipe && pairedRecipe.image;
            return p.slug
              ? `<a href="recipe.html?r=${p.slug}" class="pairing-card">
                  <div class="pairing-card-image ${img ? '' : 'card-bg-side'}">
                    ${img
                      ? `<img src="${img}" alt="${p.item}" loading="lazy">`
                      : `<span class="card-icon">${getCategoryIcon('side')}</span>`
                    }
                  </div>
                  <div class="pairing-card-body">
                    <span class="pairing-item">${p.item}</span>
                    <span class="pairing-protein">+${p.protein} protein</span>
                  </div>
                </a>`
              : `<div class="pairing-card">
                  <div class="pairing-card-image card-bg-side">
                    <span class="card-icon">${getCategoryIcon('side')}</span>
                  </div>
                  <div class="pairing-card-body">
                    <span class="pairing-item">${p.item}</span>
                    <span class="pairing-protein">+${p.protein} protein</span>
                  </div>
                </div>`;
          }).join('')}
        </div>
      </div>
      ` : ''}

      <div class="recipe-tags">
        ${recipe.tags.map(tag => `<span class="recipe-tag">#${tag}</span>`).join('')}
      </div>
    </div>
  `;

  // Set up serving scaler
  const servingsSelect = document.getElementById('servings-select');
  if (servingsSelect) {
    servingsSelect.addEventListener('change', () => {
      const newServings = parseInt(servingsSelect.value);
      const scale = newServings / recipe.servings;
      const ingredientsList = document.getElementById('ingredients-list');
      ingredientsList.innerHTML = renderIngredients(recipe.ingredients, scale, recipe.servings);
    });
  }

  // Set up nutrition personalization
  var personalizeBtn = document.getElementById('personalize-btn');
  var resetLink = document.getElementById('personalize-reset');

  if (personalizeBtn) {
    personalizeBtn.addEventListener('click', function() { openNutritionModal(recipe); });
  }

  if (resetLink) {
    resetLink.addEventListener('click', function(e) {
      e.preventDefault();
      clearNutritionProfile();
      document.querySelectorAll('.nutrition-pct').forEach(function(el) { el.remove(); });
      resetLink.style.display = 'none';
    });
  }

  // Load saved profile on page load
  var savedProfile = loadNutritionProfile();
  if (savedProfile) {
    renderNutritionPercentages(recipe, savedProfile.targets);
    if (resetLink) resetLink.style.display = '';
  }
}

function renderIngredients(ingredients, scale, servings) {
  return ingredients.map(ing => {
    const amount = ing.amount ? formatAmount(ing.amount, scale) : '';
    const unit = ing.unit || '';
    const note = ing.note ? `<span class="ingredient-note">(${ing.note})</span>` : '';
    let proteinBadge = '';
    if (ing.protein && servings) {
      const perServing = Math.round(ing.protein / servings);
      if (perServing >= 1) {
        proteinBadge = `<span class="ingredient-protein">${perServing}g protein</span>`;
      }
    }
    return `<li>
      <span>
        <span class="ingredient-amount">${amount} ${unit}</span>
        ${ing.item} ${note} ${proteinBadge}
      </span>
    </li>`;
  }).join('');
}

// ============ NUTRITION PERSONALIZATION ============

function createNutritionModal() {
  return `
    <div class="modal-overlay" id="nutrition-modal">
      <div class="modal-content">
        <button class="modal-close" id="modal-close">&times;</button>
        <h2 class="modal-title">Personalize Nutrition</h2>
        <p class="modal-subtitle">Enter your details to see what percentage of your daily intake each macro represents.</p>

        <form id="nutrition-form">
          <div class="modal-field-group">
            <label class="modal-label">Height</label>
            <div class="modal-unit-toggle">
              <button type="button" class="unit-btn active" data-unit="imperial" id="height-imperial">ft/in</button>
              <button type="button" class="unit-btn" data-unit="metric" id="height-metric">cm</button>
            </div>
            <div class="modal-height-inputs" id="height-imperial-inputs">
              <input type="number" class="modal-input modal-input-sm" id="height-ft" placeholder="ft" min="3" max="8">
              <input type="number" class="modal-input modal-input-sm" id="height-in" placeholder="in" min="0" max="11">
            </div>
            <div class="modal-height-inputs" id="height-metric-inputs" style="display:none">
              <input type="number" class="modal-input" id="height-cm" placeholder="cm" min="100" max="250">
            </div>
          </div>

          <div class="modal-field-group">
            <label class="modal-label">Weight</label>
            <div class="modal-unit-toggle">
              <button type="button" class="unit-btn active" data-unit="lbs" id="weight-lbs-btn">lbs</button>
              <button type="button" class="unit-btn" data-unit="kg" id="weight-kg-btn">kg</button>
            </div>
            <input type="number" class="modal-input" id="weight-input" placeholder="lbs" min="50" max="500">
          </div>

          <div class="modal-field-group">
            <label class="modal-label">Age</label>
            <input type="number" class="modal-input" id="age-input" placeholder="Age" min="13" max="120">
          </div>

          <div class="modal-field-group">
            <label class="modal-label">Sex</label>
            <div class="modal-unit-toggle">
              <button type="button" class="sex-btn active" data-sex="male" id="sex-male">Male</button>
              <button type="button" class="sex-btn" data-sex="female" id="sex-female">Female</button>
            </div>
          </div>

          <div class="modal-field-group">
            <label class="modal-label">Activity Level</label>
            <select class="modal-select" id="activity-select">
              <option value="">Select activity level</option>
              <option value="1.2">Sedentary (little or no exercise)</option>
              <option value="1.375">Lightly Active (1-3 days/week)</option>
              <option value="1.55">Moderately Active (3-5 days/week)</option>
              <option value="1.725">Very Active (6-7 days/week)</option>
              <option value="1.9">Extra Active (athlete/physical job)</option>
            </select>
          </div>

          <button type="submit" class="modal-submit">Calculate My Targets</button>
        </form>
      </div>
    </div>
  `;
}

function calculateDailyTargets({ heightCm, weightKg, age, sex, activityMultiplier }) {
  var bmr;
  if (sex === 'male') {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }
  var tdee = bmr * activityMultiplier;
  var weightLbs = weightKg * 2.205;
  var protein = Math.round(weightLbs);
  var fat = Math.round((tdee * 0.3) / 9);
  var proteinCals = protein * 4;
  var fatCals = fat * 9;
  var carbs = Math.round((tdee - proteinCals - fatCals) / 4);
  return {
    calories: Math.round(tdee),
    protein: protein,
    fat: fat,
    carbs: carbs,
    fiber: 28
  };
}

function saveNutritionProfile(formData, targets) {
  localStorage.setItem('dr_nutrition_profile', JSON.stringify({ formData: formData, targets: targets }));
}

function loadNutritionProfile() {
  var data = localStorage.getItem('dr_nutrition_profile');
  return data ? JSON.parse(data) : null;
}

function clearNutritionProfile() {
  localStorage.removeItem('dr_nutrition_profile');
}

function renderNutritionPercentages(recipe, targets) {
  document.querySelectorAll('.nutrition-pct').forEach(function(el) { el.remove(); });

  var macroMap = {
    'Protein': { value: recipe.proteinPerServing, target: targets.protein },
    'Calories': { value: recipe.caloriesPerServing, target: targets.calories },
    'Fat': { value: recipe.fatPerServing, target: targets.fat },
    'Carbs': { value: recipe.carbsPerServing, target: targets.carbs },
    'Fiber': { value: recipe.fiberPerServing, target: targets.fiber }
  };

  document.querySelectorAll('.nutrition-item').forEach(function(item) {
    var label = item.querySelector('.nutrition-label').textContent.trim();
    var macro = macroMap[label];
    if (macro && macro.value != null && macro.target) {
      var pct = Math.round((macro.value / macro.target) * 100);
      var badge = document.createElement('span');
      badge.className = 'nutrition-pct';
      badge.textContent = pct + '% daily';
      item.appendChild(badge);
    }
  });
}

function openNutritionModal(recipe) {
  document.body.insertAdjacentHTML('beforeend', createNutritionModal());
  document.body.style.overflow = 'hidden';

  var modal = document.getElementById('nutrition-modal');
  var form = document.getElementById('nutrition-form');
  var heightUnit = 'imperial';
  var weightUnit = 'lbs';
  var sex = 'male';

  function closeModal() {
    modal.remove();
    document.body.style.overflow = '';
  }

  document.getElementById('modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escHandler);
    }
  });

  // Height unit toggle
  document.getElementById('height-imperial').addEventListener('click', function() {
    heightUnit = 'imperial';
    this.classList.add('active');
    document.getElementById('height-metric').classList.remove('active');
    document.getElementById('height-imperial-inputs').style.display = '';
    document.getElementById('height-metric-inputs').style.display = 'none';
  });
  document.getElementById('height-metric').addEventListener('click', function() {
    heightUnit = 'metric';
    this.classList.add('active');
    document.getElementById('height-imperial').classList.remove('active');
    document.getElementById('height-imperial-inputs').style.display = 'none';
    document.getElementById('height-metric-inputs').style.display = '';
  });

  // Weight unit toggle
  document.getElementById('weight-lbs-btn').addEventListener('click', function() {
    weightUnit = 'lbs';
    this.classList.add('active');
    document.getElementById('weight-kg-btn').classList.remove('active');
    document.getElementById('weight-input').placeholder = 'lbs';
  });
  document.getElementById('weight-kg-btn').addEventListener('click', function() {
    weightUnit = 'kg';
    this.classList.add('active');
    document.getElementById('weight-lbs-btn').classList.remove('active');
    document.getElementById('weight-input').placeholder = 'kg';
  });

  // Sex toggle
  document.getElementById('sex-male').addEventListener('click', function() {
    sex = 'male';
    this.classList.add('active');
    document.getElementById('sex-female').classList.remove('active');
  });
  document.getElementById('sex-female').addEventListener('click', function() {
    sex = 'female';
    this.classList.add('active');
    document.getElementById('sex-male').classList.remove('active');
  });

  // Form submit
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var heightCm;
    if (heightUnit === 'imperial') {
      var ft = parseFloat(document.getElementById('height-ft').value);
      var inches = parseFloat(document.getElementById('height-in').value) || 0;
      if (!ft) return alert('Please enter your height.');
      heightCm = (ft * 12 + inches) * 2.54;
    } else {
      heightCm = parseFloat(document.getElementById('height-cm').value);
      if (!heightCm) return alert('Please enter your height in cm.');
    }

    var weightRaw = parseFloat(document.getElementById('weight-input').value);
    if (!weightRaw) return alert('Please enter your weight.');
    var weightKg = weightUnit === 'lbs' ? weightRaw * 0.4536 : weightRaw;

    var age = parseInt(document.getElementById('age-input').value);
    if (!age) return alert('Please enter your age.');

    var activityMultiplier = parseFloat(document.getElementById('activity-select').value);
    if (!activityMultiplier) return alert('Please select your activity level.');

    var targets = calculateDailyTargets({ heightCm: heightCm, weightKg: weightKg, age: age, sex: sex, activityMultiplier: activityMultiplier });
    saveNutritionProfile({ heightUnit: heightUnit, weightUnit: weightUnit, sex: sex, heightCm: heightCm, weightKg: weightKg, age: age, activityMultiplier: activityMultiplier }, targets);
    renderNutritionPercentages(recipe, targets);

    var resetLink = document.getElementById('personalize-reset');
    if (resetLink) resetLink.style.display = '';

    closeModal();
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ============ NAVIGATION ============

function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }
}

// ============ SEARCH PAGE ============

function initSearchPage() {
  const input = document.getElementById('search-input');
  const resultsContainer = document.getElementById('search-results');
  const metaEl = document.getElementById('search-meta');
  const emptyState = document.getElementById('search-empty');
  if (!input || !resultsContainer) return;

  let debounceTimer;

  function doSearch(query) {
    query = query.trim().toLowerCase();
    if (!query) {
      resultsContainer.innerHTML = '';
      if (metaEl) metaEl.textContent = '';
      if (emptyState) emptyState.style.display = '';
      return;
    }
    if (emptyState) emptyState.style.display = 'none';

    const results = recipes.filter(r => {
      if (r.title.toLowerCase().includes(query)) return true;
      return r.ingredients.some(ing => ing.item.toLowerCase().includes(query));
    });

    if (results.length === 0) {
      resultsContainer.innerHTML = `<div class="no-results">
        <p>No recipes found for "${query.replace(/</g, '&lt;')}". Try a different search term.</p>
      </div>`;
      if (metaEl) metaEl.textContent = '0 results';
    } else {
      renderRecipeGrid(resultsContainer, results);
      if (metaEl) metaEl.textContent = results.length + ' result' + (results.length === 1 ? '' : 's');
    }
  }

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = input.value;
      const url = new URL(window.location);
      if (query.trim()) {
        url.searchParams.set('q', query.trim());
      } else {
        url.searchParams.delete('q');
      }
      history.replaceState(null, '', url);
      doSearch(query);
    }, 200);
  });

  // Load query from URL on page load
  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get('q');
  if (initialQuery) {
    input.value = initialQuery;
    doSearch(initialQuery);
  }
}

// ============ INIT ============

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHomepage();
  initRecipePage();
  initSearchPage();
});
