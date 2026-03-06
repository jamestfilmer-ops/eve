EVE — DEPLOY GUIDE
How to get Eve live on the internet
=====================================

WHAT YOU NEED BEFORE STARTING
-------------------------------
1. GitHub account — github.com (free)
2. Vercel account — vercel.com (free, sign up with GitHub)
3. Supabase account — supabase.com (free tier is enough)
4. Eve running locally with npm run build passing

ESTIMATED TIME: 30-45 minutes


STEP 1 — PUSH TO GITHUB
-------------------------
In Terminal, from ~/Desktop/eve:

  git init (if not already done)
  git add .
  git commit -m "Initial Eve build"

Then go to github.com:
  1. Click "New repository"
  2. Name it: eve
  3. Set to Private (you can make it public later)
  4. Do NOT add README or .gitignore (you already have files)
  5. Click "Create repository"

GitHub will show you a push command. It looks like this:
  git remote add origin https://github.com/jamestfilmer-ops/eve.git
  git branch -M main
  git push -u origin main

Run those three commands in Terminal.

SUCCESS: Refresh github.com/jamestfilmer-ops/eve — your files should be there.


STEP 2 — SET UP SUPABASE
--------------------------
1. Go to supabase.com, sign in, click "New project"
2. Name it: eve
3. Set a database password (save it somewhere)
4. Choose a region close to you (US East is fine)
5. Click "Create new project" — wait ~2 minutes

Once created:
  1. Click "SQL Editor" in the left sidebar
  2. Open docs/db-schema-changelog.md in VS Code
  3. Copy the entire SQL block (everything between the triple backticks)
  4. Paste it into the Supabase SQL Editor
  5. Click "Run"

SUCCESS: Click "Table Editor" — you should see: profiles, projects,
         characters, scenes, plot_holes, themes, session_beats, collaborators

Get your keys:
  1. Click "Project Settings" (gear icon, bottom left)
  2. Click "API"
  3. Copy "Project URL" — this is your NEXT_PUBLIC_SUPABASE_URL
  4. Copy "anon public" key — this is your NEXT_PUBLIC_SUPABASE_ANON_KEY


STEP 3 — ADD ENV VARIABLES LOCALLY
-------------------------------------
In VS Code, open .env.local (in the root of the eve folder).
Replace the placeholder values:

  NEXT_PUBLIC_SUPABASE_URL=https://qziatztkkinyzqxvxmik.supabase.co
  NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6aWF0enRra2lueXpxeHZ4bWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NjUzMzQsImV4cCI6MjA4ODM0MTMzNH0.iJpVn6TPNqbg4_jCoeKurp9A1sy3R0n7lObeuDd_gdI

Save the file.

IMPORTANT: .env.local should already be in your .gitignore.
Run this to confirm:
  cat .gitignore | grep env

If .env.local is NOT listed, add it:
  echo ".env.local" >> .gitignore


STEP 4 — DEPLOY TO VERCEL
---------------------------
1. Go to vercel.com, sign in with GitHub
2. Click "Add New Project"
3. Find your "eve" GitHub repo and click "Import"
4. Vercel will auto-detect Next.js — no configuration needed
5. BEFORE clicking Deploy: expand "Environment Variables"
   Add both variables:
     NEXT_PUBLIC_SUPABASE_URL     = (your Supabase project URL)
     NEXT_PUBLIC_SUPABASE_ANON_KEY = (your Supabase anon key)
6. Click "Deploy"

Wait ~60 seconds.

SUCCESS: Vercel gives you a URL like eve-username.vercel.app
         Your app is live.


STEP 5 — CUSTOM DOMAIN (OPTIONAL)
------------------------------------
If you want eve.yourdomain.com or a dedicated domain:
  1. In Vercel dashboard, go to your project
  2. Click "Domains"
  3. Add your domain and follow the DNS instructions
  4. Vercel handles SSL automatically


ONGOING DEPLOY WORKFLOW
------------------------
Every time you make changes and want them live:

  cd ~/Desktop/eve
  npm run build          (must pass — do not skip)
  git add .
  git commit -m "describe your change"
  git push

Vercel detects the push and automatically deploys in ~60 seconds.
No manual steps after initial setup.


TROUBLESHOOTING
----------------
Build fails locally:
  Run: npm run build
  Read the error carefully. Fix it before pushing.

Vercel deploy fails:
  Go to vercel.com → your project → Deployments → click the failed one
  Read the build log. It is the same as npm run build output.

Supabase connection error on live site:
  Check that your env variables are set in Vercel (Settings → Environment Variables)
  They must match exactly what is in Supabase Project Settings → API

"Module not found" error:
  A component is imported but the file doesn't exist or is named wrong.
  Check the import path. Next.js is case-sensitive.

Page 404 on a route you built:
  The file must be named exactly page.js inside the route folder.
  app/projects/page.js routes to /projects
  app/projects/new/page.js routes to /projects/new
  Any other filename is ignored by Next.js routing.


WHAT IS NOT WIRED UP YET
--------------------------
The app is fully navigable and looks complete — but all data is
mock/local state. Real data persistence requires connecting the
Supabase client (lib/supabase.js) to each page's data operations.

That is the next build session after deploy.