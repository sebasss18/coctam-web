interface EncabezadoPaginaProps {
  etiqueta?: string;
  titulo: string;
  descripcion?: string;
}

export default function EncabezadoPagina({
  etiqueta,
  titulo,
  descripcion,
}: EncabezadoPaginaProps) {
  return (
    <header className="mb-10 border-b border-slate-200 pb-8">
      {etiqueta && (
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
          {etiqueta}
        </p>
      )}
      <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
        {titulo}
      </h1>
      {descripcion && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          {descripcion}
        </p>
      )}
    </header>
  );
}
