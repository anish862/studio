'use client';

import Image from 'next/image';
import {
  LineChart,
  BarChart,
  PieChart,
  Code,
  TrendingUp,
  Search,
  Megaphone,
  PenTool,
  Palette,
  Users,
} from 'lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useEffect, useState, useRef} from 'react';
import {Skeleton} from '@/components/ui/skeleton';
import {cn} from '@/lib/utils';
import Link from 'next/link';

// Define the structure for a service item
interface Service {
  title: string;
  description: string;
  icon: React.ElementType; // Use React.ElementType for component types
}

const ServicesSection = ({services}: {services: Service[]}) => {
  return (
    <section className="mt-16 px-8 md:px-24 animate-fade-in">
      <h2 className="text-3xl font-semibold mb-8 text-center">Our Expertise</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-6 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0 mb-4">
              <service.icon className="h-10 w-10 text-primary mx-auto" />
            </CardHeader>
            <CardContent className="p-0">
              <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
              <CardDescription className="text-gray-600">{service.description}</CardDescription>
            </CardContent>
          </Card>
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

const HeroSlider = ({slides}: {slides: any[]}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<number | null>(null); // Use a ref to hold the timer ID

  const goToNext = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

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
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentSlide, slides.length]); // Effect runs when the currentSlide or slides length changes


  if (!slides || slides.length === 0) {
    return <div className="h-[600px] flex items-center justify-center bg-gray-200">Loading slides...</div>; // Or some placeholder
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out",
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          )}
        >
          <Image
            src={slide.url || 'https://picsum.photos/1200/600'}
            alt={slide.title || `Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority={index === 0} // Prioritize loading the first image
            className="rounded-md"
          />
          <div className="absolute inset-0 flex items-center p-8 md:p-16">
            <div className="bg-black bg-opacity-50 text-white p-6 md:p-8 rounded-md max-w-lg">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-base md:text-lg">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 right-4 flex z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`rounded-full w-3 h-3 mx-1 transition-colors duration-300 ${currentSlide === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'}`}
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
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <Link href="/about" className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Read More
            </Link>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <Image
              src={imageUrl}
              alt="About Us"
              width={500} // Adjust size as needed
              height={350} // Adjust size as needed
              className="rounded-md shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default function Home() {
    // Updated services array
    const services: Service[] = [
      { title: "Branding", description: "Crafting unique brand identities that resonate.", icon: Megaphone },
      { title: "Web Development", description: "Building responsive and high-performing websites.", icon: Code },
      { title: "Digital Marketing", description: "Driving growth with targeted online strategies.", icon: TrendingUp },
      { title: "Content Marketing", description: "Creating valuable content to engage your audience.", icon: PenTool },
      { title: "Design Services", description: "Delivering visually stunning and user-friendly designs.", icon: Palette },
      { title: "SEO", description: "Optimizing your online presence for search engines.", icon: Search },
      { title: "Social Media Marketing", description: "Engaging communities and building brand loyalty.", icon: Users },
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
        },
         {
            name: "Alex Green",
            title: "Founder, Startup Z",
            testimonial: "The team at Irismorphe is creative, responsive, and delivered beyond expectations.",
            imageUrl: "https://picsum.photos/id/239/48/48"
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
        { url: "https://picsum.photos/1200/600?random=1", title: "Welcome to IrisMorphe", description: "Your partner in digital success. We create impactful digital experiences." },
        { url: "https://picsum.photos/1200/600?random=2", title: "Innovative Solutions", description: "We provide cutting-edge solutions to help your business thrive in the digital age." },
        { url: "https://picsum.photos/1200/600?random=3", title: "Expert Team", description: "Meet our passionate team dedicated to delivering exceptional digital results." },
        { url: "https://picsum.photos/1200/600?random=4", title: "Data-Driven Strategies", description: "Leveraging insights to optimize performance and achieve measurable results." },
        { url: "https://picsum.photos/1200/600?random=5", title: "Client-Centric Approach", description: "Your satisfaction is our top priority. We build lasting partnerships." }
    ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative w-full text-center animate-fade-in">
          <HeroSlider slides={slides} />
        </section>

        <AboutUsSection
          title="About IrisMorphe"
          description="We are a dynamic digital agency passionate about helping businesses succeed online. From innovative web design to strategic marketing, we craft solutions that drive growth and engagement. Discover our story and the values that guide us."
          imageUrl="https://picsum.photos/id/1015/500/350" // Slightly adjusted size
        />

        <ServicesSection services={services} />

        <StatsSection stats={stats} />

        <TestimonialsSection testimonials={testimonials} />
      </main>
    </div>
  );
}
