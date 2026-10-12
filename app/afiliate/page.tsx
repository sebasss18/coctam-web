import type { Metadata } from "next";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import Revelar from "@/components/Revelar";
import TituloSeccion from "@/components/TituloSeccion";
import TarjetaBeneficios from "@/components/TarjetaBeneficios";
import TarjetaFormato from "@/components/TarjetaFormato";
import TarjetaPaso from "@/components/TarjetaPaso";
import {
  beneficios,
  documentosRequeridos,
  formatos,
  pasosEnvio,
} from "@/data/afiliate";
import { redesSociales } from "@/data/enlaces";

export const metadata: Metadata = {
  title: "Afíliate",
};

export default function Afiliate() {
  return (
    <>
      <Revelar>
        <EncabezadoPagina
          etiqueta="Afíliate"
          titulo="Únete al Colegio"
          descripcion="Conoce los beneficios de ser agremiado y los requisitos para afiliarte."
        />
      </Revelar>

      <section>
        <Revelar className="origin-left">
          <TituloSeccion>Beneficios</TituloSeccion>
        </Revelar>
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {beneficios.map((grupo, i) => (
            <Revelar
              key={grupo.titulo}
              retraso={i * 120}
              className="h-full min-w-0"
            >
              <TarjetaBeneficios grupo={grupo} />
            </Revelar>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <Revelar className="origin-left">
          <TituloSeccion>Requisitos</TituloSeccion>
        </Revelar>
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Revelar className="h-full min-w-0">
            <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                Formatos a llenar
              </p>
              <ul className="mt-5 space-y-3">
                {formatos.map((formato) => (
                  <TarjetaFormato key={formato.id} formato={formato} />
                ))}
              </ul>
            </div>
          </Revelar>

          <Revelar retraso={120} className="h-full min-w-0">
            <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                Documentos a anexar
              </p>
              <ul className="mt-5 space-y-4">
                {documentosRequeridos.map((documento) => (
                  <li
                    key={documento}
                    className="flex gap-3 text-sm leading-relaxed text-slate-700"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-sky-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {documento}
                  </li>
                ))}
              </ul>
            </div>
          </Revelar>
        </div>
      </section>

      <section className="mt-16">
        <Revelar className="origin-left">
          <TituloSeccion>¿Cómo enviar tus documentos?</TituloSeccion>
        </Revelar>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {pasosEnvio.map((paso, i) => (
            <Revelar
              key={paso.titulo}
              retraso={i * 120}
              className="h-full min-w-0"
            >
              <TarjetaPaso paso={paso} numero={i + 1} />
            </Revelar>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <Revelar>
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                Medios de información
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Página oficial: coctam.org.mx. Contáctanos también por redes
                sociales.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {redesSociales.map((red) => (
                <li key={red.href}>
                  <a
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 transition-colors duration-300 hover:border-sky-600 hover:bg-sky-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    {red.etiqueta}
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
                </li>
              ))}
            </ul>
          </div>
        </Revelar>
      </section>
    </>
  );
}
