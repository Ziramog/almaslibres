import { siteConfig } from '@/data/siteConfig';

export const buildWhatsAppUrl = (message: string) => {
  const number = siteConfig.contact.whatsappNumber.trim();

  if (!number) {
    return '';
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

export const getContactHref = (message: string) => {
  const whatsappUrl = buildWhatsAppUrl(message);

  if (whatsappUrl) {
    return whatsappUrl;
  }

  if (siteConfig.contact.email) {
    return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent('Consulta Fundación Almas Libres')}&body=${encodeURIComponent(message)}`;
  }

  return '';
};

export const getDonationHref = () => {
  if (siteConfig.payments.donationUrl) {
    return siteConfig.payments.donationUrl;
  }

  return getContactHref('Hola, quiero recibir información para colaborar con Fundación Almas Libres.');
};

export const contactPendingLabel = 'Canal de contacto pendiente de confirmación';
export const paymentPendingLabel = 'Canal de donación pendiente de confirmación';
