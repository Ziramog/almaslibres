export type SponsorStatus = 'activo' | 'pausado' | 'baja';
export type HorseStatus = 'disponible' | 'pausado' | 'oculto';

export interface Sponsor {
  id: string;
  nombre: string;
  caballo_id: string;
  caballo_nombre: string;
  fecha_inicio: string; // YYYY-MM-DD
  telefono?: string;
  email?: string;
  monto?: number;
  moneda?: string;
  estado: SponsorStatus;
  notas?: string;
  created_at?: string;
}

export interface HorseRecord {
  id: string;
  slug?: string;
  nombre: string;
  foto?: string;
  descripcion?: string;
  estado: HorseStatus;
  destacado?: boolean;
  created_at?: string;
}

export interface MonthlyReportRecord {
  id?: string;
  padrino_id: string;
  anio: number;
  mes: number; // 1 to 12
  enviado: boolean;
  updated_at?: string;
}

export const MONTH_NAMES = [
  'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
];
