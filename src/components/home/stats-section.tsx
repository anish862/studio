
'use client';

import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Skeleton} from '@/components/ui/skeleton';
import { LineChart, BarChart, PieChart, LucideIcon } from 'lucide-react'; // Import icons

// Define component structure for Stat
export interface Stat {
  title: string;
  value: string;
  trend: 'up' | 'down';
  percentageChange: string;
  icon: LucideIcon;
}

// Map stat titles (or slugs) to icons - Adjust keys as needed
const statIconMap: Record<string, LucideIcon> = {
    "website traffic": LineChart,
    "traffic": LineChart,
    "conversion rate": BarChart,
    "conversions": BarChart,
    "customer engagement": PieChart,
    "engagement": PieChart,
};

const getIconForStat = (title: string): LucideIcon => {
    const lowerTitle = title.toLowerCase();
    const matchingKey = Object.keys(statIconMap).find(key => lowerTitle.includes(key));
    return matchingKey ? statIconMap[matchingKey] : LineChart; // Default icon
};

interface StatsSectionProps {
    stats: Stat[];
    isLoading?: boolean; // Add isLoading prop
}


export const StatsSection = ({stats, isLoading = false}: StatsSectionProps) => {

  return (
    <div className="mt-20 px-8 md:px-24 animate-fade-in">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Key Performance Indicators
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(isLoading ? Array(3).fill(null) : stats).map((stat, index) => {
            const IconComponent = !isLoading && stat ? getIconForStat(stat.title) : null;

            return (
                <Card key={isLoading ? `stat-skeleton-${index}` : stat.title} className="relative">
                    <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                        {isLoading || !IconComponent ? (
                        <Skeleton className="h-6 w-6 mr-2 rounded-full" />
                        ) : (
                        <IconComponent className="mr-2 h-6 w-6 text-primary" />
                        )}
                        {isLoading ? <Skeleton className="h-6 w-3/4" /> : stat.title}
                    </CardTitle>
                    </CardHeader>
                    <CardContent>
                    {isLoading ? (
                        <Skeleton className="h-8 w-1/2 mb-2" />
                    ) : (
                        <div className="text-2xl font-bold">{stat.value}</div>
                    )}
                    {isLoading ? (
                        <Skeleton className="h-4 w-3/4" />
                    ) : (
                        <div className="text-sm text-muted-foreground mt-2"> {/* Updated text color */}
                        <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                            {stat.trend === 'up' ? '▲' : '▼'} {stat.percentageChange}
                        </span>{' '}
                        vs. last month
                        </div>
                    )}
                    </CardContent>
                </Card>
            );
        })}
      </div>
    </div>
  );
};
 
    