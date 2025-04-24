import React from 'react';
import Image from 'next/image';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {MainNav} from '@/components/main-nav';

const WorkPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Project A',
      description: 'A successful project for a leading tech company.',
      imageUrl: 'https://picsum.photos/400/300',
    },
    {
      id: 2,
      title: 'Project B',
      description: 'A creative project that exceeded client expectations.',
      imageUrl: 'https://picsum.photos/401/300',
    },
    {
      id: 3,
      title: 'Project C',
      description: 'An innovative project that transformed the client\'s business.',
      imageUrl: 'https://picsum.photos/402/300',
    },
  ];

  return (
    <div>
      <MainNav />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Our Work</h1>
        <p className="mb-4">
          Check out some of our recent projects.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="mb-4 rounded-md"
                />
                {project.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
