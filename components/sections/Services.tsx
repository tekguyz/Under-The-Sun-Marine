'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Wrench, Zap, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Mechanical & Engine Care',
    description: 'Dependable diagnostic checks, routine maintenance, and precise repairs for outboards, inboards, and fuel systems. From scheduled 100-hour servicing to water pump and bilge pump upkeep, we ensure your motor runs perfectly.',
    tags: ['Outboards', 'Diagnostics', '100-Hr Service', 'Fuel Systems', 'Bilge Overhaul', 'Water Impellers'],
    ctaText: 'Book a Repair',
  },
  {
    icon: Zap,
    title: 'Electrical & Marine Electronics',
    description: 'Clean, reliable marine-grade re-wiring and electrical troubleshooting. We also do expert installations of modern GPS displays, transducers, VHFs, marine stereos, and multi-battery power management systems.',
    tags: ['Custom Rigging', 'Re-wiring', 'GPS Plotters', 'Stereos & VHF', 'Batteries', 'Isolator Switches'],
    ctaText: 'Get an Estimate',
  },
  {
    icon: Sparkles,
    title: 'Detailing & Gelcoat Protection',
    description: 'Professional mobile aesthetic care to wash, clean, and shield your vessel. We remove sun-faded gelcoat oxidation and apply high-luster marine wax to protect your boat from harsh South Florida UV rays.',
    tags: ['Vessel Wash', 'Oxidation Removal', 'Gelcoat Wax', 'Interior Deep Clean', 'Metal Polish'],
    ctaText: 'Book Detailing',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface-white py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span id="services-eyebrow" className="font-heading text-sm font-semibold text-sun-orange uppercase tracking-wider block mb-2">
            How We Can Help
          </span>
          <h2 id="services-heading" className="font-heading text-3xl font-bold tracking-tight text-marine-navy sm:text-4xl">
            Everything your boat needs to run perfectly
          </h2>
          <p className="mt-4 text-base text-text-muted max-w-lg mx-auto">
            Enjoy your time out on the water. No trailering, no weeks of waiting at a marine yard—honest, certified mobile engine service right at your dock.
          </p>
        </div>

        {/* Services Cards Grid (3-column) */}
        <div className="mx-auto grid max-w-none grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex flex-col justify-between bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl p-6 md:p-8 group relative"
              >
                <div>
                  {/* Card Icon & Title - Inline layout on mobile, stacked on desktop */}
                  <div className="flex items-center gap-4 md:block mb-4 md:mb-6">
                    <div className="inline-flex p-3 md:p-4 rounded-full bg-surface-blue text-marine-navy group-hover:bg-sun-orange group-hover:text-white transition-all duration-300 shrink-0">
                      <IconComponent className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    
                    {/* Card Title */}
                    <h3 className="font-heading text-lg md:text-xl font-bold text-marine-navy md:mt-3 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Card Description */}
                  <p className="text-sm text-text-muted leading-relaxed mb-5 md:mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 md:mb-8">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-surface-offwhite border border-slate-100/60 text-text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Tactile Full-width Call to Action Button */}
                  <div className="border-t border-slate-100 pt-5 mt-2">
                    <a 
                      href="#contact" 
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-sun-orange hover:text-white hover:border-sun-orange text-marine-navy py-3 px-4 font-bold text-sm transition-all duration-200 active:scale-95 shadow-3xs"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
