
'use client';

import React from 'react';
import Image from 'next/image';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {Skeleton} from '@/components/ui/skeleton';

// Define component structure for Testimonial
export interface Testimonial {
  name: string;
  title: string;
  testimonial: string;
  imageUrl: string;
}

interface TestimonialsSectionProps {
    testimonials: Testimonial[];
    isLoading?: boolean; // Add isLoading prop
}

export const TestimonialsSection = ({testimonials, isLoading = false}: TestimonialsSectionProps) => {

  // Ensure the return statement correctly wraps the JSX
  return (
    <div className="mt-20 px-8 md:px-24 animate-fade-in">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(isLoading ? Array(3).fill(null) : testimonials).map((testimonial, index) => (
            <Card key={isLoading ? `testimonial-skeleton-${index}` : testimonial.name} className="relative">
              <CardHeader>
                <div className="flex items-center mb-4">
                  {isLoading ? (
                    <Skeleton className="h-12 w-12 rounded-full mr-4" />
                  ) : (
                    <Image
                      src={testimonial.imageUrl || 'https://picsum.photos/48/48'} // Fallback image
                      alt={testimonial.name || 'Client'}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                      unoptimized={testimonial.imageUrl?.includes('picsum.photos')} // Avoid optimizing placeholders
                    />
                  )}
                  <div>
                    {isLoading ? (
                      <>
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-3 w-24" />
                      </>
                    ) : (
                      <>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {testimonial.title}
                        </CardDescription>
                      </>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6 mb-2" />
                    <Skeleton className="h-4 w-3/4" />
                  </>
                ) : (
                  <p className="text-foreground/80">{testimonial.testimonial}</p>
                )}
              </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
};
 
    