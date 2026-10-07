import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = new URL("https://coctam.org.mx");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "COCTAM | Colegio de Controladores de Tránsito Aéreo de México",
  description:
    "Entidad representante de los profesionistas del control de tránsito aéreo en México.",
  keywords: [
    "COCTAM",
    "control de tránsito aéreo",
    "aviación",
    "México",
    "profesionistas de control de tránsito aéreo",
  ],
  authors: [{ name: "COCTAM" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "COCTAM",
    title: "COCTAM | Colegio de Controladores de Tránsito Aéreo de México",
    description:
      "Entidad representante de los profesionistas del control de tránsito aéreo en México.",
    images: [
      {
        url: "/logos/coctam-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Logotipo de COCTAM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "COCTAM | Colegio de Controladores de Tránsito Aéreo de México",
    description:
      "Entidad representante de los profesionistas del control de tránsito aéreo en México.",
    images: ["/logos/coctam-logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
