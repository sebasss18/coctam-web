import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import Revelar from "@/components/Revelar";
import { asambleas, tituloAsamblea } from "@/data/galeria";
import type { Asamblea } from "@/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return asambleas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const asamblea = asambleas.find((a) => a.slug === slug);
  if (!asamblea) return {};
  return { title: tituloAsamblea(asamblea) };
}

function EnlaceAsamblea({
  asamblea,
  direccion,
}: {
  asamblea: Asamblea;
  direccion: "anterior" | "siguiente";
}) {
  const siguiente = direccion === "siguiente";

  return (
    <Link
      href={`/galeria/${asamblea.slug}`}
      className={`group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:scale-[1.02] hover:border-slate-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 ${
        siguiente ? "flex-row-reverse text-right sm:col-start-2" : ""
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-slate-300 transition-colors duration-300 group-hover:text-sky-600"
      >
        <path d={siguiente ? "m9 18 6-6-6-6" : "m15 18-6-6 6-6"} />
      </svg>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
          {siguiente ? "Siguiente" : "Anterior"}
        </p>
        <p className="mt-1 truncate text-sm font-semibold text-slate-800">
          {asamblea.edicion} AGA · {asamblea.sede} {asamblea.anio}
        </p>
      </div>
    </Link>
  );
}

function EsqueletoAsamblea() {
  return (
    <div aria-hidden="true" className="animate-pulse">
      <div className="mb-8 h-4 w-20 rounded bg-slate-200" />
      <div className="h-3 w-32 rounded bg-slate-200" />
      <div className="mt-4 h-9 w-full max-w-xl rounded bg-slate-200" />
      <div className="mt-10 aspect-[2/1] w-full rounded-3xl bg-slate-200" />
    </div>
  );
}

async function ContenidoAsamblea({ params }: Props) {
  const { slug } = await params;
  const indice = asambleas.findIndex((a) => a.slug === slug);
  if (indice === -1) notFound();

  const asamblea = asambleas[indice];
  const masReciente: Asamblea | undefined = asambleas[indice - 1];
  const masAntigua: Asamblea | undefined = asambleas[indice + 1];
  const titulo = tituloAsamblea(asamblea);

  return (
    <>
      <Revelar>
        <Link
          href="/galeria"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors duration-200 hover:text-sky-600"
        >
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
            <path d="m15 18-6-6 6-6" />
          </svg>
          Galería
        </Link>

        <EncabezadoPagina etiqueta="Asambleas COCTAM" titulo={titulo} />

        <dl className="-mt-2 mb-8 flex flex-wrap gap-3">
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
            <dt className="text-xs font-medium uppercase tracking-widest text-slate-400">
              Sede
            </dt>
            <dd className="mt-1 text-sm font-medium text-slate-800">
              {asamblea.lugar ?? asamblea.sede}
            </dd>
          </div>
          {asamblea.fecha && (
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              <dt className="text-xs font-medium uppercase tracking-widest text-slate-400">
                Fecha
              </dt>
              <dd className="mt-1 text-sm font-medium text-slate-800">
                {asamblea.fecha}
              </dd>
            </div>
          )}
        </dl>
      </Revelar>

      <Revelar retraso={100}>
        <div className="overflow-hidden rounded-3xl bg-slate-100 shadow-xl shadow-sky-950/20 ring-1 ring-slate-200">
          <Image
            src={asamblea.imagen}
            alt={titulo}
            width={1800}
            height={900}
            priority
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </Revelar>

      <nav
        aria-label="Otras asambleas"
        className="mt-12 grid gap-4 sm:grid-cols-2"
      >
        {masAntigua && (
          <EnlaceAsamblea asamblea={masAntigua} direccion="anterior" />
        )}
        {masReciente && (
          <EnlaceAsamblea asamblea={masReciente} direccion="siguiente" />
        )}
      </nav>
    </>
  );
}

export default function PaginaAsamblea({ params }: Props) {
  return (
    <Suspense fallback={<EsqueletoAsamblea />}>
      <ContenidoAsamblea params={params} />
    </Suspense>
  );
}
