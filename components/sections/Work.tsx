import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import WorkGallery from './WorkGallery';
import { Camera } from 'lucide-react';

export default function Work() {
  // Local asset paths for production portfolio
  const beforeImage = '/work/before.jpg';
  const afterImage = '/work/after.jpg';
  
  const galleryImages = [
    '/work/work1.jpg',
    '/work/work2.jpg',
    '/work/work3.jpg',
    '/work/work4.jpg',
    '/work/work5.jpg',
    '/work/work6.jpg',
    '/work/work7.jpg',
    '/work/work8.jpg',
  ];

  return (
    <section id="work" className="py-24 bg-white scroll-mt-20 border-t border-surface-blue">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-surface-offwhite text-sun-orange mb-6 border border-surface-blue shadow-sm">
            <Camera className="h-8 w-8" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-marine-navy tracking-tight mb-6">
            Proven <span className="text-sun-orange">Dockside</span> Results
          </h2>
          <p className="text-base md:text-lg text-text-muted leading-relaxed font-sans font-medium">
            Take a look at the quality engine restorations, clean electronic rigging, and routine maintenance performed directly at our clients&apos; slips. Real work, real results.
          </p>
        </div>

        {/* Before / After Highlight Hook */}
        <div className="mb-16 md:mb-20">
          <h3 className="font-heading text-xl font-bold text-center text-marine-navy mb-8 uppercase tracking-widest text-sm">
            Recent Transformation
          </h3>
          <BeforeAfterSlider beforeImage={beforeImage} afterImage={afterImage} />
        </div>

        {/* Swipe-friendly Mobile / Grid Desktop Gallery */}
        <div>
          <h3 className="font-heading text-xl font-bold text-center md:text-left text-marine-navy mb-8 uppercase tracking-widest text-sm">
            Service Gallery
          </h3>
          <WorkGallery images={galleryImages} />
        </div>
        
      </div>
    </section>
  );
}