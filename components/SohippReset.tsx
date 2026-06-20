"use client";

import { m } from "framer-motion";

export default function SohippReset() {
  const resetImg = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070";

  return (
    // Matte charcoal block alignment
    <section id="reset" className="py-24 md:py-32 bg-[#121212] border-y border-white/5 scroll-mt-24 relative z-10">
      {/* ✅ items-stretch apply kiya hai taake text layer aur image container auto-match ho sakein */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        
        {/* CONTENT SPECIFICATION LAYER */}
        {/* Mobile: Text content takes priority layout order */}
        <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-1 flex flex-col justify-center py-2">
          
          {/* Bright gold signature tracking title synchronized to #C9A050 */}
          <m.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.4em] font-black text-[#C9A050] uppercase block"
          >
            ( THE SIGNATURE RESET )
          </m.span>
          
          {/* Enhanced tight tracking typography hook */}
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-white font-medium tracking-[0.02em]"
          >
            Where Style Creates Desire & <br className="hidden md:block"/>
            <span className="italic text-[#C9A050]">Strategy Creates Value.</span>
          </m.h2>
          
          {/* P tag setup: strict 17px, solid crisp reading texture */}
          <m.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[17px] text-white font-light leading-relaxed tracking-wide max-w-xl opacity-95"
          >
            Average real estate listings compete on price. SoHipp assets command it. Through a clinical blend of aesthetic intelligence and hyper-localized presentation style, we strategically transform luxury properties south of 635 entirely before they ever hit the market grid. We don't just stage spaces; we manufacture digital desire for prospective global investors to lock high-ticket conversions faster.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2"
          >
            <button className="border border-[#C9A050] text-[#C9A050] px-8 py-4 rounded-full text-[11px] font-black tracking-widest uppercase hover:bg-[#C9A050] hover:text-black hover:scale-102 transition-all shadow-lg duration-300">
              Apply For A SoHipp Reset Session →
            </button>
          </m.div>
        </div>

        {/* VISUAL SHOWCASE FRAMEWORK */}
        {/* ✅ h-[350px] lg:h-auto aur relative lagaya hai taake image pure frame ko automatically vertically align kare */}
        <m.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative h-[350px] sm:h-[450px] lg:h-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#161616] group order-2 lg:order-2"
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
          {/* ✅ absolute position dhar di hai taake grid stretch frame execute ho sky */}
          <img 
            src={resetImg} 
            alt="Luxury Interior Staging Transformation" 
            className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-1000 object-center" 
            loading="lazy"
          />
        </m.div>

      </div>
    </section>
  );
}