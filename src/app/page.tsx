
'use client';

import React, {useEffect, useState} from 'react';
import { Search, Users, FileText, Mail, LayoutTemplate, Award, Smartphone } from 'lucide-react'; // Keep necessary icons
import {HeroSlider, type Slide} from '@/components/home/hero-slider';
import {AboutUsSection} from '@/components/home/about-us-section';
import {ServicesSection, type Service} from '@/components/home/services-section';
import {StatsSection, type Stat} from '@/components/home/stats-section';
import {TestimonialsSection, type Testimonial} from '@/components/home/testimonials-section';
import {useWordPress} from '@/hooks/useWordPress'; // Import the hook
import {Skeleton} from '@/components/ui/skeleton';
import { LineChart, BarChart, PieChart } from 'lucide-react'; // Import stat icons

// --- Default/Placeholder Data ---
const defaultSlides: Slide[] = [
    { url: "https://picsum.photos/seed/seo/1200/600", title: "Organic Growth Experts", description: "Boost your website's visibility and attract more traffic using tried-and-true SEO techniques.", buttonText: "Learn SEO", buttonLink: "/services#seo" },
    { url: "https://picsum.photos/seed/social/1200/600", title: "Social Buzz Creators", description: "Ignite engagement and build relationships on social media with tailored content strategies.", buttonText: "Explore SMM", buttonLink: "/services#smm" },
    { url: "https://picsum.photos/seed/content/1200/600", title: "Storytelling Masters", description: "Craft compelling blogs, videos, and infographics that keep your audience coming back for more.", buttonText: "See Content", buttonLink: "/services#content" },
    { url: "https://picsum.photos/seed/email/1200/600", title: "Connection Builders", description: "Deliver impactful email campaigns that nurture leads and drive business growth effortlessly.", buttonText: "Email Strategies", buttonLink: "/services#email" },
    { url: "https://picsum.photos/seed/webdev/1200/600", title: "Digital Architects", description: "Design responsive, functional websites that offer an outstanding user experience for your customers.", buttonText: "Web Design", buttonLink: "/services#web" }
];

const defaultServices: Service[] = [
  { title: "Search Engine Optimization (SEO)", description: "Improving website visibility on search engines through organic methods.", icon: Search },
  { title: "Social Media Marketing (SMM)", description: "Creating and managing content on social media platforms to engage audiences.", icon: Users },
  { title: "Content Marketing", description: "Developing valuable content like blogs, videos, and infographics to attract and retain customers.", icon: FileText },
  { title: "Email Marketing", description: "Designing and executing email campaigns to nurture leads and maintain customer relationships.", icon: Mail },
  { title: "Web Design & Development", description: "Building and optimizing websites for user experience and functionality.", icon: LayoutTemplate },
  { title: "Branding Services", description: "Establishing and enhancing a brand's identity and presence.", icon: Award },
  { title: "Mobile App Development", description: "Creating apps to engage users and expand digital reach.", icon: Smartphone },
];

const defaultTestimonials: Testimonial[] = [
    {
        name: "John Doe",
        title: "CEO, Placeholder Corp",
        testimonial: "This is a sample testimonial. Update this in WordPress!",
        imageUrl: "https://picsum.photos/id/237/48/48"
    },
    {
        name: "Jane Smith",
        title: "Marketing Director, Example Co",
        testimonial: "Another sample testimonial. Content management is key!",
        imageUrl: "https://picsum.photos/id/238/48/48"
    },
     {
        name: "Alex Green",
        title: "Founder, Demo Startup",
        testimonial: "Add real client feedback via the WordPress backend.",
        imageUrl: "https://picsum.photos/id/239/48/48"
    }
];

const defaultStats: Stat[] = [
    {
        title: "Website Traffic",
        value: "Loading...",
        trend: "up",
        percentageChange: "+0%",
        icon: LineChart,
    },
    {
        title: "Conversion Rate",
        value: "Loading...",
        trend: "up",
        percentageChange: "+0%",
        icon: BarChart,
    },
    {
        title: "Customer Engagement",
        value: "Loading...",
        trend: "up",
        percentageChange: "+0%",
        icon: PieChart,
    }
];

