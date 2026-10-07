import type { Metadata } from "next";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import TarjetaColegio from "@/components/TarjetaColegio";
import Revelar from "@/components/Revelar";
import {
  historia,
  hitos,
  mision,
  organigrama,
  valores,
  vision,
} from "@/data/colegio";

export const metadata: Metadata = {
  title: "Colegio",
};

export default function Colegio() {
  return (
    <>
      <Revelar>
        <EncabezadoPagina
          etiqueta="Colegio"
          titulo="Quiénes somos"
          descripcion="Colegio de Controladores de Tránsito Aéreo de México, fundado el 16 de marzo de 2006."
        />
      </Revelar>

      <section className="grid gap-10 lg:grid-cols-5">
        <Revelar className="lg:col-span-3">
          <div className="space-y-4 leading-relaxed text-slate-700">
            {historia.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>
        </Revelar>

        <Revelar retraso={150} className="lg:col-span-2">
          <aside className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
              Cronología
            </p>
            <ol className="mt-6 space-y-8 border-l border-slate-200 pl-6">
              {hitos.map((hito, i) => {
                const ultimo = i === hitos.length - 1;
                return (
                  <li key={hito.fecha} className="relative">
                    <Revelar retraso={300 + i * 250} className="origin-left">
                      <span className="absolute -left-[1.85rem] top-1.5 flex h-2.5 w-2.5">
                        {ultimo && (
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-600/60 motion-reduce:animate-none" />
                        )}
                        <span className="relative h-2.5 w-2.5 rounded-full bg-sky-600 ring-4 ring-white" />
                      </span>
                      <p className="text-xs font-medium uppercase tracking-widest text-sky-700">
                        {hito.fecha}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                        {hito.titulo}
                      </p>
                    </Revelar>
                  </li>
                );
              })}
            </ol>
          </aside>
        </Revelar>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-2">
        <Revelar className="h-full">
          <TarjetaColegio item={vision} />
        </Revelar>
        <Revelar retraso={150} className="h-full">
          <TarjetaColegio item={mision} />
        </Revelar>
      </section>

      <section className="mt-16">
        <Revelar className="origin-left">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900">
            <span className="h-6 w-1 rounded-full bg-sky-600" />
            Valores
          </h2>
        </Revelar>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {valores.map((valor, i) => (
            <Revelar
              key={valor.titulo}
              retraso={(i % 2) * 120}
              className="h-full"
            >
              <TarjetaColegio item={valor} />
            </Revelar>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <Revelar>
          <a
            href={organigrama.archivo}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:scale-[1.01] hover:border-slate-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:flex-row sm:items-center sm:justify-between sm:p-8"
          >
            <div className="flex items-center gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-50 group-hover:text-sky-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <rect x="16" y="16" width="6" height="6" rx="1" />
                  <rect x="2" y="16" width="6" height="6" rx="1" />
                  <rect x="9" y="2" width="6" height="6" rx="1" />
                  <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                  <path d="M12 12V8" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                  {organigrama.etiqueta}
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-800">
                  {organigrama.titulo}
                </p>
              </div>
            </div>

            <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 transition-colors duration-300 group-hover:border-sky-600 group-hover:bg-sky-600 group-hover:text-white sm:self-auto">
              Descargar PDF
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
                <path d="M12 4v12" />
                <path d="m6 11 6 6 6-6" />
                <path d="M5 20h14" />
              </svg>
            </span>
          </a>
        </Revelar>
      </section>
    </>
  );
}
