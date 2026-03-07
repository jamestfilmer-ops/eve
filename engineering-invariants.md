# Engineering Invariants — Eve

This document defines the non-negotiable technical rules of the system.

Claude must read this before writing or modifying any code.

If a proposed change violates an invariant, it must be explicitly flagged before implementation.

---

# 1. Core Product Invariants

## 1.1 No AI Inside the App

Eve contains zero AI API calls. Claude is used only to BUILD the app — never inside it.
No autocomplete. No suggestions. No content generation. No exceptions.

If any change introduces an AI call inside the app, stop and flag it immediately.

---

## 1.2 Framework System

The four frameworks are fixed:
- Save the Cat (Blake Snyder) — 3 Acts / 15 Beats
- Hero's Journey (Joseph Campbell) — 3 Acts / 12 Stages
- Story Circle (Dan Harmon) — 1 Circle / 8 Steps
- Freeform — No template

Framework slugs used in the DB: save-the-cat | heros-journey | story-circle | freeform

Do not rename, add, or remove frameworks without explicit instruction.

---

# 2. Data Model Invariants

These relationships must always remain valid.

## profiles
- id must match Supabase auth.user.id
- Fields: id, email, full_name, subscription_tier ('free' | 'pro'), created_at

## projects
- Must belong to one user (user_id required)
- Must have a framework slug (framework required)
- Fields: id, user_id, title, framework, status, created_at, updated_at

## characters
- Must belong to one project (project_id required)
- Fields: id, project_id, name, want, need, ghost, arc

## scenes
- Must belong to one project (project_id required)
- Fields: id, project_id, title, act, beat_label, order, notes

## plot_holes
- Must belong to one project (project_id required)
- Fields: id, project_id, description, status ('open' | 'resolved')

## ideas
- Must belong to one user (user_id required)
- Fields: id, user_id, content, type, pinned, created_at

No silent schema changes.
No column renaming without explicit approval.
No removing columns to "clean things up."

---

# 3. UI/Navigation Invariants

The following routes must always exist and load:

- /
- /auth
- /dashboard
- /projects
- /projects/new
- /projects/[id]
- /ideas
- /profile
- /session
- /learn
- /learn/[slug]
- /glossary
- /resources
- /themes
- /terms
- /privacy

The Nav links must always be: Dashboard, Projects, Ideas, Session, Learn (dropdown).
The Learn dropdown must always contain: Craft Library, Glossary, Reading List.

Navigation structure must not be altered unless explicitly requested.

---

# 4. File Structure Invariants

- Framework: Next.js 16.1.6 App Router
- Language: JavaScript only (NO TypeScript)
- Styling: Tailwind + CSS variables in app/globals.css
- No src/ directory — routes live directly in app/
- Route files must be named page.js
- No introducing new frameworks
- No converting to TypeScript
- No adding new dependencies unless explicitly approved

All code blocks must include full file contents. No ellipsis. No partial snippets.

---

# 5. CSS Invariants

Google Fonts @import MUST come before @import "tailwindcss" in globals.css.
Reversing this order causes a build error. Do not change the import order.

Design tokens live in app/globals.css as CSS variables. Do not duplicate them inline.

---

# 6. Feature Preservation Rule

When modifying a file:
- All existing functionality must remain unless explicitly removed
- No "refactor while we're here" behavior
- No renaming exports unless required and flagged
- Additive changes preferred. Subtractive changes require confirmation.

---

# 7. Supabase / RLS Invariants

- RLS remains enabled on all tables
- Users can only write their own rows (user_id = auth.uid())
- Public read allowed on: projects (if public), learn content
- No bypassing RLS via service keys in frontend code
- NEXT_PUBLIC_ prefix required for all client-side env vars
- .env.local must never be committed to git

---

# 8. Deployment Invariant

`npm run build` must pass before push.
No guide may end in a state where the project does not build successfully.

---

# 9. Client Component Rule

Any page or component that uses:
- useState, useEffect, useRef (React hooks)
- onClick, onChange, onMouseEnter (event handlers)
- usePathname, useSearchParams (Next.js hooks)

Must have 'use client' as the very first line of the file.
Forgetting this causes a build error in Next.js App Router.

---

# 10. Regression Acknowledgement Requirement

Before writing code, Claude must state:
- What files will change
- Whether the change affects Supabase schema
- Whether the change affects navigation
- Whether the change affects any existing working feature

If none are affected, explicitly say so.

---

End of Engineering Invariants.
