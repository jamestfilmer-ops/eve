# Global Instructions — Eve Project

## Read This First, Every Session

This is the master context file for the Eve project. Read this before anything else. Then read the other context files in this order:

1. `about-me.md` — who James is, his background, his goals
2. `brand-voice.md` — how Eve sounds, looks, and what it is
3. `engineering-invariants.md` — non-negotiable technical rules
4. `working-style.md` — how we work together
5. `regression-avoidance.md` — how to make changes without breaking things
6. Current code files from GitHub: always fetch before modifying

---

## Project Identity

**Name:** Eve
**URL:** https://eve-screenwriting.vercel.app
**Tagline:** Every story starts somewhere small.
**Built by:** James Filmer, Nashville TN
**Mission:** Give writers the structural clarity to finish their stories. No AI. No shortcuts. Just craft.

---

## Technical Stack

```
Framework:    Next.js 16.1.6 (App Router)
Language:     JavaScript (NO TypeScript)
Styling:      Tailwind CSS + CSS variables in app/globals.css
Fonts:        Playfair Display (headings) + Source Sans 3 (body)
Database:     Supabase (PostgreSQL + Auth + RLS)
Hosting:      Vercel (auto-deploy from GitHub)
Node version: 24.x
```

---

## Critical Paths

```
Local project:    ~/Desktop/eve  (or wherever James has it)
Live site:        https://eve-screenwriting.vercel.app
GitHub:           github.com/jamestfilmer-ops/eve (branch: main)
Vercel team:      jamestfilmer-6127s-projects
Vercel team ID:   team_nuxPJ1rE1CIWppK94MR6I0QD
Vercel project:   prj_H7UXG4ej1QG4dD4zMw0EssEe1rgR
Local test:       http://localhost:3000
```

---

## Design Tokens (app/globals.css)

```css
--green:        #2D5016   /* primary, headings, buttons */
--green-mid:    #3D6B1F   /* button hover */
--green-light:  #4E8A28   /* accents, progress bars */
--green-pale:   #EBF2E4   /* pale backgrounds */
--green-border: #C8DDAF   /* borders on green elements */
--white:        #FAFCF7   /* page background */
--off-white:    #F2F7EC   /* section backgrounds */
--text-dark:    #1A2410   /* body text */
--text-mid:     #4A5C38   /* secondary text */
--text-soft:    #7A8F68   /* muted/placeholder */
--border:       #D6E5C0   /* card borders */
```

---

## Reusable CSS Classes

```
.card              white card with border + shadow
.btn-primary       green filled button
.btn-ghost         outlined green button
.input             form input / textarea / select
.badge             small uppercase label pill
.tip-box           green left-border coaching callout
.tab-bar           horizontal tab container
.tab               individual tab button
.tab.active        active tab state
.divider-label     section label with lines on both sides
.fade-up           page load animation
.fade-up-delay-1   through delay-4 for staggered reveals
```

---

## Navigation Structure

```javascript
// Main links
Dashboard | Projects | Ideas | Session | Learn (dropdown)

// Learn dropdown
Craft Library (/learn) | Glossary (/glossary) | Reading List (/resources)

// Right side
Profile avatar → /profile | Sign in → /auth | Get started → /auth?signup=true
```

---

## Database Schema (Supabase)

**Auth:** Supabase built-in auth. profiles.id = auth.user.id

**Tables:**
- `profiles` — id, email, full_name, subscription_tier ('free'|'pro'), created_at
- `projects` — id, user_id, title, framework, status, created_at, updated_at
- `characters` — id, project_id, name, want, need, ghost, arc
- `scenes` — id, project_id, title, act, beat_label, order, notes
- `plot_holes` — id, project_id, description, status ('open'|'resolved')
- `themes` — id, project_id, name, description
- `session_beats` — id, project_id, framework, beat_key, completed
- `ideas` — id, user_id, content, type, pinned, created_at
- `collaborators` — id, project_id, user_id, role

Full SQL: docs/db-schema-changelog.md

**RLS:** Enabled on all tables. Users can only write their own rows.

---

## Supabase Config

```javascript
// lib/supabase.js (committed, working)
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)
```

Env vars set in: Vercel dashboard + local .env.local (not committed)
Auth wired: signUp (with emailRedirectTo) + signInWithPassword
Email confirmation template: custom HTML deployed in Supabase dashboard
Supabase Site URL: https://eve-screenwriting.vercel.app

