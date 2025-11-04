
'use client'

import { ThemeProvider } from '../hooks/use-theme.tsx';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <ThemeProvider>
        {children}
      </ThemeProvider>
  );
}
