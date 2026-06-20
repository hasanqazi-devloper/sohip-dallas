"use client";
import { useState, useMemo } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const PROPERTIES = [
  { id: 1, title: "The Onyx Estate", city: "Dallas", zip: "75220", beds: 5, price: 5800000, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" },
  { id: 2, title: "Obsidian Penthouse", city: "Downtown", zip: "75201", beds: 3, price: 3100000, img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070" },
  { id: 3, title: "Shadow Sanctuary", city: "Dallas", zip: "75205", beds: 4, price: 4200000, img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070" },
  { id: 4, title: "Midnight Manor", city: "Fort Worth", zip: "76102", beds: 6, price: 8900000, img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974" },
];

export default function PropertySearchClient() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ city: '', beds: '', priceRange: '' });

  const filtered = useMemo(() => {
    return PROPERTIES.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.zip.includes(search);
      const matchCity = filters.city ? p.city.toLowerCase() === filters.city.toLowerCase() : true;
      const matchBeds = filters.beds ? p.beds >= parseInt(filters.beds) : true;
      return matchSearch && matchCity && matchBeds;
    });
  }, [search, filters]);

  return (
    <div className="pt-32 pb-20 px-6 md:px-24 max-w-[1800px] mx-auto bg-[#050505] text-white selection:bg-white selection:text-black">
      
      {/* HEADER SECTION */}
      <header className="mb-20">
        <Link href="/" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/30 hover:text-white transition-all mb-12 group">
          <m.span whileHover={{ x: -5 }}>←</m.span> Return to Home
        </Link>
        
        <m.span initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} className="text-[12px] tracking-[1.2em] uppercase font-black block mb-6">
          ( PRIVATE PORTFOLIO )
        </m.span>
        <h1 className="text-7xl md:text-9xl font-serif italic tracking-tighter leading-tight">
          Modern <br/> <span className="text-white/40">Sanctuaries.</span>
        </h1>
      </header>

      {/* DARK FILTER BAR */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-24 border-y border-white/5 py-14">
        <div className="space-y-4">
          <label className="text-[10px] uppercase font-black tracking-[0.2em] text-white/40">Search Index</label>
          <input 
            type="text" 
            placeholder="Zip Code or Residence..." 
            className="w-full bg-transparent border-b border-white/10 py-3 font-serif italic text-2xl focus:border-white outline-none transition-all placeholder:text-white/10"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          <label className="text-[10px] uppercase font-black tracking-[0.2em] text-white/40">District</label>
          <select 
            className="w-full bg-transparent border-b border-white/10 py-3 font-serif italic text-2xl outline-none cursor-pointer appearance-none"
            onChange={(e) => setFilters({...filters, city: e.target.value})}
          >
            <option className="bg-black" value="">All Regions</option>
            <option className="bg-black" value="dallas">Dallas</option>
            <option className="bg-black" value="downtown">Downtown</option>
          </select>
        </div>

        <div className="space-y-4">
          <label className="text-[10px] uppercase font-black tracking-[0.2em] text-white/40">Bedrooms</label>
          <select 
            className="w-full bg-transparent border-b border-white/10 py-3 font-serif italic text-2xl outline-none cursor-pointer appearance-none"
            onChange={(e) => setFilters({...filters, beds: e.target.value})}
          >
            <option className="bg-black" value="">Any</option>
            <option className="bg-black" value="3">3+ Rooms</option>
            <option className="bg-black" value="4">4+ Rooms</option>
            <option className="bg-black" value="5">5+ Rooms</option>
          </select>
        </div>

        <div className="space-y-4 flex flex-col justify-end">
          <button className="w-full bg-white text-black py-4 uppercase text-[11px] font-black tracking-widest hover:bg-white/90 transition-all">
            Filter Results ({filtered.length})
          </button>
        </div>
      </div>

      {/* PROPERTY CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-32">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <m.article 
              layout
              key={item.id}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              className="group relative"
            >
              <div className="relative h-[600px] md:h-[750px] overflow-hidden bg-[#111] mb-10">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] grayscale-[0.3] group-hover:grayscale-0"
                />
                <div className="absolute top-10 right-10 flex flex-col items-end">
                   <span className="text-3xl font-serif italic mb-1">${item.price.toLocaleString()}</span>
                   <span className="text-[9px] font-black uppercase tracking-widest opacity-50">Private Listing</span>
                </div>
              </div>

              <div className="flex justify-between items-end border-b border-white/10 pb-10">
                <div className="max-w-[70%]">
                  <h3 className="text-5xl md:text-6xl font-serif italic leading-none mb-6 group-hover:text-white/70 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.4em] text-white/30">
                    <span>{item.city}</span>
                    <span>{item.beds} BEDS</span>
                    <span>{item.zip}</span>
                  </div>
                </div>
                <m.div 
                  whileHover={{ rotate: 45 }}
                  className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </m.div>
              </div>
            </m.article>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}