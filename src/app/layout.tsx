
import type { Metadata } from 'next';
import './globals.css';
import { ClientLayout } from './client-layout';
import { Literata, Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const literata = Literata({
  subsets: ['latin'],
  variable: '--font-literata',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ChronoBlog',
  description: 'A blog about time, technology, and tales.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${literata.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
      </head>
      <body className="font-body antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
