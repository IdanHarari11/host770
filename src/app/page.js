import Hero from '@/components/sections/Hero';
import Gallery from '@/components/sections/Gallery';
import VillaDetails from '@/components/sections/VillaDetails';
import Amenities from '@/components/sections/Amenities';
import Location from '@/components/sections/Location';
import Booking from '@/components/sections/Booking';
import GuestFeedback from '@/components/sections/GuestFeedback';
export default function Home() {
  return (
    <main className="ltr">
      {/* Hidden SEO text for search crawlers only */}
      <div className="hidden">
        <h1>Koosh Management Rental - Fully Furnished & Designed Apartments in Fort Lauderdale</h1>
        <p>
          Koosh Management offers 15 fully furnished designer apartments for rent at the Griffin Project in Fort Lauderdale. 
          Our modern 2-bedroom apartments feature a large central bathroom, fully equipped kitchens, and stylish white and cream aesthetic.
        </p>
        <p>
          Perfect for families and hi-tech professionals, our apartments provide both daily and monthly rental options. 
          The new building includes amazing amenities such as a pool, gym, synagogue, kosher restaurants, and EV parking.
        </p>
        <h2>Modern Design & Fully Furnished Apartments</h2>
        <h2>Ideal Location in Fort Lauderdale</h2>
        <h3>Building Features Include Pool, Gym & Kosher Dining</h3>
        <h2>Contact Jacob at 954-319-7577 to Book Your Stay</h2>
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

// SEO Metadata 
export const metadata = {
  title: 'Koosh Management Rental | Fully Furnished Apartments in Fort Lauderdale',
  description: 'Koosh Management offers fully furnished and designed apartments for rent in Fort Lauderdale. The building includes a pool, gym, synagogue, kosher restaurants, and more!',
  keywords: 'Koosh Management, Rental Apartments, Fort Lauderdale, Fully Furnished, Griffin Project, Kosher Amenities, Luxury Apartments'
}; 