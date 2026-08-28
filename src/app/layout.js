import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

export const metadata = {
  metadataBase: new URL('https://www.deautokampeerder.nl'),
  title: {
    default: 'De Autokampeerder | Onafhankelijke Gids & Vergelijker voor Daktenten',
    template: '%s | De Autokampeerder',
  },
  description: 'Onafhankelijke vergelijkingsgids voor Daktenten, Dakdragers, Fietsendragers, Powerstations en Outdoor Gear in Nederland en België.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'De Autokampeerder | Onafhankelijke Gids voor Daktenten & Autokamperen',
    description: 'Vergelijk daktenten, bereken daklast en vind de beste autokampeer-uitrusting voor jouw roadtrip.',
    url: 'https://www.deautokampeerder.nl',
    siteName: 'De Autokampeerder',
    locale: 'nl_NL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'google6cc8c37947f3b0e9',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.deautokampeerder.nl/#organization',
      name: 'De Autokampeerder',
      url: 'https://www.deautokampeerder.nl',
      logo: 'https://www.deautokampeerder.nl/images/logo.png',
      description: 'Onafhankelijk informatieplatform en vergelijkingsgids voor daktenten, dakdragers en autokampeer-uitrusting.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.deautokampeerder.nl/#website',
      url: 'https://www.deautokampeerder.nl',
      name: 'De Autokampeerder',
      publisher: {
        '@id': 'https://www.deautokampeerder.nl/#organization',
      },
      inLanguage: 'nl-NL',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://media.s-bol.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://media.s-bol.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
