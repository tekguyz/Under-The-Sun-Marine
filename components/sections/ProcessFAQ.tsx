'use client';

import React, { useState } from 'react';
import { Phone, MapPin, Check, ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const steps = [
  {
    icon: Phone,
    title: 'Reach Out',
    description: 'Give us a call or send a quick text. We will chat about your boat and find a convenient time.',
  },
  {
    icon: MapPin,
    title: 'We Come to You',
    description: 'No trailer or towing needed. We handle all diagnostics and service right at your slip, dock, or home driveway.',
  },
  {
    icon: Check,
    title: 'Back on the Water',
    description: 'Enjoy peace of mind with quality, honest craftsmanship, fair transparent pricing, and a boat that runs like a charm.',
  },
];

const faqs = [
  {
    id: 'travel-fee',
    question: 'Do you charge a travel fee?',
    answer: 'Standard travel is fully included within our primary South Florida service zones. If your boat is located outside that window, we will always let you know upfront before heading over.',
  },
  {
    id: 'requirements',
    question: 'What do you need from us on service day?',
    answer: 'Just access to the vessel and the keys! You do not even have to wait around if you are busy. We will keep you fully updated with detailed text reports and photos as we progress.',
  },
  {
    id: 'in-water',
    question: 'Do you work on boats while they are in the water?',
    answer: 'Yes, absolutely! There is no need to pay for expensive haul-outs or towing. We can complete almost all diagnostic, engine servicing, electrical, and plumbing repairs right while your vessel sits comfortably in its slip or on your lift.',
  },
];

export default function ProcessFAQ() {
  const [openId, setOpenId] = useState<string | null>('travel-fee');

  return (
    <section id="process" className="bg-surface-offwhite py-24 scroll-mt-20 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Process (6 cols) */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <span className="font-heading text-sm font-semibold text-sun-orange uppercase tracking-wider block mb-2">
              How it works
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-marine-navy mb-8 sm:text-4xl">
              Easy, Stress-Free Service
            </h2>

            {/* Steps stacked */}
            <div className="space-y-6 md:space-y-10 relative before:hidden md:before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-5 p-6 md:p-0 bg-white md:bg-transparent rounded-2xl border border-slate-100 md:border-none shadow-sm md:shadow-none relative group transition-all duration-200"
                  >
                    {/* Badge / Step layout */}
                    <div className="flex flex-col md:flex-row items-center gap-2.5 shrink-0">
                      {/* Numeric step badge for mobile */}
                      <span className="inline-flex items-center justify-center text-[10px] font-bold tracking-wider text-sun-orange bg-sun-orange/10 px-2.5 py-1 rounded-full md:hidden mb-2">
                        Step {idx + 1}
                      </span>
                      
                      {/* Graphic Icon Trigger */}
                      <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-marine-navy text-white shadow-md z-10 group-hover:bg-sun-orange transition-colors duration-300">
                        <IconComponent className="h-5 w-5 text-sun-orange group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0 mt-2 md:mt-0">
                      {/* Numeric label for desktop, hidden on mobile */}
                      <span className="hidden md:inline-flex items-center text-[10px] font-bold tracking-wider text-sun-orange uppercase mb-1">
                        Step {idx + 1}
                      </span>
                      <h3 className="font-heading text-base md:text-lg font-bold text-marine-navy leading-tight">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs md:text-sm text-text-muted leading-relaxed max-w-sm mx-auto md:max-w-none">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: FAQs (6 cols) */}
          <div id="faq" className="lg:col-span-6 scroll-mt-24 text-center lg:text-left">
            <span className="font-heading text-sm font-semibold text-sun-orange uppercase tracking-wider block mb-2">
              Common Questions
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-marine-navy mb-8 sm:text-4xl">
              Frequently Asked Questions
            </h2>

            {/* Accordion List Container */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border-b border-slate-100 last:border-none pb-4 last:pb-0"
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="flex w-full items-center justify-between py-4 text-left focus:outline-none group"
                    >
                      <span className="font-heading font-semibold text-marine-navy text-base flex gap-2 items-center group-hover:text-sun-orange transition-colors">
                        <HelpCircle className="h-5 w-5 text-sun-orange shrink-0" />
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-text-muted transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180 text-sun-orange' : ''
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-3 text-sm text-text-muted leading-relaxed pl-7">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
