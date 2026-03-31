# EVE HANDOFF GUIDE
## For the next Sonnet 4.6 chat — March 30, 2026

---

## WHAT WAS AUDITED

Every public-facing route was fetched and reviewed for UX, copy quality, AI-tells, code issues, and visual consistency:

- `/` (homepage)
- `/for-beginners`
- `/learn` (craft library index)
- `/learn/tracks` (learning paths)
- `/frameworks` (11 frameworks comparison)
- `/road-to-hollywood`
- `/road-to-publishing`
- `/road-to-short-story`
- `/reading-list`
- `/genres`
- `/visual-craft`
- `/pricing`

Codebase files inspected: `app/page.js`, `app/globals.css`, `app/layout.js`, `app/components/*.js`, `app/learn/page.js`, `app/frameworks/page.js`, `app/pricing/page.js`, `app/visual-craft/page.js`, `app/road-to-short-story/page.js`, `lib/planUtils.js`.

---

## WHAT WAS CHANGED (this commit)

1. **Pricing page double-nav bug fixed** — `app/pricing/page.js` was importing and rendering `<Nav />` on top of the root layout's nav. Removed the import and the duplicate `<Nav />` call.

2. **Duplicate "How to end a story" removed from /learn** — The Craft category in `app/learn/page.js` had the same lesson (`the-ending`) listed twice with different descriptions. Removed the second entry.

3. **Kubrick duplicate fixed in visual-craft** — `app/visual-craft/page.js` line 133 listed "Kubrick, Tati, Kubrick, Wes Anderson" in the mise-en-scene description. Fixed to "Kubrick, Tati, Wes Anderson".

4. **Freeform framework dashes fixed** — `app/frameworks/page.js` had `creator: ' --'` and `year: ' --'` for Freeform. Changed to `null`. Also fixed the metadata render line to use `filter(Boolean).join(' · ')` so null values don't render.

5. **OpenGraph metadata updated on /learn** — Changed "35+ lessons" to "100+ lessons" in the OG description. Updated description copy to reflect current content scope.

6. **Glimmer Train tier corrected** — `app/road-to-short-story/page.js`: Changed Glimmer Train from "Tier 2" to "Historical" since it closed in 2019. Also removed the "(now closed)" parenthetical from the body paragraph since the market is no longer listed as active.

---

## WHAT STILL LOOKS WEAK OR UNFINISHED

### Critical

1. **Pricing inconsistency.** Memory says Isaac decided on $4.99/mo or $30/yr. The site shows $5/mo and $60/yr (both `app/page.js` lines 84-86 and `app/pricing/page.js` lines 26-28). **Ask Isaac which price is correct before changing.** The variables to update are `monthlyPrice`, `annualMonthly`, and `annualTotal` in both files.

2. **Genres page (`/genres`) is a skeleton.** 15 genres with one-line descriptions and no expanded content. Every other page has depth. This one has topic sentences only. It needs either: (a) full expansion with key works, characteristics, subgenres, tropes, and craft notes per genre, or (b) removal and redirect to `/reading-list` which covers similar ground with more substance.

3. **Learning paths (`/learn/tracks`) are mostly collapsed.** Only the "Start Here" path shows lesson links. Screenwriting, Novel Writing, Deep Craft, and Frameworks paths show descriptions but no expandable lesson links. These need either full lesson link lists or "Coming soon" labels.

4. **Duplicate lessons across categories in `/learn`.** These slugs appear in multiple categories with different descriptions:
   - `theme-vs-message` — in Theme AND Literary Craft
   - `theme-through-character` — in Theme AND Literary Craft
   - `symbol-and-motif` — in Theme AND Literary Craft
   - `irony-in-fiction` — in Theme AND Literary Craft
   - `writing-villains` — in Character AND Novel Writing
   - `the-ending` — in Craft AND Novel Writing (the Craft duplicate was removed; Novel Writing still has it)
   
   **Decision needed:** Either deduplicate (remove from one category) or add a "See also" cross-reference label so users understand it's intentional.

