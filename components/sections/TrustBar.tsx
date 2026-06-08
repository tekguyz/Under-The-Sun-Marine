'use client';

import React from 'react';
import { Clock, DollarSign, Award, Truck } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: Clock, label: 'Fast Response' },
    { icon: DollarSign, label: 'Honest Pricing' },
    { icon: Award, label: 'All Brands' },
    { icon: Truck, label: 'Fully Mobile' },
  ];

  return (
    <section 
      id="trust-bar" 
      className="hidden md:flex relative bg-gradient-to-r from-marine-navy via-marine-navy-light to-marine-navy text-white lg:h-16 border-t border-b border-surface-blue/60 shadow-xs overflow-hidden z-10 items-center"
    >
      {/* Blueprint grid accent pattern */}
      <div className="absolute inset-0 bg-marine-grid opacity-[0.04] pointer-events-none" />
      
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-4 items-center justify-center text-center">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex items-center justify-center gap-3 px-4 ${
                  index !== 0 ? 'border-l border-white/10' : ''
                }`}
              >
                <Icon className="h-4.5 w-4.5 text-sun-orange shrink-0" />
                <span className="font-sans font-bold text-xs lg:text-sm tracking-wide text-slate-200">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}