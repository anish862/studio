import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Marketing',
      description: 'Explore how artificial intelligence is revolutionizing marketing strategies.',
      date: '2024-07-15',
    },
    {
      id: 2,
      title: 'Effective SEO Strategies for 2024',
      description: 'Learn the latest search engine optimization techniques to boost your online presence.',
      date: '2024-07-10',
    },
    {
      id: 3,
      title: 'The Power of Social Media Marketing',
      description: 'Discover how social media can drive brand awareness and customer engagement.',
      date: '2024-07-05',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <p className="mb-4">
        Read our latest blog posts for insights and news.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              {post.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
