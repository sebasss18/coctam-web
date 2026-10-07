import { ImageResponse } from "next/og";

export const alt =
  "COCTAM | Colegio de Controladores de Tránsito Aéreo de México";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #0c4a6e 100%)",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 28,
          letterSpacing: 8,
          color: "#7dd3fc",
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: 999,
            background: "#0284c7",
          }}
        />
        COCTAM
      </div>
      <div
        style={{
          marginTop: 32,
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.1,
          maxWidth: 900,
        }}
      >
        Colegio de Controladores de Tránsito Aéreo de México
      </div>
      <div style={{ marginTop: 28, fontSize: 30, color: "#cbd5e1" }}>
        Fundado el 16 de marzo de 2006
      </div>
    </div>,
    size,
  );
}
