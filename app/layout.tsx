import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ember Perfumery | Kadın, Erkek ve Unisex Parfümler",
  description:
    "Ember Perfumery parfüm kataloğunda kadın, erkek ve unisex kokuları; nota, fiyat ve stok bilgileriyle keşfedin.",
  applicationName: "Ember Perfumery",
  keywords: [
    "parfüm",
    "kadın parfümü",
    "erkek parfümü",
    "unisex parfüm",
    "parfüm kataloğu",
    "Ember Perfumery",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ember Perfumery | Parfüm Kataloğu",
    description:
      "Kadın, erkek ve unisex parfümleri nota, fiyat ve stok bilgileriyle keşfedin.",
    siteName: "Ember Perfumery",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ember Perfumery | Parfüm Kataloğu",
    description:
      "Kadın, erkek ve unisex parfümleri nota, fiyat ve stok bilgileriyle keşfedin.",
  },
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
