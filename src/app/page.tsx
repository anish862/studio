
'use client';

import Image from 'next/image';
import {
  LineChart,
  BarChart,
  PieChart,
  Search,
  Users,
  FileText,
  Mail,
  LayoutTemplate,
  Award,
  Smartphone,
} from 'lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import React, {useEffect, useState, useRef} from 'react';
import {Skeleton} from '@/components/ui/skeleton';
import {cn} from '@/lib/utils';
import Link from 'next/link';

// Define the structure for a service item
interface Service {
  title: string;
  description: string;
  icon: React.ElementType; // Use React.ElementType for component types
}

// Define component structure for Hero Slider slide
interface Slide {
  url: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

// Define component structure for Testimonial
interface Testimonial {
  name: string;
  title: string;
  testimonial: string;
  imageUrl: string;
}

// Define component structure for Stat
interface Stat {
  title: string;
  value: string;
  trend: 'up' | 'down';
  percentageChange: string;
}


// --- Component Definitions ---

const HeroSlider = ({slides}: {slides: Slide[]}) => {
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
    return <div className="h-[600px] flex items-center justify-center bg-muted">Loading slides...</div>; // Use theme color
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out",
            index === currentSlide ? 'opacity-100 z-10 animate-fade-in' : 'opacity-0 z-0' // Added fade-in animation
          )}
        >
          <Image
            src={slide.url || 'https://picsum.photos/1200/600'}
            alt={slide.title || `Slide ${index + 1}`}
            fill // Use fill instead of layout
            className="object-cover rounded-none" // Remove rounded corners for full width
            priority={index === 0} // Prioritize loading the first image
          />
          {/* Updated container div for bottom-left alignment */}
          <div className="absolute inset-0 flex items-end justify-start p-8 md:p-16">
            <div className="bg-black bg-opacity-60 text-white p-6 md:p-8 rounded-md max-w-lg text-left"> {/* Increased opacity and text-left */}
              <h2 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-base md:text-lg mb-4">{slide.description}</p>
              {slide.buttonText && (
                 <Link href={slide.buttonLink || '#'} className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                   {slide.buttonText}
                 </Link>
               )}
            </div>
          </div>
        </div>
      ))}
      {/* Dots for navigation */}
      <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              'rounded-full w-3 h-3 transition-colors duration-300',
              currentSlide === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

