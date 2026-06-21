import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: "SOHIP Dallas Homes",
  description: "Bespoke Property Intelligence & Luxury Presentation Matrix",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en" 
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="bg-[#050505] text-white antialiased font-sans min-h-screen flex flex-col justify-between overflow-x-hidden" suppressHydrationWarning={true}>
        
        {/* Global Floating Navigation */}
        <Navbar />
        
        {/* ✅ Directly drops children components layout structure natively */}
        <div className="flex-grow w-full relative z-10 block">
          {children}
        </div>
        
        {/* Global Footer System */}
        <Footer />
        
      </body>
    </html>
  );
}