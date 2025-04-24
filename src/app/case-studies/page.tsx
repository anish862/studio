import React from 'react';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Client A - Digital Transformation',
      description: 'How we helped Client A transform their business with our digital solutions.',
      industry: 'Healthcare',
    },
    {
      id: 2,
      title: 'Client B - Marketing Campaign',
      description: 'Our successful marketing campaign for Client B increased their sales by 50%.',
      industry: 'Retail',
    },
    {
      id: 3,
      title: 'Client C - Software Development',
      description: 'We developed a custom software solution for Client C that improved their efficiency.',
      industry: 'Technology',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Case Studies</h1>
      <p className="mb-4">
        Explore our case studies to see how we've helped clients achieve their goals.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <Card key={study.id}>
            <CardHeader>
              <CardTitle>{study.title}</CardTitle>
              <CardDescription>{study.industry}</CardDescription>
            </CardHeader>
            <CardContent>
              {study.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;
