
'use client';

import React from 'react';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {Skeleton} from '@/components/ui/skeleton';
import { Search, Users, FileText, Mail, LayoutTemplate, Award, Smartphone, LucideIcon } from 'lucide-react'; // Import icons

// Define the structure for a service item
export interface Service {
  title: string;
  description: string;
  icon: LucideIcon; // Use LucideIcon type
}

// Map service titles (or slugs) to icons
const serviceIconMap: Record<string, LucideIcon> = {
  "search engine optimization (seo)": Search,
  "seo": Search,
  "social media marketing (smm)": Users,
  "smm": Users,
  "content marketing": FileText,
  "email marketing": Mail,
  "web design & development": LayoutTemplate,
  "web development": LayoutTemplate,
  "web design": LayoutTemplate,
  "branding services": Award,
  "branding": Award,
  "mobile app development": Smartphone,
};

const getIconForService = (title: string): LucideIcon => {
    const lowerTitle = title.toLowerCase();
    // Find the key in the map that the lowerTitle includes
    const matchingKey = Object.keys(serviceIconMap).find(key => lowerTitle.includes(key));
    return matchingKey ? serviceIconMap[matchingKey] : FileText; // Default to FileText if no match
};


interface ServicesSectionProps {
    services: Service[];
    isLoading?: boolean; // Add isLoading prop
}

export const ServicesSection = ({services, isLoading = false}: ServicesSectionProps) => {

  return (
    <div className="mt-16 px-8 md:px-24 animate-fade-in">
      <h2 className="text-3xl font-semibold mb-8 text-center">Our Expertise</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {(isLoading ? Array(8).fill(null) : services).map((service, index) => {
            // Assign icon dynamically if service data is available
            const IconComponent = !isLoading && service ? getIconForService(service.title) : null;

            return (
                <Card key={isLoading ? `skeleton-${index}` : service.title} className="flex flex-col items-center text-center p-6 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="p-0 mb-4">
                    {isLoading || !IconComponent ? (
                        <Skeleton className="h-10 w-10 rounded-full mx-auto" />
                    ) : (
                        <IconComponent className="h-10 w-10 text-primary mx-auto" />
                    )}
                    </CardHeader>
                    <CardContent className="p-0">
                    <CardTitle className="text-xl font-semibold mb-2">
                        {isLoading ? <Skeleton className="h-6 w-3/4 mx-auto" /> : service.title}
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
            );
        })}
      </div>
    </div>
  );
};
 
    