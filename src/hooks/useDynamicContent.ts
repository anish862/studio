import {useState, useEffect} from 'react';

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || '';

export const useDynamicContent = (pageKey: string) => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${WORDPRESS_URL}/wp-json/irismorphe/v1/page-data?page_key=${pageKey}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setContent(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [pageKey]);

  return {content, isLoading, error};
};
