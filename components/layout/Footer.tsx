'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-surface-offwhite border-t border-surface-blue">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo & Licensing */}
          <div className="flex flex-col gap-4">
            <a 
              href="#" 
              onClick={(e) => handleScroll(e, 'top')}
              className="relative w-fit transition-transform duration-300 hover:scale-[1.01]"
            >
              <Image
                src="/logo-trans.png"
                alt="Under The Sun Marine Logo"
                width={240}
                height={64}
                style={{ width: 'auto' }}
                className="h-16 w-auto object-contain object-left"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-xs text-text-muted leading-relaxed font-sans max-w-xs">
              Master-tier dockside boat repair and routine maintenance delivered straight to your slip. Fully licensed and insured.
            </p>
          </div>

          {/* Column 2: Exact Nav Links Sync */}
          <div>
            <h3 className="font-heading text-xs font-bold text-marine-navy uppercase tracking-widest mb-4">
              Menu
            </h3>
            <ul className="space-y-3 text-sm text-text-muted font-sans font-medium">
              <li>
                <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-marine-navy transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="hover:text-marine-navy transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleScroll(e, 'process')} className="hover:text-marine-navy transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-marine-navy transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-marine-navy transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="font-heading text-xs font-bold text-marine-navy uppercase tracking-widest mb-4">
              Service Areas
            </h3>
            <ul className="space-y-3 text-sm text-text-muted font-sans">
              <li>Fort Lauderdale & Broward</li>
              <li>Miami-Dade & North Keys</li>
              <li>Palm Beach County</li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="font-heading text-xs font-bold text-marine-navy uppercase tracking-widest mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm text-text-muted font-sans">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-sun-orange shrink-0" />
                <a href="tel:+15615605050" className="hover:text-marine-navy font-semibold transition-colors">
                  (561) 560-5050
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-sun-orange shrink-0" />
                <a href="mailto:Utsboatrepair@gmail.com" className="hover:text-marine-navy transition-colors">
                  Utsboatrepair@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="h-4 w-4 text-sun-orange shrink-0" />
                <a href="https://www.instagram.com/underthesunmarine/" target="_blank" rel="noopener noreferrer" className="hover:text-marine-navy font-semibold transition-colors">
                  @underthesunmarine
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-surface-blue flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted font-sans">
          <p>&copy; {currentYear} Under The Sun Marine. All rights reserved.</p>
          <p className="font-medium text-marine-navy/60">Dockside Marine Service</p>
        </div>
      </div>
    </footer>
  );
}