import type {Metadata} from 'next';
import { Inter } from 'next/font/google' // Using Inter font
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import {MainNav} from '@/components/main-nav';
import Footer from '@/components/footer';
import {ThemeProvider} from "@/app/theme-provider";
import { ClientOnly } from '@/components/client-only'; // Import ClientOnly

export const metadata: Metadata = {
  title: 'AgencyFlow - Your Partner in Digital Success | Digital Agency',
  description: 'AgencyFlow is a leading digital agency providing expert services in SEO, Web Development, Social Media Marketing, and Content Creation to help your business thrive online.',
  keywords: ['digital agency', 'web design', 'web development', 'SEO', 'social media marketing', 'content marketing', 'digital marketing', 'online marketing', 'AgencyFlow'],
};

// Setup Inter font
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply Inter font variable */}
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <MainNav />
            {/* Wrap the main content area with ClientOnly */}
            <ClientOnly>
              {children}
            </ClientOnly>
            <Toaster />
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
