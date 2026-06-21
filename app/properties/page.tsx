"use client";

import { useState, useEffect } from "react";
import { Search, BedDouble, Bath, Square, ArrowUpRight, MapPin, Layers, Sparkles, Filter, CheckCircle2 } from "lucide-react";

export default function PropertiesPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const listings = [
    {
      id: "PRP-2026-01",
      title: "The Preston Hollow Manor",
      location: "Preston Hollow, Dallas (South of 635)",
      category: "ESTATES",
      price: "$8,450,000",
      beds: 6,
      baths: 7.5,
      sqft: "9,200",
      builtYear: "2023",
      status: "AVAILABLE",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
      tag: "Signature Estate",
      architect: "Maison Design Group",
      features: ["Wine Cellar Matrix", "Smart Home Automation Hub", "Oasis Pool & Cabana", "Private Guard Gate Setup"],
      description: "Approached with an operator's data precision and strictly localized in elite Preston Hollow, this estate features architectural presentations that maximize market valuation vectors."
    },
    {
      id: "PRP-2026-02",
      title: "Strauss Modernist Pavilion",
      location: "Highland Park, Dallas",
      category: "OFF-MARKET",
      price: "$12,100,000",
      beds: 5,
      baths: 6,
      sqft: "7,850",
      builtYear: "2025",
      status: "CONFIDENTIAL",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800",
      tag: "Private Network Vault",
      architect: "Kaufman Studio Corp",
      features: ["Bespoke Matte Black Kitchen", "Hidden Private Vault Node", "Zero-Edge Heated Pool", "Aesthetic Intelligence Staging"],
      description: "An off-market architectural masterpiece commanding record valuations. Seamless integration of interior design transformation south of 635 with private transactional discretion frameworks."
    },
    {
      id: "PRP-2026-03",
      title: "The Turtle Creek Penthouse",
      location: "Turtle Creek Corridor, Dallas",
      category: "PENTHOUSES",
      price: "$4,950,000",
      beds: 3,
      baths: 3.5,
      sqft: "4,100",
      builtYear: "2024",
      status: "AVAILABLE",
      img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800",
      tag: "Sky Skyline Collection",
      architect: "Dallas Core Structures",
      features: ["360 Sky Deck Wraparound", "Bespoke Onyx Marble Slabs", "24/7 Elite Concierge Access", "Direct Elevator Security Key"],
      description: "Elevating residential assets into highly coveted products. This penthouse offers global investors unmatched views of DFW investment vectors with premium high-velocity finishes."
    },
    {
      id: "PRP-2026-04",
      title: "Lakewood Mid-Century Estate",
      location: "Lakewood Trails, Dallas",
      category: "ESTATES",
      price: "$3,800,000",
      beds: 4,
      baths: 4.5,
      sqft: "5,300",
      builtYear: "2022",
      status: "UNDER CONTRACT",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
      tag: "SoHipp Reset Unit",
      architect: "Olsen Environment Design",
      features: ["Native White Oak Panelings", "Pre-Listing Staging Certified", "Glass Accordion Walls Grid", "Custom Stone Fireplace Stack"],
      description: "Average real estate listings compete on price. SoHipp assets command it. Fully optimized layout tracking with clinical attention to architectural space presentations."
    },
    {
      id: "PRP-2026-05",
      title: "The Deloache Absolute Reserve",
      location: "Preston Hollow Districts, Dallas",
      category: "OFF-MARKET",
      price: "$16,500,000",
      beds: 7,
      baths: 9,
      sqft: "12,400",
      builtYear: "2025",
      status: "CONFIDENTIAL",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
      tag: "VIP Network Access Only",
      architect: "Vanguard Builders DFW",
      features: ["Detached Guest Residence Node", "12-Car Under-Surface Vault", "Private Helipad Alignment", "Elite Smart Defense Security"],
      description: "Bespoke property intelligence network layout asset. Engineered for high-net-worth individuals ensuring absolute confidentiality and unparalleled market asset valuation vectors."
    },
    {
      id: "PRP-2026-06",
      title: "Armstrong Avenue Duplex Node",
      location: "Highland Park Outskirts, Dallas",
      category: "PENTHOUSES",
      price: "$6,200,000",
      beds: 4,
      baths: 4,
      sqft: "4,950",
      builtYear: "2024",
      status: "AVAILABLE",
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800",
      tag: "Premium Duplex Unit",
      architect: "Studio Charcoal Inc",
      features: ["Monolithic Facade Elements", "Dual Thermal Control HVAC", "Roof Garden Staging Setup", "Integrated Smart Media Network"],
      description: "Positioned using precise design transformation parameters to ensure lightning-fast mobile field responses and maximum conversion-centric data tracking metrics."
    }
  ];

  const filteredListings = listings.filter(item => {
    const matchesCategory = activeFilter === "ALL" || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (!mounted) return <div className="min-h-screen bg-[#0A0A0A]" />;

  return (
    <div className="w-full bg-[#0A0A0A] pt-40 sm:pt-52 pb-32 text-white relative z-10 overflow-hidden selection:bg-[#C9A050] selection:text-black">
      
      {/* RICH LUXURY ACCENTS */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A050]/[0.02] blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[2200px] mx-auto px-4 sm:px-6 md:px-24 relative z-20">
        
        {/* HEADER INTRO TITLE MODULE */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 sm:mb-16 text-left border-b border-white/5 pb-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[10px] tracking-[0.5em] font-black text-[#C9A050] uppercase block">
              ( SOUTH OF 635 PORTFOLIO MATRIX )
            </span>
            <h1 className="text-3xl sm:text-6xl font-serif tracking-wide text-white uppercase font-bold leading-none">
              THE LUXURY COLLECTION
            </h1>
            <p className="text-[14px] sm:text-[15px] text-white/50 font-light tracking-wide leading-relaxed">
              Explore ultra-exclusive private residential classifications, bespoke modernist estates, and high-ticket off-market luxury assets.
            </p>
          </div>
          
          <div className="text-[10px] sm:text-[11px] font-mono tracking-widest text-white/40 uppercase flex items-center gap-2 bg-[#141414] px-4 py-2.5 rounded-xl border border-white/5 shadow-2xl shrink-0">
            <Layers size={12} className="text-[#C9A050]" />
            <span>Vault Database: {listings.length} Active Records</span>
          </div>
        </div>

        {/* SEARCH & FILTERS CONTROLLERS PANEL */}
        <div className="space-y-6 mb-12 bg-[#111111] p-4 sm:p-6 rounded-2xl border border-white/5 shadow-3xl">
          <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4">
            
            <div className="relative flex items-center flex-grow bg-[#1A1A1A] rounded-xl border border-white/5 px-4 focus-within:border-[#C9A050]/40 transition-colors">
              <Search size={16} className="text-[#C9A050] shrink-0" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH PORTFOLIO BY ESTATE NAME OR SPECIFIC DISTRICT..." 
                className="bg-transparent w-full text-[11px] tracking-widest font-bold text-white outline-none placeholder-white/20 py-4 px-3 uppercase font-sans"
              />
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[9px] tracking-widest font-black uppercase">
              {["ALL", "ESTATES", "PENTHOUSES", "OFF-MARKET"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveFilter(cat); setSelectedProperty(null); }}
                  className={`px-4 py-3 rounded-xl border transition-all duration-300 transform-gpu active:scale-95 whitespace-nowrap ${
                    activeFilter === cat 
                      ? "bg-[#C9A050] text-black border-[#C9A050] font-black shadow-xl" 
                      : "bg-[#1A1A1A] text-white/60 border-white/5 hover:border-[#C9A050]/30 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* PROPERTY LISTINGS SHOWCASE GRID */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredListings.map((item) => {
              const isExpanded = selectedProperty === item.id;
              
              return (
                <div
                  key={item.id}
                  className={`flex flex-col justify-between bg-[#141414] border rounded-2xl overflow-hidden cursor-pointer transform-gpu transition-all duration-500 shadow-2xl will-change-transform ${
                    isExpanded ? "border-[#C9A050] lg:col-span-3 lg:flex-row" : "border-white/5 hover:border-[#C9A050]/20 sm:hover:-translate-y-1.5"
                  }`}
                  onClick={() => setSelectedProperty(isExpanded ? null : item.id)}
                >
                  
                  {/* Image Framework Area */}
                  <div className={`relative overflow-hidden bg-[#1A1A1A] shrink-0 transition-all duration-500 ${
                    isExpanded ? "w-full lg:w-[45%] h-[260px] sm:h-[320px] lg:h-auto" : "h-[220px] sm:h-[260px] w-full"
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30 z-10 opacity-90" />
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-85" loading="lazy" />
                    
                    <span className="absolute top-4 left-4 z-20 bg-black/90 backdrop-blur-md text-[#C9A050] text-[9px] font-black tracking-[0.2em] uppercase px-3.5 py-2 rounded-md border border-[#C9A050]/40 shadow-xl">
                      {item.tag}
                    </span>

                    <span className={`absolute bottom-4 right-4 z-20 text-[9px] font-black font-mono tracking-widest uppercase px-3 py-1.5 rounded-md shadow-md ${
                      item.status === "AVAILABLE" ? "bg-emerald-950/90 text-emerald-400 border border-emerald-500/20" :
                      item.status === "CONFIDENTIAL" ? "bg-amber-950/90 text-amber-400 border border-amber-500/20" : "bg-white/10 text-white/60 border border-white/5"
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Core Details Content Container Block */}
                  <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6 text-left w-full">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <span className="text-[9px] font-mono tracking-widest text-[#C9A050] font-black uppercase block mb-1">ID: {item.id}</span>
                          <h3 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-wide">
                            {item.title}
                          </h3>
                        </div>
                        <div className="p-1.5 rounded-full bg-white/5 border border-white/10 text-[#C9A050] shrink-0">
                          <ArrowUpRight size={14} className={`transition-transform duration-500 ${isExpanded ? "rotate-45" : ""}`} />
                        </div>
                      </div>

                      <p className="text-[10px] font-mono tracking-widest text-white/40 uppercase flex items-center gap-1.5">
                        <MapPin size={11} className="text-[#C9A050]" />
                        <span>{item.location}</span>
                      </p>

                      <p className="text-[14px] text-white/70 font-light leading-relaxed tracking-wide font-sans line-clamp-2 sm:line-clamp-none">
                        {item.description}
                      </p>
                    </div>

                    {/* Extended Parameter View Modules */}
                    {isExpanded && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                        <div className="space-y-2">
                          <h4 className="text-[9px] tracking-widest text-[#C9A050] font-black uppercase flex items-center gap-1"><Sparkles size={10}/> SPECIFICATIONS</h4>
                          <ul className="grid grid-cols-1 gap-1 text-xs font-light text-white/80 font-sans">
                            {item.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#C9A050]" /> {feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-2 text-xs font-light text-white/50 font-mono">
                          <p className="flex justify-between border-b border-white/5 pb-1"><span>ARCHITECT:</span> <span className="text-white font-bold">{item.architect}</span></p>
                          <p className="flex justify-between border-b border-white/5 pb-1"><span>YEAR:</span> <span className="text-white font-bold">{item.builtYear}</span></p>
                        </div>
                      </div>
                    )}

                    {/* Horizontal Dimensional Specification Vector Row */}
                    <div className="grid grid-cols-3 gap-2 border-y border-white/5 py-4 text-white text-[11px] sm:text-xs font-medium tracking-wide">
                      <div className="flex items-center gap-1.5 justify-center bg-white/[0.01] py-2 rounded-xl border border-white/5">
                        <BedDouble size={13} className="text-[#C9A050]" />
                        <span>{item.beds} Bds</span>
                      </div>
                      <div className="flex items-center gap-1.5 justify-center bg-white/[0.01] py-2 rounded-xl border border-white/5">
                        <Bath size={13} className="text-[#C9A050]" />
                        <span>{item.baths} Bth</span>
                      </div>
                      <div className="flex items-center gap-1.5 justify-center bg-white/[0.01] py-2 rounded-xl border border-white/5">
                        <Square size={12} className="text-[#C9A050]" />
                        <span>{item.sqft} SqFt</span>
                      </div>
                    </div>

                    {/* ✅ FIX: Vertical column transformation layout on mobile to prevent layout overflow constraints */}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pt-2 border-t border-white/5 sm:border-none">
                      <div className="text-left">
                        <span className="text-[9px] tracking-[0.2em] text-white/30 font-black uppercase block">VALUATION BASELINE</span>
                        <span className="text-2xl font-serif text-[#C9A050] font-black tracking-wide block mt-0.5">{item.price}</span>
                      </div>
                      <button className="w-full sm:w-auto bg-[#C9A050] text-black text-[10px] font-black tracking-widest uppercase px-6 py-4 rounded-xl hover:bg-white transition-all duration-300 shadow-xl shrink-0 transform-gpu active:scale-98">
                        {item.category === "OFF-MARKET" ? "Request Private Vetting" : "Gain Private Dossier"}
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24 bg-[#111111] rounded-2xl border border-white/5 max-w-xl mx-auto space-y-4">
            <p className="text-white/40 text-xs tracking-widest uppercase font-mono">No Matching Architectural Records Encountered</p>
            <button onClick={() => { setSearchQuery(""); setActiveFilter("ALL"); }} className="text-[#C9A050] text-[10px] tracking-widest uppercase font-black hover:underline">
              Reset Target Filter Matrix
            </button>
          </div>
        )}

      </div>
    </div>
  );
}