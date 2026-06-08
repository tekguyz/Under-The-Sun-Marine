'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 15);
      }
    };
    
    // Check initial position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-2.5'
          : 'bg-transparent py-3.5 sm:py-4.5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Left: Brand with Logo */}
        <a href="#" className="flex items-center group" aria-label="Under The Sun Marine">
          <div className="relative h-10 sm:h-12 md:h-15 lg:h-18 w-[150px] sm:w-[180px] md:w-[225px] lg:w-[270px] transition-transform duration-300 group-hover:scale-[1.01]">
            <Image
              src="/logo-1.png"
              alt="Under The Sun Marine Logo"
              fill
              priority
              sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, (max-width: 1024px) 225px, 270px"
              className="object-contain object-left"
              referrerPolicy="no-referrer"
            />
          </div>
        </a>

        {/* Center: Desktop Links */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14">
          <a
            href="#services"
            className="font-heading font-semibold text-base tracking-wide text-marine-navy hover:text-sun-orange transition-colors"
          >
            Services
          </a>
          <a
            href="#process"
            className="font-heading font-semibold text-base tracking-wide text-marine-navy hover:text-sun-orange transition-colors"
          >
            Our Process
          </a>
          <a
            href="#about"
            className="font-heading font-semibold text-base tracking-wide text-marine-navy hover:text-sun-orange transition-colors"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="font-heading font-semibold text-base tracking-wide text-marine-navy hover:text-sun-orange transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right: CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+15615605050"
            className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-100 text-marine-navy px-4 py-2 font-semibold text-xs lg:text-sm shadow-2xs transition-all active:scale-95"
          >
            <Phone className="h-3.5 w-3.5 text-sun-orange" />
            <span>Call Now</span>
          </a>
          <a
            href="sms:+15615605050;?&body=Hi%20Under%20The%20Sun%20Marine%2C%20I%20need%20some%20help%20with%20my%20boat."
            id="nav-cta-text"
            className="inline-flex items-center gap-2 rounded-full bg-sun-orange hover:bg-sun-orange-light text-white px-4 py-2 font-semibold text-xs lg:text-sm shadow-sm transition-all hover:scale-[1.02] active:scale-95"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Text Us</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-marine-navy focus:outline-none"
          aria-label="Toggle menu"
          id="mobile-menu-trigger"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-6 py-5 shadow-inner">
          <nav className="flex flex-col gap-3 text-center">
            <a
              href="#services"
              className="font-heading font-semibold text-base text-marine-navy hover:text-sun-orange py-2 border-b border-slate-100/60"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#process"
              className="font-heading font-semibold text-base text-marine-navy hover:text-sun-orange py-2 border-b border-slate-100/60"
              onClick={() => setIsOpen(false)}
            >
              Our Process
            </a>
            <a
              href="#about"
              className="font-heading font-semibold text-base text-marine-navy hover:text-sun-orange py-2 border-b border-slate-100/60"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="font-heading font-semibold text-base text-marine-navy hover:text-sun-orange py-2 border-b border-slate-100/60"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col gap-2.5 mt-4">
              <a
                href="sms:+15615605050;?&body=Hi%20Under%20The%20Sun%20Marine%2C%20I%20need%20some%20help%20with%20my%20boat."
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-sun-orange hover:bg-sun-orange-light text-white px-5 py-3 font-semibold text-sm shadow-sm transition-all"
                onClick={() => setIsOpen(false)}
              >
                <MessageSquare className="h-4 w-4" />
                <span>Text Us (561) 560-5050</span>
              </a>
              <a
                href="tel:+15615605050"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-slate-50 border border-slate-200 text-marine-navy px-5 py-3 font-semibold text-sm shadow-2xs transition-all"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-4 w-4 text-sun-orange" />
                <span>Call (561) 560-5050</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
