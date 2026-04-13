-- Add details JSONB column to characters for extended identity/psychology/background/craft fields
alter table public.characters
  add column if not exists details jsonb default '{}';
