'use client';

import React from 'react';
import Image from 'next/image';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {MainNav} from '@/components/main-nav';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'We offer custom web development services to meet your business needs.',
      price: '$5,000+',
      imageUrl: 'https://picsum.photos/400/200',
    },
    {
      id: 2,
      title: 'Digital Marketing',
      description: 'Our digital marketing strategies will help you reach a wider audience.',
      price: '$3,000+',
      imageUrl: 'https://picsum.photos/401/200',
    },
    {
      id: 3,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings with our SEO optimization services.',
      price: '$2,000+',
      imageUrl: 'https://picsum.photos/402/200',
    },
    {
      id: 4,
      title: 'Content Creation',
      description: 'Engaging content that tells your story and drives results.',
      price: '$2,500+',
      imageUrl: 'https://picsum.photos/403/200',
    },
    {
      id: 5,
      title: 'Data Analytics',
      description: 'Data-driven insights to optimize your strategies and improve ROI.',
      price: '$4,000+',
      imageUrl: 'https://picsum.photos/404/200',
    },
    {
      id: 6,
      title: 'Social Media Management',
      description: 'Building and managing your brand presence on social media platforms.',
      price: '$3,500+',
      imageUrl: 'https://picsum.photos/405/200',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      
      <div className="container mx-auto py-12 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center animate-fade-in">Our Services</h1>
        <p className="mb-8 text-lg text-gray-700 text-center animate-fade-in">
          Empowering your business with innovative solutions and expertise.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="transition-shadow duration-300 hover:shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-500">{service.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={400}
                  height={200}
                  className="mb-4 rounded-md shadow-md transition-transform duration-300 hover:scale-105"
                />
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;


