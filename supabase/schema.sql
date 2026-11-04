-- ========================================================
-- Fundación Almas Libres - Esquema Completo Supabase (Idempotente)
-- ========================================================

-- 1. Tabla de Manadas (Agrupación de Caballos)
create table if not exists public.manadas (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  descripcion text,
  color text default '#244137',
  created_at timestamptz not null default now()
);

-- 2. Tabla de Caballos (La Manada)
create table if not exists public.caballos (
  id uuid primary key default gen_random_uuid(),
  slug text,
  nombre text not null,
  foto text default '/placeholders/horse-01.svg',
  descripcion text,
  estado text not null default 'disponible' check (estado in ('disponible', 'pausado', 'oculto')),
  destacado boolean default false,
  manada_id uuid references public.manadas(id) on delete set null,
  manada_nombre text,
  created_at timestamptz not null default now()
);

-- Asegurar columnas manada_id y manada_nombre si la tabla ya existía
alter table public.caballos add column if not exists manada_id uuid references public.manadas(id) on delete set null;
alter table public.caballos add column if not exists manada_nombre text;

-- 3. Tabla de Padrinos
create table if not exists public.padrinos (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  caballo_id text not null,
  caballo_nombre text not null,
  fecha_inicio date not null default current_date,
  telefono text,
  email text,
  monto numeric,
  moneda text default 'ARS',
  estado text not null default 'activo' check (estado in ('activo', 'pausado', 'baja')),
  notas text,
  created_at timestamptz not null default now()
);

-- 4. Tabla de Reportes Mensuales Enviados (Ene - Dic)
create table if not exists public.reportes_mensuales (
  id uuid primary key default gen_random_uuid(),
  padrino_id uuid not null references public.padrinos(id) on delete cascade,
  anio int not null,
  mes int not null check (mes between 1 and 12),
  enviado boolean not null default true,
  updated_at timestamptz not null default now(),
  constraint padrino_anio_mes_unique unique (padrino_id, anio, mes)
);

-- 5. Índices para búsqueda rápida
create index if not exists idx_caballos_manada on public.caballos(manada_id);
create index if not exists idx_caballos_estado on public.caballos(estado);
create index if not exists idx_padrinos_caballo on public.padrinos(caballo_id);
create index if not exists idx_padrinos_estado on public.padrinos(estado);
create index if not exists idx_reportes_padrino_anio on public.reportes_mensuales(padrino_id, anio);

-- 6. Habilitar Seguridad (RLS)
alter table public.manadas enable row level security;
alter table public.caballos enable row level security;
alter table public.padrinos enable row level security;
alter table public.reportes_mensuales enable row level security;

-- 7. Políticas de Acceso
drop policy if exists "Acceso total a manadas para clave anon" on public.manadas;
create policy "Acceso total a manadas para clave anon"
  on public.manadas for all using (true) with check (true);

drop policy if exists "Acceso total a caballos para clave anon" on public.caballos;
create policy "Acceso total a caballos para clave anon"
  on public.caballos for all using (true) with check (true);

drop policy if exists "Acceso total a padrinos para clave anon" on public.padrinos;
create policy "Acceso total a padrinos para clave anon"
  on public.padrinos for all using (true) with check (true);

drop policy if exists "Acceso total a reportes para clave anon" on public.reportes_mensuales;
create policy "Acceso total a reportes para clave anon"
  on public.reportes_mensuales for all using (true) with check (true);

-- 8. Bucket de Almacenamiento de Fotos de Caballos (Supabase Storage)
insert into storage.buckets (id, name, public)
values ('caballos', 'caballos', true)
on conflict (id) do update set public = true;

drop policy if exists "Permitir subida de fotos de caballos" on storage.objects;
create policy "Permitir subida de fotos de caballos"
  on storage.objects for insert
  with check (bucket_id = 'caballos');

drop policy if exists "Lectura publica de fotos de caballos" on storage.objects;
create policy "Lectura publica de fotos de caballos"
  on storage.objects for select
  using (bucket_id = 'caballos');

drop policy if exists "Actualizacion de fotos de caballos" on storage.objects;
create policy "Actualizacion de fotos de caballos"
  on storage.objects for update
  using (bucket_id = 'caballos');

drop policy if exists "Eliminacion de fotos de caballos" on storage.objects;
create policy "Eliminacion de fotos de caballos"
  on storage.objects for delete
  using (bucket_id = 'caballos');
