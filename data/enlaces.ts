import type { Acceso, Enlace } from "@/types";

export const navegacion: Enlace[] = [
  { etiqueta: "Inicio", href: "/" },
  { etiqueta: "Colegio", href: "/colegio" },
  { etiqueta: "Noticias", href: "/noticias" },
  { etiqueta: "Asociados", href: "/asociados" },
  { etiqueta: "Galería", href: "/galeria" },
  { etiqueta: "Afíliate", href: "/afiliate" },
  { etiqueta: "Contacto", href: "/contacto" },
];

export const redesSociales: Enlace[] = [
  {
    etiqueta: "Facebook",
    href: "https://www.facebook.com/ColegiodeControladoresdeMexico",
  },
  { etiqueta: "X", href: "https://twitter.com/COCTAM" },
];

export const correoAgremiados = "agremados@coctam.org.mx".replace(
  "agremados",
  "agremiados",
);
export const accesos: Acceso[] = [
  {
    titulo: "Miembros",
    descripcion:
      "Para creación o recuperación de ID y/o contraseña, solicítalos enviando nombre y No. de Control a:",
    etiqueta: correoAgremiados,
    href: `mailto:${correoAgremiados}`,
    externo: false,
    icono: "miembros",
  },
  {
    titulo: "Sistema",
    descripcion: "Accede al sistema para revisar tu información.",
    etiqueta: "System V 1.0",
    href: "http://www.coctam.net/",
    externo: true,
    icono: "sistema",
  },
  {
    titulo: "Webmail",
    descripcion: "Revisa desde aquí tu correo electrónico.",
    etiqueta: "Webmail",
    href: "http://webmail.coctam.org.mx/",
    externo: true,
    icono: "webmail",
  },
  {
    titulo: "Asociados",
    descripcion: "Descarga aplicaciones e información de interés.",
    etiqueta: "Ir a asociados",
    href: "/asociados",
    externo: false,
    icono: "asociados",
  },
  {
    titulo: "Blog",
    descripcion:
      "Todo lo que quieres saber sobre el Seminario de Seguridad Aérea.",
    etiqueta: "Ir al blog",
    href: "https://coctam.blogspot.com/2018/05/en-acuerdo-con-la-1ra-jcd-del-coctam.html",
    externo: true,
    icono: "blog",
  },
];