const AboutUsSection = ({title, description, imageUrl, buttonText = 'Read More'}: {title: string, description: string, imageUrl: string, buttonText?: string}) => {
  return (
    <section className="mt-20 px-8 md:px-24 animate-fade-in">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> {/* Increased gap */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold mb-4">{title}</h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">{description}</p> {/* Updated text color and leading */}
            <Link href="/about" className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
              {buttonText}
            </Link>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <Image
              src={imageUrl}
              alt="About Us"
              width={500} // Adjust size as needed
              height={350} // Adjust size as needed
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" // Use lg radius
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};


const ServicesSection = ({services}: {services: Service[]}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <section className="mt-16 px-8 md:px-24 animate-fade-in">
      <h2 className="text-3xl font-semibold mb-8 text-center">Our Expertise</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
           <Card key={index} className="flex flex-col items-center text-center p-6 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0 mb-4">
              {isLoading ? (
                 <Skeleton className="h-10 w-10 rounded-full mx-auto" />
               ) : (
                <service.icon className="h-10 w-10 text-primary mx-auto" />
               )}
            </CardHeader>
            <CardContent className="p-0">
              <CardTitle className="text-xl font-semibold mb-2">
                {isLoading ? <Skeleton className="h-6 w-32 mx-auto" /> : service.title}
              </CardTitle>
              <CardDescription className="text-foreground/80"> {/* Updated text color */}
                {isLoading ? (
                  <>
                    <Skeleton className="h-4 w-full mb-1 mx-auto" />
                    <Skeleton className="h-4 w-5/6 mx-auto" />
                  </>
                 ) : (
                  service.description
                )}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};


const TestimonialsSection = ({testimonials}: {testimonials: Testimonial[]}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Ensure the return statement correctly wraps the JSX
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
                      <CardDescription className="text-muted-foreground"> {/* Updated text color */}
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
                <p className="text-foreground/80">{testimonial.testimonial}</p> {/* Updated text color */}
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};


const StatsSection = ({stats}: {stats: Stat[]}) => {
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
                      return <LineChart className="mr-2 h-6 w-6 text-primary" />;
                    } else if (stat.title === 'Conversion Rate') {
                      return <BarChart className="mr-2 h-6 w-6 text-primary" />;
                    } else if (stat.title === 'Customer Engagement') {
                      return <PieChart className="mr-2 h-6 w-6 text-primary" />;
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
                <div className="text-sm text-muted-foreground mt-2"> {/* Updated text color */}
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


// --- Home Component ---

export default function Home() {
    const services: Service[] = [
      { title: "Search Engine Optimization (SEO)", description: "Improving website visibility on search engines through organic methods.", icon: Search },
      { title: "Social Media Marketing (SMM)", description: "Creating and managing content on social media platforms to engage audiences.", icon: Users },
      { title: "Content Marketing", description: "Developing valuable content like blogs, videos, and infographics to attract and retain customers.", icon: FileText },
      { title: "Email Marketing", description: "Designing and executing email campaigns to nurture leads and maintain customer relationships.", icon: Mail },
      { title: "Web Design & Development", description: "Building and optimizing websites for user experience and functionality.", icon: LayoutTemplate },
      { title: "Branding Services", description: "Establishing and enhancing a brand's identity and presence.", icon: Award },
      { title: "Mobile App Development", description: "Creating apps to engage users and expand digital reach.", icon: Smartphone },
    ];

    const testimonials: Testimonial[] = [
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

    const stats: Stat[] = [
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

    // Updated slides with potentially more relevant image IDs and button details
    const slides: Slide[] = [
        { url: "https://picsum.photos/seed/seo/1200/600", title: "Organic Growth Experts", description: "Boost your website's visibility and attract more traffic using tried-and-true SEO techniques.", buttonText: "Learn SEO", buttonLink: "/services#seo" },
        { url: "https://picsum.photos/seed/social/1200/600", title: "Social Buzz Creators", description: "Ignite engagement and build relationships on social media with tailored content strategies.", buttonText: "Explore SMM", buttonLink: "/services#smm" },
        { url: "https://picsum.photos/seed/content/1200/600", title: "Storytelling Masters", description: "Craft compelling blogs, videos, and infographics that keep your audience coming back for more.", buttonText: "See Content", buttonLink: "/services#content" },
        { url: "https://picsum.photos/seed/email/1200/600", title: "Connection Builders", description: "Deliver impactful email campaigns that nurture leads and drive business growth effortlessly.", buttonText: "Email Strategies", buttonLink: "/services#email" },
        { url: "https://picsum.photos/seed/webdev/1200/600", title: "Digital Architects", description: "Design responsive, functional websites that offer an outstanding user experience for your customers.", buttonText: "Web Design", buttonLink: "/services#web" }
    ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Slider section takes full width */}
        <section className="relative w-full animate-fade-in">
          <HeroSlider slides={slides} />
        </section>

        {/* Other sections remain containerized */}
        <div className="container mx-auto">
          <AboutUsSection
            title="About IrisMorphe"
            description="Welcome to IrisMorphe, your trusted partner in digital marketing excellence. We specialize in transforming businesses with our tailored services, including SEO, PPC, social media management, content creation, and web design. With a passion for innovation and proven strategies, we help brands grow, connect, and thrive in the digital landscape. Our commitment to creativity and measurable results ensures your success online. Explore the full spectrum of our services and let us take your business to the next level."
            imageUrl="https://picsum.photos/id/1015/500/350" // Slightly adjusted size
            buttonText="Discover More"
          />

          <ServicesSection services={services} />

          <StatsSection stats={stats} />

          <TestimonialsSection testimonials={testimonials} />
        </div>
      </main>
    </div>
  );
}
