"use client";

import Link from "next/link";
import type { Acceso } from "@/types";
import IconoAcceso from "@/components/IconoAcceso";
import CapaBrillo from "@/components/CapaBrillo";
import { moverBrillo } from "@/lib/brillo";

export default function TarjetaAcceso({ acceso }: { acceso: Acceso }) {
  const clases =
    "group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:scale-[1.02] hover:border-slate-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600";

  const contenido = (
    <>
      <CapaBrillo />
      <div className="relative flex flex-1 flex-col">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-50 group-hover:text-sky-600">
            <IconoAcceso nombre={acceso.icono} />
          </span>
          <h3 className="text-xs font-medium uppercase tracking-widest text-slate-400">
            {acceso.titulo}
          </h3>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
          {acceso.descripcion}
        </p>

        <span className="mt-5 flex items-center justify-between gap-3 text-sm font-medium text-slate-800">
          <span className="min-w-0 truncate">{acceso.etiqueta}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:scale-125 group-hover:text-sky-600"
          >
            {acceso.externo ? (
              <>
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </>
            ) : (
              <>
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </>
            )}
          </svg>
        </span>
      </div>
    </>
  );

  if (acceso.externo) {
    return (
      <a
        href={acceso.href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={moverBrillo}
        className={clases}
      >
        {contenido}
      </a>
    );
  }

  return (
    <Link href={acceso.href} onMouseMove={moverBrillo} className={clases}>
      {contenido}
    </Link>
  );
}
