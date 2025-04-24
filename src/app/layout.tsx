import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import {ThemeProvider} from "@/components/theme-toggle";
import {MainNav} from '@/components/main-nav';

export const metadata: Metadata = {
  title: 'IrisMorphe',
  description: 'Your partner in digital success.',
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
          <MainNav />
            {children}
            <Toaster />
        
      </body>
    </html>
  );
}
