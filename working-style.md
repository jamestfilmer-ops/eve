# Working Style — How We Work Together

## The Basic Contract

James makes product decisions. Claude writes the code. James deploys. This division of labor is intentional and it works. Do not blur these roles.

---

## How James Communicates

- **Short messages.** Often just a few words: "wire the dashboard", "fix the nav", "what's next".
- **Error-first.** When something breaks, James pastes the exact error. That's all the context needed — find the cause, write the fix.
- **Trust-based.** James trusts Claude's technical judgment. He doesn't need to understand every decision but he does need to know *what* is changing and *why it matters*.
- **Not a developer.** Never assume James knows what a term means without defining it once. After that, use it freely.
- **Do not cut to add.** If adding or fixing something will remove or alter something else, stop and tell James first. He often doesn't catch things are gone or changed until after git push. All changes should be additive unless explicitly discussed.

---

## What James Needs in Every Response

1. **Know what's happening** — one sentence in plain English before any code
2. **Know what to do** — exact terminal commands or exact VS Code actions
3. **Know what success looks like** — "you should see X" at each step
4. **Know what to do if it breaks** — troubleshooting is not optional

---

## Session Start Protocol

At the start of every new session, Claude should:

1. Read all six context files: `global-instructions.md`, `about-me.md`, `brand-voice.md`, `engineering-invariants.md`, `working-style.md`, `regression-avoidance.md`
2. Fetch and read the current state of `Nav.js`, `layout.js`, `globals.css` before touching them
3. Check `global-instructions.md` for current phase and next priorities
4. If James hasn't stated what we're working on: ask "What are we working on today?"

---

## When James Says "Just Do It"

Skip the explanation, skip the questions. Execute immediately. Trust is established.

---

## When James Pastes an Error

Stop everything. Read the error carefully. Find the exact cause. Write the exact fix.
One error = one focused response.
Do not suggest a rewrite of the whole file unless the error genuinely demands it.

---

## Code Delivery Rules

- **Full file every time.** No `...`, no "add the rest yourself", no partial snippets. The complete file, every time.
- **One file at a time.** Deliver files in the order they should be placed. State the exact VS Code path for each.
- **State the commit.** After each set of files, give the exact git commands to commit and push.
- **Build must pass.** Before delivering any code, mentally check: missing imports? undefined variables? wrong export? event handlers in a Server Component?
- **'use client' check.** Any file using React hooks or event handlers needs `'use client'` as line one.

---

## Things Claude Must Never Do

- Write partial code and say "add the rest yourself"
- Use emojis in product code or copy
- Add new npm packages without asking
- Rename or restructure things that are working
- Make the site more complex without being asked
- Write "I hope this helps!" or similar filler
- Remove features or UI elements without calling it out explicitly
- Write from memory — always fetch the current file first

---

## The "Stop and Go" Guarantee

Every session should end cleanly:
- Working task is either fully complete or next step is clearly stated
- Any partial work is committed or its state is documented
- James can close the laptop and pick up exactly where he left off

---

## How to Deliver Files

For each file:
1. State the file path in VS Code (e.g., `app/dashboard/page.js`)
2. State what changed in one sentence
3. Deliver the full file
4. After all files: give git commands

Example:
```
Open app/dashboard/page.js — replace the entire file with this:
[full file]

Then in Terminal:
git add app/dashboard/page.js
git commit -m "wire dashboard to supabase"
git push
```

---

## Tech Stack Reference

| Item | Value |
|------|-------|
| Framework | Next.js 16.1.6 (App Router, app/ structure — no src/) |
| Language | JavaScript (no TypeScript) |
| Styling | Tailwind CSS + CSS variables in app/globals.css |
| Fonts | Playfair Display + Source Sans 3 (Google Fonts) |
| Database | Supabase (PostgreSQL + Auth + RLS) |
| Hosting | Vercel (auto-deploys from GitHub push) |
| Live URL | https://eve-screenwriting.vercel.app |
| GitHub | github.com/jamestfilmer-ops/eve |

---

## Current Phase Summary

**Done:**
- Full app scaffold (all pages, Nav, design system, mock data)
- 5 craft lessons written
- Supabase auth wired (signUp, signInWithPassword, email confirmation)
- Landing page: No AI section, pricing, dark footer
- /terms and /privacy pages
- ConsentBanner component

**Now: Wire Supabase data layer**
1. /dashboard → real projects
2. /projects/new → INSERT
3. /projects/[id] → real data
4. /ideas → real CRUD
5. /profile → real data

**Then: Stripe Pro tier, analytics, mobile, custom domain**
