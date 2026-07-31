import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Layout from "@/components/layout/Layout";
import { Inter, JetBrains_Mono, Anton, Archivo_Black, Comic_Neue, Bebas_Neue } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-archivo-black",
});

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-comic-neue",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Tims Tittus | CyberSecurity Student & Polymath",
  description:
    "Portfolio of Tims Tittus, an Engineering, CyberSecurity student and polymath. Projects, skills, and contact.",
  authors: [{ name: "Tims Tittus" }],
  openGraph: {
    title: "Tims Tittus",
    description: "Portfolio",
    type: "website",
    url: "https://timstittus.com",
  },
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tims Tittus",
    "jobTitle": ["CyberSecurity Student", "Engineer", "AI Enthusiast", "Polymath"],
    "url": "https://timstittus.com",
    "sameAs": [
      "https://github.com/TimsTittus",
      "https://www.linkedin.com/in/tims-tittus"
    ]
  };

  const fontVars = `${inter.variable} ${jetbrainsMono.variable} ${anton.variable} ${archivoBlack.variable} ${comicNeue.variable} ${bebasNeue.variable}`;

  return (
    <html lang="en" suppressHydrationWarning className={fontVars}>
      <head>
        <link rel="preload" href="/assets/tims.webp" as="image" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}