### High Priority

5. **Visual monotony across pages.** Every content page uses the same layout: big serif heading → gray subtext → vertical card list. The content varies but the visual experience does not. Consider:
   - Alternating card layouts (horizontal on some pages, grid on others)
   - Pull quotes or callout boxes to break vertical rhythm
   - Sidebar elements on wider screens
   - Different background treatment for different page types (guides vs. library vs. reference)

6. **"Craft" category name is too vague.** The /learn page has categories like "Scene Craft," "Character," "Dialogue" — all specific. Then there's "Craft" which is generic. Rename to "Craft Fundamentals" or "General Craft" or redistribute its 4 lessons into other categories.

7. **Frameworks page (`/frameworks`) is very long.** 11 frameworks, each with a full detail card, no collapse. On mobile this is 15+ screens of scrolling. Add collapsible sections or a comparison table summary at the top.

8. **"Study how" / "Study it for" phrase repetition.** This phrase appears on nearly every entry in `/reading-list` and many entries elsewhere. It's the single most repeated structural phrase on the site. Vary it: "Watch for," "Pay attention to," "The lesson here is," "What this teaches," or just cut the instruction entirely and let the description stand.

### Medium Priority

9. **FAQ on pricing page:** "Will prices go up? Possibly." is honest but hurts conversion. Consider: "Early adopters lock in the founding rate" or "Current pricing is locked for existing subscribers."

10. **Mobile nav depth.** The "Learn" dropdown has ~10 items. On mobile this becomes a scrolling list. Consider grouping into sub-sections or limiting the dropdown to 5-6 top items with a "See all →" link.

11. **No craft books section on reading list.** The 50 works are all fiction/film. Missing: Save the Cat, On Writing, Story by McKee, The Writer's Journey, Bird by Bird, Elements of Style, Reading Like a Writer. A "Craft Books" section would complete the reference.

12. **Homepage "What's inside the library" grid.** Six identical rectangles with numbers. This should feel like abundance — consider varied card sizes, icons, or a more visual treatment.

---

## KEY DESIGN/UX DECISIONS ALREADY MADE

