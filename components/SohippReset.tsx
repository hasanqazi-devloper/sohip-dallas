"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";

export default function SohippReset() {
  const resetImg = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070";
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Client side viewport tracking framework
  useEffect(() => {
    const checkDeviceWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDeviceWidth();
    window.addEventListener("resize", checkDeviceWidth);
    return () => window.removeEventListener("resize", checkDeviceWidth);
  }, []);

  return (
    // Matte warm charcoal brown luxury surface background block
    <section id="reset" className="py-20 md:py-32 bg-[#1D1813] border-y border-white/5 scroll-mt-24 relative z-10 w-full">

      {/* ✅ FIX: Wrapper updated to max-w-[1400px] layout balance shield */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch w-full">
        {/* CONTENT SPECIFICATION LAYER - ✅ Powered by Montserrat & Unified Header Blueprint */}
        <div className="lg:col-span-6 space-y-4 text-left order-1 lg:order-1 flex flex-col justify-center items-start py-2">

          {/* Pre-Title Upper Ribbon */}
          <m.span
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="text-[10px] tracking-[0.4em] font-black text-[#C9A050] uppercase block"
          >
            ( THE SIGNATURE RESET )
          </m.span>

          {/* ✅ Main H2 Section Title: Shifted to blueprint size standard & ultra-heavy font-sans weight */}
          <m.h2
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-sans font-black tracking-[0.05em] text-white leading-tight"
          >
            Where Style Creates Desire & <br className="hidden md:block" />
            <span className="text-[#C9A050]">Strategy Creates Value.</span>
          </m.h2>

          {/* ✅ Description Box: Locked at pure white and strict 15px mobile response standard layout */}
          <m.p
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-[15px] sm:text-[16px] md:text-[17px] text-white font-sans font-normal leading-relaxed tracking-wide max-w-xl"
          >
            Average real estate listings compete on price. SoHipp assets command it. Through a clinical blend of aesthetic intelligence and hyper-localized presentation style, we strategically transform luxury properties south of 635 entirely before they ever hit the market grid. We don't just stage spaces; we manufacture digital desire for prospective global investors to lock high-ticket conversions faster.
          </m.p>

          {/* Call To Action Gateway */}
          <m.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="pt-4 w-full sm:w-auto"
          >
            <button type="button" className="w-full sm:w-auto border border-[#C9A050]/50 text-[#C9A050] px-8 py-4 rounded-full text-[10px] font-black tracking-[0.2em] uppercase hover:bg-[#C9A050] hover:text-black transition-all shadow-xl duration-300 transform-gpu active:scale-95 cursor-pointer font-sans">
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
          className="lg:col-span-6 relative h-[350px] sm:h-[450px] lg:h-auto rounded-xl overflow-hidden border border-white/10 shadow-3xl bg-[#161616] group order-2 lg:order-2 transform-gpu will-change-transform w-full min-h-[350px]"
        >
          <div className="absolute inset-0 bg-black/20 sm:group-hover:bg-transparent transition-colors duration-500 mountaineer-overlay z-10" />
          <img
            src={resetImg}
            alt="Luxury Interior Staging Transformation"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-70 sm:group-hover:opacity-90 sm:group-hover:scale-102 transition-all duration-700 object-center ease-out will-change-transform"
            loading="lazy"
          />
        </m.div>

      </div>
    </section>
  );
}