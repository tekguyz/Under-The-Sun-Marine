'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Anchor, ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-surface-offwhite bg-marine-grid flex flex-col items-center justify-center px-6 py-24 text-center relative overflow-hidden font-sans">
      {/* Background Decorative Glow Bubbles */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-marine-navy/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-sun-orange/5 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-md w-full bg-white shadow-lg border border-surface-blue rounded-3xl p-8 md:p-12 relative z-10">
        
        {/* Animated Brand Asset Anchor Container */}
        <div className="mx-auto w-20 h-20 rounded-2xl bg-surface-blue flex items-center justify-center border-2 border-white shadow-xs relative overflow-hidden group mb-8">
          <Anchor className="h-10 w-10 text-sun-orange transition-transform duration-300 group-hover:rotate-12" />
        </div>

        {/* 404 Typography Hero */}
        <span className="font-heading text-xs font-bold text-sun-orange uppercase tracking-widest block mb-2">
          Page Not Found (404)
        </span>
        <h1 className="font-heading text-3xl font-black text-marine-navy tracking-tight mb-4 leading-tight">
          Vessel Off Course
        </h1>
        <p className="text-sm md:text-base text-text-muted leading-relaxed mb-8">
          The page you are looking for has been moved, removed, or is temporarily in port elsewhere. Let&apos;s get you back on the water.
        </p>

        {/* Call to Navigation Action */}
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-sun-orange text-white text-sm font-bold rounded-xl px-6 py-3.5 shadow-md shadow-sun-orange/25 hover:bg-sun-orange-light transition-all duration-200 active:scale-95"
          >
            <Home className="h-4.5 w-4.5" />
            <span>Return to Home Port</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/#contact"
            className="flex items-center justify-center gap-2 bg-white text-marine-navy border border-surface-blue rounded-xl px-6 py-3.5 text-sm font-bold shadow-xs hover:bg-surface-offwhite transition-all duration-200"
          >
            <span>Request Dockside Service</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
