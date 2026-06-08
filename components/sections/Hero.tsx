'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Phone, Anchor, CheckCircle2, ShieldCheck, Award, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full bg-surface-offwhite bg-marine-grid bg-radial-glow overflow-hidden pt-20 pb-5 sm:pt-24 sm:pb-10 md:pt-28 md:pb-16 lg:pt-0 lg:pb-0 lg:h-[calc(100vh-64px)] lg:min-h-[700px] xl:min-h-[810px] flex items-center z-10"
    >
      {/* Decorative Floating Background Shapes for Premium Depth */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-sky-200/20 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] rounded-full bg-orange-100/30 blur-3xl -z-10 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-16 items-center">
          
          {/* Left Column (Content & Action Zone) - Cols 1-7 */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full z-10">
            
            {/* Approachable Status & Location Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-marine-navy border border-slate-200 shadow-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sun-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sun-orange"></span>
              </span>
              <span className="text-slate-500 font-normal">Dockside Support:</span>
              <span className="font-heading font-bold text-marine-navy uppercase tracking-wider">Palm Beach to Miami</span>
            </motion.div>

            {/* Premium Engineered H1 Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-black text-marine-navy text-[32px] xs:text-4xl sm:text-6xl md:text-7xl lg:text-[54px] xl:text-[76px] lg:leading-[1.08] xl:leading-[1.02] tracking-tight mt-5"
            >
              Mobile Boat Repair <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sun-orange to-sun-orange-light">
                Right At Your Dock
              </span>
            </motion.h1>

            {/* Reassured & Human, Stress-Free Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-slate-600 max-w-2xl lg:max-w-3xl font-normal leading-relaxed"
            >
              Skip the shipyard wait. We bring master engine diagnostics, routine services, and marine electrical care directly to your dock or driveway.
            </motion.p>

            {/* Clean, Non-Clipping High-Conversion Touch Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <a
                href="sms:+15615605050;?&body=Hi%20Under%20The%20Sun%20Marine%2C%20I%20need%20some%20help%20with%20my%20boat."
                className="flex items-center justify-center gap-2 bg-sun-orange text-white text-base font-bold rounded-xl px-8 py-3.5 sm:px-10 sm:py-4 lg:text-lg shadow-lg shadow-sun-orange/20 hover:bg-sun-orange-light hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <MessageSquare className="h-5 w-5 shrink-0" />
                <span>Text Us for a Quote</span>
              </a>
              <a
                href="tel:+15615605050"
                className="flex items-center justify-center gap-2 bg-white text-marine-navy border border-slate-200 rounded-xl px-8 py-3.5 sm:px-10 sm:py-4 lg:text-lg text-base font-semibold shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Phone className="h-5 w-5 text-sun-orange shrink-0" />
                <span>Call (561) 560-5050</span>
              </a>
            </motion.div>

            {/* Form submission backup link */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-3 text-xs text-slate-500 text-center lg:text-left pl-1"
            >
              Prefer writing? Schedule online using our{' '}
              <a href="#contact" className="text-marine-navy font-bold underline hover:text-sun-orange transition-colors">
                Dockside Request Form
              </a>{' '}
              below.
            </motion.p>

            {/* Horizontal Trust Badges Matrix - Overflow-scrolling on Mobile, wrap on Desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 pt-5 border-t border-slate-200/80 w-full flex flex-row overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory flex-nowrap justify-start lg:justify-start lg:flex-wrap lg:overflow-visible gap-2.5 text-xs md:text-sm font-medium text-slate-500 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm py-1.5 px-3 rounded-lg border border-slate-100 shadow-2xs snap-center shrink-0 min-w-max">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Licensed & Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm py-1.5 px-3 rounded-lg border border-slate-100 shadow-2xs snap-center shrink-0 min-w-max">
                <Award className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>OEM Diagnostics Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm py-1.5 px-3 rounded-lg border border-slate-100 shadow-2xs snap-center shrink-0 min-w-max">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Zero Marine Yard Markup</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (The Visual Collage Canvas) - Cols 8-12 (Hidden on Mobile/Tablet for optimized above-the-fold load) */}
          <div className="hidden lg:flex lg:col-span-5 w-full relative items-center justify-center lg:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md lg:max-w-none relative lg:aspect-[4/5] xl:aspect-[16/19]"
            >
              {/* Main Structural Frame Layer */}
              <div className="w-full h-full relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 group">
                <Image
                  src="https://images.unsplash.com/photo-1568821388714-1f2f2ee87200?auto=format&fit=crop&q=80&w=1000"
                  alt="Premium marine boat mechanical engine tuning dockside in South Florida"
                  fill
                  priority
                  sizes="(max-w: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                />
                {/* Clean Ambient Lighting Layer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-marine-navy/30 via-transparent to-transparent mix-blend-multiply" />
              </div>

              {/* Overlapping Secondary Asset: Floating Real-Time Operational Tracker Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-4 right-4 sm:-bottom-6 sm:-left-6 lg:bottom-8 lg:-left-10 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-100 max-w-[260px] sm:max-w-xs z-20 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface-blue text-marine-navy">
                    <Anchor className="h-5 w-5 shrink-0 text-sun-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-marine-navy uppercase tracking-wider">
                      Active Status Loop
                    </h3>
                    <p className="font-sans text-xs text-slate-500 mt-1 leading-relaxed font-medium">
                      Mobile technician dispatched on-site for a diagnostics check along the South Florida waterways.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Animated Down Arrow Indicator for Scroll Guide to Below-the-Fold */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 z-20 pointer-events-none hidden lg:flex">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A1B3F]/50 animate-pulse font-sans">
          Explore Services
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <svg
            className="h-4.5 w-4.5 text-sun-orange"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}