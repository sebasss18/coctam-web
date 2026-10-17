export default function TituloSeccion({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900">
      <span className="h-6 w-1 rounded-full bg-sky-600" />
      {children}
    </h2>
  );
}