- **No AI inside the app. Period.** This is the core differentiator.
- **No emoji anywhere. SVG icons only.**
- **Two-tier paywall: Free / Pro.** Free = 10 Start Here lessons + 1 project. Pro = everything.
- **Font stack:** Playfair Display (headings), DM Sans (body/UI), JetBrains Mono (code/metadata).
- **Color palette:** Forest green (#2D5016) on warm cream (#FDFCF9). Amber for warnings/highlights.
- **Tone:** Mentor voice — warm, direct, specific. "Your best friend in film bringing you under his wing."
- **PaywallBlur component** exists but "Preview anyway" currently bypasses it entirely.
- **Content is the product.** The lessons, frameworks, and guides ARE the value proposition. Workspace features are secondary until the user base grows.

---

## IMPORTANT IMPLEMENTATION PATTERNS TO KEEP

- Google Fonts `@import` MUST come BEFORE `@import "tailwindcss"` in globals.css
- `'use client'` must be literal first line of any client component
- Lessons live in `app/learn/[slug]/page.js` as one large `const lessons` object
- `writtenSlugs` array in `app/learn/page.js` controls visibility — absent slugs show "Coming soon"
- `filter(Boolean).join(' · ')` pattern for nullable metadata fields (used in frameworks, should be used everywhere)
- Nav is rendered ONCE in `app/layout.js` — no page should import Nav separately
- CSS design tokens are in `:root` in `globals.css` — use them, don't hardcode px/colors

## IMPORTANT PATTERNS TO AVOID

- Never use `--` in JSX text — use `—` (em dash)
- Never use Python `[:N]` slice on metadata strings (can cut at apostrophe)
- Never use `{{{{ }}}}` in f-strings for JSX
- Double-backslash apostrophe escaping (`\\'`) causes Turbopack parse failure
- Don't import Nav in individual pages (layout handles it)
- Don't push to Vercel without checking `npm run build` passes
- `str_replace` on files over ~2000 lines is unreliable — use heredoc rewrites

---

## PAGE-SPECIFIC NOTES

### Homepage (`app/page.js` — 590 lines)
- Strong hero copy. Mock project card is effective.
- Pricing section variables at lines 84-86 need reconciliation with Isaac's stated pricing.
- The "No AI" section is genuinely differentiating — do not weaken it.

### /for-beginners (`app/for-beginners/page.js` — 281 lines)
- One of the best pages. Minimal changes needed.
- Minor: "Here is how to X" pattern appears 4+ times. Vary it.

### /learn (`app/learn/page.js` — 312 lines after fix)
- CategoryList component at `app/learn/CategoryList.js` handles rendering.
- Duplicate entries still exist across Theme/Literary Craft and Character/Novel Writing (see list above).

### /learn/tracks
- 4 of 5 paths need lesson links populated or "Coming soon" labels.

### /frameworks (`app/frameworks/page.js` — 343 lines)
- Freeform null handling is now fixed.
- Consider collapsible sections for mobile.

### /road-to-short-story (`app/road-to-short-story/page.js` — 311 lines after fix)
- The 31-market list is a killer feature. Keep expanding it.
- Glimmer Train now marked Historical.

### /genres (`app/genres/page.js` — 759 lines)
- Weakest page. Needs full expansion or removal.

### /visual-craft (`app/visual-craft/page.js` — 416 lines)
- Kubrick duplicate is fixed.
- Unique differentiator — no other platform teaches visual craft for writers.

### /pricing (`app/pricing/page.js` — 155 lines after fix)
- Double-nav bug is fixed.
- Price values still need reconciliation.

---

## OPEN QUESTIONS FOR ISAAC

1. **What is the correct pricing?** $4.99/mo and $30/yr? Or $5/mo and $60/yr? Both are in the codebase.
2. **Should duplicate lessons across categories be removed or labeled as cross-references?**
3. **Genres page: expand or remove?** It's the weakest page and could hurt credibility.
4. **Stripe activation timeline?** Routes exist, price IDs and env vars not yet wired.
5. **Custom domain status?** Credibility milestone before user acquisition.

---

## NEXT-STEP CHECKLIST (priority order)

- [ ] Reconcile pricing ($4.99/$30 vs $5/$60) in `app/page.js` and `app/pricing/page.js`
- [ ] Resolve duplicate lessons in /learn (deduplicate or cross-reference label)
- [ ] Expand or remove /genres page
- [ ] Populate learning paths with lesson links on /learn/tracks
- [ ] Rename "Craft" category to something more specific
- [ ] Add "Craft Books" section to /reading-list
- [ ] Vary "Study how" / "Study it for" phrasing across /reading-list
- [ ] Wire Stripe for Pro tier (price IDs, env vars, checkout flow)
- [ ] Enforce real paywall (remove "Preview anyway" bypass)
- [ ] Add collapsible sections to /frameworks for mobile
- [ ] Break visual monotony: alternate layouts across content pages
- [ ] Improve FAQ pricing language on /pricing
- [ ] Continue lesson content expansion (Character and Novel Writing had identified gaps)
- [ ] Custom domain setup (pending on Isaac)

---

## OVERALL ASSESSMENT

The content is genuinely impressive. 107 lessons, 11 frameworks, 3 industry guides, a 31-market submission database, a 50-work reading list organized by craft principle, and a visual craft curriculum. Most paid screenwriting platforms don't have this depth.

The front-end is clean and functional but visually monotonous — every page uses the same layout pattern. Breaking that monotony is the single biggest UX improvement available.

The copy is 90% excellent and 10% AI-fingerprinted. The repeated sentence structures ("Here is what X actually does," "Study how X," "Not because X — because Y") are individually fine but collectively detectable. A humanization pass that varies these rhythms would significantly improve credibility.

The bugs fixed in this commit were all real and user-facing. The remaining work is mostly editorial (copy and layout variety) and commercial (pricing, Stripe, domain).
