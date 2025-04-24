
'use client';

import React from 'react';
import Image from 'next/image';
import {MainNav} from '@/components/main-nav';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alice Johnson',
      title: 'CEO',
      description: 'Visionary leader with a passion for innovation and customer success.',
      imageUrl: 'https://picsum.photos/id/1005/400/400',
    },
    {
      id: 2,
      name: 'Bob Williams',
      title: 'CTO',
      description: 'Technology expert driving our cutting-edge solutions and digital transformations.',
      imageUrl: 'https://picsum.photos/id/1025/400/400',
    },
    {
      id: 3,
      name: 'Catherine Davis',
      title: 'Marketing Director',
      description: 'Creative marketer building brand awareness and driving customer engagement.',
      imageUrl: 'https://picsum.photos/id/1040/400/400',
    },
    {
      id: 4,
      name: 'David Lee',
      title: 'Sales Manager',
      description: 'Results-oriented sales leader expanding our market reach and revenue.',
      imageUrl: 'https://picsum.photos/id/1062/400/400',
    },
    {
      id: 5,
      name: 'Emily White',
      title: 'Project Manager',
      description: 'Detail-oriented project manager ensuring successful project delivery and client satisfaction.',
      imageUrl: 'https://picsum.photos/id/1074/400/400',
    },
    {
      id: 6,
      name: 'Frank Miller',
      title: 'Data Analyst',
      description: 'Analytical data expert providing insights and driving data-driven decisions.',
      imageUrl: 'https://picsum.photos/id/1084/400/400',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <div className="container mx-auto py-12 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center animate-fade-in">About Us</h1>
        <p className="mb-8 text-lg text-gray-700 text-center animate-fade-in">
          Meet our team of experts dedicated to delivering exceptional digital solutions.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="transition-shadow duration-300 hover:shadow-lg animate-slide-in"
            >
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                  <p className="text-gray-500">{member.title}</p>
                  <p className="text-gray-600 mt-2">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

