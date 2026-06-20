"use client";

import { m } from "framer-motion";
import { Search, Calculator, HelpCircle } from "lucide-react";

export default function Hero() {
  // Ultra high-res production optimized premium DFW asset image URL
  const heroBg = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070";

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden bg-[#0D0D0D] pt-32 sm:pt-40 pb-20">
      
      {/* ⚡ HIGH-PERFORMANCE LCP BACKGROUND ENGINE */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src={heroBg} 
          alt="Premium Dallas Architecture" 
          // fetchpriority="high" and rel="preload" structure parameters via native tags fallback
          fetchPriority="high"
          className="w-full h-full object-cover opacity-35 scale-100 will-change-transform" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/80" />
      </div>
      
      {/* ALIGNED TEXT STACK */}
      <div className="relative z-10 max-w-[1100px] mx-auto space-y-6 sm:space-y-8">
        
        <m.span 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#C9A050] text-[10px] md:text-[11px] tracking-[0.5em] sm:tracking-[0.6em] uppercase font-black block"
        >
          Sohip Style • Boutique Service • Local Edge
        </m.span>

        <m.h1 
          initial={{ opacity: 0, y: 25 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-[0.03em] uppercase text-white leading-[1.15] font-medium"
        >
          SOHIP DALLAS HOMES
        </m.h1>
        
        <m.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-[17px] sm:text-xl md:text-2xl font-light italic text-white/90 max-w-2xl mx-auto tracking-wide leading-relaxed"
        >
          "Style creates desire and Strategy creates results."
        </m.p>

        {/* GLASSMORPHIC FILTER ENGINE */}
        <m.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 max-w-3xl mx-auto"
        >
          {/* Responsive Layout wrapper matching elite dashboard specifications */}
          <div className="bg-[#161616]/70 backdrop-blur-2xl border border-white/10 p-3 md:p-4 rounded-2xl md:rounded-full flex flex-col md:flex-row gap-4 items-center justify-between px-6 shadow-2xl transition-all duration-300">
            
            <div className="w-full md:w-auto flex flex-col items-start px-2 md:border-r border-white/10 md:pr-6">
              <span className="text-[9px] font-black text-[#C9A050] tracking-widest uppercase mb-1 hidden md:block">Location</span>
              <select className="bg-transparent text-white text-xs tracking-wider uppercase outline-none cursor-pointer w-full p-1 font-bold">
                <option className="bg-[#161616] text-white">South of 635 Only</option>
                <option className="bg-[#161616] text-white">Highland Park</option>
                <option className="bg-[#161616] text-white">Preston Hollow</option>
              </select>
            </div>

            <div className="w-full md:w-auto flex flex-col items-start px-2">
              <span className="text-[9px] font-black text-[#C9A050] tracking-widest uppercase mb-1 hidden md:block">Investment Baseline</span>
              <select className="bg-transparent text-white text-xs tracking-wider uppercase outline-none cursor-pointer w-full p-1 font-bold">
                <option className="bg-[#161616] text-white">Price Range ($2M+)</option>
                <option className="bg-[#161616] text-white">$2M - $5M</option>
                <option className="bg-[#161616] text-white">$5M - $10M</option>
                <option className="bg-[#161616] text-white">$10M+</option>
              </select>
            </div>

            <button className="w-full md:w-auto bg-[#C9A050] text-black text-[11px] font-black tracking-widest uppercase px-8 py-4 rounded-xl md:rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg flex items-center justify-center gap-2 shrink-0">
              <Search size={14} strokeWidth={2.5} /> Search Map
            </button>
          </div>

          {/* ADVANCED UTILITY SHORTCUT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 md:mt-12 text-[10px] tracking-[0.15em] font-black uppercase">
            {/* Search Card */}
            <m.button 
              whileHover={{ y: -4 }}
              className="px-5 py-4 rounded-xl bg-[#141414] border border-white/5 hover:border-[#C9A050]/40 text-white flex items-center justify-center sm:justify-start gap-3 transition-all duration-300 shadow-xl"
            >
              <Search size={14} className="text-[#C9A050]" /> <span>Search Listings</span>
            </m.button>
            
            {/* Valuation Card */}
            <m.button 
              whileHover={{ y: -4 }}
              className="px-5 py-4 rounded-xl bg-[#141414] border border-white/5 hover:border-[#C9A050]/40 text-white flex items-center justify-center sm:justify-start gap-3 transition-all duration-300 shadow-xl"
            >
              <Calculator size={14} className="text-[#C9A050]" /> <span>What's My Home Worth?</span>
            </m.button>
            
            {/* FAQ Card */}
            <m.button 
              whileHover={{ y: -4 }}
              className="px-5 py-4 rounded-xl bg-[#141414] border border-white/5 hover:border-[#C9A050]/40 text-white flex items-center justify-center sm:justify-start gap-3 transition-all duration-300 shadow-xl"
            >
              <HelpCircle size={14} className="text-[#C9A050]" /> <span>FAQ Overview</span>
            </m.button>
          </div>

        </m.div>
      </div>
    </section>
  );
}