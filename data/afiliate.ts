import type { Formato, GrupoBeneficios, PasoEnvio } from "@/types";

export const beneficios: GrupoBeneficios[] = [
  {
    titulo: "Beneficios profesionales",
    icono: "profesional",
    items: [
      "Reconocimiento del Controlador Aéreo de México en el medio aeronáutico a nivel nacional e internacional.",
      "Asesoría y apoyo en el trámite de titulación y cédula como TSU CTA ante la SEP nivel medio superior.",
      "Reuniones de trabajo con la SEP para lograr en un futuro la validez de Profesión a nivel Superior.",
      "Acceso a cursos, seminarios, talleres y sesiones de trabajo con temas de actualidad y relacionados con los servicios de tránsito aéreo durante la Asamblea General de Asociados.",
      "Acceso a cursos, seminarios y talleres con temas de actualidad en la aviación en organizaciones aeronáuticas (OACI, DGAC, IFATCA, ASPA, CIMA).",
      "Acceso trimestral a la revista “The Controller” en cada estación, emitida por IFATCA, con información actualizada en temas de tránsito aéreo.",
    ],
  },
  {
    titulo: "Previsión social y servicios electrónicos",
    icono: "prevision",
    items: [
      "Fondo de seguridad social (fondo de ahorro para el retiro).",
      "Apoyos económicos (préstamo normal, préstamo deportivo, préstamo de emergencia y préstamo de Asamblea).",
      "Ayuda por defunción.",
      "Beneficio por cancelación de licencia.",
      "Premiación por años de servicio mediante la entrega de un reconocimiento en la Asamblea General de Asociados.",
      "Pago de hospedaje por una noche con un acompañante o dos noches en habitación compartida con otro premiado durante la asamblea.",
      "Acceso a correo electrónico personalizado con la terminación @coctam.org.mx.",
      "Acceso al Sistema de Administración para consultar información de préstamos vigentes, saldo del FSS y descarga de formatos.",
    ],
  },
];

export const formatos: Formato[] = [
  {
    id: "solicitud",
    titulo: "Solicitud de afiliación",
    archivo: "/documentos/formato-solicitud-de-afiliacion.pdf",
  },
  {
    id: "datos",
    titulo: "Datos del solicitante",
    archivo: "/documentos/formato-datos-del-solicitante.pdf",
  },
  {
    id: "descuento-fss",
    titulo: "Autorización de descuento del FSS",
    archivo: "/documentos/formato-autorizacion-descuento-del-fss.pdf",
  },
];

export const documentosRequeridos: string[] = [
  "Copia de certificado de estudios de controlador de tránsito aéreo",
  "Copia de la licencia de controlador (vigente)",
  "Copia de INE",
  "Copia de recibo de nómina o talón de pago SENEAM",
];

export const pasosEnvio: PasoEnvio[] = [
  {
    titulo: "Con tu Representante Local",
    descripcion: "Entrega tus documentos a tu Representante Local.",
    icono: "local",
  },
  {
    titulo: "Por paquetería",
    descripcion:
      "Calle Oriente 172 No. 189, Colonia Moctezuma 2ª sección, Alcaldía Venustiano Carranza, CP 15530, CDMX.",
    icono: "paqueteria",
  },
  {
    titulo: "Por correo electrónico",
    descripcion: "Envía tus documentos a cualquiera de estas direcciones:",
    icono: "correo",
    enlaces: [
      {
        etiqueta: "guadalupe.solis@coctam.org.mx",
        href: "mailto:guadalupe.solis@coctam.org.mx",
      },
      {
        etiqueta: "julio.sanchez@coctam.org.mx",
        href: "mailto:julio.sanchez@coctam.org.mx",
      },
    ],
  },
];
