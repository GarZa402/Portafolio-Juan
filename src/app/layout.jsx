import Navigation from "../components/layout/Navigation";
import { Analytics } from "@vercel/analytics/next";
import Footer from "../components/layout/Footer";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://juanjosegarcia.dev"),
  title: {
    default: "Juan José García Villegas - Desarrollador Web | Portafolio",
    template: "%s | Juan José García Villegas",
  },
  description:
    "Juan José García Villegas. Desarrollador Web Full Stack especializado en React, JavaScript, Laravel y Node.js.",
  authors: [
    { name: "Juan José García Villegas", url: "https://juanjosegarcia.dev" },
  ],
  creator: "Juan José García Villegas",
  keywords: [
    "Juan José García Villegas",
    "Desarrollador Web",
    "Desarrollador Web en Medellín",
    "Desarrollador Full Stack",
    "Programador Freelance",
    "React",
    "JavaScript",
    "Laravel",
    "Node.js",
  ],
  alternates: {
    canonical: "https://juanjosegarcia.dev",
  },
  openGraph: {
    title: "Juan José García Villegas - Desarrollador Web",
    author: "Juan José García Villegas",
    description:
      "Desarrollador Web Full Stack especializado en React, Laravel y Node.js. Disponible para proyectos freelance en Medellín.",
    url: "https://juanjosegarcia.dev",
    siteName: "Juan José García Villegas",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Portafolio de Juan José García Villegas",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  twitter: {
    card: "summary_large_image",
    title: "Juan José García Villegas - Desarrollador Web",
    description:
      "Desarrollador Web Full Stack especializado en React, Laravel y Node.js. Disponible para proyectos freelance en Medellín.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Juan José García Villegas",
    jobTitle: "Desarrollador Web Full Stack",
    description:
      "Desarrollador Web Full Stack especializado en React, JavaScript, Laravel y Node.js.",
    url: "https://juanjosegarcia.dev",
    knowsAbout: [
      "React",
      "Next.js",
      "Laravel",
      "Node.js",
      "JavaScript",
      "SQL",
      "Web Design",
    ],
    sameAs: [
      "https://github.com/GarZa402",
      "https://www.linkedin.com/in/juanjgarciav",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
  };

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 text-white antialiased selection:bg-blue-500/30`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Navigation />
        <main>{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
