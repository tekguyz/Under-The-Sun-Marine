import React from 'react';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Services from '@/components/sections/Services';
import ProcessFAQ from '@/components/sections/ProcessFAQ';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Hero />
        <TrustBar />
        <Services />
        <ProcessFAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
