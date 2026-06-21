"use client";

import { LazyMotion, domMax } from "framer-motion";
import Hero from "@/components/Hero";
import AudienceSegments from "@/components/AudienceSegments";
import Communities from "@/components/Communities";
import SohippReset from "@/components/SohippReset";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";

export default function SohipEliteFinal() {
  return (
    <LazyMotion features={domMax}>
      {/* ✅ Clean block rendering removes compression constraints entirely */}
      <main className="w-full min-h-screen bg-[#0D0D0D] text-white font-sans overflow-x-hidden block">
        
        <Hero />
        <AudienceSegments />
        <Communities />
        <SohippReset />
        <Testimonials />
        <About />
        <ContactForm />
        
      </main>
    </LazyMotion>
  );
}