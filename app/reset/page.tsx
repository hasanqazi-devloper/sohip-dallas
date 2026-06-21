"use client";

import { useState, useEffect } from "react";
import { m } from "framer-motion";
import { Paintbrush, Sliders, ShieldCheck, DollarSign, TrendingUp, Zap } from "lucide-react";

export default function HomeResetPage() {
  const [mounted, setMounted] = useState(false);
  const [squareFeet, setSquareFeet] = useState("5000");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Structural transformation phases data matrix
  const transformationPhases = [
    {
      step: "01",
      title: "Aesthetic Intelligence Audit",
      desc: "Clinical evaluation of the architectural space geometry south of 635, identifying lighting blocks and spatial valuation leaks before listing grid execution."
    },
    {
      step: "02",
      title: "Curated Design Curation",
      desc: "Injecting custom monochrome stone textures, elite white-oak paneling arrays, and high-contrast luxury art objects to manufacture instant digital desire."
    },
    {
      step: "03",
      title: "Valuation Vector Execution",
      desc: "Full hardware-level deployment of the staging design matrix, ensuring prospective global investors lock high-ticket conversion vectors instantly."
    }
  ];

  // Dynamic luxury ROI estimation calculator logic based on DFW market standards
  const estimatedCost = Number(squareFeet) * 8; // $8 per sqft standard high-end staging cost
  const estimatedValueBoost = Number(squareFeet) * 45; // Over $45 per sqft value boost architecture

  if (!mounted) return <div className="min-h-screen bg-[#000000]" />;

  return (
    <div className="w-full bg-[#000000] pt-44 sm:pt-52 pb-32 text-white relative z-10 overflow-hidden selection:bg-[#C9A050] selection:text-black font-sans">
      
      {/* ELITE BRAND AMBIENT RADIAL GLOWS */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A050]/[0.02] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#C9A050]/[0.015] blur-[130px] rounded-full pointer-events-none z-0" />

      {/* Unified max-w-[1400px] container framework */}
      <div className="max-w-[2200px] mx-auto px-6 md:px-24 relative z-20 w-full">
        
        {/* 🏙️ SECTION 1: THE SIGNATURE RESHAPE INTRO - Unified Layout Blueprint */}
        <div className="max-w-3xl text-left space-y-4 mb-20 border-b border-white/5 pb-12 w-full">
          <span className="text-[10px] tracking-[0.4em] font-black text-[#C9A050]  block">
            ( ASSET DESIRES RE-ENGINEERED )
          </span>
          {/* ✅ FIXED: Switched to signature Montserrat font with extra-heavy black weight */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl text-white  font-black leading-none tracking-tight">
            The Signature Reset
          </h1>
          {/* ✅ FIXED: Pure high-contrast white text at strict 15px mobile response standard */}
          <p className="text-[15px] sm:text-[16px] md:text-[17px] text-white font-normal tracking-wide leading-relaxed">
            Average real estate listings compete on price. SoHipp assets command it. Through a deep blend of data precision and architectural staging style, we reshape high-ticket properties entirely before they hit the market loop.
          </p>
        </div>

        {/* ⚡ SECTION 2: TRANSFORMATION PHASE PIPELINE MATRICES */}
        <div className="space-y-8 mb-24 text-left w-full">
          <div className="space-y-2">
            <span className="text-[9px] font-mono tracking-[0.2em] text-[#C9A050] font-black  block">// WORKFLOW VELOCITY VECTOR</span>
            {/* ✅ FIXED: Switched to signature Montserrat font with extra-heavy black weight */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black text-white  tracking-wide">The Architectural Reset Phases</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch w-full">
            {transformationPhases.map((phase) => (
              <div key={phase.step} className="bg-[#121212] p-6 sm:p-8 rounded-2xl border border-white/5 shadow-2xl relative group transform-gpu transition-all duration-300 hover:border-[#C9A050]/40 sm:hover:bg-[#181818] flex flex-col justify-between items-start">
                <div className="text-3xl font-sans text-[#C9A050]/10 font-black absolute top-6 right-8 group-hover:text-[#C9A050]/30 transition-colors select-none">{phase.step}</div>
                
                <div className="w-full">
                  <div className="p-4 bg-[#050505] rounded-xl border border-white/10 text-[#C9A050] w-fit mb-6 shadow-md transition-colors group-hover:bg-[#C9A050] group-hover:text-black">
                    {phase.step === "01" ? <Sliders size={16} strokeWidth={2.5} /> : phase.step === "02" ? <Paintbrush size={16} strokeWidth={2.5} /> : <ShieldCheck size={16} strokeWidth={2.5} />}
                  </div>
                  {/* ✅ FIXED: Switched to signature Montserrat font with extra-heavy black weight */}
                  <h3 className="text-lg font-sans text-white font-black tracking-wide mb-3  group-hover:text-[#C9A050] transition-colors">{phase.title}</h3>
                  {/* ✅ FIXED: Pure high-contrast white text at strict 15px standard */}
                  <p className="text-[15px] sm:text-[16px] text-white font-normal leading-relaxed opacity-90 transition-opacity group-hover:opacity-100">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎛️ SECTION 3: THE ULTRALUXE ROI PREDICTION MATRIX CALCULATOR */}
        {/* ✅ FIXED: Switched wrapper container to deep slate mesh background for absolute edge isolation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch bg-[#121212] bg-[radial-gradient(circle_at_top_left,rgba(201,160,80,0.03),transparent_45%)] border border-white/5 p-6 sm:p-12 rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.9)] mb-24 w-full">
          
          {/* Input Control Box */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[9px] font-mono tracking-[0.2em] text-[#C9A050] font-black  flex items-center gap-1.5"><Zap size={11} strokeWidth={3} /> REALTIME VALUE PROJECTION MATRICES</span>
              {/* ✅ FIXED: Switched to signature Montserrat font with extra-heavy black weight */}
              <h3 className="text-2xl sm:text-3xl font-sans font-black text-white  tracking-wide">Estimate Your Return</h3>
            </div>
            {/* ✅ FIXED: Pure high-contrast white text */}
            <p className="text-[15px] text-white font-normal leading-relaxed opacity-90">
              Input the approximate total heated square footage of your residential property south of 635 to gauge the clinical market boost trajectory.
            </p>
            
            <div className="space-y-1.5 pt-2">
              <label className="text-[10px] font-mono tracking-[0.2em] text-[#C9A050] block  font-black">TOTAL COVERED AREA (SQ FT)</label>
              {/* ✅ FIXED: Upgraded layout input contrast background with high visibility placeholder text */}
              <div className="relative flex items-center bg-[#1C1C1C] rounded-xl border border-white/10 px-4 focus-within:border-[#C9A050] transition-colors shadow-inner">
                <input 
                  type="number"
                  value={squareFeet}
                  onChange={(e) => setSquareFeet(e.target.value)}
                  placeholder="E.G. 5000" 
                  className="bg-transparent w-full text-xs tracking-[0.15em] font-black text-white outline-none py-4  font-sans placeholder-white/50"
                />
              </div>
            </div>
          </div>

          {/* Mathematical Outputs Matrix Display Panel */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch w-full">
            
            {/* Cost Module */}
            {/* ✅ FIXED: Shifted background element wrapper separation to graphite lines */}
            <div className="bg-[#1C1C1C] border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between text-left shadow-lg">
              <div className="space-y-2">
                <div className="text-white/40 text-[9px] font-mono tracking-widest  flex items-center gap-1.5 font-bold"><DollarSign size={12}/> CURATED INVESTMENT OUTLAY</div>
                <h4 className="text-xs tracking-wider  text-white font-sans font-bold">Estimated Staging Cost</h4>
              </div>
              <div className="mt-8">
                {/* ✅ FIXED: Standardized value string tokens into geometric heavy sans weights */}
                <span className="text-3xl sm:text-4xl font-sans text-white font-black tracking-wide block">${estimatedCost.toLocaleString()}</span>
                <span className="text-[9px] font-mono text-white/40 block mt-2 font-bold tracking-wider">BASED ON PREMIUM MATERIALS ACCENTING</span>
              </div>
            </div>

            {/* Value Lift Return Lift Module */}
            <div className="bg-[#1A1612] border border-[#C9A050]/20 p-6 sm:p-8 rounded-2xl flex flex-col justify-between text-left relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A050]/[0.02] blur-xl rounded-full" />
              <div className="space-y-2">
                <div className="text-[#C9A050] text-[9px] font-mono tracking-widest  flex items-center gap-1.5 font-black"><TrendingUp size={12} strokeWidth={2.5}/> EXPECTED CAPITAL APPRECIATION</div>
                <h4 className="text-xs tracking-wider  text-white font-sans font-bold">Estimated Valuation Boost</h4>
              </div>
              <div className="mt-8">
                {/* ✅ FIXED: Standardized value string tokens into geometric heavy sans weights */}
                <span className="text-3xl sm:text-4xl font-sans text-[#C9A050] font-black tracking-wide block">${estimatedValueBoost.toLocaleString()}</span>
                <span className="text-[9px] font-mono text-[#C9A050]/50 block mt-2 font-bold tracking-wider">CAPITAL CONVERSION MAGNITUDE VECTOR</span>
              </div>
            </div>

          </div>
        </div>

        {/* 📥 SECTION 4: INTAKE INQUIRY PRIVATE CONTROL ACCESS GATE */}
        <div className="max-w-2xl mx-auto text-center space-y-6 w-full">
          <div className="space-y-3">
            {/* ✅ FIXED: Switched to signature Montserrat font with extra-heavy black weight */}
            <h3 className="font-sans text-2xl sm:text-3xl text-white font-black  tracking-wide">Apply For A SoHipp Reset Session</h3>
            {/* ✅ FIXED: Pure high-contrast white text */}
            <p className="text-[15px] text-white font-normal max-w-md mx-auto leading-relaxed">
              Ensure absolute discretion for your residential portfolio. Request premium styling vetting below.
            </p>
          </div>
          
          {/* Action trigger button format */}
          <div className="pt-2 w-full flex justify-center">
            <button type="button" className="w-full sm:w-auto bg-[#C9A050] text-black py-4 px-10 tracking-[0.2em] font-black text-xs hover:bg-white hover:text-black transition-all  rounded-full shadow-2xl transform-gpu active:scale-95 duration-300 cursor-pointer font-sans">
              Get Vetted
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}