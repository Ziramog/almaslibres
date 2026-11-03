# Fundación Almas Libres — MVP preview

Sitio institucional en Astro + TypeScript para Fundación Almas Libres.

## Estado

Preview local. No publicar como sitio oficial hasta validar datos institucionales, contacto, fotos, modelo de padrinazgo y medios de pago.

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Rutas

- `/` — home institucional
- `/apadrinar` — experiencia de padrinazgo equino

## Configuración

Copiar `.env.example` a `.env.local` cuando existan datos aprobados.

Variables públicas disponibles:

- `PUBLIC_ALMAS_WHATSAPP_NUMBER`
- `PUBLIC_ALMAS_EMAIL`
- `PUBLIC_ALMAS_PAYMENT_MODE` (`disabled`, `external`, `future-checkout`)
- `PUBLIC_ALMAS_DONATION_URL`
- `PUBLIC_ALMAS_SPONSORSHIP_URL`

No cargar secretos, tokens ni credenciales en variables `PUBLIC_*`.
