
import { useState, useEffect } from 'react';

// Define the structure of the expected API response (adjust as needed)
interface WordPressData {
  // Define types for your expected data structure from WP
  sliderImages?: Array<{ url: string; title?: string; description?: string; buttonText?: string; buttonLink?: string }>;
  services?: Array<{ title: string; description: string }>;
  testimonials?: Array<{ name: string; title: string; testimonial: string; imageUrl?: string }>;
  stats?: Array<{ title: string; value: string; trend: 'up' | 'down'; percentageChange: string }>;
  aboutTitle?: string;
  aboutDescription?: string;
  aboutImageUrl?: string;
  aboutButtonText?: string;
  // Add other page data types here
  [key: string]: any; // Allow for other potential properties
}

interface UseWordPressResult {
  data: WordPressData | null;
  isLoading: boolean;
  error: Error | null;
}

// Ensure this matches your WordPress setup (including protocol http/https)
const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'http://localhost:8000'; // Use env variable or a sensible default for local dev

/**
 * Custom hook to fetch dynamic content from a WordPress REST API endpoint.
 * @param pageKey - The unique key identifying the page data to fetch (e.g., 'home-page').
 * @returns An object containing the fetched data, loading state, and error state.
 */
export const useWordPress = (pageKey: string): UseWordPressResult => {
  const [data, setData] = useState<WordPressData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!pageKey) {
        setIsLoading(false);
        setError(new Error("Page key is required."));
        return;
    };

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${WORDPRESS_API_URL}/wp-json/irismorphe/v1/page-data?page_key=${encodeURIComponent(pageKey)}`);

        if (!response.ok) {
          let errorMessage = `HTTP error! status: ${response.status}`;
          try {
            // Try to get more specific error from response body
            const errorData = await response.json();
            errorMessage = errorData.message || errorMessage;
          } catch (e) {
            // Ignore if response body is not JSON
          }
          throw new Error(errorMessage);
        }

        const result: WordPressData = await response.json();
        setData(result);
      } catch (err: unknown) {
         if (err instanceof Error) {
            console.error(`Failed to fetch WordPress data for page key "${pageKey}":`, err);
            setError(err);
        } else {
            console.error(`An unknown error occurred while fetching WordPress data for page key "${pageKey}":`, err);
            setError(new Error('An unknown error occurred'));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pageKey]); // Re-fetch when pageKey changes

  return { data, isLoading, error };
};
 
    