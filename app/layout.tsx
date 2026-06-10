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
  metadataBase: new URL('https://underthesunmarine.com'),
  title: 'Under The Sun Marine | Dockside Boat Service & Maintenance',
  description: 'Professional dockside boat service, routine maintenance, and detailing by Jack in South Florida.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Under The Sun Marine | Dockside Boat Service & Maintenance',
    description: 'Professional dockside boat service, routine maintenance, and detailing by Jack in South Florida.',
    url: 'https://underthesunmarine.com',
    siteName: 'Under The Sun Marine',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Under The Sun Marine | Dockside Boat Service & Maintenance',
    description: 'Professional dockside boat service, routine maintenance, and detailing by Jack in South Florida.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Under The Sun Marine",
    "image": "https://underthesunmarine.com/logo.png",
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
