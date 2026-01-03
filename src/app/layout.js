import { Geologica } from "next/font/google";
import "./globals.css";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import StructuredData from "./components/StructuredData";
const geologica = Geologica({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geologica",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://amitroy.tech'),
  title: {
    default: "Amit Roy - Frontend Developer Portfolio",
    template: "%s | Amit Roy"
  },
  description: "Frontend Developer based in West Bengal, India. Specializing in React, Next.js, and modern web development. Creating clean, performant, and user-friendly web experiences.",
  keywords: [
    "Amit Roy",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "JavaScript Developer",
    "UI/UX Developer",
    "West Bengal",
    "India",
    "Web Development",
    "Frontend Development"
  ],
  authors: [{ name: "Amit Roy" }],
  creator: "Amit Roy",
  publisher: "Amit Roy",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://amitroy.tech',
    siteName: "Amit Roy Portfolio",
    title: "Amit Roy - Frontend Developer Portfolio",
    description: "Frontend Developer based in West Bengal, India. Specializing in React, Next.js, and modern web development.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Amit Roy - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Roy - Frontend Developer Portfolio",
    description: "Frontend Developer based in West Bengal, India. Specializing in React, Next.js, and modern web development.",
    images: ["/logo.png"],
    creator: "@amitroy", // Update with actual Twitter handle if available
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://amitroy.tech',
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geologica.variable} font-sans antialiased min-h-screen`}
      >
        <StructuredData />
        <Preloader />
        <svg className="pointer-events-none absolute cursor-none">
          <filter id="grainy">
            <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
        </svg>
        {children}
        <GoogleAnalytics measurementId="G-V0X2QCX042"/>
        <Footer/>
      </body>
    </html>
  );
}
