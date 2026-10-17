import Image from "next/image";
import Link from "next/link";
import type { Asamblea } from "@/types";

export default function TarjetaAsamblea({ asamblea }: { asamblea: Asamblea }) {
  return (
    <Link
      href={`/galeria/${asamblea.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:scale-[1.02] hover:border-slate-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <Image
          src={asamblea.imagen}
          alt=""
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium tracking-widest text-white backdrop-blur-md">
          {asamblea.anio}
        </span>
      </div>

      <div className="flex flex-1 items-center justify-between gap-3 p-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-800">
            {asamblea.edicion} AGA · {asamblea.sede}
          </p>
          <p className="mt-0.5 text-xs tracking-widest text-slate-400">
            {asamblea.codigo}
          </p>
        </div>

        <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-slate-800 transition-colors duration-300 group-hover:text-sky-600">
          Ver fotos
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
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
