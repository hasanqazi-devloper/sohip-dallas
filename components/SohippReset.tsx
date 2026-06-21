"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";

export default function SohippReset() {
  const resetImg = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070";
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Client side window extraction framework to bypass scroll calculation latency on mobile touch track
  useEffect(() => {
    const checkDeviceWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDeviceWidth();
    window.addEventListener("resize", checkDeviceWidth);
    return () => window.removeEventListener("resize", checkDeviceWidth);
  }, []);

  return (
    // Matte charcoal block alignment
    <section id="reset" className="py-20 md:py-32 bg-[#121212] border-y border-white/5 scroll-mt-24 relative z-10">
      {/* items-stretch applies auto-matching layout height for text layer and visual showcase boxes */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        
        {/* CONTENT SPECIFICATION LAYER */}
        <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-1 flex flex-col justify-center py-2">
          
          {/* Bright gold signature tracking title synchronized to #C9A050 */}
          <m.span 
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="text-[10px] tracking-[0.4em] font-black text-[#C9A050] uppercase block"
          >
            ( THE SIGNATURE RESET )
          </m.span>
          
          {/* Enhanced tight tracking typography hook */}
          <m.h2 
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-white font-medium tracking-[0.02em]"
          >
            Where Style Creates Desire & <br className="hidden md:block"/>
            <span className="italic text-[#C9A050]">Strategy Creates Value.</span>
          </m.h2>
          
          {/* P tag setup: strict 17px, solid crisp reading texture */}
          <m.p 
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-[17px] text-white font-light leading-relaxed tracking-wide max-w-xl opacity-95"
          >
            Average real estate listings compete on price. SoHipp assets command it. Through a clinical blend of aesthetic intelligence and hyper-localized presentation style, we strategically transform luxury properties south of 635 entirely before they ever hit the market grid. We don't just stage spaces; we manufacture digital desire for prospective global investors to lock high-ticket conversions faster.
          </m.p>

          <m.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="pt-2"
          >
            <button className="border border-[#C9A050] text-[#C9A050] px-8 py-4 rounded-full text-[11px] font-black tracking-widest uppercase hover:bg-[#C9A050] hover:text-black hover:scale-102 transition-all shadow-lg duration-300 transform-gpu active:scale-98">
              Apply For A SoHipp Reset Session →
            </button>
          </m.div>
        </div>

        {/* VISUAL SHOWCASE FRAMEWORK */}
        <m.div 
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="lg:col-span-6 relative h-[350px] sm:h-[450px] lg:h-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#161616] group order-2 lg:order-2 transform-gpu will-change-transform"
        >
          <div className="absolute inset-0 bg-black/10 sm:group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img 
            src={resetImg} 
            alt="Luxury Interior Staging Transformation" 
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-75 sm:group-hover:opacity-95 sm:group-hover:scale-105 transition-all duration-700 object-center will-change-transform" 
            loading="lazy"
          />
        </m.div>

      </div>
    </section>
  );
}