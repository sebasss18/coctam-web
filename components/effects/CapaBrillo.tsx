export default function CapaBrillo() {
  return (
    <div
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(14,165,233,0.14), transparent 70%)",
      }}
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
  );
}
