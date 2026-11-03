import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (
  import.meta.env.PUBLIC_SUPABASE_URL ||
  (import.meta.env as any).SUPABASE_URL ||
  ''
).trim();

const supabaseAnonKey = (
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
  (import.meta.env as any).SUPABASE_ANON_KEY ||
  ''
).trim();

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl.startsWith('https://') &&
  !supabaseUrl.includes('tu-proyecto')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
