import type { GrupoRecursos } from "@/types";
import { organigrama } from "@/data/colegio";

export const gruposAsociados: GrupoRecursos[] = [
  {
    titulo: "Trámites",
    recursos: [
      {
        id: "titulacion",
        titulo: "Trámites de titulación",
        icono: "titulacion",
        descripcion:
          "Procedimiento para la obtención del Título y Cédula Profesional como Técnico Superior Universitario (TSU) Controlador de Tránsito Aéreo y Técnico Profesional (TP) Controlador de Tránsito Aéreo.",
        enlaces: [
          {
            etiqueta: "Descargar procedimiento",
            href: "/documentos/procedimiento-tramites-titulacion-feb-2020.pdf",
            tipo: "descarga",
          },
        ],
      },
      {
        id: "ifatca",
        titulo: "IFATCA",
        icono: "ifatca",
        descripcion:
          "Publicaciones de la Federación Internacional de Asociaciones de Controladores de Tránsito Aéreo.",
        enlaces: [
          {
            etiqueta:
              "Bulletin 5 – Occupational Health and Safety in the Context of COVID",
            href: "https://www.ifatca.org/2021/04/bulletin-5-ohs/",
            tipo: "externo",
          },
          {
            etiqueta: "New Issue of The Controller",
            href: "https://www.ifatca.org/2021/02/the-controller-2021_01/",
            tipo: "externo",
          },
        ],
      },
    ],
  },
  {
    titulo: "Descargas",
    recursos: [
      {
        id: "configuracion-correo",
        titulo: "Configuración de cuentas de correo",
        icono: "correo",
        descripcion:
          "Manual paso a paso para la configuración de cuentas de correo institucional en plataforma Android, iOS y Outlook.",
        enlaces: [
          {
            etiqueta: "Descargar manual",
            href: "/documentos/configuracion-correo.pdf",
            tipo: "descarga",
          },
        ],
      },
      {
        id: "acceso-webmail",
        titulo: "Acceso a cuentas de correo desde webmail",
        icono: "webmail",
        descripcion:
          "Manual para acceder a cuentas de correo institucional por medio del webmail.",
        enlaces: [
          {
            etiqueta: "Descargar manual",
            href: "/documentos/correo-webmail.pdf",
            tipo: "descarga",
          },
        ],
      },
    ],
  },
  {
    titulo: "Organigrama",
    recursos: [
      {
        id: "consejo-directivo",
        titulo: "Consejo Directivo COCTAM, A.C. 2026-2027",
        icono: "organigrama",
        enlaces: [
          {
            etiqueta: "Descargar organigrama",
            href: organigrama.archivo,
            tipo: "descarga",
          },
        ],
      },
    ],
  },
];
