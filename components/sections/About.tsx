'use client';

import React from 'react';
import Image from 'next/image';
import { Anchor, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-surface-white py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Col (Image/Logo display in aspect-square container with border & shadow) */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-sun-orange/10 to-marine-navy/5 rounded-3xl -rotate-2 scale-102 -z-10" />
            <div className="bg-surface-blue rounded-3xl aspect-square w-full max-w-md flex items-center justify-center border-4 border-white shadow-lg p-10 relative overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/logo-1.png"
                  alt="Under The Sun Marine Logo Seal"
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Col: Personal Story & Sign-off */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <span className="font-heading text-sm font-semibold text-sun-orange uppercase tracking-wider block mb-2">
              Our Philosophy
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-marine-navy sm:text-4xl mb-6">
              Dockside marine services, made simple
            </h2>
            
            <div className="space-y-6 text-base text-text-muted leading-relaxed font-sans">
              <p>
                We founded <strong className="text-marine-navy">Under The Sun Marine</strong> because we saw how frustrating boat repairs can be when dealing with massive yard backlogs, opaque fees, and endless phone tag.
              </p>
              <p>
                Taking your vessel out of the water, arranging expensive haul-outs, or trailering is a hassle you do not need. Your valuable leisure time should be spent enjoying the waters, not coordinating logistics.
              </p>
              <p>
                We believe in showing up on time, explaining engine diagnostics in plain terms, and performing the work cleanly and efficiently. We bring specialized marine rigging, diagnostic computers, and master repairs straight to your dock—leaving your boat spotless and ready for your next adventure.
              </p>
            </div>

            {/* Warm sign-off/Signature section */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-left sm:text-left">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="font-heading font-bold text-lg text-marine-navy leading-tight">
                  Under The Sun Marine
                </span>
                <span className="text-xs text-text-muted mt-0.5">
                  Mobile Mechanical & Electrical Experts
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-sun-orange bg-sun-orange/10 px-3 py-1.5 rounded-full w-fit">
                <Heart className="h-3.5 w-3.5 fill-sun-orange text-sun-orange" />
                <span>Serving South Florida Since 2018</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
