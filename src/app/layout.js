import { Rubik } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

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
      <body className={`${rubik.variable} font-rubik bg-white text-slate-800`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
} 