import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

const CareersPage = () => {
  const jobListings = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      description: 'Join our engineering team to build innovative software solutions.',
      location: 'San Francisco, CA',
    },
    {
      id: 2,
      title: 'Marketing Manager',
      description: 'Lead our marketing efforts and drive growth.',
      location: 'New York, NY',
    },
    {
      id: 3,
      title: 'Data Scientist',
      description: 'Analyze data and develop insights to improve our products and services.',
      location: 'Chicago, IL',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Careers</h1>
      <p className="mb-4">
        Join our team and help us build the future.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobListings.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {job.description}
              <p className="mt-2">Location: {job.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CareersPage;
