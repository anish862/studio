
'use client';

import React, {useState, useEffect} from 'react';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {Skeleton} from '@/components/ui/skeleton';

// Define the structure for a service item
export interface Service {
  title: string;
  description: string;
  icon: React.ElementType; // Use React.ElementType for component types
}


export const ServicesSection = ({services}: {services: Service[]}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <div className="mt-16 px-8 md:px-24 animate-fade-in">
      <h2 className="text-3xl font-semibold mb-8 text-center">Our Expertise</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
           <Card key={index} className="flex flex-col items-center text-center p-6 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0 mb-4">
              {isLoading ? (
                 <Skeleton className="h-10 w-10 rounded-full mx-auto" />
               ) : (
                <service.icon className="h-10 w-10 text-primary mx-auto" />
               )}
            </CardHeader>
            <CardContent className="p-0">
              <CardTitle className="text-xl font-semibold mb-2">
                {isLoading ? <Skeleton className="h-6 w-32 mx-auto" /> : service.title}
              </CardTitle>
              <CardDescription className="text-foreground/80"> {/* Updated text color */}
                {isLoading ? (
                  <>
                    <Skeleton className="h-4 w-full mb-1 mx-auto" />
                    <Skeleton className="h-4 w-5/6 mx-auto" />
                  </>
                 ) : (
                  service.description
                )}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
