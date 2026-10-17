import type { ReactNode } from "react";
import type { DatoContacto, NombreIconoContacto } from "@/types";

const trazos: Record<NombreIconoContacto, ReactNode> = {
  ubicacion: (
    <>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  telefono: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  whatsapp: (
    <>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
    </>
  ),
};

export default function TarjetaContacto({ dato }: { dato: DatoContacto }) {
  return (
    <a
      href={dato.href}
      target={dato.externo ? "_blank" : undefined}
      rel={dato.externo ? "noopener noreferrer" : undefined}
      className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:scale-[1.02] hover:border-slate-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-50 group-hover:text-sky-600">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-5 w-5"
        >
          {trazos[dato.icono]}
        </svg>
      </span>

      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
          {dato.etiqueta}
        </p>
        <p className="mt-1 text-sm font-medium leading-relaxed text-slate-800">
          {dato.valor}
        </p>
      </div>
    </a>
  );
}
