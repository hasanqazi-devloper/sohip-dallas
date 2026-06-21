"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { Compass, Home, Sparkles } from "lucide-react";

export default function AudienceSegments() {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Viewport detection to fully optimize layout shift calculations on touch screens
  useEffect(() => {
    const checkDeviceWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDeviceWidth();
    window.addEventListener("resize", checkDeviceWidth);
    return () => window.removeEventListener("resize", checkDeviceWidth);
  }, []);

  const segments = [
    {
      title: "BUYERS",
      icon: <Compass size={28} strokeWidth={1.5} />,
      desc: "Find your next high-end structural asset south of 635 with bespoke, strategic market data guidance.",
    },
    {
      title: "SELLERS",
      icon: <Home size={28} strokeWidth={1.5} />,
      desc: "Position your premium property using precise design transformation to command record valuations.",
    },
    {
      title: "HOME RESET",
      icon: <Sparkles size={28} strokeWidth={1.5} />,
      desc: "Transform your architectural space entirely before hitting the grid with elite pre-listing staging.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-24 bg-[#121212] border-b border-white/5 relative z-10 overflow-hidden w-full">
      
      {/* Background Subtle Wireframe Accent */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10 w-full">
        
        {/* SECTION HEADER BLOCK */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <m.span
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="text-[10px] sm:text-[11px] tracking-[0.6em] uppercase font-bold block text-[#C9A050]"
          >
            ( CLIENT ARCHITECTURES )
          </m.span>

          <m.h2
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-wide text-white font-medium uppercase"
          >
            Tailored Real Estate Strategies
          </m.h2>
          
          <m.div 
            initial={isMobile ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="w-20 h-[1px] bg-[#C9A050]/40 mx-auto mt-4 origin-center"
          />
        </div>

        {/* CARDS CONTAINER GRID - Bounded with precision spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-stretch w-full">
          {segments.map((seg, i) => (
            <m.div
              key={i}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: isMobile ? 0 : i * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col items-center text-center cursor-pointer transform-gpu transition-all duration-500 sm:hover:-translate-y-2.5 will-change-transform w-full"
            >
              {/* Card Main Body with subtle stone texture and gold border */}
              <div className="relative flex-grow w-full bg-[#1A1A1A] border border-white/5 rounded-2xl p-8 sm:p-10 md:p-12 lg:p-14 shadow-3xl overflow-hidden transition-all duration-500 sm:group-hover:border-[#C9A050]/20 flex flex-col justify-start items-center">
                
                {/* Subtle Stone Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.02] mix-blend-luminosity pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-dotted-2.png')]" />
                
                {/* Gold Glow effect on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C9A050_0%,transparent_70%)] opacity-0 transition-opacity duration-500 sm:group-hover:opacity-[0.02] rounded-2xl" />

                {/* Top Gold Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A050] scale-x-0 transition-transform duration-500 sm:group-hover:scale-x-100 rounded-t-2xl origin-center" />

                {/* Icon Container with subtle animation */}
                <div className="relative mb-8 md:mb-10 flex items-center justify-center shrink-0">
                  {/* Outer spinning ring on hover */}
                  <div className="absolute inset-0 rounded-full border border-[#C9A050]/20 opacity-0 scale-120 transition-all duration-500 sm:group-hover:opacity-100 sm:group-hover:scale-100 sm:group-hover:rotate-180" />
                  
                  <div className="relative p-4 md:p-5 rounded-full bg-[#0D0D0D] border border-white/5 text-[#C9A050] transition-all duration-500 sm:group-hover:scale-105 sm:group-hover:bg-[#C9A050] sm:group-hover:text-[#0D0D0D]">
                    {seg.icon}
                  </div>
                </div>

                {/* Content Details Block */}
                <div className="space-y-3 md:space-y-4 relative z-10 flex flex-col justify-start items-center flex-grow">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif tracking-wide font-bold text-white transition-colors duration-300 sm:group-hover:text-[#C9A050]">
                    {seg.title}
                  </h3>

                  <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/50 font-light font-sans max-w-xs leading-relaxed tracking-wide transition-colors duration-300 sm:group-hover:text-white/80">
                    {seg.desc}
                  </p>
                </div>
              </div>

              {/* Decorative base element resembling the reference photo stand */}
              <div className="w-12 h-5 md:w-14 md:h-6 bg-[#1A1A1A] border-x border-b border-white/5 rounded-b-xl transition-all duration-500 sm:group-hover:border-[#C9A050]/20 sm:group-hover:bg-[#C9A050]/5 shrink-0" />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}