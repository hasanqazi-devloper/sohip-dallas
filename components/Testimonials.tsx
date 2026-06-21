"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Client side screen extraction check to bypass dynamic slide parsing on touch screens
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
    <section id="testimonials" className="py-20 md:py-32 bg-[#0A0A0A] border-t border-white/5 relative z-10 overflow-hidden">
      
      {/* BACKGROUND GRAPHIC ACCENT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A050]/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-24 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <m.span
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="text-[10px] tracking-[0.8em] uppercase font-black block mb-4 text-[#C9A050]"
          >
            ( AUTHENTIC EXPERIENCES )
          </m.span>
          <m.h2
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-5xl font-serif tracking-wide text-white font-medium"
          >
            What Our Elite Network Says
          </m.h2>
          <div className="w-16 h-[1px] bg-[#C9A050]/40 mx-auto mt-6"></div>
        </div>

        {/* LUXURY SLIDER INTERACTION GATEWAY */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <m.div
              key={activeIndex}
              initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="bg-[#141414] p-8 md:p-16 rounded-2xl border border-white/5 shadow-2xl relative group overflow-hidden min-h-[320px] flex flex-col justify-between transform-gpu"
            >
              {/* Luxury gold indicator line */}
              <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#C9A050] to-transparent w-full" />
              <Quote size={80} className="absolute -bottom-4 -right-4 text-white/[0.01] pointer-events-none transform -rotate-12" />

              <div className="space-y-6">
                {/* 5-Star Premium Layout Indicator */}
                <div className="flex gap-1.5 text-[#C9A050]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="#C9A050" strokeWidth={0} />
                  ))}
                </div>

                {/* Text scale configured at sharp 17px metrics standard */}
                <p className="text-[17px] text-white font-serif tracking-wide leading-relaxed italic opacity-90">
                  "{reviews[activeIndex].text}"
                </p>
              </div>

              {/* Author Details Block */}
              <div className="pt-6 mt-8 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-white text-base md:text-lg font-bold">
                    {reviews[activeIndex].name}
                  </h4>
                  <p className="text-[#C9A050] text-[10px] tracking-[0.2em] uppercase mt-1 font-black">
                    {reviews[activeIndex].role}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/20">
                  <span className="text-[10px] font-mono">SO</span>
                </div>
              </div>
            </m.div>
          </AnimatePresence>

          {/* MINIMALIST SLIDER CONTROLS NAVIGATION BUTTONS */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              aria-label="Previous Review"
              className="p-3 rounded-full bg-[#141414] border border-white/5 text-white/60 hover:text-[#C9A050] hover:border-[#C9A050]/40 transition-all transform-gpu active:scale-90"
            >
              <ChevronLeft size={16} />
            </button>
            
            {/* Dot Stepper Indicator */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-[#C9A050]' : 'w-1.5 bg-white/10'}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Review"
              className="p-3 rounded-full bg-[#141414] border border-white/5 text-white/60 hover:text-[#C9A050] hover:border-[#C9A050]/40 transition-all transform-gpu active:scale-90"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}