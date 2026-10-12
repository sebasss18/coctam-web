"use client";

import { useState } from "react";

type Estado = "reposo" | "enviando" | "enviado" | "error";

const claseCampo =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-colors duration-200 focus:border-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-600/10";

const claseEtiqueta =
  "text-xs font-medium uppercase tracking-widest text-slate-400";

export default function FormularioContacto() {
  const [estado, setEstado] = useState<Estado>("reposo");
  const [mensajeError, setMensajeError] = useState("");

  const alEnviar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formulario = e.currentTarget;
    const datos = Object.fromEntries(new FormData(formulario));

    setEstado("enviando");
    setMensajeError("");

    try {
      const respuesta = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });

      if (!respuesta.ok) {
        const cuerpo = await respuesta.json().catch(() => null);
        throw new Error(cuerpo?.error ?? "No se pudo enviar el mensaje.");
      }

      formulario.reset();
      setEstado("enviado");
    } catch (error) {
      setMensajeError(
        error instanceof Error
          ? error.message
          : "No se pudo enviar el mensaje.",
      );
      setEstado("error");
    }
  };

  if (estado === "enviado") {
    return (
      <div className="flex flex-col items-start gap-4 py-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-sky-600">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <div role="status">
          <p className="text-lg font-semibold text-slate-800">
            Mensaje enviado
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            Gracias por escribirnos. Te responderemos lo antes posible.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setEstado("reposo")}
          className="cursor-pointer rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 transition-colors duration-300 hover:border-sky-600 hover:bg-sky-600 hover:text-white"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={alEnviar} className="space-y-5">
      <div>
        <label htmlFor="nombre" className={claseEtiqueta}>
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          maxLength={120}
          autoComplete="name"
          placeholder="Tu nombre completo"
          className={claseCampo}
        />
      </div>

      <div>
        <label htmlFor="correo" className={claseEtiqueta}>
          Correo electrónico
        </label>
        <input
          id="correo"
          name="correo"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          placeholder="tucorreo@ejemplo.com"
          className={claseCampo}
        />
      </div>

      <div>
        <label htmlFor="mensaje" className={claseEtiqueta}>
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          minLength={10}
          maxLength={4000}
          rows={6}
          placeholder="Cuéntanos en qué podemos ayudarte"
          className={`${claseCampo} resize-y`}
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="sitio_web">No llenar este campo</label>
        <input
          id="sitio_web"
          name="sitio_web"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {estado === "error" && (
        <p role="alert" className="text-sm text-red-600">
          {mensajeError}
        </p>
      )}

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
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
      </button>
    </form>
  );
}
