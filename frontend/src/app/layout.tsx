import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Tims Tittus | CyberSecurity Student & Polymath",
  description:
    "Portfolio of Tims Tittus, an Engineering, CyberSecurity student and polymath. Projects, skills, and contact.",
  authors: [{ name: "Tims Tittus" }],
  openGraph: {
    title: "Tims Tittus",
    description: "Portfolio",
    type: "website",
    url: "https://timstittus.vercel.app",
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
    "url": "https://timstittus.vercel.app",
    "sameAs": [
      "https://github.com/TimsTittus",
      "https://www.linkedin.com/in/tims-tittus"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}