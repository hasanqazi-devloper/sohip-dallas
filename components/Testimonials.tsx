"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Client side viewport tracking to freeze memory configurations
  useEffect(() => {
    const checkDeviceWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDeviceWidth();
    window.addEventListener("resize", checkDeviceWidth);
    return () => window.removeEventListener("resize", checkDeviceWidth);
  }, []);

  const reviews = [
    {
      name: "Sarah M.",
      role: "Highland Park Seller",
      text: "The SoHipp Reset completely transformed our listing presentation. We received multiple cash offers within 48 hours of hitting the competitive Dallas market layout. Absolute digital brilliance!"
    },
    {
      name: "David K.",
      role: "Preston Hollow Investor",
      text: "Jennifer’s unique data intelligence and strict focus south of 635 made our luxury relocation seamless. Her workflow execution is exactly the same high velocity she brings to real estate."
    },
    {
      name: "Elizabeth R.",
      role: "Lakewood Homeowner",
      text: "Unbelievable attention to detail. The pre-listing transformation maximized our property's valuation vector far beyond our baseline expectations. A masterclass in marketing."
    },
    {
      name: "Marcus V.",
      role: "Devonshire Client",
      text: "Absolute transactional discretion and market insight. Jennifer operates with a level of precision that is rare in today's luxury real estate ecosystem. Highly recommended."
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#000000] border-t border-white/5 relative z-10 overflow-hidden w-full">

      {/* BACKGROUND GRAPHIC ACCENT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A050]/[0.02] blur-[120px] rounded-full pointer-events-none" />

      {/* Bounded framework scaled to standard max bounds */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-24 relative z-10 w-full">

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
            ( AUTHENTIC EXPERIENCES )
          </m.span>

          {/* Main H2 Section Title */}
          <m.h2
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-sans font-black tracking-[0.05em] text-white "
          >
            What Our Elite Network Says
          </m.h2>

          {/* Description Box - Calibrated back to luxury opacity standard blueprint */}
          <m.p
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[15px] sm:text-[15px] md:text-[15px] font-sans font-normal tracking-wide text-white max-w-xl mx-auto leading-relaxed"
          >
            Verified testimonials and transaction insights straight from our exclusive real estate ecosystem.
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

        {/* LUXURY SLIDER INTERACTION GATEWAY */}
        <div className="relative max-w-3xl mx-auto w-full">
          
          {/* ✅ FIX: Wrapper container layout triggers smooth hardware-accelerated fluid resizing auto-frames */}
          <m.div layout className="w-full bg-[#141414] rounded-2xl border border-white/5 shadow-3xl relative overflow-hidden p-8 md:p-14 transform-gpu">
            {/* Luxury gold indicator line */}
            <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#C9A050] to-transparent w-full" />
            <Quote size={80} className="absolute -bottom-4 -right-4 text-white/[0.01] pointer-events-none transform -rotate-12" />

            <AnimatePresence mode="wait">
              <m.div
                key={activeIndex}
                initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="w-full flex flex-col justify-between text-left h-full"
              >
                <div className="space-y-5">
                  {/* 5-Star Premium Layout Indicator */}
                  <div className="flex gap-1.5 text-[#C9A050]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} fill="#C9A050" strokeWidth={0} />
                    ))}
                  </div>

                  {/* Text scale configured at clean standard */}
                  <p className="text-[15px] sm:text-[17px] md:text-[18px] text-white font-sans font-medium tracking-wide leading-relaxed italic">
                    "{reviews[activeIndex].text}"
                  </p>
                </div>

                {/* Author Details Block */}
                <div className="pt-6 mt-8 border-t border-white/5 flex items-center justify-between w-full">
                  <div>
                    <h4 className="font-sans text-white text-base font-bold uppercase tracking-wide">
                      {reviews[activeIndex].name}
                    </h4>
                    <p className="text-[#C9A050] text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mt-1 font-black font-sans">
                      {reviews[activeIndex].role}
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/20 shrink-0 select-none">
                    <span className="text-[9px] font-mono font-bold tracking-tighter">SO</span>
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
          </m.div>

          {/* MINIMALIST SLIDER CONTROLS NAVIGATION BUTTONS */}
          <div className="flex justify-center items-center gap-4 mt-8 w-full">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Review"
              className="p-3 rounded-full bg-[#141414] border border-white/5 text-white/60 hover:text-[#C9A050] hover:border-[#C9A050]/30 transition-all transform-gpu active:scale-90 cursor-pointer"
            >
              <ChevronLeft size={14} />
            </button>

            {/* Dot Stepper Indicator */}
            <div className="flex gap-2 select-none">
              {reviews.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-5 bg-[#C9A050]' : 'w-1 bg-white/10'}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Review"
              className="p-3 rounded-full bg-[#141414] border border-white/5 text-white/60 hover:text-[#C9A050] hover:border-[#C9A050]/30 transition-all transform-gpu active:scale-90 cursor-pointer"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}