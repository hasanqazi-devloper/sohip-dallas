"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Clock, Send, Award } from "lucide-react";
import { supabase } from "@/app/lib/supabase"; // 🚀 Ensure this path points correctly to your client instance

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false); // ⚡ Visual state for transmitting
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔒 Push the dataset directly into Supabase 'leads' table nodes
      const { error } = await supabase
        .from("leads")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            interest: formData.interest,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      alert("VIP Inquiry Logged Successfully. Confidential matching engine initiated.");
      
      // Reset form variables after successful dynamic intercept
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "BUYING",
        message: ""
      });

    } catch (err) {
      console.error("Lead insertion gateway error:", err);
      alert("Transmission intercept failed. Please contact direct operations line.");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return <div className="min-h-screen bg-[#0A0A0A]" />;

  return (
    <div className="w-full bg-[#0A0A0A] pt-40 sm:pt-52 pb-32 text-white relative z-10 overflow-hidden selection:bg-[#C9A050] selection:text-black">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A050]/[0.02] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C9A050]/[0.01] blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1900px] mx-auto px-4 sm:px-6 md:px-34 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start font-sans w-full">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-8 text-left w-full">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.4em] font-black text-[#C9A050] block">
                ( SECURE ENGAGEMENT GATEWAY )
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-black leading-none tracking-tight">
                Connect Privately
              </h1>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-white font-normal tracking-wide leading-relaxed">
                Initiate client representation pipelines for premier residential assets south of 635. Total operational discretion guaranteed across all communication vectors.
              </p>
            </div>

            <div className="w-12 h-[1.5px] bg-[#C9A050]/60 select-none pointer-events-none" />

            <div className="space-y-4 font-mono text-xs tracking-widest text-white/80 w-full">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#121212] border border-white/5 shadow-md">
                <Phone size={14} className="text-[#C9A050] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-[9px] text-[#C9A050] font-black tracking-[0.15em]">DIRECT ACQUISITIONS LINE</p>
                  <p className="text-white font-black text-sm font-sans tracking-wide">(214) 428-1121</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#121212] border border-white/5 shadow-md">
                <Mail size={14} className="text-[#C9A050] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-[9px] text-[#C9A050] font-black tracking-[0.15em]">SECURE COMMUNICATIONS</p>
                  <p className="text-white font-black text-sm font-sans tracking-wide hover:text-[#C9A050] transition-colors cursor-pointer break-all">jennifer@sohipdallas.homes</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#121212] border border-white/5 shadow-md">
                <Clock size={14} className="text-[#C9A050] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-[9px] text-[#C9A050] font-black tracking-[0.15em]">OPERATIONAL WINDOW</p>
                  <p className="text-white font-bold font-sans tracking-wide">24/7 Elite Client Concierge</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-dashed border-white/10 text-[10px] text-white/60 leading-relaxed space-y-2 font-sans font-medium w-full">
              <p className="flex items-center gap-1.5 font-black text-[#C9A050] tracking-wider "><Award size={12}/> COMPLIANCE BROKERAGE MATRIX</p>
              <p>SOHIP Dallas Homes operations are certified under JPAR Real Estate. Texas Real Estate Commission Brokerage License #0599698.</p>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div className="lg:col-span-7 bg-[#121212] bg-[radial-gradient(circle_at_top_left,rgba(201,160,80,0.03),transparent_45%)] border border-white/5 focus-within:border-[#C9A050]/30 p-6 sm:p-10 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.9)] w-full transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6 text-left w-full">
              
              <div className="space-y-1.5 w-full">
                <label className="text-[10px] font-mono tracking-[0.2em] text-[#C9A050] block font-black">FULL INDIVIDUAL NAME</label>
                <div className="relative flex items-center bg-[#1C1C1C] rounded-xl border border-white/10 px-4 focus-within:border-[#C9A050] transition-colors duration-300 shadow-inner">
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ENTER YOUR LEGAL IDENTITY..." 
                    className="bg-transparent w-full text-xs tracking-[0.15em] font-black text-white outline-none placeholder-white/50 py-4 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-[0.2em] text-[#C9A050] block font-black">SECURE EMAIL ROUTE</label>
                  <div className="relative flex items-center bg-[#1C1C1C] rounded-xl border border-white/10 px-4 focus-within:border-[#C9A050] transition-colors duration-300 shadow-inner">
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="E.G. INVESTOR@DOMAIN.COM" 
                      className="bg-transparent w-full text-xs tracking-[0.15em] font-black text-white outline-none placeholder-white/50 py-4 font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-[0.2em] text-[#C9A050] block font-black">MOBILE VALIDATION SECURE</label>
                  <div className="relative flex items-center bg-[#1C1C1C] rounded-xl border border-white/10 px-4 focus-within:border-[#C9A050] transition-colors duration-300 shadow-inner">
                    <input 
                      type="text" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(214) 000-0000" 
                      className="bg-transparent w-full text-xs tracking-[0.15em] font-black text-white outline-none placeholder-white/50 py-4 font-sans"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 w-full">
                <label className="text-[10px] font-mono tracking-[0.2em] text-[#C9A050] block font-black">INTENT RESIDENTIAL VECTOR</label>
                <div className="relative flex items-center bg-[#1C1C1C] rounded-xl border border-white/10 px-4 focus-within:border-[#C9A050] transition-colors duration-300 shadow-inner">
                  <select 
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="bg-transparent w-full text-xs tracking-[0.15em] font-black text-white outline-none py-4 font-sans cursor-pointer appearance-none z-10"
                  >
                    <option value="BUYING" className="bg-[#121212] text-white font-bold">Acquiring Luxury Classification Asset</option>
                    <option value="SELLING" className="bg-[#121212] text-white font-bold">Liquidating Capital Real Estate Property</option>
                    <option value="STAGING" className="bg-[#121212] text-white font-bold">Initiating Signature Staging Reset Program</option>
                    <option value="OFF-MARKET" className="bg-[#121212] text-white font-bold">Requesting Private Network Vault Access</option>
                  </select>
                  <div className="absolute right-4 pointer-events-none z-0 text-[#C9A050] text-xs font-bold font-sans">SELECT</div>
                </div>
              </div>

              <div className="space-y-1.5 w-full">
                <label className="text-[10px] font-mono tracking-[0.2em] text-[#C9A050] block font-black">CONFIDENTIAL MISSION OVERVIEW</label>
                <div className="relative flex items-center bg-[#1C1C1C] rounded-xl border border-white/10 px-4 focus-within:border-[#C9A050] transition-colors duration-300 shadow-inner">
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="DESCRIBE THE CORE PARAMETERS OF YOUR ACQUISITION OR ASSET INTEL NEEDS..." 
                    className="bg-transparent w-full text-xs tracking-[0.15em] font-black text-white outline-none placeholder-white/50 py-4 font-sans resize-none leading-relaxed"
                  />
                </div>
              </div>

              <div className="pt-2 w-full">
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C9A050] text-black text-[11px] font-black tracking-[0.25em] py-4.5 rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-xl flex items-center justify-center gap-2 transform-gpu active:scale-[0.98] cursor-pointer font-sans disabled:opacity-50"
                >
                  <span>{loading ? "TRANSMITTING..." : "TRANSMIT INQUIRY"}</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}