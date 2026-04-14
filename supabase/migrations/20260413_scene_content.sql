-- Add content column to scenes for actual drafted prose/script text
alter table public.scenes
  add column if not exists content text;
