"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, MapPin, Building2, Landmark, Compass, Search, Percent } from "lucide-react";

export default function CommunitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Curated Dallas Elite Neighborhood Assets Database (South of 635)
  const communities = [
    {
      id: "COM-01",
      name: "Highland Park",
      headline: "The Pinnacle of Texas Heritage",
      priceRange: "$1.5M - $25M+",
      avgPricePerSqFt: "$1,150",
      activeListings: "12 Properties",
      taxRate: "1.72%",
      vibe: "Historic Mansions, Elite Tree-Lined Avenues",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
      highlights: ["HP Independent School District", "Lakeside Park Proximity", "Bespoke Security Patrols"]
    },
    {
      id: "COM-02",
      name: "University Park",
      headline: "Intellectual Luxury & Architectural Precision",
      priceRange: "$1.2M - $16M",
      avgPricePerSqFt: "$950",
      activeListings: "8 Properties",
      taxRate: "1.75%",
      vibe: "Modernist Masterpieces, Academic Prestige",
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800",
      highlights: ["Southern Methodist University Hub", "Snider Plaza Access", "Elite Family Estates"]
    },
    {
      id: "COM-03",
      name: "Preston Hollow",
      headline: "The Ultra-Exclusive Private Enclave",
      priceRange: "$2.0M - $45M+",
      avgPricePerSqFt: "$1,300",
      activeListings: "15 Properties",
      taxRate: "1.82%",
      vibe: "Gated Long-Driveway Estates, Total Discretion",
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800",
      highlights: ["Multi-Acre Structural Lots", "Prestige Private School Corridor", "Off-Market Asset Density"]
    },
    {
      id: "COM-04",
      name: "Devonshire",
      headline: "Sophisticated Cottage Charm Re-engineered",
      priceRange: "$900K - $5M",
      avgPricePerSqFt: "$750",
      activeListings: "6 Properties",
      taxRate: "1.80%",
      vibe: "Walkable High-End Urban Serenity",
      img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800",
      highlights: ["Inwood Village Lifestyle", "Tightly Guarded Local Community", "Bespoke Transitional Architecture"]
    },
    {
      id: "COM-05",
      name: "Bluffview",
      headline: "Dramatic Topography & Organic Form",
      priceRange: "$1.1M - $12M",
      avgPricePerSqFt: "$850",
      activeListings: "9 Properties",
      taxRate: "1.79%",
      vibe: "Rolling Bluffs, Heavy Tree Canopies, Secluded",
      img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800",
      highlights: ["Dynamic Elevation Variances", "Architectural Landmark Layouts", "Absolute Perimeter Privacy"]
    },
    {
      id: "COM-06",
      name: "Lakewood",
      headline: "Historic Lakefront Splendor",
      priceRange: "$1.3M - $10M+",
      avgPricePerSqFt: "$820",
      activeListings: "11 Properties",
      taxRate: "1.81%",
      vibe: "Mid-Century Modern Pools, White Rock Exclusivity",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
      highlights: ["White Rock Lake Baseline views", "Lakewood Country Club Matrix", "Eclectic Structural Desire"]
    }
  ];

  const filteredCommunities = communities.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.vibe.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!mounted) return <div className="min-h-screen bg-[#0A0A0A]" />;

  return (
    <div className="w-full bg-[#0A0A0A] pt-40 sm:pt-48 pb-32 text-white relative z-10 overflow-hidden selection:bg-[#C9A050] selection:text-black">
      
      {/* BRAND RADIUS BACKGROUND LIGHT GLOW */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#C9A050]/[0.02] blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-24 relative z-20">
        
        {/* 🏙️ INTRO DESCRIPTION HEADER BLOCK */}
        <div className="space-y-4 text-left max-w-3xl mb-16 border-b border-white/5 pb-10">
          <span className="text-[10px] tracking-[0.6em] font-black text-[#C9A050] uppercase block">
            ( DALLAS ELITE LOCATIONS MATRIX )
          </span>
          <h1 className="text-4xl sm:text-7xl font-serif tracking-wide text-white uppercase font-bold leading-none">
            CURATED COMMUNITIES
          </h1>
          <p className="text-[15px] sm:text-[16px] text-white/50 font-light tracking-wide leading-relaxed max-w-2xl">
            Bespoke advisory intelligence mapping exclusively south of 635. Navigating the DFW investment vectors with precision data metrics and aesthetic desire profiles.
          </p>
        </div>

        {/* 🎛️ DYNAMIC REALTIME FILTER INPUT INTERFACE */}
        <div className="mb-16 bg-[#111111] p-4 sm:p-5 rounded-2xl border border-white/5 shadow-3xl max-w-2xl mr-auto">
          <div className="relative flex items-center bg-[#1A1A1A] rounded-xl border border-white/5 px-4 focus-within:border-[#C9A050]/40 transition-all duration-300">
            <Search size={18} className="text-[#C9A050] shrink-0" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="FILTER LOCATIONS BY DISTRICT POOLS OR STRUCTURAL VIBE..." 
              className="bg-transparent w-full text-xs tracking-widest font-bold text-white outline-none placeholder-white/20 py-4 px-3 uppercase font-sans"
            />
          </div>
        </div>

        {/* ⚡ THE PRIMARY LOCALITIES SHOWCASE GRID MATRIX */}
        {filteredCommunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredCommunities.map((district) => (
              <div
                key={district.id}
                className="group relative flex flex-col justify-between bg-[#141414] border border-white/5 rounded-2xl overflow-hidden cursor-pointer transform-gpu transition-all duration-500 shadow-3xl hover:border-[#C9A050]/30 will-change-transform"
              >
                {/* Visual Image Block Frame Layer */}
                <div className="relative h-[220px] sm:h-[250px] w-full overflow-hidden bg-[#1A1A1A]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/20 to-black/40 z-10" />
                  <img 
                    src={district.img} 
                    alt={district.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-80 will-change-transform" 
                    loading="lazy"
                  />
                  
                  {/* Floating Price Bracket Tag */}
                  <span className="absolute bottom-4 left-4 z-20 bg-black/80 backdrop-blur-md text-[#C9A050] text-[10px] font-black tracking-widest uppercase px-3.5 py-2 rounded-lg border border-[#C9A050]/20 shadow-xl">
                    {district.priceRange}
                  </span>
                </div>

                {/* Core Parameters Details Panel */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6 text-left">
                  
                  {/* District Title block */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center gap-4">
                      <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-wide group-hover:text-[#C9A050] transition-colors duration-300">
                        {district.name}
                      </h3>
                      <div className="p-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 group-hover:border-[#C9A050]/40 group-hover:text-[#C9A050] transition-colors shrink-0">
                        <ArrowUpRight size={14} className="transition-transform duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                    <p className="text-[12px] text-[#C9A050] italic font-serif tracking-wide opacity-90">
                      "{district.headline}"
                    </p>
                  </div>

                  {/* Vibe and Environment Description Block */}
                  <p className="text-xs sm:text-[13px] text-white/60 font-light font-sans leading-relaxed tracking-wide">
                    <span className="text-white/30 font-mono text-[10px] block mb-1 uppercase tracking-widest">ENVIRONMENT TEXTURE:</span>
                    {district.vibe}
                  </p>

                  {/* Highlight Tags Framework Row */}
                  <div className="space-y-1.5 border-t border-white/5 pt-4">
                    <span className="text-[9px] font-mono tracking-widest text-white/30 block uppercase font-bold">DISTRICT ADVANTAGES:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {district.highlights.map((tag, tIdx) => (
                        <span key={tIdx} className="bg-white/[0.02] border border-white/5 text-white/80 text-[10px] font-sans px-2.5 py-1 rounded-md whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metadata Statistical Metrics Mesh Row */}
                  <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4 text-center font-mono text-[10px] text-white/40 tracking-widest uppercase">
                    <div className="bg-white/[0.01] p-2 rounded-xl border border-white/[0.02] flex flex-col justify-center items-center">
                      <Compass size={12} className="text-[#C9A050]/50 mb-1" />
                      <span className="text-white font-bold text-xs font-sans mt-0.5">{district.avgPricePerSqFt}</span>
                      <span className="scale-[0.85] text-[8px] opacity-60 mt-0.5">Avg / SqFt</span>
                    </div>
                    <div className="bg-white/[0.01] p-2 rounded-xl border border-white/[0.02] flex flex-col justify-center items-center">
                      <Building2 size={12} className="text-[#C9A050]/50 mb-1" />
                      <span className="text-white font-bold text-xs font-sans mt-0.5">{district.activeListings.split(' ')[0]}</span>
                      <span className="scale-[0.85] text-[8px] opacity-60 mt-0.5">Active Units</span>
                    </div>
                    <div className="bg-white/[0.01] p-2 rounded-xl border border-white/[0.02] flex flex-col justify-center items-center">
                      <Percent size={12} className="text-[#C9A050]/50 mb-1" />
                      <span className="text-white font-bold text-xs font-sans mt-0.5">{district.taxRate}</span>
                      <span className="scale-[0.85] text-[8px] opacity-60 mt-0.5">Base Tax</span>
                    </div>
                  </div>

                </div>

                {/* Card Stand Stand Platform Footer */}
                <div className="w-full bg-[#181818] py-4 px-6 sm:px-8 border-t border-white/5 flex justify-between items-center text-[10px] font-mono tracking-widest text-white/40 uppercase group-hover:bg-[#C9A050]/5 group-hover:border-[#C9A050]/10 transition-colors">
                  <span>DISCRETION RECONNAISSANCE</span>
                  <span className="text-[#C9A050] font-bold font-sans text-xs group-hover:underline">Explore Area</span>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty Search Fallback */
          <div className="text-center py-20 bg-[#111111] rounded-2xl border border-white/5 max-w-md mx-auto space-y-4 shadow-3xl">
            <Landmark size={28} className="text-[#C9A050]/30 mx-auto" />
            <p className="text-white/40 text-xs tracking-widest uppercase font-mono">No Elite District Pools Located</p>
            <button onClick={() => setSearchQuery("")} className="text-[#C9A050] text-[10px] tracking-widest uppercase font-black hover:underline">
              Clear Filter Query
            </button>
          </div>
        )}

      </div>
    </div>
  );
}