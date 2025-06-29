import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tomáš Nováček - Psychoterapie v centru Brna",
  description: "Nabízím psychoterapii pro dospělé v centru Brna. Můžete čerpat podporou z preventivních programů zdravotních pojišťoven.",
  keywords: "psychoterapie, psychologické poradenství, Brno, individuální terapie, osobní rozvoj, deprese, úzkost, vztahy, stres",
  authors: [{ name: "Tomáš Nováček" }],
  creator: "Tomáš Nováček",
  publisher: "Tomáš Nováček",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tomnovacek.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://tomnovacek.com',
    title: 'Tomáš Nováček - Psychoterapie v centru Brna',
    description: 'Nabízím psychoterapii pro dospělé v centru Brna. Můžete čerpat podporou z preventivních programů zdravotních pojišťoven.',
    siteName: 'Tomáš Nováček - Psychoterapie',
    images: [
      {
        url: '/optimized-images/tom1-sm.webp',
        width: 400,
        height: 400,
        alt: 'Tomáš Nováček',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tomáš Nováček - Psychoterapie v centru Brna',
    description: 'Nabízím psychoterapii pro dospělé v centru Brna. Můžete čerpat podporou z preventivních programů zdravotních pojišťoven.',
    images: ['/optimized-images/tom1-sm.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        {/* Preload critical resources for LCP optimization */}
        <link 
          rel="preload" 
          href="/optimized-images/forrest-sm.webp" 
          as="image" 
          fetchPriority="high"
        />
        <link 
          rel="preload" 
          href="/optimized-images/tom1-sm.webp" 
          as="image" 
          fetchPriority="high"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous" 
        />
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
