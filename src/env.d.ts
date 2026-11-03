/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL?: string;
  readonly PUBLIC_SUPABASE_ANON_KEY?: string;
  readonly PUBLIC_ADMIN_PIN?: string;
  readonly PUBLIC_ALMAS_IS_PREVIEW?: string;
  readonly PUBLIC_ALMAS_WHATSAPP_NUMBER?: string;
  readonly PUBLIC_ALMAS_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
