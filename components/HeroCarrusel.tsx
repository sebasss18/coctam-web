"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { slidesHero } from "@/data/hero";

const INTERVALO = 6000;

export default function HeroCarrusel() {
  const [indice, setIndice] = useState(0);
  const [pausa, setPausa] = useState(false);
  const inicioX = useRef<number | null>(null);
  const total = slidesHero.length;

  const ir = useCallback(
    (i: number) => setIndice((i + total) % total),
    [total],
  );

  useEffect(() => {
    if (pausa) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => setIndice((i) => (i + 1) % total), INTERVALO);
    return () => clearInterval(id);
  }, [pausa, total, indice]);

  const alTocar = (e: React.TouchEvent) => {
    inicioX.current = e.touches[0].clientX;
  };

  const alSoltar = (e: React.TouchEvent) => {
    if (inicioX.current === null) return;
    const delta = e.changedTouches[0].clientX - inicioX.current;
    inicioX.current = null;
    if (Math.abs(delta) > 50) ir(indice + (delta < 0 ? 1 : -1));
  };

  const claseCta =
    "mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors duration-200 hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  const flecha = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );

  return (
    <section
      aria-roledescription="carrusel"
      aria-label="Destacados"
      onMouseEnter={() => setPausa(true)}
      onMouseLeave={() => setPausa(false)}
      onFocus={() => setPausa(true)}
      onBlur={() => setPausa(false)}
      onTouchStart={alTocar}
      onTouchEnd={alSoltar}
      className="relative mb-12 h-104 overflow-hidden rounded-4xl bg-slate-900 shadow-2xl shadow-sky-950/40 ring-1 ring-white/10 sm:h-112"
    >
      {slidesHero.map((slide, i) => (
        <div
          key={slide.id}
          aria-hidden="true"
          className={`absolute inset-0 bg-linear-to-br ${slide.fondo} transition-opacity duration-700 ${
            i === indice ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="luz-a absolute -right-20 -top-20 h-96 w-96 rounded-full bg-sky-400/60 blur-3xl" />
        <div className="luz-b absolute -bottom-28 left-1/4 h-80 w-80 rounded-full bg-indigo-500/55 blur-3xl" />
        <div className="luz-a absolute left-1/2 top-1/4 h-56 w-56 rounded-full bg-cyan-300/40 blur-3xl [animation-delay:-4s]" />
      </div>

      {slidesHero.map((slide, i) => {
        const activo = i === indice;
        return (
          <div
            key={slide.id}
            inert={!activo}
            aria-hidden={!activo}
            className={`absolute inset-0 flex items-center transition-all duration-700 ease-out ${
              activo ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
            }`}
          >
            <div className="relative max-w-2xl px-8 sm:px-14">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-sky-400">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                {slide.etiqueta}
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-5xl">
                {slide.titulo}
              </h2>
              <p className="mt-4 text-base text-slate-300 sm:text-lg">
                {slide.descripcion}
              </p>

              {slide.cta.externo ? (
                <a
                  href={slide.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={claseCta}
                >
                  {slide.cta.etiqueta}
                  {flecha}
                </a>
              ) : (
                <Link href={slide.cta.href} className={claseCta}>
                  {slide.cta.etiqueta}
                  {flecha}
                </Link>
              )}
            </div>
          </div>
        );
      })}

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-8 pb-6 sm:px-14">
        <div className="flex items-center gap-2">
          {slidesHero.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => ir(i)}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              aria-current={i === indice}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === indice
                  ? "w-8 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => ir(indice - 1)}
            aria-label="Diapositiva anterior"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:bg-white/10"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => ir(indice + 1)}
            aria-label="Diapositiva siguiente"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:bg-white/10"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
