import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

// 🏙️ Pure Unified Geometric Premium Font Engine
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat" 
});

export const metadata: Metadata = {
  title: "SOHIP Dallas Homes",
  description: "Bespoke Property Intelligence & Luxury Presentation Matrix",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en" 
      className={`${montserrat.variable} scroll-smooth`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="bg-[#050505] text-white antialiased font-sans min-h-screen flex flex-col justify-between overflow-x-hidden" suppressHydrationWarning={true}>
        <Navbar />
        <main className="flex-grow w-full relative z-10 flex flex-col items-center justify-start">
          <div className="w-full max-w-[2600px] mx-auto flex flex-col items-stretch justify-start">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}