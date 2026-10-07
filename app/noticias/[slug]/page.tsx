import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import Revelar from "@/components/Revelar";
import { noticias } from "@/data/noticias";

interface NoticiaProps {
  params: Promise<{ slug: string }>;
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
      className="h-12 w-12"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h5" />
    </svg>
  );
}

export function generateStaticParams() {
  return noticias.map((noticia) => ({ slug: noticia.slug }));
}

export async function generateMetadata({
  params,
}: NoticiaProps): Promise<Metadata> {
  const { slug } = await params;
  const noticia = noticias.find((item) => item.slug === slug);

  if (!noticia) return { title: "Noticia no encontrada" };

  return {
    title: noticia.titulo,
    description: noticia.descripcion,
  };
}

export default function PaginaNoticia(props: NoticiaProps) {
  return (
    <Suspense
      fallback={
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600">
          Cargando noticia…
        </div>
      }
    >
      <PaginaNoticiaContent {...props} />
    </Suspense>
  );
}

async function PaginaNoticiaContent({ params }: NoticiaProps) {
  const { slug } = await params;
  const noticia = noticias.find((item) => item.slug === slug);

  if (!noticia) notFound();

  return (
    <Revelar>
      <Link
        href="/noticias"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-sky-700"
      >
        ← Regresar a noticias
      </Link>

      <EncabezadoPagina
        etiqueta={noticia.fecha}
        titulo={noticia.titulo}
        descripcion={noticia.descripcion}
      />

      {noticia.contenido?.length ? (
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 sm:px-8">
            {noticia.autor && (
              <p className="text-sm font-medium text-slate-600">
                {noticia.autor}
              </p>
            )}
          </div>

          <div className="space-y-6 px-6 py-8 text-base leading-8 text-slate-700 sm:px-8">
            {noticia.contenido.map((parrafo, indice) => (
              <p key={`${noticia.slug}-${indice}`}>{parrafo}</p>
            ))}

            {noticia.archivo && (
              <a
                href={noticia.archivo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-xl hover:shadow-sky-700/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Descargar documento
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
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
              </a>
            )}
          </div>
        </article>
      ) : noticia.archivo ? (
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-5 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">
                Documento adjunto · PDF
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                Consulta el documento
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={noticia.archivo}
                download
                className="inline-flex items-center justify-center rounded-lg bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Descargar PDF
              </a>
              <a
                href={noticia.archivo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-sky-700 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Abrir en otra pestaña
              </a>
            </div>
          </div>

          <div className="bg-slate-100 p-2 sm:p-4">
            <iframe
              src={noticia.archivo}
              title={`Vista previa del documento: ${noticia.titulo}`}
              className="h-[75vh] min-h-[32rem] w-full rounded-lg border border-slate-200 bg-white"
            />
          </div>
          <p className="px-5 py-4 text-sm text-slate-500 sm:px-7">
            Si la vista previa no aparece en tu navegador, descarga el PDF o
            ábrelo en otra pestaña.
          </p>
        </section>
      ) : (
        <section className="overflow-hidden rounded-2xl border border-sky-200 bg-sky-50 shadow-sm">
          <div className="flex flex-col items-center justify-center px-6 py-14 text-center sm:px-10 sm:py-16">
            <span className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
              <IconoDocumento />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              documento disponible
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
              Descarga el documento asociado a esta noticia para consultar su
              contenido.
            </p>
            {noticia.archivo && (
              <a
                href={noticia.archivo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Descargar documento
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
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
              </a>
            )}
          </div>
        </section>
      )}
    </Revelar>
  );
}
