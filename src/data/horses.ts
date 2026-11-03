export type HorseStatus = 'available' | 'paused' | 'hidden';

export type Horse = {
  id: string;
  slug: string;
  name: string;
  photo: string;
  alt: string;
  shortDescription: string;
  extendedDescription?: string;
  status: HorseStatus;
  featured?: boolean;
  displayOrder: number;
  draft: boolean;
};

export const horses: Horse[] = [
  {
    id: 'horse-01',
    slug: 'horse-01',
    name: '[Nombre a confirmar]',
    photo: '/placeholders/horse-01.svg',
    alt: 'Placeholder editorial para una ficha de caballo pendiente de fotografía real autorizada.',
    shortDescription: 'Parte de las vidas que hoy cuidamos con compromiso y constancia.',
    extendedDescription:
      'Ficha de maqueta para validar el diseño. La historia, datos y fotografía real deben ser confirmados por Anne o Magalí antes de publicar.',
    status: 'available',
    featured: true,
    displayOrder: 1,
    draft: true,
  },
  {
    id: 'horse-02',
    slug: 'horse-02',
    name: '[Nombre a confirmar]',
    photo: '/placeholders/horse-02.svg',
    alt: 'Placeholder editorial para una ficha de caballo pendiente de fotografía real autorizada.',
    shortDescription: 'Una presencia dentro de la manada, acompañada con respeto y cuidado.',
    extendedDescription:
      'Ficha de maqueta para probar el detalle accesible y el CTA de padrinazgo sin inventar datos reales.',
    status: 'available',
    featured: true,
    displayOrder: 2,
    draft: true,
  },
  {
    id: 'horse-03',
    slug: 'horse-03',
    name: '[Nombre a confirmar]',
    photo: '/placeholders/horse-03.svg',
    alt: 'Placeholder editorial para una ficha de caballo pendiente de fotografía real autorizada.',
    shortDescription: 'Una de las vidas que encuentran protección y libertad posible en Almas Libres.',
    extendedDescription:
      'Ficha borrador. No incluye edad, sexo, historia de rescate ni condición médica porque esos datos no están confirmados.',
    status: 'available',
    featured: true,
    displayOrder: 3,
    draft: true,
  },
  {
    id: 'horse-04',
    slug: 'horse-04',
    name: '[Nombre a confirmar]',
    photo: '/placeholders/horse-04.svg',
    alt: 'Placeholder editorial para una ficha de caballo pendiente de fotografía real autorizada.',
    shortDescription: 'Cada caballo necesita una red que lo sostenga con responsabilidad.',
    extendedDescription:
      'Registro de prueba para comprobar orden, estado y composición visual de la grilla.',
    status: 'available',
    displayOrder: 4,
    draft: true,
  },
  {
    id: 'horse-05',
    slug: 'horse-05',
    name: '[Nombre a confirmar]',
    photo: '/placeholders/horse-05.svg',
    alt: 'Placeholder editorial para una ficha de caballo pendiente de fotografía real autorizada.',
    shortDescription: 'Acompañar esta vida es también fortalecer la construcción del santuario.',
    extendedDescription:
      'Ficha de maqueta preparada para ser reemplazada por datos reales autorizados.',
    status: 'available',
    displayOrder: 5,
    draft: true,
  },
  {
    id: 'horse-06',
    slug: 'horse-06',
    name: '[Nombre a confirmar]',
    photo: '/placeholders/horse-06.svg',
    alt: 'Placeholder editorial para una ficha de caballo pendiente de fotografía real autorizada.',
    shortDescription: 'Tu padrinazgo transforma sensibilidad en ayuda concreta.',
    extendedDescription:
      'Registro borrador para validar el sexto caso de la grilla sin publicar información inventada.',
    status: 'available',
    displayOrder: 6,
    draft: true,
  },
];

export const publicHorses = horses
  .filter((horse) => horse.status !== 'hidden')
  .sort((a, b) => a.displayOrder - b.displayOrder);

export const featuredHorses = publicHorses.filter((horse) => horse.featured).slice(0, 3);
