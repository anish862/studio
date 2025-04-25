
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AboutUsSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
}

export const AboutUsSection = ({title, description, imageUrl, buttonText = 'Read More'}: AboutUsSectionProps) => {
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
            <Image
              src={imageUrl}
              alt="About Us"
              width={500} // Adjust size as needed
              height={350} // Adjust size as needed
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" // Use lg radius
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
