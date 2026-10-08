export interface Enlace {
  etiqueta: string;
  href: string;
}

export interface Convenio {
  id: string;
  titulo: string;
  archivo: string;
  logo: string;
  ajuste?: "contain" | "cover";
}

export interface Video {
  titulo: string;
  href: string;
  logo: string;
  creditos: { rol: string; nombre: string }[];
}

export interface Acceso {
  titulo: string;
  descripcion: string;
  etiqueta: string;
  href: string;
  externo: boolean;
}

export type NombreIcono =
  | "miembros"
  | "sistema"
  | "webmail"
  | "asociados"
  | "blog";

export interface Acceso {
  titulo: string;
  descripcion: string;
  etiqueta: string;
  href: string;
  externo: boolean;
  icono: NombreIcono;
}

export interface SlideHero {
  id: string;
  etiqueta: string;
  titulo: string;
  descripcion: string;
  fondo: string;
  cta: {
    etiqueta: string;
    href: string;
    externo: boolean;
  };
}

export type NombreIconoColegio =
  | "superacion"
  | "responsabilidad"
  | "critica"
  | "comunicacion"
  | "vision"
  | "mision";

export interface ItemColegio {
  titulo: string;
  descripcion: string;
  icono: NombreIconoColegio;
}

export interface Noticia {
  slug: string;
  fecha: string;
  titulo: string;
  descripcion?: string;
  archivo?: string;
  autor?: string;
  color: "sky" | "slate";
  contenido?: string[];
}

export type NombreIconoRecurso =
  | "titulacion"
  | "ifatca"
  | "correo"
  | "webmail"
  | "organigrama";

export interface EnlaceRecurso {
  etiqueta: string;
  href: string;
  tipo: "descarga" | "externo";
}

export interface Recurso {
  id: string;
  titulo: string;
  descripcion?: string;
  icono: NombreIconoRecurso;
  enlaces: EnlaceRecurso[];
}

export interface GrupoRecursos {
  titulo: string;
  recursos: Recurso[];
}

export interface Asamblea {
  slug: string;
  anio: number;
  edicion: string;
  sede: string;
  codigo: string;
  imagen: string;
  lugar?: string;
  fecha?: string;
}
