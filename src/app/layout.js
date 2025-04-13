import { Rubik } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Script from 'next/script';
import GoogleTagManager, { GoogleTagManagerNoScript } from '@/components/analytics/GoogleTagManager';

// Rubik font settings for English
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-rubik',
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: 'Koosh Management Rental',
  description: 'Fully Furnished & Designed Apartments for Rent at Koosh Management, Griffin Project. The building includes 15 fully furnished designer apartments, move-in ready for tenants.',
  keywords: 'Koosh Management, Rental Apartments, Fort Lauderdale, Fully Furnished, Designer Apartments, Griffin Project, Rental Properties',
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
        <meta property="og:title" content="Koosh Management Rental" />
        <meta property="og:description" content="Fully Furnished & Designed Apartments for Rent at Koosh Management, Griffin Project. The building includes 15 fully furnished designer apartments, move-in ready for tenants." />
        <meta property="og:image" content="https://kooshmanagement.com/images/apartment-view.jpg" />
        <meta property="og:url" content="https://kooshmanagement.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Koosh Management Rental" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Koosh Management Rental" />
        <meta name="twitter:description" content="Fully Furnished & Designed Apartments for Rent at Koosh Management, Griffin Project. The building includes 15 fully furnished designer apartments, move-in ready for tenants." />
        <meta name="twitter:image" content="https://kooshmanagement.com/images/apartment-view.jpg" />
        <meta name="twitter:site" content="@kooshmanagement" />
        <meta name="twitter:creator" content="@kooshmanagement" />
        
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
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
        
        {/* Schema.org data */}
        <Script
          id="schema-lodging"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Koosh Management Rental",
              "image": "https://kooshmanagement.com/images/apartment-view.jpg",
              "description": "Fully Furnished & Designed Apartments for Rent at Koosh Management, Griffin Project. The building includes 15 fully furnished designer apartments, move-in ready for tenants.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Fort Lauderdale",
                "addressRegion": "FL",
                "postalCode": "33312",
                "streetAddress": "2750 Griffin Road",
                "addressCountry": "US"
              },
              "telephone": "+19543197577",
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
                  "name": "What amenities are included in the Griffin Project building?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The building includes a pool, gym, synagogue, kosher Mexican restaurant, kosher Italian restaurant, kosher café, UPS store, Super-Pharm, and EV parking."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the pricing for the apartments?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Daily price is $120 and monthly price is $3,000."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who are these apartments suitable for?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "These apartments are ideal for families and hi-tech professionals."
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