"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowUpRight, Paintbrush, Sliders, ShieldCheck, CheckCircle2, DollarSign, TrendingUp, Zap } from "lucide-react";

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

  if (!mounted) return <div className="min-h-screen bg-[#0A0A0A]" />;

  return (
    <div className="w-full bg-[#0A0A0A] pt-40 sm:pt-48 pb-32 text-white relative z-10 overflow-hidden selection:bg-[#C9A050] selection:text-black">
      
      {/* ELITE BRAND AMBIENT RADIAL GLOWS */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A050]/[0.02] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#C9A050]/[0.015] blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-24 relative z-20">
        
        {/* 🏙️ SECTION 1: THE SIGNATURE RESHAPE INTRO */}
        <div className="max-w-3xl text-left space-y-4 mb-20 border-b border-white/5 pb-12">
          <span className="text-[10px] tracking-[0.6em] font-black text-[#C9A050] uppercase block">
            ( ASSET DESIRES RE-ENGINEERED )
          </span>
          <h1 className="text-4xl sm:text-7xl font-serif tracking-wide text-white uppercase font-bold leading-none">
            THE SIGNATURE RESET
          </h1>
          <p className="text-[15px] sm:text-[16px] text-white/50 font-light tracking-wide leading-relaxed max-w-2xl">
            Average real estate listings compete on price. SoHipp assets command it. Through a deep blend of data precision and architectural staging style, we reshape high-ticket properties entirely.
          </p>
        </div>

        {/* ⚡ SECTION 2: TRANSFORMATION PHASE PIPELINE MATRICES */}
        <div className="space-y-8 mb-24 text-left">
          <div className="space-y-1">
            <span className="text-[9px] font-mono tracking-widest text-[#C9A050] font-bold uppercase">( WORKFLOW VELOCITY VECTOR )</span>
            <h2 className="text-2xl sm:text-4xl font-serif text-white font-medium">The Architectural Reset Phases</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformationPhases.map((phase) => (
              <div key={phase.step} className="bg-[#121212] p-8 rounded-2xl border border-white/5 shadow-2xl relative group transform-gpu transition-all duration-300 hover:border-[#C9A050]/20">
                <div className="text-3xl font-serif italic text-[#C9A050]/20 font-black absolute top-6 right-8 group-hover:text-[#C9A050]/40 transition-colors">{phase.step}</div>
                <div className="p-3 bg-[#1A1A1A] rounded-xl border border-white/5 text-[#C9A050] w-fit mb-6">
                  {phase.step === "01" ? <Sliders size={18} /> : phase.step === "02" ? <Paintbrush size={18} /> : <ShieldCheck size={18} />}
                </div>
                <h3 className="text-lg font-serif text-white font-bold tracking-wide mb-3 group-hover:text-[#C9A050] transition-colors">{phase.title}</h3>
                <p className="text-xs sm:text-[13px] text-white/60 font-light font-sans leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🎛️ SECTION 3: THE ULTRALUXE ROI PREDICTION MATRIX CALCULATOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch bg-[#111111] border border-white/5 p-6 sm:p-12 rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.9)] mb-24">
          
          {/* Input Control Box */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[9px] font-mono tracking-widest text-[#C9A050] font-black uppercase flex items-center gap-1.5"><Zap size={11}/> REALTIME VALUE PROJECTION MATRICES</span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">Estimate Your Asset Return Lift</h3>
            </div>
            <p className="text-xs sm:text-[13px] text-white/50 font-light font-sans leading-relaxed">
              Input the approximate total heated square footage of your residential property south of 635 to gauge the clinical market boost trajectory.
            </p>
            
            <div className="space-y-1.5 pt-2">
              <label className="text-[9px] font-mono tracking-widest text-white/40 block uppercase font-bold">TOTAL COVERED AREA (SQ FT)</label>
              <div className="relative flex items-center bg-[#1A1A1A] rounded-xl border border-white/10 px-4 focus-within:border-[#C9A050] transition-colors">
                <input 
                  type="number"
                  value={squareFeet}
                  onChange={(e) => setSquareFeet(e.target.value)}
                  placeholder="E.G. 5000" 
                  className="bg-transparent w-full text-xs tracking-widest font-bold text-white outline-none py-4 uppercase font-sans"
                />
              </div>
            </div>
          </div>

          {/* Mathematical Outputs Matrix Display Panel */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch w-full">
            
            {/* Cost Module */}
            <div className="bg-[#161616] border border-white/5 p-6 sm:p-8 rounded-2xl flex flex-col justify-between text-left">
              <div className="space-y-2">
                <div className="text-white/30 text-[9px] font-mono tracking-widest uppercase flex items-center gap-1.5"><DollarSign size={12}/> CURATED INVESTMENT OUTLAY</div>
                <h4 className="text-xs tracking-wider uppercase text-white/60 font-sans font-medium">Estimated Staging Cost</h4>
              </div>
              <div className="mt-6">
                <span className="text-3xl font-serif text-white font-bold">${estimatedCost.toLocaleString()}</span>
                <span className="text-[10px] font-mono text-white/20 block mt-1">BASED ON PREMIUM MATERIALS ACCENTING</span>
              </div>
            </div>

            {/* Value Lift Return Lift Module */}
            <div className="bg-[#1A1612] border border-[#C9A050]/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A050]/[0.02] blur-xl rounded-full" />
              <div className="space-y-2">
                <div className="text-[#C9A050] text-[9px] font-mono tracking-widest uppercase flex items-center gap-1.5"><TrendingUp size={12}/> EXPECTED CAPITAL APPRECIATION</div>
                <h4 className="text-xs tracking-wider uppercase text-white/80 font-sans font-medium">Estimated Valuation Boost</h4>
              </div>
              <div className="mt-6">
                <span className="text-3xl font-serif text-[#C9A050] font-black">${estimatedValueBoost.toLocaleString()}</span>
                <span className="text-[10px] font-mono text-[#C9A050]/40 block mt-1">CAPITAL CONVERSION MAGNITUDE VECTOR</span>
              </div>
            </div>

          </div>
        </div>

        {/* 📥 SECTION 4: INTAKE INQUIRY PRIVATE CONTROL ACCESS GATE */}
        <div className="max-w-xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">Apply For A SoHipp Reset Session</h3>
            <p className="text-xs sm:text-[13px] text-white/50 font-light font-sans max-w-sm mx-auto leading-relaxed">
              Ensure absolute discretion for your residential portfolio. Request premium styling vetting below.
            </p>
          </div>
          
          {/* Action trigger button format */}
          <div className="pt-2">
            <button className="w-full sm:w-auto bg-[#C9A050] text-black py-4 px-10 tracking-widest font-black text-[11px] hover:bg-white transition-all uppercase rounded-full shadow-2xl transform-gpu active:scale-95 duration-300">
              Submit Private Asset Dossier Inquiry →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}