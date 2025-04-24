
'use client';

import React from 'react';
import Image from 'next/image';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {MainNav} from '@/components/main-nav';

const CareersPage = () => {
  const jobListings = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      description: 'Join our engineering team to build innovative software solutions that shape the future of technology.',
      location: 'San Francisco, CA',
      imageUrl: 'https://picsum.photos/400/220',
    },
    {
      id: 2,
      title: 'Marketing Manager',
      description: 'Lead our marketing efforts and drive growth with creative and strategic campaigns that resonate with our audience.',
      location: 'New York, NY',
      imageUrl: 'https://picsum.photos/401/220',
      },
    {
      id: 3,
      title: 'Data Scientist',
      description: 'Analyze data and develop insights to improve our products and services, making data-driven decisions that impact our business.',
      location: 'Chicago, IL',
      imageUrl: 'https://picsum.photos/402/220',
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      description: 'Design intuitive and engaging user experiences that enhance customer satisfaction and brand loyalty.',
      location: 'Seattle, WA',
      imageUrl: 'https://picsum.photos/403/220',
    },
    {
      id: 5,
      title: 'Project Manager',
      description: 'Oversee and coordinate projects to ensure successful delivery and client satisfaction.',
      location: 'Austin, TX',
      imageUrl: 'https://picsum.photos/404/220',
    },
    {
      id: 6,
      title: 'Sales Representative',
      description: 'Drive sales and build relationships with clients, expanding our market reach and revenue.',
      location: 'Los Angeles, CA',
      imageUrl: 'https://picsum.photos/405/220',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <div className="container mx-auto py-12 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center animate-fade-in">Careers</h1>
        <p className="mb-8 text-lg text-gray-700 text-center animate-fade-in">
          Join our team and help us build the future with your talent and passion.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobListings.map((job) => (
            <Card key={job.id} className="transition-shadow duration-300 hover:shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl">{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
              <Image
                  src={job.imageUrl}
                  alt={job.title}
                  width={400}
                  height={220}
                  className="mb-4 rounded-md shadow-md transition-transform duration-300 hover:scale-105"
                />
                {job.description}
                <p className="mt-2 text-gray-500">Location: {job.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;

