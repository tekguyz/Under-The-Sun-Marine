'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { Phone, Anchor, CheckCircle2, ShieldCheck, Award, MessageSquare } from 'lucide-react';

export default function Hero() {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      window.scrollTo(0, 0);
    }
  }, []);

  const shouldReduceMotionRaw = useReducedMotion();
  const shouldReduceMotion = isMounted ? shouldReduceMotionRaw : false;

  const transition = (delay = 0) => shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay };
  const animatedProps = (delay = 0, yOffset = 12) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset },
    animate: { opacity: 1, y: 0 },
    transition: transition(delay),
  });

  return (
    <section
      id="hero"
      className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-0 bg-surface-offwhite bg-marine-grid bg-radial-glow pt-24 pb-8 md:pt-28 md:pb-12 lg:pt-36 lg:pb-16 flex flex-col justify-between md:block z-10 overflow-hidden"
    >
      {/* Dynamic Background Glow Gradients */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-marine-navy/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] rounded-full bg-sun-orange/5 blur-3xl -z-10 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center md:block">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center w-full">
          
          {/* Left Column (Content & Conversions) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full z-10 justify-center">
            
            {/* Top Location Badge */}
            <motion.div
              {...animatedProps(0)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-bold text-marine-navy border border-surface-blue shadow-xs"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sun-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sun-orange"></span>
              </span>
              <span className="text-text-muted font-medium">Dockside Support:</span>
              <span className="font-heading font-extrabold text-marine-navy uppercase tracking-wider">Palm Beach to Miami</span>
            </motion.div>

            {/* Main Bold Headline */}
            <motion.h1
              {...animatedProps(0.05)}
              className="font-heading font-black text-marine-navy text-[40px] xs:text-[44px] sm:text-5xl md:text-6xl lg:text-[46px] xl:text-[58px] leading-[1.08] tracking-tight mt-4.5"
            >
              Mobile Boat Repair <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sun-orange to-sun-orange-light">
                Right At Your Dock
              </span>
            </motion.h1>

            {/* Subheadline — Pure Branding Tone (No Jargon/Corporate Speak) */}
            <motion.p
              {...animatedProps(0.1)}
              className="mt-4 text-base sm:text-base md:text-lg text-text-muted max-w-xl sm:max-w-2xl lg:max-w-xl xl:max-w-2xl font-semibold leading-relaxed font-sans"
            >
              Don't waste your time waiting on a backed-up boatyard. I come directly to your dock to handle engine troubleshooting, regular maintenance, and electrical fixes. No towing, no yard markups, just honest work.
            </motion.p>

            {/* High-Contrast Conversion Buttons */}
            <motion.div
              {...animatedProps(0.15)}
              className="mt-6 w-full sm:w-auto flex flex-col sm:flex-row gap-3"
            >
              <a
                href="sms:+15615605050;?&body=Hi Jack, I need some help with my boat."
                className="flex items-center justify-center gap-2.5 bg-sun-orange text-white text-base font-extrabold rounded-xl px-6 py-4 sm:px-10 shadow-lg shadow-sun-orange/25 hover:bg-sun-orange-light hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <MessageSquare className="h-5 w-5 shrink-0" />
                <span>Text Me for a Quote</span>
              </a>
              <a
                href="tel:+15615605050"
                className="flex items-center justify-center gap-2.5 bg-white text-marine-navy border border-surface-blue rounded-xl px-6 py-4 sm:px-10 text-base font-extrabold shadow-sm hover:bg-surface-offwhite hover:border-surface-blue hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Phone className="h-5 w-5 text-sun-orange shrink-0" />
                <span>Call Jack (561) 560-5050</span>
              </a>
            </motion.div>

            {/* Footnote Interface */}
            <div className="w-full font-sans">
              <motion.p
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={transition(0.2)}
                className="mt-4 text-xs sm:text-sm text-text-muted text-center lg:text-left font-bold tracking-wide"
              >
                Prefer writing? Use the{' '}
                <a href="#contact" className="text-marine-navy font-black underline hover:text-sun-orange transition-colors">
                  Dockside Request Form
                </a>
                .
              </motion.p>
            </div>

            {/* Grid Matrix Badges (Desktop/Tablet Only) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.25 }}
              className="hidden md:flex mt-8 pt-6 border-t border-surface-blue/80 w-full flex-wrap gap-3 text-xs md:text-sm font-semibold text-text-muted"
            >
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-xs py-1.5 px-3 rounded-lg border border-surface-blue shadow-2xs">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-xs py-1.5 px-3 rounded-lg border border-surface-blue shadow-2xs">
                <Award className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>OEM Diagnostics Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-xs py-1.5 px-3 rounded-lg border border-surface-blue shadow-2xs">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Zero Marine Yard Markup</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Visual Asset - Hidden on Mobile) */}
          <div className="hidden lg:flex lg:col-span-5 w-full relative items-center justify-center lg:px-0 h-full py-4">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
              className="w-full max-w-md lg:max-w-none relative lg:aspect-[3/4] xl:aspect-[4/5]"
            >
              <div className="w-full h-full relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-surface-blue group">
                <Image
                  src="https://images.unsplash.com/photo-1568821388714-1f2f2ee87200?auto=format&fit=crop&q=80&w=1000"
                  alt="Premium marine boat mechanical engine tuning dockside in South Florida"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marine-navy/30 via-transparent to-transparent mix-blend-multiply" />
              </div>

              {/* Status Indicator Floating Card */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={transition(0.3)}
                className="absolute bottom-4 right-[-1rem] xl:right-[-2rem] bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl shadow-xl border border-surface-blue max-w-[170px] z-20 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-surface-blue text-marine-navy">
                    <Anchor className="h-4 w-4 shrink-0 text-sun-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[11px] text-marine-navy uppercase tracking-wider leading-none mb-0.5">
                      Active Dispatch
                    </h3>
                    <p className="font-sans text-[10px] text-text-muted leading-snug font-medium">
                      On-site across S. FL.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Raw Minimal Scroll Arrow — Centered perfectly at the bottom layout fold */}
      <div className="flex md:hidden justify-center items-center pt-4 pb-2 w-full">
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={shouldReduceMotion ? {} : { repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          className="text-sun-orange pointer-events-auto cursor-pointer p-2 active:scale-90 transition-transform"
          onClick={() => {
            const nextSec = document.getElementById('trust-bar');
            if (nextSec) {
              nextSec.scrollIntoView({ behavior: 'smooth' });
            } else {
              // Fallback to scrolling past hero bounds cleanly
              window.scrollTo({ top: window.innerHeight - 60, behavior: 'smooth' });
            }
          }}
          aria-label="Scroll down"
        >
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}