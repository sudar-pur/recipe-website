# Deep Roots - Project Context

## What This Is
High-protein vegetarian recipe website at **deeprootscooking.com**. Static site hosted on GitHub Pages (repo: `sudar-pur/recipe-website`, branch: `master`, auto-deploys on push). Indian-rooted but covers Mediterranean, Mexican, Asian, Italian cuisines.

## Tech Stack
- Static HTML/CSS/JS, no build step, no framework
- Data lives in `js/recipes.js` (56 recipes) and `js/blog-posts.js` (23 posts)
- `js/app.js` handles all rendering (homepage filters, recipe page, search, SEO injection)
- Google Analytics: `G-VLXBNDGJ94`
- Google AdSense: `ca-pub-2711708712180550`
- Custom domain via CNAME, HTTPS enforced

## File Structure
- `index.html` - Homepage with recipe grid + category/cuisine/protein filters
- `recipe.html` - Dynamic recipe page (loads from `?r=slug`)
- `search.html` - Search by title or ingredient
- `blog.html` / `blog-post.html` - Blog listing and individual posts
- `about.html` - About page
- `privacy.html` - Privacy policy (required for AdSense)
- `404.html` - Custom 404
- `sitemap.xml` / `robots.txt` - SEO
- `css/style.css` - All styles
- `js/recipes.js` - Recipe data (56 recipes, all have images)
- `js/blog-posts.js` - Blog post data (23 posts)
- `js/app.js` - All application logic

## Current State (as of Aug 2026)

### Content
- **56 recipes**: 22 dinner, 7 breakfast, 7 lunch, 10 snack, 10 side. All have images.
- **23 blog posts**: Biweekly cadence from Nov 2025 to Sep 2026. Latest 3 are a freezer meal prep series.
- Blog posts cross-link to recipes, and recipes dynamically show "Featured In" links to blog posts that reference them (49/56 recipes have cross-links).

### Features
- Category, cuisine, and protein source filters on homepage
- Serving scaler on recipe pages
- Imperial/Metric toggle (converts oz/lb/cup/tbsp/tsp to g/ml, converts F to C in instructions, persists in localStorage)
- Nutrition personalization modal (calculates daily targets based on user stats, shows % daily values)
- Dynamic SEO: JSON-LD Recipe schema, Open Graph, Twitter cards, canonical URLs
- Indian cuisine recipes get extra India-targeted keywords in JSON-LD
- Print styles for recipe pages

## Open Threads / TODO

### AdSense Approval (BLOCKED)
- AdSense script and ad slots are in the HTML but using placeholder slot IDs (`XXXXXXXXXX` in recipe.html and blog-post.html)
- Privacy policy page is done (was a prerequisite)
- **Next step**: Check AdSense dashboard for approval status. Once approved, replace placeholder slot IDs with real ones.

### SEO / Growth
- India SEO keywords added to index.html, recipe.html meta tags, about.html copy, and JSON-LD for Indian recipes
- Sitemap is up to date with all pages and blog posts
- **Ideas discussed but not started**: No translation feature planned (Google Translate handles it; metric toggle is the practical win for Indian users)

### Content Pipeline
- Blog posts are on a ~biweekly cadence. Latest published date is Sep 21, 2026.
- The freezer meal prep series (3 posts) is complete: fundamentals + Week 1 (Indian) + Week 2 (mixed cuisine)
- Could add more weekly meal plan posts following the same format
- All 56 recipes have images (generated via Pollinations API, see `generate_images_pollinations.js`)

### Technical Debt / Notes
- `generate_images.js` and `generate_images_pollinations.js` and `wire_images.js` are utility scripts in the root, not part of the site itself
- Blog pages (`blog.html`, `blog-post.html`) have their own inline JS for rendering rather than using app.js
- AdSense ad slots have placeholder IDs that need real values
