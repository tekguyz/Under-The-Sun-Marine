'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full max-w-md md:max-w-xl mx-auto aspect-[3/4] rounded-xl overflow-hidden border-4 border-surface-blue shadow-lg select-none">
      
      {/* Base Image (After) */}
      <div className="absolute inset-0">
        <Image 
          src={afterImage} 
          alt="After service" 
          fill 
          sizes="(max-width: 768px) 100vw, 576px"
          className="object-cover object-center"
          priority
        />
        <span className="absolute bottom-4 right-4 bg-marine-navy/80 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold font-sans rounded-md border border-white/20 z-20 select-none">
          AFTER
        </span>
      </div>

      {/* Top Image (Before) using clip-path */}
      <div 
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image 
          src={beforeImage} 
          alt="Before service" 
          fill
          sizes="(max-width: 768px) 100vw, 576px"
          className="object-cover object-center"
          priority
        />
        <span className="absolute bottom-4 left-4 bg-sun-orange/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold font-sans rounded-md border border-white/20 z-20 select-none">
          BEFORE
        </span>
      </div>

      {/* Slider Visual Divider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-marine-navy rounded-full flex items-center justify-center shadow-md">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-marine-navy rounded-full" />
            <div className="w-0.5 h-3 bg-marine-navy rounded-full" />
          </div>
        </div>
      </div>

      {/* Invisible Interactive Range Input */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition}
        onChange={handleDrag}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0"
        aria-label="Image comparison slider"
      />
    </div>
  );
}