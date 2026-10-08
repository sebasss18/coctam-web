import type { Metadata } from "next";
import EncabezadoPagina from "@/components/EncabezadoPagina";
import Revelar from "@/components/Revelar";
import TarjetaAsamblea from "@/components/TarjetaAsamblea";
import { asambleas } from "@/data/galeria";

export const metadata: Metadata = {
  title: "Galería",
};

export default function Galeria() {
  const anios = asambleas.map((a) => a.anio);

  return (
    <>
      <Revelar>
        <EncabezadoPagina
          etiqueta="Galería"
          titulo="Asambleas COCTAM"
          descripcion={`Recorrido fotográfico por las asambleas del Colegio, de ${Math.min(
            ...anios,
          )} a ${Math.max(...anios)}.`}
        />
      </Revelar>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {asambleas.map((asamblea, i) => (
          <Revelar
            key={asamblea.anio}
            retraso={(i % 3) * 100}
            className="h-full"
          >
            <TarjetaAsamblea asamblea={asamblea} />
          </Revelar>
        ))}
      </div>
    </>
  );
}
