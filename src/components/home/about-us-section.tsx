
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton'; // Import Skeleton

interface AboutUsSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
  isLoading?: boolean; // Add isLoading prop
}

export const AboutUsSection = ({title, description, imageUrl, buttonText = 'Read More', isLoading = false}: AboutUsSectionProps) => {

  if (isLoading) {
      return (
          <div className="mt-20 px-8 md:px-24 animate-fade-in">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 space-y-4">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-10 w-32" />
                </div>
                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                  <Skeleton className="h-[350px] w-[500px] rounded-lg" />
                </div>
              </div>
            </div>
          </div>
      );
  }


  return (
    <div className="mt-20 px-8 md:px-24 animate-fade-in">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> {/* Increased gap */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold mb-4">{title}</h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">{description}</p> {/* Updated text color and leading */}
            <Link href="/about" className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
              {buttonText}
            </Link>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
             {imageUrl ? (
                <Image
                    src={imageUrl}
                    alt={title || "About Us"} // Use title as alt text fallback
                    width={500} // Adjust size as needed
                    height={350} // Adjust size as needed
                    className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" // Use lg radius
                    style={{ objectFit: 'cover' }}
                    unoptimized={imageUrl.includes('picsum.photos')} // Don't optimize placeholders
                />
             ) : (
                 <Skeleton className="h-[350px] w-[500px] rounded-lg" /> // Fallback skeleton if no image URL
             )}
          </div>
        </div>
      </div>
    </div>
  );
};
 
    