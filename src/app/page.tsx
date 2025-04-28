
'use client';

import React from 'react';
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
import {HeroSlider, type Slide} from '@/components/home/hero-slider';
import {AboutUsSection} from '@/components/home/about-us-section';
import {ServicesSection, type Service} from '@/components/home/services-section';
import {StatsSection, type Stat} from '@/components/home/stats-section';
import {TestimonialsSection, type Testimonial} from '@/components/home/testimonials-section';


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
            testimonial: "AgencyFlow has transformed our online presence. Their expertise is unmatched!",
            imageUrl: "https://picsum.photos/id/237/48/48"
        },
        {
            name: "Jane Smith",
            title: "Marketing Director, Beta Co",
            testimonial: "We've seen a significant increase in engagement thanks to AgencyFlow's strategies.",
            imageUrl: "https://picsum.photos/id/238/48/48"
        },
         {
            name: "Alex Green",
            title: "Founder, Startup Z",
            testimonial: "The team at AgencyFlow is creative, responsive, and delivered beyond expectations.",
            imageUrl: "https://picsum.photos/id/239/48/48"
        }
    ];

    const stats: Stat[] = [
        {
            title: "Website Traffic",
            value: "150%",
            trend: "up",
            percentageChange: "+35%",
            icon: LineChart,
        },
        {
            title: "Conversion Rate",
            value: "85%",
            trend: "up",
            percentageChange: "+15%",
            icon: BarChart,
        },
        {
            title: "Customer Engagement",
            value: "92%",
            trend: "up",
            percentageChange: "+22%",
            icon: PieChart,
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
    <>
      <main className="flex-grow"> {/* Removed padding-top */}
        {/* Hero Slider section takes full width */}
        <div className="relative w-full animate-fade-in">
          <HeroSlider slides={slides} />
        </div>

        {/* Other sections remain containerized */}
        <div className="container mx-auto">
          <AboutUsSection
            title="About AgencyFlow"
            description="Welcome to AgencyFlow, your trusted partner in digital marketing excellence. We specialize in transforming businesses with our tailored services, including SEO, PPC, social media management, content creation, and web design. With a passion for innovation and proven strategies, we help brands grow, connect, and thrive in the digital landscape. Our commitment to creativity and measurable results ensures your success online. Explore the full spectrum of our services and let us take your business to the next level."
            imageUrl="https://picsum.photos/id/1015/500/350" // Slightly adjusted size
            buttonText="Discover More"
          />

          <ServicesSection services={services} />

          <StatsSection stats={stats} />

          <TestimonialsSection testimonials={testimonials} />


        </div>
      </main>
    </>
  );
}
