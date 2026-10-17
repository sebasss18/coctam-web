"use client";

import type { GrupoBeneficios } from "@/types";
import IconoAfiliacion from "@/components/icons/IconoAfiliacion";
import CapaBrillo from "@/components/effects/CapaBrillo";
import { moverBrillo } from "@/lib/brillo";

export default function TarjetaBeneficios({
  grupo,
}: {
  grupo: GrupoBeneficios;
}) {
  return (
    <article
      onMouseMove={moverBrillo}
      className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:scale-[1.01] hover:border-slate-300 hover:shadow-md sm:p-8"
    >
      <CapaBrillo />

      <div className="relative flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-50 group-hover:text-sky-600">
          <IconoAfiliacion nombre={grupo.icono} />
        </span>
        <h3 className="text-lg font-semibold text-slate-800">{grupo.titulo}</h3>
      </div>

      <ul className="relative mt-6 space-y-4">
        {grupo.items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-slate-600"
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
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
