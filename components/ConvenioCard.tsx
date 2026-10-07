import Image from "next/image";
import type { Convenio } from "@/types";

export default function ConvenioCard({ convenio }: { convenio: Convenio }) {
  const extension = convenio.archivo.split(".").pop()?.toUpperCase();
  const conFondo = convenio.ajuste === "cover";

  return (
    <li>
      <a
        href={convenio.archivo}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        <span
          className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-slate-200 ${
            conFondo ? "" : "p-2"
          }`}
        >
          <Image
            src={convenio.logo}
            alt=""
            width={112}
            height={112}
            className={`h-full w-full ${
              conFondo ? "object-cover" : "object-contain"
            }`}
          />
        </span>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-slate-800">
            {convenio.titulo}
          </p>
          <p className="mt-0.5 text-xs text-slate-400">{extension}</p>
        </div>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-sky-600"
        >
          <path d="M12 4v12" />
          <path d="m6 11 6 6 6-6" />
          <path d="M5 20h14" />
        </svg>
      </a>
    </li>
  );
}
