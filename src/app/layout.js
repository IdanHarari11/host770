import { Rubik } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Script from 'next/script';
import GoogleTagManager, { GoogleTagManagerNoScript } from '@/components/analytics/GoogleTagManager';
import { LanguageProvider } from '@/contexts/LanguageContext';

// Rubik font settings for English and Hebrew support
const rubik = Rubik({
  subsets: ['latin', 'hebrew'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-rubik',
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: 'Host770 | Kosher Apartments for Rent in Miami',
  description: 'Host770 - Perfect solution for Torah observant families! Kosher apartments for rent in Miami. Walking distance to synagogues, kosher restaurants, mikvahs, and mehadrin supermarkets.',
  keywords: 'Host770, Kosher Apartments, Miami Rental, Torah Observant, Chabad, Kosher Kitchen, Miami Jewish, Religious Families, Kosher Certified, Miami Vacation Rental',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect for performance optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#4A7C59" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Host770 | Kosher Apartments for Rent in Miami" />
        <meta property="og:description" content="Perfect solution for Torah observant families! Kosher apartments for rent in Miami. Walking distance to synagogues, kosher restaurants, mikvahs, and mehadrin supermarkets." />
        <meta property="og:image" content="https://host770.com/images/apartment-view.jpg" />
        <meta property="og:url" content="https://host770.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="he_IL" />
        <meta property="og:site_name" content="Host770" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Host770 | Kosher Apartments for Rent in Miami" />
        <meta name="twitter:description" content="Perfect solution for Torah observant families! Kosher apartments for rent in Miami. Walking distance to synagogues, kosher restaurants, mikvahs, and mehadrin supermarkets." />
        <meta name="twitter:image" content="https://host770.com/images/apartment-view.jpg" />
        <meta name="twitter:site" content="@host770" />
        <meta name="twitter:creator" content="@host770" />
        
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4a7c59" />
        <meta name="msapplication-TileColor" content="#4a7c59" />
        <meta name="theme-color" content="#4a7c59" />
      </head>
      <body className={`${rubik.variable} font-rubik bg-white text-slate-800`}>
        {/* Google Tag Manager (noscript) */}
        <GoogleTagManagerNoScript gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        
        <LanguageProvider>
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer />
        </LanguageProvider>
        
        {/* Schema.org data */}
        <Script
          id="schema-lodging"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Host770",
              "image": "https://host770.com/images/apartment-view.jpg",
              "description": "Perfect solution for Torah observant families! Kosher apartments for rent in Miami. Walking distance to synagogues, kosher restaurants, mikvahs, and mehadrin supermarkets.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Miami",
                "addressRegion": "FL",
                "addressCountry": "US"
              },
              "email": "info@host770.com",
              "priceRange": "$$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "87"
              },
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Pool",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Gym",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Fully Furnished",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Modern Design",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Kosher Restaurants",
                  "value": true
                }
              ]
            })
          }}
        />
        
        <Script
          id="schema-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What kosher amenities are included with Host770 apartments?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our apartments include kashering service before each entry, kosher kitchen setup (meat/dairy), collaboration with Miami Chabad Houses, and are located near kosher restaurants, mikvahs, and synagogues."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who are Host770 apartments suitable for?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Perfect for religious families, honeymoon couples, business travelers, and Torah observant tourists seeking kosher accommodations in Miami."
                  }
                }
              ]
            })
          }}
        />
        
        {/* Google Tag Manager */}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        
        {/* Temporary - Direct GA4 code for testing */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-N8LN3BLJVY`}
        />
        <Script id="ga4-direct" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N8LN3BLJVY');
          `}
        </Script>
      </body>
    </html>
  );
} 