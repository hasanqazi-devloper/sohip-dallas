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
  <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>

  <div className="max-w-[1400px] mx-auto relative z-10 w-full">

    {/* 🏙️ UNIFIED LUXURY SECTION HEADER BLUEPRINT */}
    <div className="text-center mb-16 md:mb-20 space-y-3 w-full">

      {/* Pre-Title Upper Ribbon */}
      <m.span
        initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3 }}
        className="text-[10px] tracking-[0.4em] uppercase font-black block text-[#C9A050]"
      >
        ( CLIENT ARCHITECTURES )
      </m.span>

      {/* Main H2 Section Title */}
      <m.h2
        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-4xl font-sans font-black tracking-[0.05em] text-white uppercase"
      >
        Tailored Real Estate Strategies
      </m.h2>

      {/* ✅ FIXED: Description Box switched to pure white high contrast text and strict mobile responsive sizing */}
      <m.p
        initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-[15px] sm:text-[16px] font-sans font-normal tracking-wide text-white max-w-xl mx-auto leading-relaxed"
      >
        Bespoke asset alignment models engineered specifically for high-net-worth real estate placement south of 635.
      </m.p>

      {/* Golden Split Line Matrix */}
      <m.div
        initial={isMobile ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="w-12 h-[1.5px] bg-[#C9A050]/60 mx-auto pt-2 origin-center select-none pointer-events-none"
      />
    </div>

    {/* CARDS CONTAINER GRID - ✅ Perfect Separation Over Pure Obsidian Backdrop */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-stretch w-full font-sans">
      {segments.map((seg, i) => (
        <m.div
          key={i}
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: isMobile ? 0 : i * 0.1, ease: "easeOut" }}
          className="group relative flex flex-col items-center text-center cursor-pointer transform-gpu transition-all duration-500 sm:hover:-translate-y-2.5 will-change-transform w-full"
        >
          {/* Card Main Body - Standout Deep Custom Graphite Element */}
          <div className="relative flex-grow w-full bg-[#000000] border border-white/5 rounded-2xl p-6 sm:p-8 md:p-10 shadow-3xl overflow-hidden transition-all duration-500 sm:group-hover:border-[#C9A050]/40 sm:group-hover:bg-[#181818] flex flex-col justify-start items-center">

            {/* Subtle Stone Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-luminosity pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-dotted-2.png')]" />

            {/* Gold Glow effect on hover */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C9A050_0%,transparent_70%)] opacity-0 transition-opacity duration-500 sm:group-hover:opacity-[0.04] rounded-2xl" />

            {/* Top Gold Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A050] to-transparent scale-x-0 transition-transform duration-500 sm:group-hover:scale-x-100 rounded-t-2xl origin-center" />

            {/* Icon Container with subtle animation */}
            <div className="relative mb-6 md:mb-8 flex items-center justify-center shrink-0">
              {/* Outer spinning ring on hover */}
              <div className="absolute inset-0 rounded-full border border-[#C9A050]/30 opacity-0 scale-125 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-180" />

              <div className="relative p-4 md:p-5 rounded-full bg-[#050505] border border-white/10 text-[#C9A050] transition-all duration-500 group-hover:scale-105 group-hover:bg-[#C9A050] group-hover:text-black shadow-lg">
                {seg.icon}
              </div>
            </div>

            {/* Content Details Block */}
            <div className="space-y-3.5 relative z-10 flex flex-col justify-start items-center flex-grow w-full">
              {/* Main Title Heading */}
              <h3 className="text-xl sm:text-2xl font-sans tracking-[0.05em] font-black text-white uppercase transition-colors duration-300 sm:group-hover:text-[#C9A050]">
                {seg.title}
              </h3>

              {/* Description Paragraph */}
              <p className="text-[15px] sm:text-[16px] text-white font-normal font-sans max-w-xs leading-relaxed tracking-wide transition-opacity duration-300 opacity-95 group-hover:opacity-100">
                {seg.desc}
              </p>
            </div>
          </div>

          {/* Decorative base element */}
          <div className="w-12 h-5 md:w-14 md:h-6 bg-[#121212] border-x border-b border-white/5 rounded-b-xl transition-all duration-500 sm:group-hover:border-[#C9A050]/40 sm:group-hover:bg-[#181818] shrink-0" />
        </m.div>
      ))}
    </div>
  </div>
</section>

  );
}