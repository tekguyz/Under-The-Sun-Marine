'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-surface-white py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Col (Image/Logo display in aspect-square container with border & shadow) - Reverted as requested */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-sun-orange/10 to-marine-navy/5 rounded-3xl -rotate-2 scale-[1.02] -z-10" />
            <div className="bg-surface-blue rounded-3xl aspect-square w-full max-w-md flex items-center justify-center border-4 border-white shadow-lg p-10 relative overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/logo.png"
                  alt="Under The Sun Marine Logo Seal"
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column Typography Framework */}
          <div className="flex flex-col justify-center text-left">
            <span className="font-heading text-sm font-semibold text-sun-orange uppercase tracking-wider block mb-3">
              About Jack
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-marine-navy sm:text-4xl mb-6">
              Dockside marine services, made simple
            </h2>
            
            <div className="space-y-5 text-base text-text-muted leading-relaxed font-sans mb-8">
              <p>
                Hey, my name is Jack and I run <span className="text-marine-navy font-bold">Under The Sun Marine</span>. I’ve spent a lot of time working on boats and genuinely have a passion for marine repair and keeping people out on the water. I take pride in honest work, fair pricing, and treating every boat like it’s my own.
              </p>
              <p>
                Taking your vessel out of the water, arranging expensive haul-outs, or trailering is a hassle you do not need. Your valuable leisure time should be spent enjoying the waters, not coordinating logistics. Feel free to reach out anytime with questions or issues you’re having with your boat.
              </p>
              <p>
                I believe in showing up on time, explaining engine diagnostics in plain terms, and performing the work cleanly and efficiently. I bring specialized marine rigging, diagnostic computers, and master repairs straight to your dock—leaving your boat spotless and ready for your next adventure.
              </p>
            </div>

            {/* Jack - Owner & Expert Mechanic Badge Grid Block */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-surface-blue/60">
              <div className="inline-flex items-center gap-2 rounded-full bg-sun-orange/10 border border-sun-orange/20 text-sun-orange px-4 py-2 text-xs font-bold uppercase tracking-wider font-sans w-fit shrink-0">
                <Heart className="h-3.5 w-3.5 fill-current text-sun-orange" />
                <span>Jack — Owner & Expert Mechanic</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-text-muted font-sans font-medium">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Licensed & fully insured with direct pricing</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
