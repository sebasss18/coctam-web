import Link from "next/link";
import { cacheLife } from "next/cache";
import { navegacion, redesSociales } from "@/data/enlaces";

export default async function Footer() {
  "use cache";
  cacheLife("days");

  const anio = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-900 text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 text-lg font-bold tracking-widest text-white">
            <span className="h-2 w-2 rounded-full bg-sky-600" />
            COCTAM
          </div>
          <p className="mt-3 text-sm leading-relaxed">
            Colegio de Controladores de Tránsito Aéreo de México. Fundado el 16
            de marzo de 2006.
          </p>
        </div>

        <nav aria-label="Navegación del pie de página">
          <h2 className="text-xs font-medium uppercase tracking-widest text-slate-500">
            Navegación
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navegacion.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {item.etiqueta}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-medium uppercase tracking-widest text-slate-500">
            Síguenos
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {redesSociales.map((red) => (
              <li key={red.href}>
                <a
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-white"
                >
                  {red.etiqueta}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {anio} COCTAM. Todos los derechos reservados.</p>
          <a
            href="/documentos/aviso-de-privacidad.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white"
          >
            Aviso de privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
