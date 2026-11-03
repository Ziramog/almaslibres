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
    id: 'cometa',
    slug: 'cometa',
    name: 'Cometa',
    photo: '/placeholders/horse-01.svg',
    alt: 'Ficha de Cometa en Fundación Almas Libres',
    shortDescription: 'Parte de las vidas que cuidamos día a día con amor y respeto en el santuario.',
    status: 'available',
    featured: true,
    displayOrder: 1,
    draft: false,
  },
  {
    id: 'maga',
    slug: 'maga',
    name: 'Maga',
    photo: '/placeholders/horse-02.svg',
    alt: 'Ficha de Maga en Fundación Almas Libres',
    shortDescription: 'Presencia dulce y tranquila dentro de la manada.',
    status: 'available',
    featured: true,
    displayOrder: 2,
    draft: false,
  },
  {
    id: 'soquetin',
    slug: 'soquetin',
    name: 'Soquetín',
    photo: '/placeholders/horse-03.svg',
    alt: 'Ficha de Soquetín en Fundación Almas Libres',
    shortDescription: 'Acompañado con constancia y dedicación en su proceso de cuidado.',
    status: 'available',
    featured: true,
    displayOrder: 3,
    draft: false,
  },
  {
    id: 'sabi-juniors',
    slug: 'sabi-juniors',
    name: 'Sabi Juniors',
    photo: '/placeholders/horse-04.svg',
    alt: 'Ficha de Sabi Juniors en Fundación Almas Libres',
    shortDescription: 'Lleno de energía y curiosidad compartiendo vida en libertad.',
    status: 'available',
    displayOrder: 4,
    draft: false,
  },
  {
    id: 'cachafaz',
    slug: 'cachafaz',
    name: 'Cachafaz',
    photo: '/placeholders/horse-05.svg',
    alt: 'Ficha de Cachafaz en Fundación Almas Libres',
    shortDescription: 'Un compañero noble que encuentra protección y paz en el santuario.',
    status: 'available',
    displayOrder: 5,
    draft: false,
  },
  {
    id: 'lucero',
    slug: 'lucero',
    name: 'Lucero',
    photo: '/placeholders/horse-06.svg',
    alt: 'Ficha de Lucero en Fundación Almas Libres',
    shortDescription: 'Una mirada luminosa que inspira nuestro compromiso diario.',
    status: 'available',
    displayOrder: 6,
    draft: false,
  },
  {
    id: 'charlie',
    slug: 'charlie',
    name: 'Charlie',
    photo: '/placeholders/horse-01.svg',
    alt: 'Ficha de Charlie en Fundación Almas Libres',
    shortDescription: 'Acompañando su bienestar y su vínculo con toda la manada.',
    status: 'available',
    displayOrder: 7,
    draft: false,
  },
  {
    id: 'almita',
    slug: 'almita',
    name: 'Almita',
    photo: '/placeholders/horse-02.svg',
    alt: 'Ficha de Almita en Fundación Almas Libres',
    shortDescription: 'El corazón del santuario reflejado en su ternura y calma.',
    status: 'available',
    displayOrder: 8,
    draft: false,
  },
  {
    id: 'maximo',
    slug: 'maximo',
    name: 'Máximo',
    photo: '/placeholders/horse-03.svg',
    alt: 'Ficha de Máximo en Fundación Almas Libres',
    shortDescription: 'Fuerte, sereno y siempre atento a sus compañeros.',
    status: 'available',
    displayOrder: 9,
    draft: false,
  },
  {
    id: 'amira',
    slug: 'amira',
    name: 'Amira',
    photo: '/placeholders/horse-04.svg',
    alt: 'Ficha de Amira en Fundación Almas Libres',
    shortDescription: 'Disfrutando del sol, el pasto y la vida sin exigencias.',
    status: 'available',
    displayOrder: 10,
    draft: false,
  },
  {
    id: 'chispita',
    slug: 'chispita',
    name: 'Chispita',
    photo: '/placeholders/horse-05.svg',
    alt: 'Ficha de Chispita en Fundación Almas Libres',
    shortDescription: 'Alegre, vivaz y querida por todos los que visitan el lugar.',
    status: 'available',
    displayOrder: 11,
    draft: false,
  },
  {
    id: 'wayra',
    slug: 'wayra',
    name: 'Wayra',
    photo: '/placeholders/horse-06.svg',
    alt: 'Ficha de Wayra en Fundación Almas Libres',
    shortDescription: 'Espíritu de viento que honra la libertad recuperada.',
    status: 'available',
    displayOrder: 12,
    draft: false,
  },
  {
    id: 'rumi',
    slug: 'rumi',
    name: 'Rumi',
    photo: '/placeholders/horse-01.svg',
    alt: 'Ficha de Rumi en Fundación Almas Libres',
    shortDescription: 'Paciencia, respeto y cuidado en cada etapa de su vida.',
    status: 'available',
    displayOrder: 13,
    draft: false,
  },
  {
    id: 'chimango',
    slug: 'chimango',
    name: 'Chimango',
    photo: '/placeholders/horse-02.svg',
    alt: 'Ficha de Chimango en Fundación Almas Libres',
    shortDescription: 'Un sobreviviente que hoy disfruta de la tranquilidad del santuario.',
    status: 'available',
    displayOrder: 14,
    draft: false,
  },
];

export const publicHorses = horses
  .filter((horse) => horse.status !== 'hidden')
  .sort((a, b) => a.displayOrder - b.displayOrder);

export const featuredHorses = publicHorses.filter((horse) => horse.featured).slice(0, 3);
