"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navegacion } from "@/data/enlaces";

export default function Header() {
  const ruta = usePathname();
  const [abierto, setAbierto] = useState(false);
  const [scroll, setScroll] = useState(false);

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

  const estaActivo = (href: string) =>
    href === "/" ? ruta === "/" : ruta.startsWith(href);

  return (
    <>
      <div
        onClick={() => setAbierto(false)}
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
          className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 ${
            scroll ? "h-14" : "h-16"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold tracking-widest"
          >
            <span className="h-2 w-2 rounded-full bg-sky-600" />
            COCTAM
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            {navegacion.map((item) => {
              const activo = estaActivo(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={activo ? "page" : undefined}
                    className={`text-sm transition-colors duration-200 ${
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
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden cursor-pointer"
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
