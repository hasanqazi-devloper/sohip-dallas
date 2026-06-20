"use client";

import { m } from "framer-motion";

export default function Communities() {
  const neighborhoods = [
    { id: 1, name: 'Highland Park', listings: '12 Active Properties', price: '$1.5M - $12M', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600' },
    { id: 2, name: 'University Park', listings: '8 Active Properties', price: '$1.2M - $8M', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600' },
    { id: 3, name: 'Preston Hollow', listings: '15 Active Properties', price: '$2.0M - $20M', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600' },
    { id: 4, name: 'Devonshire', listings: '6 Active Properties', price: '$900K - $4M', img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=600' },
    { id: 5, name: 'Bluffview', listings: '9 Active Properties', price: '$1.1M - $6M', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600' },
    { id: 6, name: 'Lakewood', listings: '11 Active Properties', price: '$1.3M - $7M', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600' },
  ];

  return (
    <section id="communities" className="py-24 md:py-32 px-6 md:px-24 max-w-[1400px] mx-auto scroll-mt-24 relative z-10 bg-[#0A0A0A]">
      
      {/* SECTION HEADER BLOCK */}
      <div className="text-center mb-16 md:mb-24">
        <m.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.8em] uppercase font-black block mb-4 text-[#C9A050]"
        >
          ( CURATED PORTFOLIO )
        </m.span>
        
        <m.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-5xl font-serif tracking-wide text-white font-medium"
        >
          Exclusive Neighborhoods South of 635
        </m.h2>
        <div className="w-16 h-[1px] bg-[#C9A050]/50 mx-auto mt-6"></div>
      </div>

      {/* LUXURY INTERACTIVE CARDS GRID - Adaptive Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {neighborhoods.map((area, i) => (
          <m.div 
            key={area.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10 }}
            className="relative h-[380px] sm:h-[420px] md:h-[440px] rounded-xl overflow-hidden cursor-pointer shadow-2xl border border-white/5 group bg-[#161616]"
          >
            {/* ✅ FIXED OVERLAY MATRIX: Double-layer gradient blocking for pristine text readability */}
            {/* Top protection vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* Bottom heavy contrast anchor text protector */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10 transition-all duration-500 group-hover:from-black group-hover:via-black/90" />
            
            {/* Parallax Smooth Zoom Staged Image Layout */}
            <img 
              src={area.img} 
              alt={area.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-55 group-hover:opacity-75" 
              loading="lazy" 
            />
            
            {/* Asset Parameter Details Block */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-20 flex flex-col items-start space-y-3">
              {/* Gold standard update matching #C9A050 layout structure */}
              <span className="text-[#C9A050] text-[10px] font-black tracking-widest uppercase bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C9A050]/20 shadow-md">
                {area.price}
              </span>
              
              <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wide group-hover:text-[#C9A050] transition-colors duration-300 font-bold">
                {area.name}
              </h3>
              
              {/* P tag strict 17px size, pure white text, and crisp 100% visible focus */}
              <p className="text-[17px] text-white font-light tracking-wide opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {area.listings}
              </p>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}