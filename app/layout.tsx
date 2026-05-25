import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ember Perfumery",
  description: "Seçili parfümler için hızlı ve şık katalog sitesi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
