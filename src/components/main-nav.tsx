'use client';

import {Button} from '@/components/ui/button';
import {useEffect, useState} from 'react';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {Menu} from 'lucide-react';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {cn} from '@/lib/utils';

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
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="border-b">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl font-serif">IrisMorphe</span>
        </Link>
        <div className="hidden md:flex">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  item.href === pathname ? 'text-foreground/80' : 'text-muted-foreground'
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-sm">
            <div className="grid gap-4 py-4">
              <Link href="/" className="mr-6 flex items-center space-x-2">
                <span className="font-bold text-xl font-serif">IrisMorphe</span>
              </Link>
              <div className="grid gap-2">
                {siteConfig.mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-foreground/80',
                      item.href === pathname ? 'text-foreground/80' : 'text-muted-foreground'
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

