import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ogwu Ojochegbe — UX & Product Designer',
  description: 'Designing seamless digital experiences • Nigerian • Based in Lagos',
  keywords: 'UX Designer, Product Designer, UI/UX, Design, Nigeria, Lagos, Portfolio',
  authors: [{ name: 'Ogwu Ojochegbe' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Ogwu Ojochegbe — UX & Product Designer',
    description: 'Designing seamless digital experiences • Nigerian • Based in Lagos',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ogwu Ojochegbe — UX & Product Designer',
    description: 'Designing seamless digital experiences • Nigerian • Based in Lagos',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}