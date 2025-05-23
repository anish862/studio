'use client';

import * as React from 'react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';

function ThemeProvider({children, ...props}: React.PropsWithChildren<any>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export {ThemeProvider};
