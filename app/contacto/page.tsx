import type { Metadata } from "next";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import Revelar from "@/components/Revelar";
import TarjetaContacto from "@/components/TarjetaContacto";
import TituloSeccion from "@/components/TituloSeccion";
import { datosContacto, mapaEmbed, mapaEnlace } from "@/data/contacto";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function Contacto() {
  return (
    <>
      <Revelar>
        <EncabezadoPagina
          etiqueta="Contacto"
          titulo="Contáctanos"
          descripcion="Visítanos en nuestras oficinas de la Ciudad de México o comunícate por teléfono o WhatsApp."
        />
      </Revelar>

      <div className="grid gap-10 lg:grid-cols-2">
        <section>
          <Revelar className="origin-left">
            <TituloSeccion>Datos de contacto</TituloSeccion>
          </Revelar>
          <div className="mt-6 space-y-4">
            {datosContacto.map((dato, i) => (
              <Revelar key={dato.id} retraso={i * 80}>
                <TarjetaContacto dato={dato} />
              </Revelar>
            ))}
          </div>
        </section>

        <section>
          <Revelar className="origin-left">
            <TituloSeccion>Ubicación</TituloSeccion>
          </Revelar>
          <Revelar retraso={100}>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <div className="aspect-4/3">
                <iframe
                  title="Ubicación de COCTAM en Google Maps"
                  src={mapaEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>
            <a
              href={mapaEnlace}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 transition-colors duration-300 hover:border-sky-600 hover:bg-sky-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Abrir en Google Maps
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </a>
          </Revelar>
        </section>
      </div>
    </>
  );
}
