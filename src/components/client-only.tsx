'use client';

import type React from 'react';
import { useState, useEffect } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
}

/**
 * Renders its children only after the component has mounted on the client-side.
 * This helps prevent hydration mismatches, especially those caused by browser extensions
 * or client-specific logic that shouldn't run during server rendering.
 */
export const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    // Return null or a loading indicator while waiting for mount
    return null;
  }

  return <>{children}</>;
};
