import type { Metadata } from "next";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import Revelar from "@/components/Revelar";
import NoticiasCard from "@/components/NoticiasCard";
import { noticias } from "@/data/noticias";

export const metadata: Metadata = {
  title: "Noticias",
  description:
    "Noticias y comunicaciones del Colegio de Controladores de Tránsito Aéreo de México.",
};

export default function Noticias() {
  return (
    <>
      <Revelar>
        <EncabezadoPagina
          etiqueta="Noticias"
          titulo="¿Qué hay de nuevo?"
          descripcion="Encuentra las comunicaciones, documentos y novedades más recientes del Colegio."
        />
      </Revelar>

      <section aria-labelledby="ultimas-noticias">
        <Revelar>
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2
              id="ultimas-noticias"
              className="text-2xl font-bold text-slate-900"
            >
              Últimas noticias
            </h2>
            <span className="hidden text-sm text-slate-500 sm:block">
              {noticias.length} publicaciones
            </span>
          </div>
        </Revelar>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {noticias.map((noticia, indice) => (
            <NoticiasCard
              key={noticia.slug}
              noticia={noticia}
              retraso={indice * 120}
            />
          ))}
        </div>
      </section>

      <Revelar retraso={360}>
        <aside className="mt-12 rounded-2xl border border-sky-100 bg-sky-50 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            Atención
          </p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700">
            Los documentos se publican para facilitar el acceso a la información
            institucional. En caso de que un archivo no esté disponible,
            contacte a la dirección de la entidad para solicitarlo.
          </p>
        </aside>
      </Revelar>
    </>
  );
}
