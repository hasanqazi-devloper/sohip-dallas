"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { Search, Calculator, HelpCircle, ChevronDown } from "lucide-react";

export default function Hero() {
  const heroBg = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070";
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Device tracking to optimize runtime operations effortlessly
  useEffect(() => {
    const checkDeviceWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDeviceWidth();
    window.addEventListener("resize", checkDeviceWidth);
    return () => window.removeEventListener("resize", checkDeviceWidth);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden bg-[#000000] pt-36 sm:pt-44 pb-20">
      
      {/* ⚡ HIGH-PERFORMANCE LCP BACKGROUND ENGINE */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none transform-gpu">
        <img 
          src={heroBg} 
          alt="Premium Dallas Architecture" 
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover opacity-40 scale-100 will-change-transform" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-black/90" />
      </div>
      
      {/* ALIGNED TEXT STACK CONTAINER - Box bounded perfectly for ultra-wide monitors */}
      <div className="relative z-10 max-w-[1200px] mx-auto space-y-8 sm:space-y-10 w-full transform-gpu flex flex-col justify-center items-center">
        
        {/* UPPER RIBBON STRAP */}
        <m.span 
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.3 }}
          className="text-[#C9A050] text-[10px] md:text-[12px] tracking-[0.5em] sm:tracking-[0.7em] uppercase font-black block"
        >
          Sohip Style • Boutique Service • Local Edge
        </m.span>

        {/* MAIN TYPOGRAPHY HEADER */}
        <m.h1 
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, ease: "easeOut" }} 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-[0.04em] uppercase text-white leading-[1.1] font-bold max-w-5xl mx-auto"
        >
          SOHIP DALLAS HOMES
        </m.h1>
        
        {/* SUBTITLE FRAME */}
        <m.p 
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.4, delay: isMobile ? 0 : 0.1 }}
          className="font-serif text-[16px] sm:text-xl md:text-2xl font-light italic text-white/90 max-w-2xl mx-auto tracking-wide leading-relaxed"
        >
          "Style creates desire and Strategy creates results."
        </m.p>

        {/* ✅ ADVANCED LUXURY FILTER MATRIX ENGINE */}
        <m.div 
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: isMobile ? 0 : 0.15, ease: "easeOut" }}
          className="pt-6 max-w-4xl mx-auto w-full px-2 sm:px-0"
        >
          {/* Main layout bar handles horizontal distribution evenly on wide screens */}
          <div className="bg-[#141414]/90 backdrop-blur-2xl border border-white/5 p-5 md:p-3 rounded-2xl md:rounded-full flex flex-col md:flex-row gap-5 md:gap-2 items-stretch md:items-center justify-between px-6 shadow-3xl transition-all duration-300">
            
            {/* Field 1: Location Vector */}
            <div className="w-full md:w-auto flex-grow flex flex-col items-start px-2 md:border-r border-white/5 md:pr-6 text-left relative group">
              <span className="text-[9px] font-black text-[#C9A050] tracking-widest uppercase mb-1 flex items-center gap-1">
                LOCATION
              </span>
              <div className="relative w-full flex items-center justify-between">
                <select className="bg-transparent text-white text-xs tracking-wider uppercase outline-none cursor-pointer w-full py-1 font-bold appearance-none pr-6 z-10 font-sans">
                  <option className="bg-[#141414] text-white">South of 635 Only</option>
                  <option className="bg-[#141414] text-white">Highland Park</option>
                  <option className="bg-[#141414] text-white">Preston Hollow</option>
                  <option className="bg-[#141414] text-white">University Park</option>
                </select>
                <ChevronDown size={12} className="text-[#C9A050] absolute right-0 pointer-events-none z-0" />
              </div>
            </div>

            {/* Field 2: Typology Vector */}
            <div className="w-full md:w-auto flex-grow flex flex-col items-start px-2 md:border-r border-white/5 md:pr-6 text-left relative group">
              <span className="text-[9px] font-black text-[#C9A050] tracking-widest uppercase mb-1 flex items-center gap-1">
                ASSET TYPE
              </span>
              <div className="relative w-full flex items-center justify-between">
                <select className="bg-transparent text-white text-xs tracking-wider uppercase outline-none cursor-pointer w-full py-1 font-bold appearance-none pr-6 z-10 font-sans">
                  <option className="bg-[#141414] text-white">All Classifications</option>
                  <option className="bg-[#141414] text-white">Private Estates</option>
                  <option className="bg-[#141414] text-white">Luxury Penthouses</option>
                  <option className="bg-[#141414] text-white">Off-Market Inventory</option>
                </select>
                <ChevronDown size={12} className="text-[#C9A050] absolute right-0 pointer-events-none z-0" />
              </div>
            </div>

            {/* Field 3: Capital Baseline */}
            <div className="w-full md:w-auto flex-grow flex flex-col items-start px-2 text-left md:pr-4 relative group">
              <span className="text-[9px] font-black text-[#C9A050] tracking-widest uppercase mb-1 flex items-center gap-1">
                INVESTMENT BASELINE
              </span>
              <div className="relative w-full flex items-center justify-between">
                <select className="bg-transparent text-white text-xs tracking-wider uppercase outline-none cursor-pointer w-full py-1 font-bold appearance-none pr-6 z-10 font-sans">
                  <option className="bg-[#141414] text-white">Price Range ($2M+)</option>
                  <option className="bg-[#141414] text-white">$2M - $5M</option>
                  <option className="bg-[#141414] text-white">$5M - $10M</option>
                  <option className="bg-[#141414] text-white">$10M - $25M+</option>
                </select>
                <ChevronDown size={12} className="text-[#C9A050] absolute right-0 pointer-events-none z-0" />
              </div>
            </div>

            {/* Action Gate Trigger Button */}
            <button className="w-full md:w-auto bg-[#C9A050] text-black text-[11px] font-black tracking-widest uppercase px-8 py-4 rounded-xl md:rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-xl flex items-center justify-center gap-2 shrink-0 transform-gpu active:scale-98">
              <Search size={13} strokeWidth={3} /> Search Matrix
            </button>
          </div>

          {/* ADVANCED UTILITY SHORTCUT CARDS - Pure liquid grid configuration alignment */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 sm:mt-14 text-[10px] tracking-[0.15em] font-black uppercase w-full items-stretch">
            <button className="w-full px-6 py-5 rounded-xl bg-[#141414] border border-white/5 hover:border-[#C9A050]/30 text-white flex items-center justify-center sm:justify-start gap-4 transition-all duration-300 shadow-xl transform-gpu sm:hover:-translate-y-1">
              <Search size={14} className="text-[#C9A050] shrink-0" /> <span className="text-left">Search Listings</span>
            </button>
            
            <button className="w-full px-6 py-5 rounded-xl bg-[#141414] border border-white/5 hover:border-[#C9A050]/30 text-white flex items-center justify-center sm:justify-start gap-4 transition-all duration-300 shadow-xl transform-gpu sm:hover:-translate-y-1">
              <Calculator size={14} className="text-[#C9A050] shrink-0" /> <span className="text-left">What's My Home Worth?</span>
            </button>
            
            <button className="w-full px-6 py-5 rounded-xl bg-[#141414] border border-white/5 hover:border-[#C9A050]/30 text-white flex items-center justify-center sm:justify-start gap-4 transition-all duration-300 shadow-xl transform-gpu sm:hover:-translate-y-1">
              <HelpCircle size={14} className="text-[#C9A050] shrink-0" /> <span className="text-left">FAQ Overview</span>
            </button>
          </div>

        </m.div>
      </div>
    </section>
  );
}