-- ============================================================
-- EVE — Full Schema Migration
-- Run this in Supabase Dashboard > SQL Editor
-- ============================================================

-- ── 1. PROFILES ─────────────────────────────────────────────
-- Add missing columns (safe: IF NOT EXISTS)

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS full_name       text,
  ADD COLUMN IF NOT EXISTS bio             text,
  ADD COLUMN IF NOT EXISTS plan            text        NOT NULL DEFAULT 'free',
  ADD COLUMN IF NOT EXISTS writing_medium  text,        -- 'screenplay' | 'novel' | 'short' | 'exploring'
  ADD COLUMN IF NOT EXISTS writing_stage   text,        -- 'idea' | 'drafting' | 'revising' | 'learning'
  ADD COLUMN IF NOT EXISTS onboarding_done boolean     NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS stripe_customer_id text,
  ADD COLUMN IF NOT EXISTS stripe_subscription_id text,
  ADD COLUMN IF NOT EXISTS updated_at     timestamptz  DEFAULT now();

-- ── 2. PROJECTS ──────────────────────────────────────────────

ALTER TABLE projects
  ADD COLUMN IF NOT EXISTS user_id    uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  ADD COLUMN IF NOT EXISTS title      text,
  ADD COLUMN IF NOT EXISTS type       text,
  ADD COLUMN IF NOT EXISTS logline    text,
  ADD COLUMN IF NOT EXISTS framework  text,
  ADD COLUMN IF NOT EXISTS status     text DEFAULT 'seed',
  ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT now(),
  ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT now();

-- ── 3. CHARACTERS ────────────────────────────────────────────

ALTER TABLE characters
  ADD COLUMN IF NOT EXISTS project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  ADD COLUMN IF NOT EXISTS name       text,
  ADD COLUMN IF NOT EXISTS role       text,
  ADD COLUMN IF NOT EXISTS want       text,
  ADD COLUMN IF NOT EXISTS need       text,
  ADD COLUMN IF NOT EXISTS ghost      text,
  ADD COLUMN IF NOT EXISTS arc        text,
  ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT now();

-- ── 4. SCENES ────────────────────────────────────────────────

ALTER TABLE scenes
  ADD COLUMN IF NOT EXISTS project_id   uuid REFERENCES projects(id) ON DELETE CASCADE,
  ADD COLUMN IF NOT EXISTS title        text,
  ADD COLUMN IF NOT EXISTS act_number   integer,
  ADD COLUMN IF NOT EXISTS beat_label   text,
  ADD COLUMN IF NOT EXISTS notes        text,
  ADD COLUMN IF NOT EXISTS order_index  integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS created_at   timestamptz DEFAULT now();

-- ── 5. PLOT_HOLES ────────────────────────────────────────────

ALTER TABLE plot_holes
  ADD COLUMN IF NOT EXISTS project_id  uuid REFERENCES projects(id) ON DELETE CASCADE,
  ADD COLUMN IF NOT EXISTS description text,
  ADD COLUMN IF NOT EXISTS severity    text DEFAULT 'medium',
  ADD COLUMN IF NOT EXISTS status      text DEFAULT 'open',
  ADD COLUMN IF NOT EXISTS created_at  timestamptz DEFAULT now();

-- ── 6. THEMES ────────────────────────────────────────────────

ALTER TABLE themes
  ADD COLUMN IF NOT EXISTS project_id    uuid REFERENCES projects(id) ON DELETE CASCADE,
  ADD COLUMN IF NOT EXISTS label         text,
  ADD COLUMN IF NOT EXISTS type          text,
  ADD COLUMN IF NOT EXISTS linked_scenes text DEFAULT '[]',
  ADD COLUMN IF NOT EXISTS canvas_x      float,
  ADD COLUMN IF NOT EXISTS canvas_y      float,
  ADD COLUMN IF NOT EXISTS created_at    timestamptz DEFAULT now();

-- ── 7. IDEAS ─────────────────────────────────────────────────

ALTER TABLE ideas
  ADD COLUMN IF NOT EXISTS user_id    uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  ADD COLUMN IF NOT EXISTS type       text,
  ADD COLUMN IF NOT EXISTS text       text,
  ADD COLUMN IF NOT EXISTS pinned     boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT now();

-- ── 8. SESSION_BEATS ─────────────────────────────────────────

