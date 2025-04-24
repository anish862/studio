import {useState} from 'react';

export const useDynamicContent = (pageKey: string) => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return {content, isLoading, error};
};
