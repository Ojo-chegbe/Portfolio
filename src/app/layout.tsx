import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

export const metadata: Metadata = {
  title: 'Ogwu Ojochegbe — UX & Product Designer',
  description: 'UX & Product Designer • Bringing clarity in a complex and noisy digital world • ',
  keywords: 'UX Designer, Product Designer, UI/UX, Design, Nigeria, Lagos, Portfolio',
  authors: [{ name: 'Ogwu Ojochegbe' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem('theme');
                  var theme = saved === 'light' || saved === 'dark' ? saved : 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
