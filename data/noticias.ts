import type { Noticia } from "@/types";

export const noticias: Noticia[] = [
  {
    slug: "comunicado-coctam-mayo-2022",
    fecha: "17/MAY/2022",
    titulo: "Comunicado",
    descripcion:
      "Comunicado de la COCTAM relacionado con el desarrollo y actividades de la entidad.",
    archivo: "/Comunicado COCTAM mayo 2022.pdf",
    color: "sky",
  },
  {
    slug: "preparados-para-ciertas-emergencias",
    fecha: "01/FEB/2019",
    titulo: "Preparados para ciertas emergencias",
    descripcion:
      "Primera parte del artículo de Fernando Barba M. sobre preparación para emergencias.",
    archivo: "/primera parte articulo de Fernando Barba.pdf",
    autor: "CTA. Fernando Barba M. México DF.",
    color: "slate",
  },
  {
    slug: "doctorado-honor-is-causa",
    fecha: "14/MAR/2017",
    titulo: "Doctorado Honoris Causa",
    descripcion:
      "Conferencia del Doctorado Honoris Causa otorgado a Luis Ramón Álvarez.",
    autor: "CTA Luis Ramón Álvarez México DF.",
    color: "sky",
    contenido: [
      "El Colegio de Controladores de Tránsito Aéreo de México felicita a nuestro compañero y amigo CTA Luis Ramón Álvarez, por haber obtenido con fecha 14 de marzo de 2017, de parte de la Universidad de España y México (UEM).",
      "El Doctorado Honoris Causa es un título honorífico que otorga una universidad a personas eminentes.",
      "Esta designación se otorga principalmente a personajes que han destacado en ciertos ámbitos profesionales y que no son necesariamente licenciados en una carrera.",
      "Históricamente, un Doctorado Honoris Causa recibe el mismo tratamiento y privilegios que aquellos que obtienen su doctorado académico de forma convencional, a menos que se especifique lo contrario.",
      "Honoris Causa (h.c.) es una locución latina cuyo significado es «por causa de honor». Se otorga como un honor, para reconocer el mérito y la valía de una persona.",
      "A continuación, se hace una reseña de las aportaciones del CTA Luis Ramón Álvarez a nuestro ámbito:",
      "• Cómo CTA ha contribuido en la ejecución del programa de estudio de la carrera de TSU/CTA.",
      "• Ha capacitado a todos los especialistas, formándolos como instructores, además de proponer toda la metodología para la elaboración de los manuales de la carrera de TSU/CTA, que requiere actualizarse.",
      "• Ha entrenado a CTAs, ingenieros, despachadores y meteorólogos de SENEAM como instructores desde 1995 a la fecha.",
      "• Ahora colabora con COCTAM para certificar a los CTAs como instructores y capacitadores.",
      "Para el Colegio es un orgullo contar con su valioso apoyo incondicional y agradecemos la experiencia que transmite en cada uno de los cursos que imparte en nuestras instalaciones; enhorabuena por tan importante logro.",
    ],
  },
];
