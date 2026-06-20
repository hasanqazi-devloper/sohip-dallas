"use client";

import { m } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
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
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-[#0A0A0A] border-t border-white/5 relative z-10 overflow-hidden">

            {/* BACKGROUND GRAPHIC ACCENT */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/[0.02] blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6 md:px-24 relative z-10">

                <div className="text-center mb-20">
                    <m.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[10px] tracking-[0.8em] uppercase font-black block mb-4 text-[#D4AF37]"
                    >
                        ( AUTHENTIC EXPERIENCES )
                    </m.span>
                    <m.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-serif tracking-wide text-white font-medium">
                        What Our Elite Network Says
                    </m.h2>
                    <div className="w-16 h-[1px] bg-[#D4AF37]/40 mx-auto mt-6"></div>
                </div>

                {/* ULTRA PREMIUM CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {reviews.map((rev, idx) => (
                        <m.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -8, borderColor: "rgba(212, 175, 55, 0.3)" }}              // ✅ h-full flex flex-col justify-between dalkar size consistency bilkul exact barabar kar di hai
                            className="bg-[#141414] p-10 md:p-12 rounded-2xl border border-white/5 shadow-2xl relative group cursor-pointer transition-all duration-500 h-full flex flex-col justify-between overflow-hidden"
                        >
                            {/* Luxury gold hover line indicator on top edge */}
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent group-hover:w-full transition-all duration-700" />

                            {/* Background decorative premium quotes watermark */}
                            <Quote size={80} className="absolute -bottom-4 -right-4 text-white/[0.01] group-hover:text-[#D4AF37]/[0.02] transition-colors duration-500 pointer-events-none transform -rotate-12" />

                            <div className="space-y-6">
                                {/* 5-Star Premium Layout Indicator with smooth scale */}
                                <div className="flex gap-1.5 text-[#D4AF37]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={12} fill="#D4AF37" strokeWidth={0} className="group-hover:scale-110 transition-transform duration-300" />
                                    ))}
                                </div>

                                {/* ✅ Text size fixed at 17px, sharp pure white contrast output */}
                                <p className="text-[17px] text-white font-serif tracking-wide leading-relaxed italic opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                                    "{rev.text}"
                                </p>
                            </div>

                            {/* Author Metrics Block centered vertically via absolute tracking flex expansion */}
                            <div className="pt-6 mt-8 border-t border-white/5 flex items-center justify-between">
                                <div>
                                    <h4 className="font-serif text-white text-base md:text-lg font-bold group-hover:text-[#D4AF37] transition-colors duration-300">
                                        {rev.name}
                                    </h4>
                                    <p className="text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase mt-1 font-black">
                                        {rev.role}
                                    </p>
                                </div>

                                {/* Visual architectural asset symbol container */}
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-all duration-500">
                                    <span className="text-[10px] font-mono">SO</span>
                                </div>
                            </div>
                        </m.div>
                    ))}
                </div>

            </div>
        </section>
    );
}