"use client";

import type { Recurso } from "@/types";
import IconoRecurso from "@/components/IconoRecurso";
import CapaBrillo from "@/components/CapaBrillo";
import { moverBrillo } from "@/lib/brillo";

export default function TarjetaRecurso({ recurso }: { recurso: Recurso }) {
  return (
    <article
      onMouseMove={moverBrillo}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:border-slate-300 hover:shadow-md"
    >
      <CapaBrillo />

      <div className="relative flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-50 group-hover:text-sky-600">
          <IconoRecurso nombre={recurso.icono} />
        </span>
        <h3 className="text-base font-semibold text-slate-800">
          {recurso.titulo}
        </h3>
      </div>

      {recurso.descripcion && (
        <p className="relative mt-4 text-sm leading-relaxed text-slate-600">
          {recurso.descripcion}
        </p>
      )}

      <div className="relative mt-auto flex flex-wrap gap-2 pt-5">
        {recurso.enlaces.map((enlace) => (
          <a
            key={enlace.href}
            href={enlace.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-left text-sm font-medium text-slate-800 transition-colors duration-300 hover:border-sky-600 hover:bg-sky-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            {enlace.etiqueta}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
            >
              {enlace.tipo === "descarga" ? (
                <>
                  <path d="M12 4v12" />
                  <path d="m6 11 6 6 6-6" />
                  <path d="M5 20h14" />
                </>
              ) : (
                <>
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </>
              )}
            </svg>
          </a>
        ))}
      </div>
    </article>
  );
}
