'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-offwhite border-t border-surface-blue">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-3">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="relative cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src="/logo.png"
                alt="Under The Sun Marine Logo"
                width={300}
                height={80}
                style={{ width: 'auto' }}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain object-left"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-sm text-text-muted max-w-xs leading-relaxed font-sans mt-1">
              I am committed to providing South Florida boaters with premium, hassle-free, dockside expertise. I bring the workshop right to your vessel&apos;s slip or driveway, saving you from long shipyard wait times.
            </p>
          </div>

          {/* Column 2: Service Areas */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-marine-navy uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-4 text-sm text-text-muted">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sun-orange shrink-0" />
                <span className="font-sans">Fort Lauderdale & Broward County</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sun-orange shrink-0" />
                <span className="font-sans">Miami-Dade County & North Keys</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sun-orange shrink-0" />
                <span className="font-sans">Palm Beach County Dockside Services</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-marine-navy uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sun-orange shrink-0" />
                <a href="tel:+15615605050" className="hover:text-marine-navy font-semibold transition-colors font-sans">
                  (561) 560-5050
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sun-orange shrink-0" />
                <a href="mailto:Utsboatrepair@gmail.com" className="hover:text-marine-navy transition-colors font-sans">
                  Utsboatrepair@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 pt-1">
                <Instagram className="h-5 w-5 text-sun-orange shrink-0" />
                <a href="https://www.instagram.com/underthesunmarine/" target="_blank" rel="noopener noreferrer" className="hover:text-marine-navy transition-colors font-sans font-semibold">
                  @underthesunmarine
                </a>
              </li>
              <li className="text-xs text-text-muted pt-2 leading-relaxed">
                <span className="font-sans">I am fully licensed & insured for South Florida Marinas & Residential Docks.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-surface-blue flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted font-sans">
            &copy; {currentYear} Under The Sun Marine. All rights reserved.
          </p>
          <p className="text-xs text-text-muted font-sans">
            Designed with clean South Florida sun and water in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
