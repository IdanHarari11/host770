'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/sections/Hero';
import Gallery from '@/components/sections/Gallery';
import VillaDetails from '@/components/sections/VillaDetails';
import Amenities from '@/components/sections/Amenities';
import Location from '@/components/sections/Location';
import Booking from '@/components/sections/Booking';
import GuestFeedback from '@/components/sections/GuestFeedback';

function HomeContent() {
  const { isRTL } = useLanguage();
  
  return (
    <main className={isRTL ? 'rtl' : 'ltr'}>
      {/* Hidden SEO text for search crawlers only */}
      <div className="hidden">
        <h1>Host770 - Kosher Apartments for Rent in Miami</h1>
        <p>
          Host770 is the leading company for kosher apartment and property rentals in Miami. 
          Perfect solution for Torah observant families - walking distance to synagogues! 
          Our properties are located in central areas, near synagogues, kosher restaurants, mikvahs, and mehadrin supermarkets.
        </p>
        <p>
          What's included: Collaboration with Miami Chabad Houses, apartment kashering before each entry according to required kashrut level, 
          separate beds upon request, fully furnished apartments with kosher kitchen (meat/dairy), hot plate, water heater, linens, towels, 
          washing machine, internet and more.
        </p>
        <h2>Perfect for Religious Families & Torah Observant Tourists</h2>
        <h2>Kosher Certified & Fully Furnished Apartments</h2>
        <h3>Professional Customer Service in Hebrew, English & Spanish</h3>
        <h2>Contact us at info@host770.com - Available 24/6</h2>
      </div>
      
      <Hero />
      <Gallery />
      <VillaDetails />
      <Amenities />
      <Location />
      <Booking />
      <GuestFeedback />
    </main>
  );
}

export default function Home() {
  return <HomeContent />;
} 