import type { PasoEnvio } from "@/types";
import IconoAfiliacion from "@/components/icons/IconoAfiliacion";

export default function TarjetaPaso({
  paso,
  numero,
}: {
  paso: PasoEnvio;
  numero: number;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
          <IconoAfiliacion nombre={paso.icono} />
        </span>
        <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
          Opción {numero}
        </span>
      </div>

      <h3 className="mt-5 text-base font-semibold text-slate-800">
        {paso.titulo}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {paso.descripcion}
      </p>

      {paso.enlaces && (
        <ul className="mt-4 space-y-2">
          {paso.enlaces.map((enlace) => (
            <li key={enlace.href}>
              <a
                href={enlace.href}
                className="break-all text-sm font-medium text-sky-700 hover:underline"
              >
                {enlace.etiqueta}
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
