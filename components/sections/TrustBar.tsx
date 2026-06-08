'use client';

import React from 'react';
import { Clock, DollarSign, Award, Truck } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: Clock, label: 'Fast Response Time' },
    { icon: DollarSign, label: 'Honest, Upfront Pricing' },
    { icon: Award, label: 'All Major Brands Support' },
    { icon: Truck, label: 'Fully Mobile Dockside Fleet' },
  ];

  return (
    <section 
      id="trust-bar" 
      className="hidden lg:flex relative bg-gradient-to-r from-marine-navy via-marine-navy-light to-marine-navy text-white lg:h-20 xl:h-22 border-t border-b border-surface-blue/60 shadow-sm overflow-hidden z-10 items-center"
    >
      {/* Subtle blueprint design grid asset */}
      <div className="absolute inset-0 bg-marine-grid opacity-[0.03] pointer-events-none" />
      
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8 z-10">
        <div className="grid grid-cols-4 items-center justify-center text-center">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex items-center justify-center gap-4 xl:gap-5 px-4 xl:px-8 ${
                  index !== 0 ? 'border-l border-white/15' : ''
                }`}
              >
                {/* Scaled-up desktop icon container */}
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-sun-orange shrink-0 shadow-xs">
                  <Icon className="h-5.5 w-5.5 xl:h-6 xl:w-6 text-sun-orange" />
                </div>
                
                {/* Premium, highly legible layout typography */}
                <span className="font-sans font-bold text-sm xl:text-[15px] tracking-wide text-slate-100 whitespace-nowrap">
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