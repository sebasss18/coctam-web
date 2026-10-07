import Link from "next/link";
import { accesos } from "@/data/enlaces";
import { convenios } from "@/data/convenios";
import { videoInstitucional } from "@/data/video";
import TarjetaAcceso from "@/components/TarjetaAcceso";
import ConvenioCard from "@/components/ConvenioCard";
import VideoCard from "@/components/VideoCard";
import HeroCarrusel from "@/components/HeroCarrusel";

export default function Home() {
  return (
    <>
      <HeroCarrusel />

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <section>
            <h1 className="text-3xl font-bold">Un poco sobre COCTAM</h1>
            <p className="mt-4 leading-relaxed text-slate-700">
              <strong>
                Colegio de Controladores de Tránsito Aéreo de México
              </strong>{" "}
              fue fundado el 16 de marzo de 2006. Es la entidad representante de
              todos los profesionistas del control de tránsito aéreo ante la
              sociedad mexicana, para el desarrollo y progreso de la aviación y
              del país.{" "}
              <Link href="/colegio" className="text-sky-700 hover:underline">
                Seguir leyendo
              </Link>
            </p>
          </section>

          <section className="mt-8 grid gap-4 sm:grid-cols-2">
            {accesos.map((acceso) => (
              <TarjetaAcceso key={acceso.titulo} acceso={acceso} />
            ))}
          </section>
        </div>

        <aside>
          <h2 className="text-2xl font-bold">Descargas</h2>
          <ul className="mt-4 space-y-3">
            {convenios.map((convenio) => (
              <ConvenioCard key={convenio.id} convenio={convenio} />
            ))}
            <VideoCard video={videoInstitucional} />
          </ul>
        </aside>
      </div>
    </>
  );
}
