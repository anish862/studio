
import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {ArrowRight} from 'lucide-react';
import {MainNav} from '@/components/main-nav';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <MainNav />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <section className="relative w-full py-24 text-center">
          <div className="absolute inset-0 overflow-hidden rounded-lg shadow-md">
            <Image
              src="https://picsum.photos/1200/600"
              alt="Hero Image"
              width={1200}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-50"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-md">
              Ignite Your Digital Presence
            </h1>
            <p className="text-md md:text-lg text-gray-200 mb-8 drop-shadow-md">
              Crafting digital experiences that captivate and convert.
            </p>
            <Button size="lg" variant="accent">
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <section className="mt-16 px-8 md:px-24">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">
                Cutting-edge web solutions tailored to your unique business needs.
              </p>
            </div>
            <div className="p-6 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-600">
                Elevate your brand with our innovative digital marketing strategies.
              </p>
            </div>
            <div className="p-6 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
              <p className="text-gray-600">
                Drive organic growth and enhance your online visibility.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full max-w-screen-xl bg-secondary py-8 px-4 md:px-8 lg:px-16 mt-12 rounded-tl-lg rounded-tr-lg shadow-md">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} AgencyFlow. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
