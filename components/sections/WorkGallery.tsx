import React from 'react';
import Image from 'next/image';

interface WorkGalleryProps {
  images: string[];
}

export default function WorkGallery({ images }: WorkGalleryProps) {
  return (
    <div className="w-full">
      {/* Mobile Swipe Track / Desktop Grid */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:pb-0 md:grid md:grid-cols-4 md:overflow-visible md:gap-6 scrollbar-hide items-center">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="w-[280px] shrink-0 aspect-square snap-center md:w-auto relative rounded-xl overflow-hidden shadow-sm border border-surface-blue flex-none"
          >
            <Image 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              fill 
              sizes="(max-width: 768px) 280px, (max-width: 1200px) 25vw, 300px"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}