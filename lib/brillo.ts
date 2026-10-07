import type { MouseEvent } from "react";

export function moverBrillo(e: MouseEvent<HTMLElement>) {
  const caja = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - caja.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - caja.top}px`);
}
