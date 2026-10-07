import Link from "next/link";
import type { Noticia } from "@/types";
import Revelar from "@/components/Revelar";

interface NoticiasCardProps {
  noticia: Noticia;
  retraso?: number;
}

function IconoDocumento() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-8 w-8"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h5" />
    </svg>
  );
}

function IconoArrow() {
  return (
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
  );
}

export default function NoticiasCard({
  noticia,
  retraso = 0,
}: NoticiasCardProps) {
  return (
    <Revelar retraso={retraso} className="h-full">
      <Link
        href={`/noticias/${noticia.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        <div
          className={`flex h-40 items-center justify-center ${
            noticia.color === "sky"
              ? "bg-sky-50 text-sky-700"
              : "bg-slate-100 text-slate-700"
          }`}
        >
          <div className="flex h-24 w-20 items-center justify-center rounded-xl border border-current/20 bg-white/70 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <IconoDocumento />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            {noticia.fecha}
          </p>
          <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900">
            {noticia.titulo}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {noticia.descripcion}
          </p>

          {noticia.autor && (
            <p className="mt-5 text-sm font-medium text-slate-700">
              {noticia.autor}
            </p>
          )}

          <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-slate-900 transition-colors duration-200 group-hover:text-sky-700">
            {noticia.archivo ? "Ver noticia y documento" : "Leer noticia"}
            <IconoArrow />
          </span>
        </div>
      </Link>
    </Revelar>
  );
}
