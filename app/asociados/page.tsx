import type { Metadata } from "next";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import Revelar from "@/components/Revelar";
import TarjetaRecurso from "@/components/TarjetaRecurso";
import { gruposAsociados } from "@/data/asociados";

export const metadata: Metadata = {
  title: "Asociados",
};

export default function Asociados() {
  return (
    <>
      <Revelar>
        <EncabezadoPagina
          etiqueta="Asociados"
          titulo="Trámites y recursos"
          descripcion="Descarga aplicaciones e información de interés."
        />
      </Revelar>

      {gruposAsociados.map((grupo, g) => (
        <section key={grupo.titulo} className={g > 0 ? "mt-16" : undefined}>
          <Revelar className="origin-left">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900">
              <span className="h-6 w-1 rounded-full bg-sky-600" />
              {grupo.titulo}
            </h2>
          </Revelar>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {grupo.recursos.map((recurso, i) => (
              <Revelar
                key={recurso.id}
                retraso={(i % 2) * 120}
                className="h-full"
              >
                <TarjetaRecurso recurso={recurso} />
              </Revelar>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
