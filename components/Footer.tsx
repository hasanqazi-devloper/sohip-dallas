"use client";

import Link from 'next/link';
import { m } from "framer-motion";
import { ArrowUpRight, Shield, Globe, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 relative z-10 overflow-hidden">
      
      {/* UPPER PREMIUM MATRIX GRID */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-24 pt-24 pb-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        
        {/* BRAND COLUMN (4 Cols) */}
        <div className="md:col-span-4 space-y-6">
          <div className="text-2xl font-serif tracking-[0.25em] text-[#C9A050] font-black uppercase">
            SOHIP DALLAS
          </div>
          <p className="text-[14px] text-white/50 font-light leading-relaxed max-w-sm">
            Bespoke property intelligence and architectural staging south of 635. Elevating residential assets into highly coveted luxury products.
          </p>
          {/* Elite Trust Badges */}
          <div className="flex items-center gap-4 text-white/30 pt-2">
            <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase">
              <Shield size={12} className="text-[#C9A050]" /> JPAR ELITE
            </div>
            <span className="text-white/10">|</span>
            <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase">
              <Award size={12} className="text-[#C9A050]" /> DFW TOP 10
            </div>
          </div>
        </div>

        {/* EXPLORE NAVIGATION LINKS (4 Cols) */}
        <div className="md:col-span-4 grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-[11px] tracking-[0.3em] font-black uppercase text-white">
              STRUCTURE
            </h4>
            <ul className="space-y-2.5 text-[14px] font-light text-white/60">
              <li>
                <Link href="/" className="hover:text-[#C9A050] transition-colors flex items-center gap-1 group">
                  Home <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#communities" className="hover:text-[#C9A050] transition-colors flex items-center gap-1 group">
                  Portfolios <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#reset" className="hover:text-[#C9A050] transition-colors flex items-center gap-1 group">
                  The Reset <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[11px] tracking-[0.3em] font-black uppercase text-white">
              PORTALS
            </h4>
            <ul className="space-y-2.5 text-[14px] font-light text-white/60">
              <li>
                <Link href="#about" className="hover:text-[#C9A050] transition-colors flex items-center gap-1 group">
                  Strategist <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#C9A050] transition-colors flex items-center gap-1 group">
                  Inquiries <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* INSIDER PRIVACY CAPTURE NODE (4 Cols) */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-[11px] tracking-[0.3em] font-black uppercase text-white">
            VIP INTELLIGENCE
          </h4>
          <p className="text-[13px] text-white/40 font-light leading-relaxed">
            Subscribe to receive direct off-market inventory notifications.
          </p>
          <div className="relative flex items-center border-b border-white/10 focus-within:border-[#C9A050] transition-colors pb-1">
            <input 
              type="email" 
              placeholder="ENTER EMAIL HUB" 
              className="bg-transparent w-full text-xs tracking-widest font-bold text-white outline-none uppercase placeholder-white/20 py-2"
            />
            <button className="text-[#C9A050] text-[10px] font-black tracking-widest uppercase hover:text-white transition-colors">
              JOIN
            </button>
          </div>
        </div>

      </div>

      {/* LOWER BOTTOM REGULATORY COMPLIANCE BANNER */}
      <div className="border-t border-white/5 bg-[#080808] py-8 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* License & Copyright Details */}
          <div className="space-y-1">
            <p className="text-[11px] opacity-40 tracking-[0.2em] uppercase text-white font-medium">
              © {currentYear} SOHIP DALLAS • POWERED BY ELITE CODECORE UNITS
            </p>
            <p className="text-[10px] text-white/30 font-mono">
              Brokerage License #0599698 | JPAR Real Estate Corporate Distribution
            </p>
          </div>

          {/* Strict Regulatory Links */}
          <div className="text-[10px] tracking-wider uppercase text-white/40 flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 font-mono">
            <Link href="#contact" className="hover:text-[#C9A050] hover:underline transition-colors">
              Consumer Protection Notice
            </Link>
            <span className="hidden sm:inline opacity-20 text-white">|</span>
            <Link href="#contact" className="hover:text-[#C9A050] hover:underline transition-colors">
              Information About Brokerage Services
            </Link>
          </div>

        </div>
      </div>
      
    </footer>
  );
}