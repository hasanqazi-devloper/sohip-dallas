"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Award } from "lucide-react";

interface NavbarProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Navbar({ isScrolled, isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const pathname = usePathname();
  const logoImg = "/sohip-dallas-logo-main.png";

  const navItems = [
    { name: 'The Collection', path: '/properties' },
    { name: 'Communities', path: '/communities' },
    { name: 'The Reset', path: '/reset' },
    { name: 'Inquiries', path: '/contact' }
  ];

  return (
    <>
      {/* ✅ Fixed Stacking Order Engine: z-[9999] guarantees it overlays perfectly on all subpages */}
      <header className="fixed top-0 left-0 w-full z-[9999] transition-all duration-500 transform-gpu pointer-events-auto">
        
        {/* UPPER INFO RIBBON - Seamlessly transitions height matrices */}
        <div className={`w-full bg-[#050505] text-[10px] tracking-[0.2em] uppercase text-white/50  px-6 md:px-24 flex justify-between items-center transition-all duration-500 origin-top overflow-hidden ${isScrolled ? 'h-0 py-0 opacity-0 pointer-events-none border-none' : 'h-auto py-2.5'}`}>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1.5 font-medium text-white/70 hover:text-white transition-colors cursor-pointer"><Phone size={11} className="text-[#C9A050]"/> (214) 428-1121</span>
            <span className="hidden sm:inline opacity-20 text-white">|</span>
            <span className="hidden sm:flex items-center gap-1.5 font-medium text-white/70 hover:text-white transition-colors cursor-pointer"><Mail size={11} className="text-[#C9A050]"/> jennifer@sohipdallas.homes</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-white/50">
            <Award size={11} className="text-[#C9A050]"/> Agent License #0599698
          </div>
        </div>

        {/* MAIN INTERACTIVE NAV */}
        {/* ✅ Soft premium shadow handles visibility flawlessly over properties list surfaces */}
        <div className={`w-full flex justify-between items-center px-6 md:px-24 transition-all duration-500 ${isScrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-md py-4 shadow-[0_15px_40px_rgba(0,0,0,0.7)] ' : 'bg-gradient-to-b from-black/95 via-black/40 to-transparent py-6 md:py-8'}`}>
          <Link href="/" className="flex items-center gap-4 group cursor-pointer">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm transition-transform group-hover:scale-105">
              <img src={logoImg} alt="SOHIP Dallas Logo" className="h-full w-full object-cover" onError={(e)=>{e.currentTarget.style.display='none'}} />
            </div>
            <span className="text-base md:text-lg font-serif tracking-[0.3em] uppercase hidden sm:block text-white group-hover:text-[#C9A050] transition-colors duration-300 font-medium">SOHIP DALLAS</span>
          </Link>

          {/* DESKTOP LINKS - Sizing & visibility locked at premium crisp text-xs standard */}
          <div className="hidden lg:flex gap-10 text-xs tracking-[0.25em] uppercase font-semibold">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link 
                  key={item.path} 
                  href={item.path} 
                  className={`transition-colors relative pb-1.5 tracking-widest ${isActive ? 'text-[#C9A050]' : 'text-white/85 hover:text-white'}`}
                >
                  {item.name}
                  {isActive && (
                    <m.span 
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C9A050]" 
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hidden md:block text-[10px] tracking-[0.3em] border border-[#C9A050]/40 bg-white/5 px-6 py-3 rounded-full uppercase hover:bg-[#C9A050] hover:text-black hover:border-[#C9A050] transition-all font-black text-center text-white transform-gpu active:scale-95">
              Gain VIP Access
            </Link>
            <button className="lg:hidden text-white p-2 outline-none transition-transform active:scale-90" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={26} className="text-[#C9A050]" /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* ⚡ ADVANCED DYNAMIC CINEMATIC MOBILE DRAWER OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <m.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[10000] bg-[#0A0A0A]/95 flex flex-col items-center justify-center gap-8 transform-gpu"
          >
            {/* Top Logo Watermark in Drawer */}
            <div className="absolute top-6 left-6 flex items-center gap-3 opacity-40">
              <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                <img src={logoImg} alt="SOHIP Dallas Logo" className="h-full w-full object-cover" />
              </div>
              <span className="text-xs font-serif tracking-widest text-white uppercase">SOHIP DALLAS</span>
            </div>

            <button className="absolute top-6 right-6 text-white p-2 outline-none transition-transform active:scale-90" onClick={() => setIsMenuOpen(false)}>
              <X size={28} className="text-[#C9A050]" />
            </button>

            {/* Nav Menu Content Array Container */}
            <div className="flex flex-col items-center gap-6 w-full max-w-sm px-6">
              {navItems.map((item, i) => {
                const isMobileActive = pathname === item.path;
                return (
                  <m.div 
                    key={item.path} 
                    className="w-full text-center"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link 
                      href={item.path} 
                      onClick={() => setIsMenuOpen(false)} 
                      className={`text-2xl sm:text-3xl font-serif italic tracking-wide block transition-all py-3 px-4 rounded-xl ${isMobileActive ? 'text-black bg-[#C9A050] font-bold shadow-xl' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                    >
                      {item.name}
                    </Link>
                  </m.div>
                );
              })}

              {/* Mobile Dedicated CTA Button for Luxury Inquiries */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: navItems.length * 0.05 }}
                className="w-full pt-4 border-t border-white/5 mt-2"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full block text-center bg-transparent border border-[#C9A050] text-[#C9A050] text-xs font-black tracking-[0.25em] uppercase py-4 rounded-full active:bg-[#C9A050] active:text-black transition-colors"
                >
                  Gain VIP Access Matrix
                </Link>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}