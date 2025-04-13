import Link from 'next/link';
import { Metadata } from 'next';

export const metadata = {
  title: 'דף לא נמצא | וילה אורית בגלבוע',
  description: 'העמוד המבוקש לא נמצא. גלו את החופשה המושלמת בוילה אורית בגלבוע - אירוח יוקרתי עם בריכות פרטיות ונוף מרהיב.',
  robots: 'noindex, follow'
};

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-md mx-auto text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-primary">אופס! העמוד לא נמצא</h1>
        <p className="text-lg mb-8">
          העמוד שחיפשתם לא נמצא, אבל אתם עדיין יכולים למצוא את החופשה המושלמת בצפון!
        </p>
        <div className="space-y-4">
          <Link 
            href="/"
            className="block w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300"
          >
            חזרה לדף הבית
          </Link>
          <Link 
            href="/gallery"
            className="block w-full py-3 border border-primary text-primary rounded-lg hover:bg-primary-light transition duration-300"
          >
            צפייה בגלריית התמונות
          </Link>
          <Link
            href="/contact"
            className="block w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            צור קשר
          </Link>
        </div>
      </div>
    </div>
  );
} 