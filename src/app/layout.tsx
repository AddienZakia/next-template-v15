import { NunitoSans } from '@/lib/font';
import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Hiring Applications',
  description:
    'A platform to manage job listings, candidate applications, and the recruitment process efficiently.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NunitoSans.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
