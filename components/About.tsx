"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";

export default function About() {
  const founderImg = "/jennifer-duaine-portrait.jpg";
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Device viewport tracking to optimize animations gracefully
  useEffect(() => {
    const checkDeviceWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDeviceWidth();
    window.addEventListener("resize", checkDeviceWidth);
    return () => window.removeEventListener("resize", checkDeviceWidth);
  }, []);

  return (
    // Matte Charcoal Carbon surface background block
    <section id="about" className="py-20 md:py-32 bg-[#0D0D0D] border-t border-white/5 scroll-mt-24 relative z-10 w-full">
      <div className="max-w-[1800] mx-auto px-6 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* DESIGN INTELLECT CONTENT WRAPPER */}
        <div className="lg:col-span-7 space-y-6 text-left order-1 flex flex-col justify-center items-start">
          <m.span 
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="text-[10px] tracking-[0.5em] font-black text-[#C9A050] uppercase block"
          >
            ( THE STRATEGIST )
          </m.span>
          
          <m.h2 
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-white font-medium tracking-wide"
          >
            Aesthetic Intelligence. <br />
            <span className="italic text-[#C9A050]">Native Dallas Precision.</span>
          </m.h2>
          
          {/* Paragraphs locked at clear premium scale and tracking */}
          <div className="space-y-6 text-[15px] sm:text-[16px] md:text-[17px] text-white/90 font-light leading-relaxed tracking-wide max-w-xl font-sans">
            <m.p 
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
            >
              As a premier property strategist serving the elite Dallas market, Jennifer Duaine approaches real estate with an operator's data precision and an artist's design eye. Her background in digital transformation allows her to engineer seamless marketing frameworks that elevate residential assets into highly coveted products.
            </m.p>
            <m.p 
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
            >
              By strictly localizing operations south of 635, Jennifer provides bespoke advisory services to high-net-worth individuals, ensures absolute transactional discretion, and masterminds architectural presentations that maximize market valuation vectors.
            </m.p>
          </div>
        </div>

        {/* PORTRAIT FRAMED DISPLAY HOUSING */}
        <m.div 
          initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="lg:col-span-5 relative h-[400px] sm:h-[550px] w-full rounded-xl overflow-hidden border border-white/10 shadow-3xl bg-[#161616] order-2 group transform-gpu will-change-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-40" />
          <img 
            src={founderImg} 
            alt="Jennifer Duaine Real Estate Strategist" 
            className="w-full h-full object-cover brightness-95 object-center group-hover:scale-102 transition-transform duration-700 ease-out" 
            loading="lazy"
            decoding="async"
            onError={(e)=>{e.currentTarget.src='/owner.jpg'}}
          />
        </m.div>

      </div>
    </section>
  );
}