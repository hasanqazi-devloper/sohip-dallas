"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";

export default function Communities() {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Client side viewport extraction to fix animation overhead seamlessly
  useEffect(() => {
    const checkDeviceWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDeviceWidth();
    window.addEventListener("resize", checkDeviceWidth);
    return () => window.removeEventListener("resize", checkDeviceWidth);
  }, []);

  const neighborhoods = [
    { id: 1, name: 'Highland Park', listings: '12 Active Properties', price: '$1.5M - $12M', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600' },
    { id: 2, name: 'University Park', listings: '8 Active Properties', price: '$1.2M - $8M', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600' },
    { id: 3, name: 'Preston Hollow', listings: '15 Active Properties', price: '$2.0M - $20M', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600' },
    { id: 4, name: 'Devonshire', listings: '6 Active Properties', price: '$900K - $4M', img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=600' },
    { id: 5, name: 'Bluffview', listings: '9 Active Properties', price: '$1.1M - $6M', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600' },
    { id: 6, name: 'Lakewood', listings: '11 Active Properties', price: '$1.3M - $7M', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600' },
  ];

  return (
    // ✅ FIX: Removed max-w limitation from section wrapper to allow absolute liquid full-width flow on 4K monitors
    <section id="communities" className="py-20 md:py-32 px-6 md:px-16 lg:px-24 xl:px-32 relative z-10 bg-[#000000] w-full block">
      
      {/* SECTION HEADER BLOCK - Centered perfectly inside full container */}
      <div className="w-full text-center mb-16 md:mb-24 space-y-4">
        <m.span 
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="text-[10px] tracking-[0.8em] uppercase font-black block text-[#C9A050]"
        >
          ( CURATED PORTFOLIO )
        </m.span>
        
        <m.h2 
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-5xl font-serif tracking-wide text-white font-medium uppercase"
        >
          Exclusive Neighborhoods South of 635
        </m.h2>
        <div className="w-16 h-[1px] bg-[#C9A050]/40 mx-auto mt-4"></div>
      </div>

      {/* LUXURY INTERACTIVE CARDS GRID */}
      {/* ✅ FIX: Grid layout dynamically tracks 3xl / 4xl screens to prevent horizontal breaking or squeezing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-full items-stretch mx-auto">
        {neighborhoods.map((area, i) => (
          <m.div 
            key={area.id} 
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: isMobile ? 0 : i * 0.05, ease: "easeOut" }}
            className="relative h-[380px] sm:h-[420px] md:h-[440px] xl:h-[480px] rounded-xl overflow-hidden cursor-pointer shadow-3xl border border-white/5 group bg-[#161616] transform-gpu transition-all duration-500 sm:hover:-translate-y-2 will-change-transform w-full"
          >
            {/* FIXED OVERLAY MATRIX */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-10 opacity-80 sm:group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10 transition-all duration-500 sm:group-hover:from-black sm:group-hover:via-black/90" />
            
            {/* Parallax Smooth Zoom Image Layout */}
            <img 
              src={area.img} 
              alt={area.name} 
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 sm:group-hover:scale-105 opacity-50 sm:group-hover:opacity-70 will-change-transform" 
              loading="lazy" 
            />
            
            {/* Asset Parameter Details Block */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-20 flex flex-col items-start space-y-3">
              <span className="text-[#C9A050] text-[10px] font-black tracking-widest uppercase bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#C9A050]/20 shadow-lg font-sans">
                {area.price}
              </span>
              
              <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wide sm:group-hover:text-[#C9A050] transition-colors duration-300 font-bold uppercase">
                {area.name}
              </h3>
              
              <p className="text-[11px] sm:text-[12px] font-mono text-white/50 tracking-[0.18em] uppercase transition-colors duration-300 sm:group-hover:text-white/80">
                {area.listings}
              </p>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}