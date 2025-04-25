
'use client';

import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {cn} from '@/lib/utils';

// Define component structure for Hero Slider slide
export interface Slide {
  url: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

export const HeroSlider = ({slides}: {slides: Slide[]}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<number | null>(null); // Use a ref to hold the timer ID

  const goToNext = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Set up the timer to advance the slide every 5 seconds
    timerRef.current = window.setTimeout(() => {
      goToNext();
    }, 5000);

    // Clear the timer when the component unmounts
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentSlide, slides.length]); // Effect runs when the currentSlide or slides length changes


  if (!slides || slides.length === 0) {
    return <div className="h-[600px] flex items-center justify-center bg-muted">Loading slides...</div>; // Use theme color
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out",
            index === currentSlide ? 'opacity-100 z-10 animate-fade-in' : 'opacity-0 z-0' // Added fade-in animation
          )}
        >
          <Image
            src={slide.url || 'https://picsum.photos/1200/600'}
            alt={slide.title || `Slide ${index + 1}`}
            fill // Use fill instead of layout
            className="object-cover rounded-none" // Remove rounded corners for full width
            priority={index === 0} // Prioritize loading the first image
          />
          {/* Updated container div for bottom-left alignment */}
          <div className="absolute inset-0 flex items-end justify-start p-8 md:p-16">
            <div className="bg-black bg-opacity-60 text-white p-6 md:p-8 rounded-md max-w-lg text-left"> {/* Increased opacity and text-left */}
              <h2 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-base md:text-lg mb-4">{slide.description}</p>
              {slide.buttonText && (
                 <Link href={slide.buttonLink || '#'} className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                   {slide.buttonText}
                 </Link>
               )}
            </div>
          </div>
        </div>
      ))}
      {/* Dots for navigation */}
      <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              'rounded-full w-3 h-3 transition-colors duration-300',
              currentSlide === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
