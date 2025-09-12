import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ogwu Ojochegbe — UX & Product Designer',
  description: 'UX & Product Designer • Bringing clarity in a complex and noisy digital world • ',
  keywords: 'UX Designer, Product Designer, UI/UX, Design, Nigeria, Lagos, Portfolio',
  authors: [{ name: 'Ogwu Ojochegbe' }],
  icons: {
    icon: [
      { url: '/images/Favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/Favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/Favicon.png',
    apple: [
      { url: '/images/Favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Ogwu Ojochegbe — UX & Product Designer',
    description: 'UX & Product Designer • Bringing clarity in a complex and noisy digital world • ',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ogwu Ojochegbe — UX & Product Designer',
    description: 'UX & Product Designer • Bringing clarity in a complex and noisy digital world • ',
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