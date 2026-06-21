"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { Search, Calculator, HelpCircle, ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const heroBg = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDeviceWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDeviceWidth();
    window.addEventListener("resize", checkDeviceWidth);
    return () => window.removeEventListener("resize", checkDeviceWidth);
  }, []);

  return (
    // ✅ FIX: Increased top padding to pt-44/md:pt-56 to eliminate any Navbar text overlaps
    <section className="relative min-h-screen w-full flex items-center justify-center text-center px-6 overflow-hidden bg-[#000000] pt-44 md:pt-56 pb-24">
      
      {/* ⚡ HIGH-PERFORMANCE LCP BACKGROUND ENGINE */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none transform-gpu">
        <img 
          src={heroBg} 
          alt="Premium Dallas Architecture" 
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover opacity-50 scale-100 will-change-transform brightness-[0.85] contrast-[1.05]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#050505]/60 to-black/95" />
      </div>
      
      {/* ALIGNED TEXT STACK CONTAINER - Bounded beautifully at max-w-[1400px] */}
      <div className="relative z-10 max-w-[2200px] mx-auto space-y-10 md:space-y-14 w-full transform-gpu flex flex-col justify-center items-center">
        
        {/* UPPER RIBBON STRAP - Ambient Glow Lock */}
        <m.div 
          initial={isMobile ? { opacity: 1 } : { opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <span className="text-[#C9A050] text-[10px] sm:text-[11px] tracking-[0.45em] uppercase font-black block drop-shadow-[0_4px_12px_rgba(201,160,80,0.25)] select-none antialiased">
            Sohip Style <span className="text-white/30 mx-1.5">•</span> Boutique Service <span className="text-white/30 mx-1.5">•</span> Local Edge
          </span>
        </m.div>

        {/* MAIN TYPOGRAPHY HEADER - Ultra Luxury Editorial Layout */}
        <div className="space-y-4 max-w-5xl mx-auto">
          <m.h1 
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }} 
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[105px] text-white leading-[1.02] text-center  font-sans antialiased tracking-tighter font-black"
          >
            SOHIP
            <span className="block font-bold tracking-wide text-white/95 text-4xl sm:text-6xl md:text-7xl lg:text-[90px] mt-2 font-sans">
              Dallas Homes
            </span>
          </m.h1>
        </div>

        {/* SUBTITLE FRAME - Refined Editorial Text Line */}
        <m.p 
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-sans text-[15px] sm:text-lg md:text-xl font-medium  text-white max-w-2xl mx-auto tracking-wide leading-relaxed text-center"
        >
          Style creates desire and Strategy creates results.
        </m.p>

        {/* ✅ ADVANCED LUXURY GLASS SEARCH CAPSULE MATRIX */}
        <m.div 
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="max-w-5xl mx-auto w-full px-2 sm:px-4"
        >
          {/* Main Capsule Mesh Wrapper Layout */}
          <div className="bg-[#111111]/80 backdrop-blur-3xl border border-white/10 p-6 md:p-3 rounded-3xl md:rounded-full flex flex-col md:flex-row gap-6 md:gap-3 items-stretch md:items-center justify-between px-8 shadow-[0_30px_70px_rgba(0,0,0,0.9)] transition-all duration-300 w-full text-left">
            
            {/* Field 1: Location Vector */}
            <div className="w-full md:w-auto flex-grow flex flex-col items-start px-2 md:border-r border-white/10 md:pr-6 relative group">
              <span className="text-[9px] font-black text-[#C9A050] tracking-widest uppercase mb-1.5 block">
                LOCATION
              </span>
              <div className="relative w-full flex items-center justify-between">
                <select className="bg-transparent text-white text-xs tracking-wider uppercase outline-none cursor-pointer w-full py-1 font-bold appearance-none pr-6 z-10 font-sans">
                  <option className="bg-[#111111] text-white">South of 635 Only</option>
                  <option className="bg-[#111111] text-white">Highland Park</option>
                  <option className="bg-[#111111] text-white">Preston Hollow</option>
                  <option className="bg-[#111111] text-white">University Park</option>
                </select>
                <ChevronDown size={12} className="text-[#C9A050] absolute right-0 pointer-events-none z-0" />
              </div>
            </div>

            {/* Field 2: Typology Vector */}
            <div className="w-full md:w-auto flex-grow flex flex-col items-start px-2 md:border-r border-white/10 md:pr-6 relative group">
              <span className="text-[9px] font-black text-[#C9A050] tracking-widest uppercase mb-1.5 block">
                ASSET TYPE
              </span>
              <div className="relative w-full flex items-center justify-between">
                <select className="bg-transparent text-white text-xs tracking-wider uppercase outline-none cursor-pointer w-full py-1 font-bold appearance-none pr-6 z-10 font-sans">
                  <option className="bg-[#111111] text-white">All Classifications</option>
                  <option className="bg-[#111111] text-white">Private Estates</option>
                  <option className="bg-[#111111] text-white">Luxury Penthouses</option>
                  <option className="bg-[#111111] text-white">Off-Market Inventory</option>
                </select>
                <ChevronDown size={12} className="text-[#C9A050] absolute right-0 pointer-events-none z-0" />
              </div>
            </div>

            {/* Field 3: Capital Baseline */}
            <div className="w-full md:w-auto flex-grow flex flex-col items-start px-2 relative group">
              <span className="text-[9px] font-black text-[#C9A050] tracking-widest uppercase mb-1.5 block">
                INVESTMENT BASELINE
              </span>
              <div className="relative w-full flex items-center justify-between">
                <select className="bg-transparent text-white text-xs tracking-wider uppercase outline-none cursor-pointer w-full py-1 font-bold appearance-none pr-6 z-10 font-sans">
                  <option className="bg-[#111111] text-white">Price Range ($2M+)</option>
                  <option className="bg-[#111111] text-white">$2M - $5M</option>
                  <option className="bg-[#111111] text-white">$5M - $10M</option>
                  <option className="bg-[#111111] text-white">$10M - $25M+</option>
                </select>
                <ChevronDown size={12} className="text-[#C9A050] absolute right-0 pointer-events-none z-0" />
              </div>
            </div>

            {/* Action Gate Trigger Button */}
            <button className="w-full md:w-auto bg-[#C9A050] text-black text-[11px] font-black tracking-widest uppercase px-10 py-4.5 rounded-xl md:rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-xl flex items-center justify-center gap-2 shrink-0 transform-gpu active:scale-98 cursor-pointer font-sans">
              <Search size={13} strokeWidth={3} /> Search Matrix
            </button>
          </div>

          {/* RE-ENGINEERED ELITE UTILITY SHORTCUT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16 text-[11px] tracking-[0.2em] font-bold uppercase w-full items-stretch">
            
            {/* Card 1 */}
            <button type="button" className="group relative w-full px-6 py-5.5 rounded-xl bg-[#111111]/90 border border-white/5 text-white flex items-center justify-center sm:justify-start gap-4 transition-all duration-500 shadow-xl transform-gpu sm:hover:-translate-y-1.5 sm:hover:border-[#C9A050]/40 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C9A050_0%,transparent_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-[0.05]" />
              <div className="p-2.5 rounded-lg bg-black border border-white/5 text-[#C9A050] transition-colors group-hover:bg-[#C9A050] group-hover:text-black shrink-0">
                <Search size={14} strokeWidth={2.5} />
              </div>
              <span className="font-sans text-white group-hover:text-[#C9A050] transition-colors duration-300 text-left tracking-widest flex items-center gap-1">
                Search Listings <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#C9A050]" />
              </span>
            </button>
            
            {/* Card 2 */}
            <button type="button" className="group relative w-full px-6 py-5.5 rounded-xl bg-[#111111]/90 border border-white/5 text-white flex items-center justify-center sm:justify-start gap-4 transition-all duration-500 shadow-xl transform-gpu sm:hover:-translate-y-1.5 sm:hover:border-[#C9A050]/40 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C9A050_0%,transparent_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-[0.05]" />
              <div className="p-2.5 rounded-lg bg-black border border-white/5 text-[#C9A050] transition-colors group-hover:bg-[#C9A050] group-hover:text-black shrink-0">
                <Calculator size={14} strokeWidth={2.5} />
              </div>
              <span className="font-sans text-white group-hover:text-[#C9A050] transition-colors duration-300 text-left tracking-widest flex items-center gap-1">
                What's My Home Worth? <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#C9A050]" />
              </span>
            </button>
            
            {/* Card 3 */}
            <button type="button" className="group relative w-full px-6 py-5.5 rounded-xl bg-[#111111]/90 border border-white/5 text-white flex items-center justify-center sm:justify-start gap-4 transition-all duration-500 shadow-xl transform-gpu sm:hover:-translate-y-1.5 sm:hover:border-[#C9A050]/40 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C9A050_0%,transparent_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-[0.05]" />
              <div className="p-2.5 rounded-lg bg-black border border-white/5 text-[#C9A050] transition-colors group-hover:bg-[#C9A050] group-hover:text-black shrink-0">
                <HelpCircle size={14} strokeWidth={2.5} />
              </div>
              <span className="font-sans text-white group-hover:text-[#C9A050] transition-colors duration-300 text-left tracking-widest flex items-center gap-1">
                FAQ Overview <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#C9A050]" />
              </span>
            </button>

          </div>
        </m.div>
      </div>
    </section>
  );
}