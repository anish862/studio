
import React from 'react';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {MainNav} from '@/components/main-nav';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'We offer custom web development services to meet your business needs.',
      price: '$5,000+',
    },
    {
      id: 2,
      title: 'Digital Marketing',
      description: 'Our digital marketing strategies will help you reach a wider audience.',
      price: '$3,000+',
    },
    {
      id: 3,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings with our SEO optimization services.',
      price: '$2,000+',
    },
    {
      id: 4,
      title: 'Content Creation',
      description: 'Engaging content that tells your story and drives results.',
      price: '$2,500+',
    },
    {
      id: 5,
      title: 'Data Analytics',
      description: 'Data-driven insights to optimize your strategies and improve ROI.',
      price: '$4,000+',
    },
    {
      id: 6,
      title: 'Social Media Management',
      description: 'Building and managing your brand presence on social media platforms.',
      price: '$3,500+',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <div className="container mx-auto py-12 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
        <p className="mb-8 text-lg text-gray-700 text-center">
          Empowering your business with innovative solutions and expertise.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-500">{service.price}</CardDescription>
              </CardHeader>
              <CardContent>
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <footer className="w-full max-w-screen-xl bg-secondary py-8 px-4 md:px-8 lg:px-16 mt-12 rounded-tl-lg rounded-tr-lg shadow-md">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} AgencyFlow. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
