import { ImageResponse } from "next/og";

export const alt =
  "COCTAM | Colegio de Controladores de Tránsito Aéreo de México";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const anillos = [150, 250, 350, 450];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        alignItems: "center",
        padding: "0 80px",
        backgroundColor: "#0f172a",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -220,
          right: -160,
          width: 760,
          height: 760,
          borderRadius: 999,
          backgroundImage:
            "radial-gradient(circle, rgba(56,189,248,0.6) 0%, rgba(56,189,248,0) 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -300,
          left: 100,
          width: 820,
          height: 820,
          borderRadius: 999,
          backgroundImage:
            "radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(99,102,241,0) 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 420,
          width: 520,
          height: 520,
          borderRadius: 999,
          backgroundImage:
            "radial-gradient(circle, rgba(34,211,238,0.28) 0%, rgba(34,211,238,0) 70%)",
        }}
      />

      {anillos.map((r) => (
        <div
          key={r}
          style={{
            position: "absolute",
            left: 1000 - r,
            top: 315 - r,
            width: r * 2,
            height: r * 2,
            borderRadius: 999,
            border: "2px solid rgba(255,255,255,0.1)",
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          left: 1153,
          top: 116,
          width: 16,
          height: 16,
          borderRadius: 999,
          backgroundColor: "#7dd3fc",
          boxShadow: "0 0 24px 8px rgba(125,211,252,0.8)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: 840,
          padding: "56px 64px",
          borderRadius: 40,
          backgroundColor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.22)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            letterSpacing: 8,
            color: "#7dd3fc",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#0284c7",
            }}
          />
          COCTAM
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.1,
            color: "white",
          }}
        >
          Colegio de Controladores de Tránsito Aéreo de México
        </div>

        <div
          style={{
            marginTop: 32,
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#cbd5e1",
          }}
        >
          <div
            style={{
              width: 48,
              height: 4,
              borderRadius: 999,
              backgroundColor: "#0284c7",
            }}
          />
          Fundado el 16 de marzo de 2006
        </div>
      </div>
    </div>,
    size,
  );
}
