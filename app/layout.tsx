import type { Metadata } from 'next';
import { LanguageProvider } from '../contexts/LanguageContext';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Hela Cure Life - Healthcare & Pharmaceutical Solutions',
  description: 'Leading pharmaceutical and healthcare solutions provider in Yemen. Specializing in importing, marketing, and selling pharmaceuticals, medical equipment, food and cosmetics.',
  keywords: 'healthcare, pharmaceuticals, medical equipment, Yemen, Hadramout, Seoyun, medical supplies',
  authors: [{ name: 'Hela Cure Life' }],
  creator: 'Hela Cure Life',
  publisher: 'Hela Cure Life',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_YE',
    url: 'https://helacure.com',
    siteName: 'Hela Cure Life',
    title: 'Hela Cure Life - Healthcare & Pharmaceutical Solutions',
    description: 'Leading pharmaceutical and healthcare solutions provider in Yemen. Specializing in importing, marketing, and selling pharmaceuticals, medical equipment, food and cosmetics.',
    images: [
      {
        url: '/images/placeholder2.png',
        width: 1200,
        height: 630,
        alt: 'Hela Cure Life - Healthcare Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hela Cure Life - Healthcare & Pharmaceutical Solutions',
    description: 'Leading pharmaceutical and healthcare solutions provider in Yemen.',
    images: ['/images/placeholder2.png'],
  },
  icons: {
    icon: '/images/placeholder1.png',
    apple: '/images/placeholder1.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}