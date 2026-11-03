export type PaymentMode = 'disabled' | 'external' | 'future-checkout';

const paymentModes: PaymentMode[] = ['disabled', 'external', 'future-checkout'];

const getPaymentMode = (value: string | undefined): PaymentMode => {
  if (value && paymentModes.includes(value as PaymentMode)) {
    return value as PaymentMode;
  }

  return 'external';
};

export const siteConfig = {
  name: 'Fundación Almas Libres',
  tagline: 'Un lugar para vivir con cuidado y libertad',
  isPreview: import.meta.env.PUBLIC_ALMAS_IS_PREVIEW !== 'false',
  contact: {
    whatsappNumber: import.meta.env.PUBLIC_ALMAS_WHATSAPP_NUMBER || '',
    email: import.meta.env.PUBLIC_ALMAS_EMAIL || '',
  },
  payments: {
    mode: getPaymentMode(import.meta.env.PUBLIC_ALMAS_PAYMENT_MODE),
    donationUrl: import.meta.env.PUBLIC_ALMAS_DONATION_URL || '',
    sponsorshipUrl: import.meta.env.PUBLIC_ALMAS_SPONSORSHIP_URL || '',
  },
  social: {
    instagramUrl: import.meta.env.PUBLIC_ALMAS_INSTAGRAM_URL || '',
    facebookUrl: import.meta.env.PUBLIC_ALMAS_FACEBOOK_URL || '',
  },
  nav: [
    { label: 'La Fundación', href: '/#fundacion' },
    { label: 'Qué hacemos', href: '/#que-hacemos' },
    { label: 'Apadrinar', href: '/apadrinar' },
    { label: 'Cómo ayudar', href: '/#ayudar' },
    { label: 'Transparencia', href: '/#transparencia' },
    { label: 'Contacto', href: '/#contacto' },
  ],
};
