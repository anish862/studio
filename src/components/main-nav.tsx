
'use client';

import {Button} from '@/components/ui/button';
import {useEffect, useState} from 'react';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {Menu} from 'lucide-react';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {cn} from '@/lib/utils';
import {ThemeToggle} from '@/components/theme-toggle';

const siteConfig = {
  name: 'IrisMorphe',
  description: 'Your partner in digital success.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Services',
      href: '/services',
    },
    {
      title: 'Work',
      href: '/work',
    },
    {
      title: 'Case Studies',
      href: '/case-studies',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Careers',
      href: '/careers',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
};

export function MainNav() {
  const [isMounted, setIsMounted] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsSticky(window.scrollY > 100); // Adjust scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "border-b w-full transition-all duration-300",
        isSticky ? "fixed top-0 left-0 z-50 bg-background/95 backdrop-blur-sm shadow-md" : "relative bg-background"
      )}
    >
      {/* Container limits the width and centers content */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl font-serif">IrisMorphe</span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex flex-grow justify-center">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  item.href === pathname ? 'text-foreground' : 'text-muted-foreground' // Use foreground for active link
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side elements (Theme Toggle and Mobile Menu Trigger) */}
        <div className="flex items-center space-x-2">
          {isMounted && <ThemeToggle />} {/* Render ThemeToggle only when mounted */}
          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-sm">
              <nav className="grid gap-4 py-4">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <span className="font-bold text-xl font-serif">IrisMorphe</span>
                </Link>
                {siteConfig.mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-foreground/80',
                       item.href === pathname ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
