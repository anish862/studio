'use client';

import React from 'react';
import Image from 'next/image';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {MainNav} from '@/components/main-nav';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Marketing',
      description: 'Explore how artificial intelligence is revolutionizing marketing strategies, unlocking new potentials.',
      date: '2024-07-15',
      imageUrl: 'https://picsum.photos/400/200',
    },
    {
      id: 2,
      title: 'Effective SEO Strategies for 2024',
      description: 'Learn the latest search engine optimization techniques to boost your online presence and reach a wider audience.',
      date: '2024-07-10',
      imageUrl: 'https://picsum.photos/401/200',
    },
    {
      id: 3,
      title: 'The Power of Social Media Marketing',
      description: 'Discover how social media can drive brand awareness and customer engagement, building lasting relationships.',
      date: '2024-07-05',
      imageUrl: 'https://picsum.photos/402/200',
    },
    {
      id: 4,
      title: 'Web Design Trends for 2025',
      description: 'Stay ahead of the curve with the latest web design trends, creating visually appealing and user-friendly websites.',
      date: '2024-06-30',
      imageUrl: 'https://picsum.photos/403/200',
    },
    {
      id: 5,
      title: 'Content Marketing Strategies',
      description: 'Craft compelling content that resonates with your target audience, driving traffic and generating leads.',
      date: '2024-06-25',
      imageUrl: 'https://picsum.photos/404/200',
    },
    {
      id: 6,
      title: 'E-commerce Best Practices',
      description: 'Optimize your e-commerce platform for sales and conversions, maximizing your online revenue.',
      date: '2024-06-20',
      imageUrl: 'https://picsum.photos/405/200',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      
      <div className="container mx-auto py-12 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center animate-fade-in">Blog</h1>
        <p className="mb-8 text-lg text-gray-700 text-center animate-fade-in">
          Stay informed with our latest insights and news on digital innovation and marketing strategies.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="transition-shadow duration-300 hover:shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="text-gray-500">{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
              <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="mb-4 rounded-md shadow-md transition-transform duration-300 hover:scale-105"
                />
                <p className="text-gray-600">{post.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;


