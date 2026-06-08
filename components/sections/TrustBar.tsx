'use client';

import React from 'react';
import { Clock, DollarSign, Award, Truck } from 'lucide-react';

export default function TrustBar() {
  const items = [
    {
      icon: Clock,
      label: 'Fast Response',
    },
    {
      icon: DollarSign,
      label: 'Honest Pricing',
    },
    {
      icon: Award,
      label: 'All Major Brands',
    },
    {
      icon: Truck,
      label: 'Fully Mobile',
    },
  ];

  return (
    <section id="trust-bar" className="relative bg-gradient-to-r from-[#07132c] via-marine-navy to-[#07132c] text-white py-3.5 sm:py-4 border-t-2 border-b-2 border-slate-200/80 shadow-md overflow-hidden z-10">
      {/* Subtle blueprint pattern overlay */}
      <div className="absolute inset-0 bg-marine-grid opacity-[0.06] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3.5 md:gap-y-0 items-center justify-center text-center">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex items-center justify-center gap-2.5 px-4 py-1.5 ${
                  index !== 0 ? 'md:border-l border-white/10' : ''
                }`}
              >
                <div className="p-1 rounded-lg bg-white/5 border border-white/10 text-sun-orange shrink-0">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <span className="font-sans font-semibold text-xs sm:text-sm tracking-wide text-slate-100">
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
