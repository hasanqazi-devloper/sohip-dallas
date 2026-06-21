"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Clock, ShieldCheck, Send, MapPin, Award } from "lucide-react";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "BUYING",
    message: ""
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Kal ko jab tum API/Email service lagao, toh formData yahan direct parse ho jayega
    console.log("Intake Dossier Submitted:", formData);
    alert("VIP Inquiry Logged Successfully. Confidential matching engine initiated.");
  };

  if (!mounted) return <div className="min-h-screen bg-[#0A0A0A]" />;

  return (
    <div className="w-full bg-[#0A0A0A] pt-40 sm:pt-52 pb-32 text-white relative z-10 overflow-hidden selection:bg-[#C9A050] selection:text-black">
      
      {/* RICH LUXURY ACCENTS BACKGROUND */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A050]/[0.02] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C9A050]/[0.01] blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1900px] mx-auto px-4 sm:px-6 md:px-34 relative z-20">
        
        {/* 🏙️ INTRO GRID STRUCTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: DIRECT VAULT INTEL */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.5em] font-black text-[#C9A050] uppercase block">
                ( SECURE ENGAGEMENT GATEWAY )
              </span>
              <h1 className="text-4xl sm:text-6xl font-serif tracking-wide text-white uppercase font-bold leading-none">
                CONNECT PRIVATELY
              </h1>
              <p className="text-[15px] text-white/50 font-light tracking-wide leading-relaxed">
                Initiate client representation pipelines for premier residential assets south of 635. Total operational discretion guaranteed across all communication vectors.
              </p>
            </div>

            <div className="w-16 h-[1px] bg-[#C9A050]/30" />

            {/* Communication Vectors Stack */}
            <div className="space-y-6 font-mono text-xs tracking-widest text-white/70">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#121212] border border-white/5">
                <Phone size={16} className="text-[#C9A050] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-[9px] text-white/30 font-black uppercase">DIRECT ACQUISITIONS LINE</p>
                  <p className="text-white font-bold text-sm font-sans">(214) 428-1121</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#121212] border border-white/5">
                <Mail size={16} className="text-[#C9A050] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-[9px] text-white/30 font-black uppercase">SECURE COMMUNICATIONS</p>
                  <p className="text-white font-bold text-sm font-sans hover:text-[#C9A050] transition-colors cursor-pointer">jennifer@sohipdallas.homes</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#121212] border border-white/5">
                <Clock size={16} className="text-[#C9A050] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-[9px] text-white/30 font-black uppercase">OPERATIONAL WINDOW</p>
                  <p className="text-white font-bold uppercase">24/7 Elite Client Concierge</p>
                </div>
              </div>
            </div>

            {/* Regulatory Base Compliance Banner */}
            <div className="p-4 rounded-xl border border-dashed border-white/10 text-[10px] text-white/40 leading-relaxed space-y-2">
              <p className="flex items-center gap-1.5 font-bold text-[#C9A050]/80"><Award size={12}/> COMPLIANCE BROKERAGE MATRIX</p>
              <p>SOHIP Dallas Homes operations are certified under JPAR Real Estate. Texas Real Estate Commission Brokerage License #0599698.</p>
            </div>
          </div>

          {/* RIGHT COLUMN: HIGH-CONTRAST INTAKE INQUIRY FORM */}
          <div className="lg:col-span-7 bg-[#111111] border border-white/5 p-6 sm:p-10 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.9)]">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              
              {/* Input Name Row */}
              <div className="space-y-2">
                <label className="text-[9px] font-mono tracking-widest text-white/40 block uppercase font-black">FULL INDIVIDUAL NAME</label>
                <div className="relative flex items-center bg-[#1A1A1A] rounded-xl border border-white/10 px-4 focus-within:border-[#C9A050] transition-colors duration-300">
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ENTER YOUR LEGAL IDENTITY..." 
                    className="bg-transparent w-full text-xs tracking-widest font-bold text-white outline-none placeholder-white/20 py-4 uppercase font-sans"
                  />
                </div>
              </div>

              {/* Input Grid: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-mono tracking-widest text-white/40 block uppercase font-black">SECURE EMAIL ROUTE</label>
                  <div className="relative flex items-center bg-[#1A1A1A] rounded-xl border border-white/10 px-4 focus-within:border-[#C9A050] transition-colors duration-300">
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="E.G. INVESTOR@DOMAIN.COM" 
                      className="bg-transparent w-full text-xs tracking-widest font-bold text-white outline-none placeholder-white/20 py-4 uppercase font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-mono tracking-widest text-white/40 block uppercase font-black">MOBILE VALIDATION SECURE</label>
                  <div className="relative flex items-center bg-[#1A1A1A] rounded-xl border border-white/10 px-4 focus-within:border-[#C9A050] transition-colors duration-300">
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000" 
                      className="bg-transparent w-full text-xs tracking-widest font-bold text-white outline-none placeholder-white/20 py-4 uppercase font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Segment Classification Dropdown */}
              <div className="space-y-2">
                <label className="text-[9px] font-mono tracking-widest text-white/40 block uppercase font-black">INTENT RESIDENTIAL VECTOR</label>
                <div className="relative flex items-center bg-[#1A1A1A] rounded-xl border border-white/10 px-4 focus-within:border-[#C9A050] transition-colors duration-300">
                  <select 
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="bg-transparent w-full text-xs tracking-widest font-bold text-white outline-none py-4 uppercase font-sans cursor-pointer appearance-none"
                  >
                    <option value="BUYING" className="bg-[#111] text-white">Acquiring Luxury Classification Asset</option>
                    <option value="SELLING" className="bg-[#111] text-white">Liquidating Capital Real Estate Property</option>
                    <option value="STAGING" className="bg-[#111] text-white">Initiating Signature Staging Reset Program</option>
                    <option value="OFF-MARKET" className="bg-[#111] text-white">Requesting Private Network Vault Access</option>
                  </select>
                </div>
              </div>

              {/* Input Message Area */}
              <div className="space-y-2">
                <label className="text-[9px] font-mono tracking-widest text-white/40 block uppercase font-black">CONFIDENTIAL MISSION OVERVIEW</label>
                <div className="relative flex items-center bg-[#1A1A1A] rounded-xl border border-white/10 px-4 focus-within:border-[#C9A050] transition-colors duration-300">
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="DESCRIBE THE CORE PARAMETERS OF YOUR ACQUISITION OR ASSET INTEL NEEDS..." 
                    className="bg-transparent w-full text-xs tracking-widest font-bold text-white outline-none placeholder-white/20 py-4 uppercase font-sans resize-none"
                  />
                </div>
              </div>

              {/* Form Trigger Button Section */}
              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full bg-[#C9A050] text-black text-[10px] font-black tracking-[0.25em] uppercase py-4 rounded-xl hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2 transform-gpu active:scale-[0.98]"
                >
                  <Send size={12} />
                  <span>TRANSMIT VIP ACCESS INQUIRY</span>
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}