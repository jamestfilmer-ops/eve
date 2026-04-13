-- World elements table for the World Bible workspace tab
create table if not exists public.world_elements (
  id          uuid default gen_random_uuid() primary key,
  project_id  uuid not null references public.projects(id) on delete cascade,
  category    text not null,        -- factions | locations | politics | eras | culture | quirks
  name        text,                 -- denormalized from fields.name for quick display
  fields      jsonb default '{}',   -- all section-specific fields
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- Index for per-project queries
create index if not exists world_elements_project_id_idx on public.world_elements(project_id);

-- RLS: users can only see/edit their own project's world elements
alter table public.world_elements enable row level security;

create policy "Users can manage world elements of their own projects"
  on public.world_elements
  for all
  using (
    project_id in (
      select id from public.projects where user_id = auth.uid()
    )
  );
