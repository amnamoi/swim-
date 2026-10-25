import type { Metadata, Viewport } from 'next';
import { Fredoka, Plus_Jakarta_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-fredoka',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'Ripple Swim Club', template: '%s · Ripple Swim Club' },
  description: 'Kids memberships, member passes and swim progress.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#F3F7FA',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${jakarta.variable}`}>
      <body className="bg-canvas font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
