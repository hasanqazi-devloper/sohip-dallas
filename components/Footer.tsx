"use client";

import Link from 'next/link';
import { ArrowUpRight, Shield, Award } from "lucide-react";

export default function Footer() {
  // Hardcoded runtime standard tracking prevents server-side hydration mismatches completely 
  const currentYear = "2026";
  const logoImg = "/sohip-dallas-logo-main.png";

  const socialLinks = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ), 
      url: "https://www.instagram.com/sohipdallas/", 
      label: "Instagram" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
        </svg>
      ), 
      url: "https://www.linkedin.com/feed/?shareActive=true&url=https%3A%2F%2Fsohipdallas.homes%2F&shareUrl=https%3A%2F%2Fsohipdallas.homes%2F&linkOrigin=LI_BADGE", 
      label: "LinkedIn" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ), 
      url: "https://www.facebook.com/share_channel/#", 
      label: "Facebook" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
      ), 
      url: "https://x.com/i/jf/onboarding/web?redirect_after_login=%2Fintent%2Ftweet%3Ftext%3DDallas%252C%2520TX%2520Real%2520Estate%2520-%2520https%253A%252F%252Fsohipdallas.homes%252F&mode=login", 
      label: "X (Twitter)" 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
          <polygon points="10 15 15 12 10 9" fill="currentColor"/>
        </svg>
      ), 
      url: "https://www.youtube.com/channel/UC8VkgSPm28dBXLinaTdh38Q", 
      label: "YouTube" 
    },
  ];

  return (
    <footer className="bg-[#0D0D0D] border-t border-white/5 relative z-10 overflow-hidden transform-gpu w-full">
      
      {/* UPPER PREMIUM MATRIX GRID */}
      <div className="max-w-[2200px] mx-auto px-6 md:px-24 pt-24 pb-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 w-full">
        
        {/* BRAND COLUMN WITH LOGO & SOCIAL HANDLES (4 Cols) */}
        <div className="md:col-span-4 space-y-6 flex flex-col justify-start items-start text-left">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm shrink-0">
              <img 
                src={logoImg} 
                alt="SOHIP Dallas Logo" 
                className="h-full w-full object-cover" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
              />
            </div>
            <div className="text-lg font-sans tracking-[0.25em] text-[#C9A050] font-black uppercase">
              SOHIP DALLAS
            </div>
          </div>

          {/* ✅ FIXED: Shifted to pure text-white font weight for absolute direct reading */}
          <p className="text-[13px] sm:text-[14px] text-white font-normal leading-relaxed max-w-sm font-sans tracking-wide">
            Bespoke property intelligence and architectural staging south of 635. Elevating residential assets into highly coveted luxury products.
          </p>

          {/* Premium Minimalist Social Media Array */}
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-full bg-white/10 text-white border border-white/10 hover:border-[#C9A050] hover:text-[#C9A050] hover:bg-[#0A0A0A] transition-all duration-300 transform-gpu active:scale-95"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Elite Trust Badges */}
          <div className="flex items-center gap-4 text-white pt-3 select-none">
            <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase font-bold">
              <Shield size={11} className="text-[#C9A050]" /> JPAR ELITE
            </div>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase font-bold">
              <Award size={11} className="text-[#C9A050]" /> DFW TOP 10
            </div>
          </div>
        </div>

        {/* EXPLORE NAVIGATION LINKS (4 Cols) */}
        <div className="md:col-span-4 grid grid-cols-2 gap-6 pt-2 text-left">
          <div className="space-y-4">
            <h4 className="text-[11px] tracking-[0.25em] font-black uppercase text-[#C9A050] font-sans">
              STRUCTURE
            </h4>
            {/* ✅ FIXED: Pure white dynamic link text handles */}
            <ul className="space-y-3 text-[13px] font-medium text-white font-sans">
              <li>
                <Link href="/" className="hover:text-[#C9A050] transition-colors flex items-center gap-1 group w-max">
                  Home <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C9A050]" />
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-[#C9A050] transition-colors flex items-center gap-1 group w-max">
                  Portfolios <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C9A050]" />
                </Link>
              </li>
              <li>
                <Link href="/reset" className="hover:text-[#C9A050] transition-colors flex items-center gap-1 group w-max">
                  The Reset <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C9A050]" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[11px] tracking-[0.25em] font-black uppercase text-[#C9A050] font-sans">
              PORTALS
            </h4>
            {/* ✅ FIXED: High visibility clean whites */}
            <ul className="space-y-3 text-[13px] font-medium text-white font-sans">
              <li>
                <Link href="/communities" className="hover:text-[#C9A050] transition-colors flex items-center gap-1 group w-max">
                  Communities <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C9A050]" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C9A050] transition-colors flex items-center gap-1 group w-max">
                  Inquiries <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C9A050]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* INSIDER PRIVACY CAPTURE NODE (4 Cols) */}
        <div className="md:col-span-4 space-y-4 pt-2 text-left">
          <h4 className="text-[11px] tracking-[0.25em] font-black uppercase text-[#C9A050] font-sans">
            VIP INTELLIGENCE
          </h4>
          {/* ✅ FIXED: Shifted text node to pure clear white */}
          <p className="text-[13px] text-white font-normal leading-relaxed font-sans tracking-wide">
            Subscribe to receive direct off-market inventory notifications.
          </p>
          <div className="relative flex items-center border-b border-white/20 focus-within:border-[#C9A050] transition-colors pb-1 pt-2 w-full">
            <input 
              type="email" 
              placeholder="ENTER EMAIL HUB..." 
              className="bg-transparent w-full text-xs tracking-widest font-bold text-white outline-none uppercase placeholder-white/40 py-2 font-sans"
            />
            <button type="button" className="text-[#C9A050] text-[10px] font-black tracking-widest uppercase hover:text-white transition-colors outline-none cursor-pointer px-2">
              JOIN
            </button>
          </div>
        </div>

      </div>

      {/* LOWER BOTTOM REGULATORY COMPLIANCE BANNER */}
      <div className="border-t border-white/5 bg-[#080808] py-8 px-6 w-full">
        <div className="max-w-[2200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left w-full">
          
          <div className="space-y-1.5">
            {/* ✅ FIXED: Pure high-contrast whites across all regulatory strings */}
            <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white font-bold font-sans">
              © {currentYear} SOHIP DALLAS • POWERED BY HIGH RISE CODE UNITS
            </p>
            <p className="text-[10px] text-white/80 font-mono tracking-wide font-medium">
              Brokerage License #0599698 | JPAR Real Estate Corporate Distribution
            </p>
          </div>

          {/* ✅ FIXED: Terms and compliance endpoints mapped to highly legible clear weights */}
          <div className="text-[10px] tracking-wider uppercase text-white flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 font-mono font-medium">
            <Link href="/contact" className="hover:text-[#C9A050] transition-colors">
              Consumer Protection Notice
            </Link>
            <span className="hidden sm:inline text-white/30">|</span>
            <Link href="/contact" className="hover:text-[#C9A050] transition-colors">
              Information About Brokerage Services
            </Link>
          </div>

        </div>
      </div>
      
    </footer>
  );
}