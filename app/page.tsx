"use client";
import { LazyMotion, domMax } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AudienceSegments from "@/components/AudienceSegments";
import Communities from "@/components/Communities";
import SohippReset from "@/components/SohippReset";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
// ... (saare baki components import karein)

export default function SohipEliteFinal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LazyMotion features={domMax}>
      <main className="bg-[#0D0D0D] text-white font-sans scroll-smooth overflow-x-hidden">
        {/* HAR COMPONENT SIRF EK BAAR CALL HOGI */}
        <Navbar isScrolled={isScrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Hero />
        <AudienceSegments />
        <Communities />
        <SohippReset/>
        <Testimonials/>
        <About/>
        <ContactForm/>
       <Footer/>
        {/* ... (baki saare components niche chain mein dalte jayein) */}
      </main>
    </LazyMotion>
  );
}