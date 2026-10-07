import Link from "next/link";
import { accesos } from "@/data/enlaces";
import { convenios } from "@/data/convenios";
import { videoInstitucional } from "@/data/video";
import TarjetaAcceso from "@/components/TarjetaAcceso";
import ConvenioCard from "@/components/ConvenioCard";
import VideoCard from "@/components/VideoCard";
import HeroCarrusel from "@/components/HeroCarrusel";
import Revelar from "@/components/Revelar";

export default function Home() {
  return (
    <>
      <Revelar>
        <HeroCarrusel />
      </Revelar>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Revelar>
            <section>
              <h1 className="text-3xl font-bold">Un poco sobre COCTAM</h1>
              <p className="mt-4 leading-relaxed text-slate-700">
                <strong>
                  Colegio de Controladores de Tránsito Aéreo de México
                </strong>{" "}
                fue fundado el 16 de marzo de 2006. Es la entidad representante
                de todos los profesionistas del control de tránsito aéreo ante
                la sociedad mexicana, para el desarrollo y progreso de la
                aviación y del país.{" "}
                <Link href="/colegio" className="text-sky-700 hover:underline">
                  Seguir leyendo
                </Link>
              </p>
            </section>
          </Revelar>

          <section className="mt-8 grid gap-4 sm:grid-cols-2">
            {accesos.map((acceso, i) => (
              <Revelar
                key={acceso.titulo}
                retraso={(i % 2) * 120}
                className="h-full"
              >
                <TarjetaAcceso acceso={acceso} />
              </Revelar>
            ))}
          </section>
        </div>

        <aside>
          <Revelar>
            <h2 className="text-2xl font-bold">Descargas</h2>
          </Revelar>
          <ul className="mt-4 space-y-3">
            {convenios.map((convenio, i) => (
              <ConvenioCard
                key={convenio.id}
                convenio={convenio}
                retraso={i * 80}
              />
            ))}
            <VideoCard
              video={videoInstitucional}
              retraso={convenios.length * 80}
            />
          </ul>
        </aside>
      </div>
    </>
  );
}
