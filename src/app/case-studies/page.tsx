'use client';

import React from 'react';
import Image from 'next/image';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Client A - Digital Transformation',
      description: 'How we helped Client A transform their business with our digital solutions, achieving remarkable growth.',
      industry: 'Healthcare',
      imageUrl: 'https://picsum.photos/400/250',
    },
    {
      id: 2,
      title: 'Client B - Marketing Campaign',
      description: 'Our successful marketing campaign for Client B increased their sales by 50%, setting new industry benchmarks.',
      industry: 'Retail',
      imageUrl: 'https://picsum.photos/401/250',
    },
    {
      id: 3,
      title: 'Client C - Software Development',
      description: 'We developed a custom software solution for Client C that improved their efficiency, revolutionizing their operations.',
      industry: 'Technology',
      imageUrl: 'https://picsum.photos/402/250',
    },
    {
      id: 4,
      title: 'Client D - Brand Revitalization',
      description: 'Revitalizing Client D\'s brand through innovative strategies and creative campaigns, resulting in increased market share.',
      industry: 'Fashion',
      imageUrl: 'https://picsum.photos/403/250',
    },
    {
      id: 5,
      title: 'Client E - Customer Engagement',
      description: 'Enhancing customer engagement for Client E through personalized experiences and interactive platforms, fostering brand loyalty.',
      industry: 'Hospitality',
      imageUrl: 'https://picsum.photos/404/250',
    },
    {
      id: 6,
      title: 'Client F - Data-Driven Strategy',
      description: 'Implementing a data-driven strategy for Client F, leading to optimized decision-making and improved business outcomes.',
      industry: 'Finance',
      imageUrl: 'https://picsum.photos/405/250',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto py-12 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center animate-fade-in">Case Studies</h1>
        <p className="mb-8 text-lg text-gray-700 text-center animate-fade-in">
          Discover how we've helped our clients achieve their goals with our expertise and innovative solutions.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.id} className="transition-shadow duration-300 hover:shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl">{study.title}</CardTitle>
                <CardDescription className="text-gray-500">{study.industry}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={study.imageUrl}
                  alt={study.title}
                  width={400}
                  height={250}
                  className="mb-4 rounded-md shadow-md transition-transform duration-300 hover:scale-105"
                />
                <p className="text-gray-600">{study.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
