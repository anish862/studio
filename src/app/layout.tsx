import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import {ThemeProvider} from "@/app/theme-provider";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'IrisMorphe',
  description: 'Your partner in digital success.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Loading />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}

function Loading() {
    const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    return (
        <div className="fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center bg-background z-50">
            <h1 className="text-4xl font-bold">
                {
                    'Irismorphe'.split('').map((letter, index) => (
                        <span key={index} style={{ color: rainbowColors[index % rainbowColors.length] }}>
                            {letter}
                        </span>
                    ))
                }
            </h1>
        </div>
    );
}

