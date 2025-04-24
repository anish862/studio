
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
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <Image
              src="https://picsum.photos/1200/600"
              alt="Hero Image"
              width={1200}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Welcome to AgencyFlow
            </h1>
            <p className="text-md md:text-lg text-gray-200 mb-8">
              Your partner in digital success.
            </p>
            <Button size="lg">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <section className="mt-16">
          {/* Placeholder for additional content sections */}
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-gray-600">
            We are a digital agency dedicated to providing innovative solutions.
          </p>
        </section>
      </main>

      <footer className="w-full max-w-screen-xl bg-secondary py-6 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} AgencyFlow. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
