import Hero from '@/components/sections/Hero';
import Gallery from '@/components/sections/Gallery';
import VillaDetails from '@/components/sections/VillaDetails';
import Amenities from '@/components/sections/Amenities';
import Location from '@/components/sections/Location';
import Booking from '@/components/sections/Booking';

export default function Home() {
  return (
    <main className="rtl">
      <Hero />
      <Gallery />
      <VillaDetails />
      <Amenities />
      <Location />
      <Booking />
    </main>
  );
}

// מטה-תגיות עבור SEO
export const metadata = {
  title: 'וילה אורית בגלבוע | אירוח יוקרתי עם נוף עוצר נשימה',
  description: 'אירוח יוקרתי בוילה אורית בגלבוע עם נוף הרים מרהיב, בריכה פרטית, ושתי יחידות אירוח מפוארות. להזמנות ובירורים צרו קשר עכשיו.',
  keywords: 'וילה אורית, גלבוע, אירוח יוקרתי, בריכה פרטית, נוף להרים, צימר, חופשה בצפון'
}; 