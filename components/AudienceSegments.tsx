"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { Compass, Home, Sparkles } from "lucide-react";

export default function AudienceSegments() {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Viewport detection to fully kill runtime layout shift calculations on mobile
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
      icon: <Compass size={32} strokeWidth={1.5} />,
      desc: "Find your next high-end structural asset south of 635 with bespoke, strategic market data guidance.",
    },
    {
      title: "SELLERS",
      icon: <Home size={32} strokeWidth={1.5} />,
      desc: "Position your premium property using precise design transformation to command record valuations.",
    },
    {
      title: "HOME RESET",
      icon: <Sparkles size={32} strokeWidth={1.5} />,
      desc: "Transform your architectural space entirely before hitting the grid with elite pre-listing staging.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-24 bg-[#121212] border-b border-white/5 relative z-10 overflow-hidden">
      {/* Background Subtle Wireframe Accent */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* SECTION HEADER BLOCK */}
        <div className="text-center mb-16 md:mb-24">
          <m.span
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="text-[11px] tracking-[0.6em] uppercase font-bold block mb-4 text-[#C9A050]"
          >
            ( CLIENT ARCHITECTURES )
          </m.span>

          <m.h2
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-3xl md:text-6xl font-serif tracking-tight text-white font-medium"
          >
            Tailored Real Estate Strategies
          </m.h2>
          <m.div 
            initial={isMobile ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="w-24 h-[1px] bg-[#C9A050] mx-auto mt-6 md:mt-8 origin-center"
          ></m.div>
        </div>

        {/* CARDS CONTAINER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-stretch">
          {segments.map((seg, i) => (
            <m.div
              key={i}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: isMobile ? 0 : i * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col items-center text-center cursor-pointer transform-gpu transition-all duration-500 sm:hover:-translate-y-2.5 will-change-transform"
            >
              {/* Card Main Body with subtle stone texture and gold border */}
              <div className="relative flex-grow w-full bg-[#1A1A1A] border border-white/5 rounded-2xl p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 sm:group-hover:border-[#C9A050]/30">
                
                {/* Subtle Stone Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.02] mix-blend-luminosity pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-dotted-2.png')]"></div>
                
                {/* Gold Glow effect on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C9A050_0%,transparent_70%)] opacity-0 transition-opacity duration-500 sm:group-hover:opacity-[0.03] rounded-2xl" />

                {/* Top Gold Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9A050] scale-x-0 transition-transform duration-500 sm:group-hover:scale-x-100 rounded-t-2xl origin-center" />

                {/* Icon Container with subtle animation */}
                <div className="relative mb-10 md:mb-12 flex items-center justify-center">
                  {/* Outer spinning ring on hover */}
                  <div className="absolute inset-0 rounded-full border border-[#C9A050]/20 opacity-0 scale-150 transition-all duration-500 sm:group-hover:opacity-100 sm:group-hover:scale-100 sm:group-hover:rotate-180"></div>
                  
                  <div className="relative p-5 md:p-6 rounded-full bg-[#0D0D0D] border border-white/5 text-[#C9A050] transition-transform duration-500 sm:group-hover:scale-110 sm:group-hover:bg-[#C9A050] sm:group-hover:text-[#0D0D0D]">
                    {seg.icon}
                  </div>
                </div>

                {/* Content Details Block */}
                <div className="space-y-4 md:space-y-5 relative z-10">
                  <h3 className="text-xl md:text-3xl font-serif tracking-tight font-bold text-white transition-colors duration-300 sm:group-hover:text-[#C9A050]">
                    {seg.title}
                  </h3>

                  <p className="text-[17px] text-white/70 font-light max-w-sm leading-relaxed tracking-wide transition-colors duration-300 sm:group-hover:text-white/90">
                    {seg.desc}
                  </p>
                </div>
              </div>

              {/* Decorative base element resembling the reference photo stand */}
              <div className="w-14 h-6 md:w-16 md:h-8 bg-[#1A1A1A] border-x border-b border-white/5 rounded-b-xl transition-all duration-500 sm:group-hover:border-[#C9A050]/30 sm:group-hover:bg-[#C9A050]/5"></div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}