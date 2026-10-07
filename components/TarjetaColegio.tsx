"use client";

import type { ItemColegio } from "@/types";
import IconoColegio from "@/components/IconoColegio";
import CapaBrillo from "@/components/CapaBrillo";
import { moverBrillo } from "@/lib/brillo";

export default function TarjetaColegio({ item }: { item: ItemColegio }) {
  return (
    <article
      onMouseMove={moverBrillo}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:border-slate-300 hover:shadow-md"
    >
      <CapaBrillo />

      <div className="relative flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-50 group-hover:text-sky-600">
          <IconoColegio nombre={item.icono} />
        </span>
        <h3 className="text-base font-semibold text-slate-800">
          {item.titulo}
        </h3>
      </div>
      <p className="relative mt-4 text-sm leading-relaxed text-slate-600">
        {item.descripcion}
      </p>
    </article>
  );
}
