-- ========================================================
-- Fundación Almas Libres - Esquema de Base de Datos Supabase
-- Gestión de Padrinazgo Equino y Reportes Mensuales
-- ========================================================

-- 1. Tabla de Padrinos
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

-- 2. Tabla de Reportes Mensuales Enviados
-- Registra para cada padrino, año y mes si el reporte fue tildado/enviado
create table if not exists public.reportes_mensuales (
  id uuid primary key default gen_random_uuid(),
  padrino_id uuid not null references public.padrinos(id) on delete cascade,
  anio int not null,
  mes int not null check (mes between 1 and 12),
  enviado boolean not null default true,
  updated_at timestamptz not null default now(),
  constraint padrino_anio_mes_unique unique (padrino_id, anio, mes)
);

-- Índices para búsqueda rápida
create index if not exists idx_padrinos_caballo on public.padrinos(caballo_id);
create index if not exists idx_padrinos_estado on public.padrinos(estado);
create index if not exists idx_reportes_padrino_anio on public.reportes_mensuales(padrino_id, anio);

-- 3. Habilitar Row Level Security (RLS)
alter table public.padrinos enable row level security;
alter table public.reportes_mensuales enable row level security;

-- Políticas de acceso para clave pública anónima (para uso interno de la app)
create policy "Acceso total a padrinos para clave anon"
  on public.padrinos
  for all
  using (true)
  with check (true);

create policy "Acceso total a reportes para clave anon"
  on public.reportes_mensuales
  for all
  using (true)
  with check (true);
