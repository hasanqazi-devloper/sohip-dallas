import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      {/* <body className="bg-[#050505] text-white antialiased font-sans">
        {children}
      </body> */}
      {/* // app/layout.tsx */}
<body 
  className="bg-[#050505] text-white antialiased font-sans"
  suppressHydrationWarning={true} // Ye line add karein
>
  {children}
</body>
    </html>
  );
}