ALTER TABLE session_beats
  ADD COLUMN IF NOT EXISTS project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  ADD COLUMN IF NOT EXISTS beat_id    text,
  ADD COLUMN IF NOT EXISTS response   text,
  ADD COLUMN IF NOT EXISTS completed  boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT now();

-- ── 9. INDEXES (performance) ─────────────────────────────────

CREATE INDEX IF NOT EXISTS idx_projects_user_id   ON projects(user_id);
CREATE INDEX IF NOT EXISTS idx_characters_project ON characters(project_id);
CREATE INDEX IF NOT EXISTS idx_scenes_project     ON scenes(project_id);
CREATE INDEX IF NOT EXISTS idx_plot_holes_project ON plot_holes(project_id);
CREATE INDEX IF NOT EXISTS idx_themes_project     ON themes(project_id);
CREATE INDEX IF NOT EXISTS idx_ideas_user_id      ON ideas(user_id);
CREATE INDEX IF NOT EXISTS idx_session_beats_proj ON session_beats(project_id);

-- ── 10. ROW LEVEL SECURITY ───────────────────────────────────

-- Enable RLS on all tables
ALTER TABLE profiles     ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects     ENABLE ROW LEVEL SECURITY;
ALTER TABLE characters   ENABLE ROW LEVEL SECURITY;
ALTER TABLE scenes       ENABLE ROW LEVEL SECURITY;
ALTER TABLE plot_holes   ENABLE ROW LEVEL SECURITY;
ALTER TABLE themes       ENABLE ROW LEVEL SECURITY;
ALTER TABLE ideas        ENABLE ROW LEVEL SECURITY;
ALTER TABLE session_beats ENABLE ROW LEVEL SECURITY;

-- Drop existing policies first (safe re-run)
DROP POLICY IF EXISTS "profiles_own"          ON profiles;
DROP POLICY IF EXISTS "projects_own"          ON projects;
DROP POLICY IF EXISTS "characters_own"        ON characters;
DROP POLICY IF EXISTS "scenes_own"            ON scenes;
DROP POLICY IF EXISTS "plot_holes_own"        ON plot_holes;
DROP POLICY IF EXISTS "themes_own"            ON themes;
DROP POLICY IF EXISTS "ideas_own"             ON ideas;
DROP POLICY IF EXISTS "session_beats_own"     ON session_beats;

-- PROFILES: users can only read/write their own row
CREATE POLICY "profiles_own" ON profiles
  FOR ALL USING (auth.uid() = id);

-- PROJECTS: users own their projects
CREATE POLICY "projects_own" ON projects
  FOR ALL USING (auth.uid() = user_id);

-- CHARACTERS: accessible if you own the parent project
CREATE POLICY "characters_own" ON characters
  FOR ALL USING (
    project_id IN (
      SELECT id FROM projects WHERE user_id = auth.uid()
    )
  );

-- SCENES: accessible if you own the parent project
CREATE POLICY "scenes_own" ON scenes
  FOR ALL USING (
    project_id IN (
      SELECT id FROM projects WHERE user_id = auth.uid()
    )
  );

-- PLOT_HOLES: accessible if you own the parent project
CREATE POLICY "plot_holes_own" ON plot_holes
  FOR ALL USING (
    project_id IN (
      SELECT id FROM projects WHERE user_id = auth.uid()
    )
  );

-- THEMES: accessible if you own the parent project
CREATE POLICY "themes_own" ON themes
  FOR ALL USING (
    project_id IN (
      SELECT id FROM projects WHERE user_id = auth.uid()
    )
  );

-- IDEAS: users own their ideas
CREATE POLICY "ideas_own" ON ideas
  FOR ALL USING (auth.uid() = user_id);

-- SESSION_BEATS: accessible if you own the parent project
CREATE POLICY "session_beats_own" ON session_beats
  FOR ALL USING (
    project_id IN (
      SELECT id FROM projects WHERE user_id = auth.uid()
    )
  );

-- ── 11. UPDATED_AT TRIGGER ───────────────────────────────────
-- Auto-update updated_at on any row change

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_updated_at ON profiles;
DROP TRIGGER IF EXISTS set_updated_at ON projects;

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ── DONE ─────────────────────────────────────────────────────
-- To verify: SELECT column_name FROM information_schema.columns
-- WHERE table_name = 'profiles' ORDER BY ordinal_position;