**WARNING:** Two Supabase accounts exist. Always verify the Project URL matches NEXT_PUBLIC_SUPABASE_URL before touching auth or data.

---

## Components

| Component | Path | What it does |
|-----------|------|-------------|
| Nav.js | app/components/Nav.js | Fixed top nav, Learn dropdown, active states, mobile hide |
| ConsentBanner.js | app/components/ConsentBanner.js | Sticky green footer, dismisses to localStorage |

---

## Pages & Status

| Route | File | Status |
|-------|------|--------|
| / | app/page.js | LIVE — hero, pillars, No AI, frameworks, pricing, footer |
| /auth | app/auth/page.js | LIVE — Supabase auth wired |
| /dashboard | app/dashboard/page.js | LIVE — mock data |
| /projects | app/projects/page.js | LIVE — mock data |
| /projects/new | app/projects/new/page.js | LIVE — mock data |
| /projects/[id] | app/projects/[id]/page.js | LIVE — mock data, 4 tabs |
| /ideas | app/ideas/page.js | LIVE — mock data |
| /profile | app/profile/page.js | LIVE — mock data |
| /session | app/session/page.js | LIVE — Save the Cat only |
| /learn | app/learn/page.js | LIVE |
| /learn/[slug] | app/learn/[slug]/page.js | LIVE — 5 lessons written |
| /glossary | app/glossary/page.js | LIVE |
| /resources | app/resources/page.js | LIVE |
| /themes | app/themes/page.js | LIVE |
| /terms | app/terms/page.js | LIVE — full ToS |
| /privacy | app/privacy/page.js | LIVE — full Privacy Policy |
| not-found | app/not-found.js | LIVE — custom 404 |

---

## Written Lessons

what-a-scene-does | midpoint | want-vs-need | dialogue-subtext | theme

---

## What's Been Completed (Session History)

| Sessions | What was built |
|----------|---------------|
| 1–4 | Full app scaffold — all pages, Nav, design system, mock data, 5 lessons, 404, animations, framework picker |
| 5–6 | Supabase diagnosis + fix. Auth wired (signUp, signInWithPassword, emailRedirectTo). Custom email confirmation template. |
| 7–8 | Landing page: No AI section, pricing (Free / $79yr Pro), dark footer. /terms + /privacy pages. ConsentBanner component. layout.js updated. Fixed 'use client' build error. Removed rogue ~/package-lock.json. |

---

## Monetization Plan

**FREE tier (forever):** 1 project, 10 scenes, all lessons, 25 ideas, Save the Cat session
**PRO tier ($9/mo or $79/year):** Unlimited everything, all frameworks, all features

**Stripe integration (not yet built):**
- Create Stripe account + 2 products
- npm install stripe @stripe/stripe-js
- Add subscription_tier + stripe_customer_id to profiles table
- Use Stripe Checkout hosted page — never custom card forms
- Stripe webhook updates Supabase profile to 'pro'
- Gate features by checking subscription_tier

Do not build Stripe until 10+ real active users exist.

---

## Current Phase: Supabase Data Wiring

**Immediate priorities (in order):**
1. Wire /dashboard — real projects from Supabase
2. Wire /projects/new — INSERT into projects table
3. Wire /projects/[id] — real characters, scenes, plot holes
4. Wire /ideas — real CRUD
5. Wire /profile — pull from profiles table

**Then:**
6. Enable Vercel Analytics (toggle in Vercel dashboard — 2 min)
7. Stripe Pro tier
8. Timeline / chronology view
9. Themes & Motifs tracker
10. Session checklists for all frameworks
11. Remaining craft lessons
12. Mobile optimization
13. Custom domain

---

## Deploy Workflow

```bash
cd ~/Desktop/eve       # or wherever the project lives
# make changes in VS Code
npm run build          # MUST pass before pushing
git add .
git commit -m "describe change"
git push               # Vercel auto-deploys in ~60 seconds
```

**NEVER push if npm run build has errors.**

---

## Rules for Every Session

1. Fetch current file from GitHub raw URL before modifying it — never write from memory
2. Full file content in every code block — no ..., no partial code
3. One logical change per commit
4. npm run build must pass before any session ends with a push step
5. Flag any change that affects schema, navigation, or existing working features
6. Add 'use client' to any page using hooks or event handlers
