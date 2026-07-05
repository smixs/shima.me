import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

const inter = Space_Grotesk({ subsets: ['latin'] });

const TITLE = 'Serge Shima — Co-founder & CTO at Majento';
const DESC = 'Serge Shima — AI native building the AI layer for Central Asia. Co-founder & CTO at Majento, 20 years in strategy and creative, in ML & AI since 2017.';

export const metadata: Metadata = {
  metadataBase: new URL('https://shima.me'),
  title: TITLE,
  description: DESC,
  alternates: { canonical: 'https://shima.me' },
  openGraph: {
    title: TITLE,
    description: DESC,
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
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/og-image.png'],
    creator: '@shimaoz',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

// Same identity graph as sergeshima.com — cross-linked so search/AI engines
// resolve shima.me and sergeshima.com to one person.
const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Serge Shima',
  alternateName: 'Сергей Шима',
  url: 'https://shima.me',
  jobTitle: 'Co-founder & CTO',
  worksFor: { '@type': 'Organization', name: 'Majento', url: 'https://majento.ai' },
  address: { '@type': 'PostalAddress', addressLocality: 'Tashkent', addressCountry: 'UZ' },
  sameAs: [
    'https://sergeshima.com',
    'https://www.linkedin.com/in/sergeshima',
    'https://github.com/smixs',
    'https://www.youtube.com/@SergeShima',
    'https://www.instagram.com/serge.shima',
    'https://t.me/aimastersme',
    'https://t.me/shimaoz',
    'https://aimasters.me',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="me" href="https://sergeshima.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
