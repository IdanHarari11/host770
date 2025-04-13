import { Rubik } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import NagishLi from '@/components/ui/NagishLi';

// הגדרת הפונט רוביק לעברית
const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-rubik',
});

export const metadata = {
  title: 'וילה אורית בגלבוע | אירוח יוקרתי עם נוף עוצר נשימה',
  description: 'אירוח יוקרתי בוילה אורית בגלבוע עם נוף הרים מרהיב, בריכה פרטית, ושתי יחידות אירוח מפוארות.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* הגדרות בסיסיות עבור נגיש לי */}
        <script dangerouslySetInnerHTML={{ __html: `
          var nl_lang = 'he';
          var nl_pos = 'br';
          var nl_color = 'green';
          var nl_compact = '0';
          var nl_contact = '0543199489';
        `}} />
      </head>
      <body className={`${rubik.variable} font-rubik bg-white text-slate-800`}>
        <Navbar />
        {children}
        <ScrollToTop />
        <NagishLi />
        <Footer />
      </body>
    </html>
  );
} 