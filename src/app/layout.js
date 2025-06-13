import { Geologica } from "next/font/google";
import "./globals.css";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
const geologica = Geologica({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geologica",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Amit Roy // Portfolio",
  description: "Personal portfolio website of Amit Roy, a developer based in West Bengal, India",
  keywords: ["portfolio", "developer", "web development", "Amit Roy"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geologica.variable} font-sans antialiased min-h-screen`}
      >
        <Preloader />
        <svg className="pointer-events-none absolute cursor-none">
          <filter id="grainy">
            <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
        </svg>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