const defaultAbout = {
    title: "About IrisMorphe",
    description: "Welcome to IrisMorphe, your trusted partner in digital marketing excellence. We specialize in transforming businesses with our tailored services, including SEO, PPC, social media management, content creation, and web design. With a passion for innovation and proven strategies, we help brands grow, connect, and thrive in the digital landscape. Our commitment to creativity and measurable results ensures your success online. Explore the full spectrum of our services and let us take your business to the next level.",
    imageUrl: "https://picsum.photos/id/1015/500/350",
    buttonText: "Discover More"
};

// --- Home Component ---

export default function Home() {
  const { data: pageData, isLoading, error } = useWordPress('home-page'); // Fetch data for 'home-page'

  const [slides, setSlides] = useState<Slide[]>(defaultSlides);
  const [services, setServices] = useState<Service[]>(defaultServices);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [stats, setStats] = useState<Stat[]>(defaultStats);
  const [aboutData, setAboutData] = useState(defaultAbout);

  useEffect(() => {
    if (pageData) {
      // Update state with fetched data, providing fallbacks
      setSlides(pageData.sliderImages?.length > 0 ? pageData.sliderImages.map((img: any, index: number) => ({
        url: img.url || defaultSlides[index]?.url || 'https://picsum.photos/1200/600',
        title: img.title || defaultSlides[index]?.title || `Slide ${index + 1}`,
        description: img.description || defaultSlides[index]?.description || 'Update description in WordPress',
        buttonText: img.buttonText || defaultSlides[index]?.buttonText || 'Read More',
        buttonLink: img.buttonLink || defaultSlides[index]?.buttonLink || '#',
      })) : defaultSlides);

      setServices(pageData.services?.length > 0 ? pageData.services.map((service: any, index: number) => ({
        ...service,
        icon: defaultServices[index]?.icon || Search, // Keep default icons for now
      })) : defaultServices);

      setTestimonials(pageData.testimonials?.length > 0 ? pageData.testimonials.map((testimonial: any, index: number) => ({
          ...testimonial,
          imageUrl: testimonial.imageUrl || defaultTestimonials[index]?.imageUrl || 'https://picsum.photos/48/48',
        })) : defaultTestimonials);

      setStats(pageData.stats?.length > 0 ? pageData.stats.map((stat: any, index: number) => ({
          ...stat,
          icon: defaultStats[index]?.icon || LineChart, // Keep default icons
        })) : defaultStats);

      setAboutData({
        title: pageData.aboutTitle || defaultAbout.title,
        description: pageData.aboutDescription || defaultAbout.description,
        imageUrl: pageData.aboutImageUrl || defaultAbout.imageUrl,
        buttonText: pageData.aboutButtonText || defaultAbout.buttonText,
      });
    }
  }, [pageData]);

  if (error) {
    return <div className="container mx-auto py-12 text-center text-red-500">Error loading page data: {error.message}</div>;
  }

  return (
    <>
      <main className="flex-grow">
        {/* Hero Slider section takes full width */}
        <div className="relative w-full animate-fade-in">
          {isLoading ? (
            <Skeleton className="h-[600px] w-full" />
          ) : (
            <HeroSlider slides={slides} />
          )}
        </div>

        {/* Other sections remain containerized */}
        <div className="container mx-auto">
          {isLoading ? (
             <div className="mt-20 px-8 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div className="order-2 md:order-1 space-y-4">
                 <Skeleton className="h-8 w-3/4" />
                 <Skeleton className="h-4 w-full" />
                 <Skeleton className="h-4 w-full" />
                 <Skeleton className="h-4 w-5/6" />
                 <Skeleton className="h-10 w-32" />
               </div>
               <div className="order-1 md:order-2 flex justify-center md:justify-end">
                 <Skeleton className="h-[350px] w-[500px] rounded-lg" />
               </div>
             </div>
           ) : (
             <AboutUsSection
               title={aboutData.title}
               description={aboutData.description}
               imageUrl={aboutData.imageUrl}
               buttonText={aboutData.buttonText}
             />
           )}

          <ServicesSection services={services} isLoading={isLoading} />

          <StatsSection stats={stats} isLoading={isLoading} />

          <TestimonialsSection testimonials={testimonials} isLoading={isLoading} />


        </div>
      </main>
    </>
  );
}
 
    