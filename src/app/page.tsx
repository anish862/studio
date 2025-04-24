'use client';

import Image from 'next/image';
import {
  LineChart,
  BarChart,
  PieChart,
  Code,
  TrendingUp,
  Search,
} from 'lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useEffect, useState, useRef} from 'react';
import {Skeleton} from '@/components/ui/skeleton';
import {cn} from '@/lib/utils';
import Link from 'next/link';

const ServicesSection = ({services}: {services: any[]}) => {
  return (
    <section className="mt-16 px-8 md:px-24 animate-fade-in">
      <h2 className="text-3xl font-semibold mb-6 text-center">Our Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-2">
              {/* Replace hardcoded icons with dynamic icons based on service type */}
              {service.title === 'Web Development' && <Code className="mr-2 h-5 w-5 text-primary" />}
              {service.title === 'Digital Marketing' && <TrendingUp className="mr-2 h-5 w-5 text-primary" />}
              {service.title === 'SEO Optimization' && <Search className="mr-2 h-5 w-5 text-primary" />}
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const TestimonialsSection = ({testimonials}: {testimonials: any[]}) => {
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
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="relative">
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

const StatsSection = ({stats}: {stats: any[]}) => {
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
        {stats.map((stat) => (
          <Card key={stat.title} className="relative">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                {isLoading ? (
                  <Skeleton className="h-6 w-6 mr-2 rounded-full" />
                ) : (
                  // Replace hardcoded icons with dynamic icons based on stat type
                  (() => {
                    if (stat.title === 'Website Traffic') {
                      return <LineChart className="mr-2 h-6 w-6" />;
                    } else if (stat.title === 'Conversion Rate') {
                      return <BarChart className="mr-2 h-6 w-6" />;
                    } else if (stat.title === 'Customer Engagement') {
                      return <PieChart className="mr-2 h-6 w-6" />;
                    }
                    return null; // Or a default icon
                  })()
                )}
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

const Slider = ({slides}: {slides: any[]}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<number>(null); // Use a ref to hold the timer ID

  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Set up the timer to advance the slide every 5 seconds
    timerRef.current = window.setTimeout(() => {
      goToNext();
    }, 5000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timerRef.current);
  }, [currentSlide]); // Effect runs when the currentSlide changes

  const goToPrevious = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  return (
    <div className="relative w-full">
      {slides.map((slide, index) => (
        <div key={index} className={index === currentSlide ? 'block' : 'hidden'}>
          <div className="relative">
            <Image
              src={slide.url || 'https://picsum.photos/1200/600'}
              alt={`Slide ${index + 1}`}
              width={1200}
              height={600}
              style={{objectFit: 'cover', width: '100%', height: 'auto'}}
              className="rounded-md animate-fade-in" // Add animate-fade-in for a smooth transition
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center p-8">
              <div className="bg-black bg-opacity-50 text-white p-6 rounded-md w-1/2">
                <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 right-4 flex">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`rounded-full w-3 h-3 mx-1 ${currentSlide === index ? 'bg-primary' : 'bg-gray-300'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

const AboutUsSection = ({title, description, imageUrl}: {title: string, description: string, imageUrl: string}) => {
  return (
    <section className="mt-20 px-8 md:px-24 animate-fade-in">
      <h2 className="text-3xl font-semibold mb-8 text-center">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={imageUrl}
            alt="About Us"
            width={600}
            height={400}
            className="rounded-md shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <Link href="/about" className="text-primary hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};


export default function Home() {
    const services = [
        {
            title: "Web Development",
            description: "Cutting-edge web solutions tailored to your unique business needs.",
            icon: Code
        },
        {
            title: "Digital Marketing",
            description: "Elevate your brand with our innovative digital marketing strategies.",
            icon: TrendingUp
        },
        {
            title: "SEO Optimization",
            description: "Drive organic growth and enhance your online visibility.",
            icon: Search
        }
    ];

    const testimonials = [
        {
            name: "John Doe",
            title: "CEO, Acme Corp",
            testimonial: "Irismorphe has transformed our online presence. Their expertise is unmatched!",
            imageUrl: "https://picsum.photos/id/237/48/48"
        },
        {
            name: "Jane Smith",
            title: "Marketing Director, Beta Co",
            testimonial: "We've seen a significant increase in engagement thanks to Irismorphe's strategies.",
            imageUrl: "https://picsum.photos/id/238/48/48"
        }
    ];

    const stats = [
        {
            title: "Website Traffic",
            value: "150%",
            trend: "up",
            percentageChange: "+35%"
        },
        {
            title: "Conversion Rate",
            value: "85%",
            trend: "up",
            percentageChange: "+15%"
        },
        {
            title: "Customer Engagement",
            value: "92%",
            trend: "up",
            percentageChange: "+22%"
        }
    ];

    const slides = [
        { url: "https://picsum.photos/1200/600", title: "Welcome to IrisMorphe", description: "Your partner in digital success" },
        { url: "https://picsum.photos/1201/600", title: "Innovative Solutions", description: "We provide innovative solutions to help your business thrive in the digital age." },
        { url: "https://picsum.photos/1202/600", title: "Expert Team", description: "Meet our team of experts dedicated to delivering exceptional digital solutions." },
        { url: "https://picsum.photos/1203/600", title: "Cutting-Edge Technology", description: "We utilize the latest technologies to provide you with the best possible results." },
        { url: "https://picsum.photos/1204/600", title: "Customer Satisfaction", description: "Your satisfaction is our top priority. We strive to exceed your expectations." }
    ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <section className="relative w-full text-center animate-fade-in">
          {slides && <Slider slides={slides} />}
        </section>

        <AboutUsSection
          title="About IrisMorphe"
          description="We are a team of experts dedicated to delivering exceptional digital solutions. Learn more about our story and values."
          imageUrl="https://picsum.photos/id/1015/600/400"
        />

        {services && <ServicesSection services={services} />}

        {stats && <StatsSection stats={stats} />}

        {testimonials && <TestimonialsSection testimonials={testimonials} />}
      </main>
    </div>
  );
}
