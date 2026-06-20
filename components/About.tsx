"use client";

import { m } from "framer-motion";

export default function About() {
  const founderImg = "/jennifer-duaine-portrait.jpg";

  return (
    // Matte Charcoal Carbon surface background block
    <section id="about" className="py-16 md:py-20 bg-[#121212] border-t border-white/5 scroll-mt-24 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* DESIGN INTELLECT CONTENT WRAPPER */}
        <div className="lg:col-span-7 space-y-6 text-left order-1">
          <m.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.5em] font-black text-[#D4AF37] uppercase block"
          >
            ( THE STRATEGIST )
          </m.span>
          
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-white font-medium tracking-wide"
          >
            Aesthetic Intelligence. <br />
            <span className="italic text-[#D4AF37]">Native Dallas Precision.</span>
          </m.h2>
          
          {/* ✅ Paragraphs locked at strict 17px scale, pure white color, and high opacity texture */}
          <div className="space-y-6 text-[17px] text-white font-light leading-relaxed tracking-wide opacity-95 max-w-xl">
            <m.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              As a premier property strategist serving the elite Dallas market, Jennifer Duaine approaches real estate with an operator's data precision and an artist's design eye. Her background in digital transformation allows her to engineer seamless marketing frameworks that elevate residential assets into highly coveted products.
            </m.p>
            <m.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              By strictly localizing operations south of 635, Jennifer provides bespoke advisory services to high-net-worth individuals, ensures absolute transactional discretion, and masterminds architectural presentations that maximize market valuation vectors.
            </m.p>
          </div>
        </div>

        {/* PORTRAIT FRAMED DISPLAY HOUSING */}
        <m.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-5 relative h-[400px] sm:h-[550px] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#161616] order-2 group"
        >
          {/* Subtle cinematic visual gradient overlay mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-40" />
          <img 
            src={founderImg} 
            alt="Jennifer Duaine Real Estate Strategist" 
            className="w-full h-full object-cover brightness-95 object-center group-hover:scale-102 transition-transform duration-1000" 
            loading="lazy"
            onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600'}}
          />
        </m.div>

      </div>
    </section>
  );
}