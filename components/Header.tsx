"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navegacion } from "@/data/enlaces";

export default function Header() {
  const ruta = usePathname();
  const [abierto, setAbierto] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [rutaPrevia, setRutaPrevia] = useState(ruta);
  const [linea, setLinea] = useState({ left: 0, width: 0, visible: false });
  const enlacesRef = useRef<Record<string, HTMLAnchorElement | null>>({});

  if (ruta !== rutaPrevia) {
    setRutaPrevia(ruta);
    setAbierto(false);
  }

  const cerrar = () => setAbierto(false);

  const estaActivo = useCallback(
    (href: string) => (href === "/" ? ruta === "/" : ruta.startsWith(href)),
    [ruta],
  );

  useLayoutEffect(() => {
    const medir = () => {
      const activo = navegacion.find((item) => estaActivo(item.href));
      const el = activo ? enlacesRef.current[activo.href] : null;
      if (!el) {
        setLinea((p) => ({ ...p, visible: false }));
        return;
      }
      setLinea({
        left: el.offsetLeft + 16,
        width: el.offsetWidth - 32,
        visible: true,
      });
    };
    medir();
    window.addEventListener("resize", medir);
    return () => window.removeEventListener("resize", medir);
  }, [ruta, estaActivo]);

  useEffect(() => {
    const alScroll = () => setScroll(window.scrollY > 8);
    alScroll();
    window.addEventListener("scroll", alScroll, { passive: true });
    return () => window.removeEventListener("scroll", alScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";

    const alTecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    const alRedimensionar = () => {
      if (window.innerWidth >= 768) setAbierto(false);
    };

    window.addEventListener("keydown", alTecla);
    window.addEventListener("resize", alRedimensionar);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", alTecla);
      window.removeEventListener("resize", alRedimensionar);
    };
  }, [abierto]);

  return (
    <>
      <div
        onClick={cerrar}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          abierto ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <header
        className={`sticky top-0 z-50 bg-slate-900/90 text-white backdrop-blur-md transition-shadow duration-300 ${
          scroll ? "shadow-lg shadow-black/30" : "shadow-none"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-500 ease-out ${
            scroll ? "h-14" : "h-20"
          }`}
        >
          <Link
            href="/"
            onClick={cerrar}
            className="flex items-center text-lg font-bold tracking-widest"
          >
            <span
              className={`block shrink-0 overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 ease-out motion-reduce:transition-none ${
                scroll
                  ? "mr-0 h-0 w-0 scale-50 opacity-0"
                  : "mr-3 h-12 w-12 scale-100 opacity-100"
              }`}
            >
              <Image
                src="/logos/coctam-logo.jpeg"
                alt=""
                width={96}
                height={96}
                priority
                className="h-full w-full object-contain p-0.5"
              />
            </span>
            <span
              className={`block shrink-0 rounded-full bg-sky-600 transition-all duration-500 ease-out motion-reduce:transition-none ${
                scroll
                  ? "mr-2 h-2 w-2 scale-100 opacity-100"
                  : "mr-0 h-0 w-0 scale-0 opacity-0"
              }`}
            />
            COCTAM
          </Link>

          <ul className="relative hidden items-center md:flex">
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute bottom-1 h-0.5 rounded-full bg-sky-500 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${
                linea.visible ? "opacity-100" : "opacity-0"
              }`}
              style={{ left: linea.left, width: linea.width }}
            />
            {navegacion.map((item) => {
              const activo = estaActivo(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    ref={(el) => {
                      enlacesRef.current[item.href] = el;
                    }}
                    aria-current={activo ? "page" : undefined}
                    className={`block px-4 py-2 text-sm transition-colors duration-300 ${
                      activo ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.etiqueta}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg transition-colors md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  abierto ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-white transition-all duration-300 ${
                  abierto ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  abierto
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "top-full -translate-y-full"
                }`}
              />
            </span>
          </button>
        </nav>

        <div
          id="menu-movil"
          inert={!abierto}
          className={`grid transition-all duration-300 ease-out md:hidden ${
            abierto
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <ul className="overflow-hidden px-4">
            {navegacion.map((item, i) => {
              const activo = estaActivo(item.href);
              return (
                <li
                  key={item.href}
                  style={{ transitionDelay: abierto ? `${i * 45}ms` : "0ms" }}
                  className={`transition-all duration-300 ${
                    abierto
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-2 opacity-0"
                  }`}
                >
                  <Link
                    href={item.href}
                    onClick={cerrar}
                    aria-current={activo ? "page" : undefined}
                    className={`block px-1 py-3 text-base transition-colors duration-200 ${
                      activo ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.etiqueta}
                  </Link>
                </li>
              );
            })}
            <li className="h-4" />
          </ul>
        </div>
      </header>
    </>
  );
}
