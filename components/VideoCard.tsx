"use client";

import Image from "next/image";
import type { Video } from "@/types";
import Revelar from "@/components/Revelar";
import CapaBrillo from "@/components/CapaBrillo";
import { moverBrillo } from "@/lib/brillo";

interface VideoCardProps {
  video: Video;
  retraso?: number;
}

export default function VideoCard({ video, retraso = 0 }: VideoCardProps) {
  return (
    <li>
      <Revelar retraso={retraso}>
        <a
          href={video.href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={moverBrillo}
          className="group relative flex items-start gap-4 overflow-hidden rounded-xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:scale-[1.02] hover:border-slate-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          <CapaBrillo />

          <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg ring-1 ring-slate-200">
            <Image
              src={video.logo}
              alt=""
              width={112}
              height={112}
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-slate-900/40 text-white transition-colors duration-300 group-hover:bg-sky-600/70">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 translate-x-0.5 transition-transform duration-300 group-hover:scale-125"
              >
                <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
              </svg>
            </span>
          </span>

          <div className="relative min-w-0 flex-1">
            <p className="text-sm font-medium text-slate-800">{video.titulo}</p>
            <dl className="mt-1.5 space-y-0.5 text-xs text-slate-400">
              {video.creditos.map((c) => (
                <div key={c.rol}>
                  <dt className="inline">{c.rol}: </dt>
                  <dd className="inline text-slate-500">{c.nombre}</dd>
                </div>
              ))}
            </dl>
          </div>
        </a>
      </Revelar>
    </li>
  );
}
