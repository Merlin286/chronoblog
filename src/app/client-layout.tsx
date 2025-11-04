
'use client';

import { Toaster } from '../components/ui/toaster';
import { Providers } from './providers';
import { Navbar } from '../components/navbar';

export function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <Providers>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <footer className="text-center p-6 bg-muted text-muted-foreground text-sm">
          <p>© 2025 ChronoBlog Developed by Merlin. All Rights Reserved.</p>
        </footer>
      </div>
      <Toaster />
    </Providers>
  );
}
