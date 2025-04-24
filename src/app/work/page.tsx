'use client';

import React from 'react';
import Image from 'next/image';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {MainNav} from '@/components/main-nav';
import {useDynamicContent} from '@/hooks/useDynamicContent';

const WorkPage = () => {
  const {content, isLoading} = useDynamicContent('work-page');

  const projects = content?.projects || [
    {
      id: 1,
      title: 'Project A - Tech Innovation',
      description: 'A successful project for a leading tech company, pushing the boundaries of innovation.',
      imageUrl: 'https://picsum.photos/400/300',
    },
    {
      id: 2,
      title: 'Project B - Creative Design',
      description: 'A creative project that exceeded client expectations, delivering a stunning visual experience.',
      imageUrl: 'https://picsum.photos/401/300',
    },
    {
      id: 3,
      title: 'Project C - Business Transformation',
      description: 'An innovative project that transformed the client\'s business, achieving remarkable results.',
      imageUrl: 'https://picsum.photos/402/300',
    },
    {
      id: 4,
      title: 'Project D - Mobile Excellence',
      description: 'Developing a seamless mobile experience that enhances user engagement and satisfaction.',
      imageUrl: 'https://picsum.photos/403/300',
    },
    {
      id: 5,
      title: 'Project E - E-commerce Platform',
      description: 'Building a robust e-commerce platform with a focus on scalability and user experience.',
      imageUrl: 'https://picsum.photos/404/300',
    },
    {
      id: 6,
      title: 'Project F - Cloud Solutions',
      description: 'Implementing cutting-edge cloud solutions to optimize business operations and reduce costs.',
      imageUrl: 'https://picsum.photos/405/300',
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>; // Replace with a better loading state
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto py-12 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center animate-fade-in">{content?.title || 'Our Work'}</h1>
        <p className="mb-8 text-lg text-gray-700 text-center animate-fade-in">
          {content?.description || 'Showcasing our commitment to excellence and innovation in every project.'}
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="transition-shadow duration-300 hover:shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="mb-4 rounded-md shadow-md transition-transform duration-300 hover:scale-105"
                />
                <p className="text-gray-600 text-center">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
