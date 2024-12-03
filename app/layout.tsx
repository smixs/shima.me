import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Serge Shima - Chief AI Officer',
  description: 'Making brands smarter with a dash of AI. Chief AI Officer @ TDI Group CA.',
  openGraph: {
    title: 'Serge Shima - Chief AI Officer',
    description: 'Making brands smarter with a dash of AI. Chief AI Officer @ TDI Group CA.',
    url: 'https://shima.me',
    siteName: 'Serge Shima',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Serge Shima',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serge Shima - Chief AI Officer',
    description: 'Making brands smarter with a dash of AI. Chief AI Officer @ TDI Group CA.',
    images: ['/og-image.png'],
    creator: '@shimaoz',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
