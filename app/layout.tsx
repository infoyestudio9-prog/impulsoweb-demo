import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ImpulsoWeb Demo Generator",
  description: "Generador de demos para negocios locales en Uruguay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-UY">
      <body>{children}</body>
    </html>
  );
}
