"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

interface RevelarProps {
  children: React.ReactNode;
  retraso?: number;
  className?: string;
}

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);

  return () => mediaQuery.removeEventListener("change", callback);
}

export default function Revelar({
  children,
  retraso = 0,
  className = "",
}: RevelarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          observador.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${retraso}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
