"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, Award } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const logoImg = "/sohip-dallas-logo-main.png";

  const navItems = [
    { name: 'The Collection', path: '/properties' },
    { name: 'Communities', path: '/communities' },
    { name: 'The Reset', path: '/reset' },
    { name: 'Inquiries', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // ✅ 20px scroll hotay hi state seamless pakdegi
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      {/* HEADER PLATFORM CORE LAYOUT */}
      <header className="fixed top-0 left-0 w-full z-[99999] transition-all duration-500 transform-gpu pointer-events-auto border-none outline-none">
        
        {/* UPPER INFO RIBBON */}
        <div className={`w-full bg-[#050505] text-[10px] tracking-[0.2em] uppercase text-white/50 px-6 md:px-24 flex justify-between items-center transition-all duration-500 overflow-hidden border-none outline-none ${isScrolled ? 'h-0 py-0 opacity-0' : 'h-auto py-2.5 border-b border-white/5'}`}>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1.5 font-medium text-white/70"><Phone size={11} className="text-[#C9A050]"/> (214) 428-1121</span>
            <span className="hidden sm:inline opacity-20 text-white">|</span>
            <span className="hidden sm:flex items-center gap-1.5 font-medium text-white/70"><Mail size={11} className="text-[#C9A050]"/> jennifer@sohipdallas.homes</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-white/50">
            <Award size={11} className="text-[#C9A050]"/> Agent License #0599698
          </div>
        </div>

        {/* MAIN BAR CONTAINER */}
        {/* ✅ Yahan se scroll border classes ko absolute jhaadu maar kar saaf kar diya hai, totally border-0 aur border-transparent lagaya hai */}
        <div className={`w-full flex justify-between items-center px-6 md:px-24 transition-all duration-500 border-0 border-transparent outline-none ${
          isScrolled 
            ? 'bg-[#0D0D0D]/95 backdrop-blur-md py-4 shadow-[0_25px_60px_rgba(0,0,0,0.85)]' 
            : 'bg-gradient-to-b from-black/95 via-black/20 to-transparent py-6 md:py-8'
        }`}>
          
          {/* BRAND LOGO UNIT */}
          <Link href="/" className="flex items-center gap-4 group cursor-pointer relative z-[1000001]">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm">
              <img src={logoImg} alt="SOHIP Dallas Logo" className="h-full w-full object-cover" onError={(e)=>{e.currentTarget.style.display='none'}} />
            </div>
            <span className="text-base md:text-lg font-serif tracking-[0.3em] uppercase hidden sm:block text-white group-hover:text-[#C9A050] transition-colors font-medium">SOHIP DALLAS</span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex gap-10 text-xs tracking-[0.25em] uppercase font-semibold">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link 
                  key={item.path} 
                  href={item.path} 
                  className={`transition-colors relative pb-1 ${isActive ? 'text-[#C9A050]' : 'text-white/80 hover:text-white'}`}
                >
                  {item.name}
                  {isActive && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C9A050]" />}
                </Link>
              );
            })}
          </div>

          {/* RIGHT ACTION INTERACTIVE SWITCH CONTAINER */}
          <div className="flex items-center gap-6 relative z-[1000001]">
            <Link href="/contact" className="hidden md:block text-[10px] tracking-[0.3em] border border-[#C9A050]/40 bg-white/5 px-6 py-3 rounded-full uppercase hover:bg-[#C9A050] hover:text-black hover:border-[#C9A050] transition-all font-black text-white">
              Gain VIP Access
            </Link>
            
            <button 
              type="button"
              aria-label="Toggle Menu"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 outline-none cursor-pointer focus:outline-none border-none"
            >
              {isOpen ? <X size={26} className="text-[#C9A050]" /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </header>

      {/* NATIVE DRAWER OVERLAY SCREEN */}
      <div className={`fixed inset-0 bg-[#0A0A0A]/98 backdrop-blur-xl z-[99998] flex flex-col items-center justify-center gap-8 transition-all duration-500 transform-gpu text-left ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible'}`}>
        <div className="flex flex-col items-center gap-6 w-full max-w-sm px-6 text-center">
          {navItems.map((item) => {
            const isMobileActive = pathname === item.path;
            return (
              <div key={item.path} className="w-full">
                <Link 
                  href={item.path} 
                  onClick={() => setIsOpen(false)} 
                  className={`text-xl sm:text-2xl font-serif italic tracking-wide block transition-all py-3 px-4 rounded-xl ${isMobileActive ? 'text-black bg-[#C9A050] font-bold shadow-2xl' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}

          <div className="w-full pt-6 border-t border-white/5 mt-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full block text-center bg-transparent border border-[#C9A050] text-[#C9A050] text-xs font-black tracking-[0.25em] uppercase py-4 rounded-full active:bg-[#C9A050] active:text-black transition-colors"
            >
              Gain VIP Access Matrix
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}