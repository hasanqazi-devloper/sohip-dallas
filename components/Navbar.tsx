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
      <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500">
        
        {/* UPPER INFO RIBBON - Seamlessly transitions height matrices */}
        <div className={`w-full bg-[#050505] text-[10px] tracking-[0.2em] uppercase text-white/50 border-b border-white/5 px-6 md:px-24 flex justify-between items-center transition-all duration-500 origin-top overflow-hidden ${isScrolled ? 'h-0 py-0 opacity-0 pointer-events-none border-none' : 'h-auto py-2.5'}`}>
          <div className="flex gap-6 items-center">
            {/* Upgraded text strings explicitly matching #C9A050 gold standards */}
            <span className="flex items-center gap-1.5 font-medium text-white/70 hover:text-white transition-colors cursor-pointer"><Phone size={11} className="text-[#C9A050]"/> (214) 428-1121</span>
            <span className="hidden sm:inline opacity-20 text-white">|</span>
            <span className="hidden sm:flex items-center gap-1.5 font-medium text-white/70 hover:text-white transition-colors cursor-pointer"><Mail size={11} className="text-[#C9A050]"/> jennifer@sohipdallas.homes</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-white/50">
            <Award size={11} className="text-[#C9A050]"/> Agent License #0599698
          </div>
        </div>

        {/* MAIN INTERACTIVE NAV */}
        <div className={`w-full flex justify-between items-center px-6 md:px-24 transition-all duration-500 ${isScrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' : 'bg-gradient-to-b from-black/95 via-black/40 to-transparent py-6 md:py-8'}`}>
          <Link href="/" className="flex items-center gap-4 group cursor-pointer">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm transition-transform group-hover:scale-105">
              <img src={logoImg} alt="SOHIP Dallas Logo" className="h-full w-full object-cover" onError={(e)=>{e.currentTarget.style.display='none'}} />
            </div>
            <span className="text-base md:text-lg font-serif tracking-[0.3em] uppercase hidden sm:block text-white group-hover:text-[#C9A050] transition-colors duration-300">SOHIP DALLAS</span>
          </Link>

          {/* DESKTOP LINKS - Locked clean grid font sizing details */}
          <div className="hidden lg:flex gap-10 text-[10px] tracking-[0.3em] uppercase font-black">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link 
                  key={item.path} 
                  href={item.path} 
                  className={`transition-colors relative pb-1 ${isActive ? 'text-[#C9A050]' : 'text-white/60 hover:text-white'}`}
                >
                  {item.name}
                  {isActive && (
                    <m.span 
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C9A050]" 
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hidden md:block text-[10px] tracking-[0.3em] border border-[#C9A050]/40 bg-white/5 px-6 py-3 rounded-full uppercase hover:bg-[#C9A050] hover:text-black hover:border-[#C9A050] transition-all font-black text-center text-white">
              Gain VIP Access
            </Link>
            <button className="lg:hidden text-white p-2 outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ⚡ ADVANCED MOTION OVERLAY DRAWERS */}
      <AnimatePresence>
        {isMenuOpen && (
          <m.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[110] bg-[#0D0D0D]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
          >
            <button className="absolute top-8 right-8 text-white p-2 outline-none" onClick={() => setIsMenuOpen(false)}>
              <X size={30} className="text-[#C9A050]" />
            </button>
            {navItems.map((item, i) => {
              const isMobileActive = pathname === item.path;
              return (
                <m.div
                  key={item.path}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link 
                    href={item.path} 
                    onClick={() => setIsMenuOpen(false)} 
                    className={`text-2xl sm:text-3xl font-serif italic tracking-wide block transition-colors ${isMobileActive ? 'text-[#C9A050] font-bold' : 'text-white/60 hover:text-white'}`}
                  >
                    {item.name}
                  </Link>
                </m.div>
              );
            })}
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}