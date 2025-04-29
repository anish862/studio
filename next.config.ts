
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      // Add your WordPress domain here
      {
         protocol: 'http', // or 'https' if your WP uses SSL
         hostname: 'localhost', // Replace with your WP domain
         port: '8000', // Add port if necessary (e.g., for local dev)
         pathname: '/wp-content/uploads/**', // Allow images from uploads folder
       },
       // Add other allowed domains if needed
    ],
  },
   // Make environment variables available to the client-side code
   env: {
       NEXT_PUBLIC_WORDPRESS_API_URL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
   },
};

export default nextConfig;
 
    