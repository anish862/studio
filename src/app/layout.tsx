import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import {MainNav} from '@/components/main-nav';
import Footer from '@/components/footer';
import {ThemeProvider} from "@/app/theme-provider";

export const metadata: Metadata = {
  title: 'AgencyFlow - Your Partner in Digital Success | Digital Agency',
  description: 'AgencyFlow is a leading digital agency providing expert services in SEO, Web Development, Social Media Marketing, and Content Creation to help your business thrive online.',
  keywords: ['digital agency', 'web design', 'web development', 'SEO', 'social media marketing', 'content marketing', 'digital marketing', 'online marketing', 'AgencyFlow'],
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
            <MainNav />
            {children}
            <Toaster />
          
        </ThemeProvider>
          <Footer />
      </body>
    </html>
  );
}
