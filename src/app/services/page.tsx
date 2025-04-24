import React from 'react';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';

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
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Our Services</h1>
      <p className="mb-4">
        We offer a range of services to help your business succeed.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.price}</CardDescription>
            </CardHeader>
            <CardContent>
              {service.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
