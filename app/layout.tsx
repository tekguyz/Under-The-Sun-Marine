import type {Metadata, Viewport} from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
});

export const viewport: Viewport = {
  themeColor: '#0A1B3F',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Under The Sun Marine | Mobile Boat Mechanic South Florida',
  description: 'Under The Sun Marine provides reliable, professional dockside mobile boat repair, routine servicing, and marine electronics across South Florida. No yard delays—we come straight to your dock.',
  openGraph: {
    title: 'Under The Sun Marine | Mobile Boat Mechanic South Florida',
    description: 'Under The Sun Marine provides reliable, professional dockside mobile boat repair, routine servicing, and marine electronics across South Florida.',
    url: 'https://underthesunmarine.vercel.app/',
    siteName: 'Under The Sun Marine',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Under The Sun Marine Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Under The Sun Marine | Mobile Boat Mechanic South Florida',
    description: 'Under The Sun Marine provides reliable, professional dockside mobile boat repair, routine servicing, and marine electronics across South Florida.',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.png', type: 'image/png', sizes: '32x32' }
    ],
    apple: '/logo.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Under The Sun Marine",
    "image": "https://underthesunmarine.vercel.app/logo.png",
    "telephone": "+1-561-560-5050",
    "email": "Utsboatrepair@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pompano Beach",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "areaServed": ["Palm Beach", "Broward", "Miami-Dade"],
    "priceRange": "$$"
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} bg-surface-offwhite`}>
      <body suppressHydrationWarning className="bg-surface-white text-text-main font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
