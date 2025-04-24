'use client';

import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {ArrowRight, LineChart, BarChart, PieChart} from 'lucide-react';
import {MainNav} from '@/components/main-nav';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useEffect, useState} from 'react';
import {Skeleton} from '@/components/ui/skeleton';

const testimonialData = [
  {
    id: 1,
    name: 'Alice Johnson',
    title: 'CEO, Tech Innovations Inc.',
    testimonial:
      'AgencyFlow has completely transformed our digital strategy. Their expertise and innovative solutions have significantly boosted our online presence and revenue. Highly recommended!',
    imageUrl: 'https://picsum.photos/id/237/100/100',
  },
  {
    id: 2,
    name: 'Bob Williams',
    title: 'Marketing Director, Global Corp',
    testimonial:
      'The team at AgencyFlow is exceptional. Their data-driven approach and creative campaigns have delivered outstanding results. Weve seen a remarkable increase in customer engagement and brand awareness.',
    imageUrl: 'https://picsum.photos/id/238/100/100',
  },
  {
    id: 3,
    name: 'Catherine Davis',
    title: 'Founder, EcoLife Solutions',
    testimonial:
      'Working with AgencyFlow has been a game-changer for our business. Their personalized service and deep understanding of our industry have helped us achieve sustainable growth and build lasting customer relationships.',
    imageUrl: 'https://picsum.photos/id/239/100/100',
  },
];

const statsData = [
  {
    id: 1,
    title: 'Website Traffic',
    value: '3.2M',
    trend: 'up',
    percentageChange: '15%',
    icon: LineChart,
  },
  {
    id: 2,
    title: 'Conversion Rate',
    value: '4.8%',
    trend: 'up',
    percentageChange: '8%',
    icon: BarChart,
  },
  {
    id: 3,
    title: 'Customer Engagement',
    value: '2.5M',
    trend: 'down',
    percentageChange: '3%',
    icon: PieChart,
  },
];

const ServicesSection = () => {
  return (
    <section className="mt-16 px-8 md:px-24 animate-fade-in">
      <h2 className="text-3xl font-semibold mb-6 text-center">Our Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-600">
            Cutting-edge web solutions tailored to your unique business needs.
          </p>
        </div>
        <div className="p-6 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
          <p className="text-gray-600">
            Elevate your brand with our innovative digital marketing strategies.
          </p>
        </div>
        <div className="p-6 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
          <p className="text-gray-600">
            Drive organic growth and enhance your online visibility.
          </p>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="mt-20 px-8 md:px-24 animate-fade-in">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialData.map((testimonial) => (
          <Card key={testimonial.id} className="relative">
            <CardHeader>
              <div className="flex items-center mb-4">
                {isLoading ? (
                  <Skeleton className="h-12 w-12 rounded-full mr-4" />
                ) : (
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                )}
                <div>
                  {isLoading ? (
                    <>
                      <Skeleton className="h-4 w-32 mb-1" />
                      <Skeleton className="h-3 w-24" />
                    </>
                  ) : (
                    <>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-500">
                        {testimonial.title}
                      </CardDescription>
                    </>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </>
              ) : (
                <p className="text-gray-600">{testimonial.testimonial}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

const StatsSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <section className="mt-20 px-8 md:px-24 animate-fade-in">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Key Performance Indicators
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {statsData.map((stat) => (
          <Card key={stat.id} className="relative">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                {isLoading ? <Skeleton className="h-6 w-6 mr-2 rounded-full" /> : <stat.icon className="mr-2 h-6 w-6" />}
                {isLoading ? <Skeleton className="h-6 w-24" /> : stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-32" />
              ) : (
                <div className="text-2xl font-bold">{stat.value}</div>
              )}
              {isLoading ? (
                <Skeleton className="h-4 w-20" />
              ) : (
                <div className="text-sm text-gray-500 mt-2">
                  <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                    {stat.trend === 'up' ? '▲' : '▼'} {stat.percentageChange}
                  </span>{' '}
                  vs. last month
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <MainNav />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <section className="relative w-full py-24 text-center animate-fade-in">
          <div className="absolute inset-0 overflow-hidden rounded-lg shadow-md">
            <Image
              src="https://picsum.photos/1200/600"
              alt="Hero Image"
              width={1200}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-50"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-md">
              Ignite Your Digital Presence
            </h1>
            <p className="text-md md:text-lg text-gray-200 mb-8 drop-shadow-md">
              Crafting digital experiences that captivate and convert.
            </p>
            <Button size="lg" variant="accent">
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <ServicesSection />

        <StatsSection />

        <TestimonialsSection />
      </main>

      <footer className="w-full max-w-screen-xl bg-secondary py-8 px-4 md:px-8 lg:px-16 mt-12 rounded-tl-lg rounded-tr-lg shadow-md">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} AgencyFlow. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
