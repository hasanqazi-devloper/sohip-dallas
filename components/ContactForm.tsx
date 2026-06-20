"use client";

import { m } from "framer-motion";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export default function ContactForm() {
  return (
    // Pure Obsidian Black Surface alignment for the final action gate
    <section id="contact" className="py-24 md:py-32 bg-[#0D0D0D] border-t border-white/5 scroll-mt-24 relative z-10">
      {/* ✅ Gap grid setting optimized from gap-16 to gap-12 lg:gap-20 for absolute horizontal breathing room */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
        
        {/* CORPORATE INFORMATION LAYER */}
        {/* h-full flex flex-col justify-between keeps content items structurally pinned to top and bottom bounds */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left py-2">
          <div className="space-y-6">
            <m.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] tracking-[0.5em] text-[#C9A050] font-black uppercase block"
            >
              ( PRIVACY & DATA NETWORK )
            </m.span>
            
            <m.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl font-serif italic text-white font-medium leading-none"
            >
              Connect Privately.
            </m.h2>
            
            <m.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[17px] text-white font-light leading-relaxed opacity-85 max-w-sm"
            >
              Unlock structured local analytics, premium off-market listing updates, and private DFW investment vectors direct to your corporate network hub.
            </m.p>
          </div>

          {/* Contact Cards Stack - Pushed middle-to-bottom automatically with #C9A050 sync */}
          <div className="space-y-4 pt-6 text-[17px] text-white font-light tracking-wide opacity-90 border-t border-white/5 max-w-sm">
            <p className="flex items-center gap-4 group cursor-pointer hover:text-[#C9A050] transition-colors duration-300">
              <Phone size={16} className="text-[#C9A050]" /> (214) 428-1121
            </p>
            <p className="flex items-center gap-4 group cursor-pointer hover:text-[#C9A050] transition-colors duration-300 uppercase text-sm tracking-widest">
              <Mail size={16} className="text-[#C9A050]" /> jennifer@sohipdallas.com
            </p>
            <p className="flex items-center gap-4 opacity-75 leading-snug">
              <MapPin size={16} className="text-[#C9A050]" /> 
              <span>650 Fort Worth Ave, <br /> Dallas, Texas</span>
            </p>
          </div>

          {/* Legal Compliance Block - Anchored strictly to the bottom edge */}
          <div className="pt-4 text-[10px] tracking-widest uppercase text-white/30 space-y-2 font-mono max-w-md border-t border-white/5 lg:border-none">
            <p className="flex items-center gap-2"><ShieldCheck size={12} className="text-[#C9A050]/60" /> Brokerage Compliance Framework Active</p>
            <p>JPAR Real Estate Corporation Systems</p>
          </div>
        </div>

        {/* INPUT VALIDATION CONTROL HUB FORM */}
        <m.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={(e) => e.preventDefault()} 
          className="lg:col-span-7 space-y-8 bg-[#141414] p-8 md:p-12 border border-white/5 rounded-2xl shadow-2xl relative flex flex-col justify-center overflow-hidden group"
        >
          {/* Subtle inside tracking animation border updated to new brand hex layout line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A050]/20 to-transparent" />

          <div className="space-y-1">
            <input 
              type="text" 
              placeholder="FULL NAME" 
              className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-[#C9A050] transition-colors uppercase text-xs tracking-widest font-bold placeholder-white/20" 
            />
          </div>

          <div className="space-y-1">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-[#C9A050] transition-colors uppercase text-xs tracking-widest font-bold placeholder-white/20" 
            />
          </div>

          <div className="space-y-1">
            <textarea 
              placeholder="SECURE MESSAGE PARAMETERS" 
              rows={4} 
              className="w-full bg-transparent border-b border-white/10 py-4 outline-none text-white focus:border-[#C9A050] transition-colors uppercase text-xs tracking-widest font-bold placeholder-white/20 resize-none" 
            />
          </div>

          <div className="pt-4">
            <button className="w-full bg-[#C9A050] text-black py-5 tracking-[0.4em] font-black text-xs hover:bg-white transition-colors uppercase rounded-full shadow-xl transform active:scale-98 duration-300">
              Gain VIP Access Matrix
            </button>
          </div>
        </m.form>

      </div>
    </section>
  );
}