import type { DatoContacto } from "@/types";

export const mapaEmbed =
  "https://maps.google.com/maps?q=19.43093,-99.094578&z=16&hl=es&output=embed";

export const mapaEnlace =
  "https://www.google.com/maps/search/?api=1&query=19.43093,-99.094578";

export const datosContacto: DatoContacto[] = [
  {
    id: "direccion",
    etiqueta: "Dirección",
    valor:
      "Oriente 172 No. 189, Col. Moctezuma 2da. Sección, Alcaldía Venustiano Carranza, C.P. 15530, Ciudad de México",
    href: mapaEnlace,
    icono: "ubicacion",
    externo: true,
  },
  {
    id: "telefono-1",
    etiqueta: "Teléfono",
    valor: "55 5571-2533",
    href: "tel:+525555712533",
    icono: "telefono",
    externo: false,
  },
  {
    id: "telefono-2",
    etiqueta: "Teléfono",
    valor: "55 2643-0202",
    href: "tel:+525526430202",
    icono: "telefono",
    externo: false,
  },
  {
    id: "whatsapp",
    etiqueta: "WhatsApp",
    valor: "55 1959 6995",
    href: "https://wa.me/525519596995",
    icono: "whatsapp",
    externo: true,
  },
];
