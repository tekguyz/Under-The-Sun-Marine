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
    <section id="trust-bar" className="bg-marine-navy text-white py-6 border-y border-marine-navy-light/20 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 md:gap-y-0 items-center justify-center text-center">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex items-center justify-center gap-3 px-4 py-2 ${
                  index !== 0 ? 'md:border-l border-marine-navy-light' : ''
                } ${index % 2 !== 0 ? 'border-l-0 sm:border-l-0 md:border-l-0' : ''}`}
              >
                <div className="p-1.5 rounded-lg bg-marine-navy-light/50 text-sun-orange shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-sans font-medium text-sm sm:text-base tracking-medium text-slate-100">
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
