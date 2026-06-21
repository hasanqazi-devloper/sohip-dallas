"use client";

import Link from 'next/link';
import { ArrowUpRight, Shield, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const logoImg = "/sohip-dallas-logo-main.png";

  // ✅ SVG Vectors integrated directly to bypass lucide import issues permanently
  const socialLinks = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="20" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ), 
      url: "https://instagram.com", 
      label: "Instagram" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
        </svg>
      ), 
      url: "https://linkedin.com", 
      label: "LinkedIn" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ), 
      url: "https://facebook.com", 
      label: "Facebook" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
      ), 
      url: "https://x.com", 
      label: "X (Twitter)" 
    },
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 relative z-10 overflow-hidden transform-gpu">
      
      {/* UPPER PREMIUM MATRIX GRID */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-24 pt-24 pb-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        
        {/* BRAND COLUMN WITH LOGO & SOCIAL HANDLES (4 Cols) */}
        <div className="md:col-span-4 space-y-6 flex flex-col justify-start">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm shrink-0">
              <img 
                src={logoImg} 
                alt="SOHIP Dallas Logo" 
                className="h-full w-full object-cover" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
              />
            </div>
            <div className="text-xl font-serif tracking-[0.25em] text-[#C9A050] font-black uppercase">
              SOHIP DALLAS
            </div>
          </div>

          <p className="text-[14px] text-white/50 font-light leading-relaxed max-w-sm">
            Bespoke property intelligence and architectural staging south of 635. Elevating residential assets into highly coveted luxury products.
          </p>

          {/* Premium Minimalist Social Media Networking Array */}
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-full bg-white/5 text-white/60 border border-white/5 hover:border-[#C9A050]/40 hover:text-[#C9A050] hover:bg-black transition-all duration-300 transform-gpu active:scale-95"
              >
                {social.icon}
              </a>
            ))}
          </div>

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
        <div className="md:col-span-4 grid grid-cols-2 gap-6 pt-2">
          <div className="space-y-4">
            <h4 className="text-[11px] tracking-[0.3em] font-black uppercase text-white">
              STRUCTURE
            </h4>
            <ul className="space-y-2.5 text-[14px] font-light text-white/60">
              <li>
                <Link href="/" className="hover:text-[#C9A050] transition-colors flex items-center gap-1 group">
                  Home <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-[#C9A050] transition-colors flex items-center gap-1 group">
                  Portfolios <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link href="/reset" className="hover:text-[#C9A050] transition-colors flex items-center gap-1 group">
                  The Reset <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                <Link href="/communities" className="hover:text-[#C9A050] transition-colors flex items-center gap-1 group">
                  Strategist <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C9A050] transition-colors flex items-center gap-1 group">
                  Inquiries <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* INSIDER PRIVACY CAPTURE NODE (4 Cols) */}
        <div className="md:col-span-4 space-y-4 pt-2">
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
            <button className="text-[#C9A050] text-[10px] font-black tracking-widest uppercase hover:text-white transition-colors outline-none">
              JOIN
            </button>
          </div>
        </div>

      </div>

      {/* LOWER BOTTOM REGULATORY COMPLIANCE BANNER */}
      <div className="border-t border-white/5 bg-[#080808] py-8 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-1">
            <p className="text-[11px] opacity-40 tracking-[0.2em] uppercase text-white font-medium">
              © {currentYear} SOHIP DALLAS • POWERED BY ELITE CODECORE UNITS
            </p>
            <p className="text-[10px] text-white/30 font-mono">
              Brokerage License #0599698 | JPAR Real Estate Corporate Distribution
            </p>
          </div>

          <div className="text-[10px] tracking-wider uppercase text-white/40 flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 font-mono">
            <Link href="/contact" className="hover:text-[#C9A050] hover:underline transition-colors">
              Consumer Protection Notice
            </Link>
            <span className="hidden sm:inline opacity-20 text-white">|</span>
            <Link href="/contact" className="hover:text-[#C9A050] hover:underline transition-colors">
              Information About Brokerage Services
            </Link>
          </div>

        </div>
      </div>
      
    </footer>
  );
}