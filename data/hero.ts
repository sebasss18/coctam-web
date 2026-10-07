import type { SlideHero } from "@/types";

export const slidesHero: SlideHero[] = [
  {
    id: "registro",
    etiqueta: "XXI AGA · Cancún 2026",
    titulo: "Registro 21ª AGA CUN 2026",
    descripcion: "Accede al sistema de registro del evento.",
    fondo: "from-slate-900 via-slate-800 to-sky-900",
    cta: {
      etiqueta: "Registrarme",
      href: "http://www.coctam.net/rooming_system/",
      externo: true,
    },
  },
  {
    id: "informacion",
    etiqueta: "XXI AGA · Cancún 2026",
    titulo: "Información general 21ª AGA CUN 2026",
    descripcion: "Consulta todos los detalles del evento en un solo lugar.",
    fondo: "from-slate-900 via-sky-950 to-slate-800",
    cta: {
      etiqueta: "Ver información",
      href: "https://coctam.org.mx/AGA%202026/INFORMACION%20GENERAL/informacion.html",
      externo: true,
    },
  },
  {
    id: "convocatorias",
    etiqueta: "Consejo Directivo",
    titulo: "Convocatorias a cargos del Consejo Directivo",
    descripcion: "Revisa las convocatorias vigentes y participa.",
    fondo: "from-sky-950 via-slate-900 to-slate-800",
    cta: {
      etiqueta: "Ver convocatorias",
      href: "https://coctam.org.mx/AGA%202026/CONVOCATORIAS/convocatorias.html",
      externo: true,
    },
  },
];
