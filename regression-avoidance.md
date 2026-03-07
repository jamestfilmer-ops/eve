# Regression Avoidance Protocol — Eve

This document defines how changes are made without breaking existing functionality.

Claude must follow this process for all feature work.

---

# 1. Two Modes Only

All sessions must declare one mode:

**MODE: Feature** — adding something new
**MODE: Fix** — repairing something broken

## Feature Mode Rules
- Only additive changes
- No structural reorganization
- No renaming files or components
- No removing existing logic
- No changing data model unless explicitly requested

## Fix Mode Rules
- Touch only the broken thing
- Do not refactor adjacent code while fixing
- Behavior everywhere else must remain identical
- One fix per commit

---

# 2. Impact Report (Required Before Code)

Before writing any code, Claude must state:

1. Files that will change
2. Supabase tables involved (if any)
3. Routes affected
4. Whether 'use client' is needed
5. Potential regression risks

If change is isolated, explicitly state:
"This change does not affect Supabase schema, navigation, or any existing working feature."

---

# 3. Pre-Push Checklist (Manual)

Before pushing to GitHub, verify locally:

- [ ] npm run build passes with zero errors
- [ ] Home page loads and all sections visible
- [ ] Nav links all work (Dashboard, Projects, Ideas, Session, Learn dropdown)
- [ ] Auth page loads — sign in and sign up tabs both work
- [ ] The page you just changed loads and works as expected
- [ ] No console errors on changed page
- [ ] ConsentBanner still appears on first visit
- [ ] /terms and /privacy still load

If any fail, stop and fix before pushing.

---

# 4. Database Protection Rule

If modifying Supabase queries:
- Do not duplicate data logic in the frontend
- Do not change table structure without explicit instruction
- Do not remove columns
- Do not alter RLS policies without explanation
- Always use user_id = auth.user.id for write operations

---

# 5. No Silent Changes Rule

Claude must explicitly flag:
- Removed props or functions
- Renamed variables or exports
- Changed import paths
- Any functionality that was present before but is gone after

Nothing may disappear without being called out.

---

# 6. The Read-Before-Write Rule

Before modifying any file:
1. Fetch the current version from GitHub raw URL
2. Read it in full
3. Identify exactly what lines change
4. Only then write the updated file

Never write from memory. The live file is the source of truth.

---

# 7. Dependency Rule

No new npm packages unless explicitly approved by James.
Keep bundle lightweight.
If a feature requires a new package, ask first.

---

# 8. Stop Condition

If a requested change risks:
- Breaking auth
- Breaking Supabase data relationships
- Changing navigation structure
- Removing an existing working page or feature

Claude must pause and ask for confirmation before proceeding.

---

# 9. The "Don't Eat Your Tail" Rule

James's explicit concern: changes that silently remove or alter things he didn't notice.

Rules:
- When updating a file, keep everything that isn't being changed
- If adding a section to a page requires restructuring the file, flag it
- If two things must change together, say so explicitly before writing either
- Never "clean up" code that's working — only the thing that's broken or being added

---

# 10. Final Output Requirement

Every session must end with:
- Confirmation that npm run build passes
- Clear statement of what was completed this session
- Clear statement of what the next step is
- Any partial work documented if session ended mid-task

---

End of Regression Avoidance Protocol.
