import Link from 'next/link';
import { Metadata } from 'next';

export const metadata = {
  title: 'Page Not Found | Koosh Management Rental',
  description: 'The requested page was not found. Discover fully furnished and designed apartments at Koosh Management Rental in Fort Lauderdale.',
  robots: 'noindex, follow'
};

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-md mx-auto text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-[#b19470]">Oops! Page Not Found</h1>
        <p className="text-lg mb-8">
          The page you're looking for doesn't exist, but you can still find the perfect apartment in Fort Lauderdale!
        </p>
        <div className="space-y-4">
          <Link 
            href="/"
            className="block w-full py-3 bg-[#b19470] text-white rounded-lg hover:bg-[#9a8060] transition duration-300"
          >
            Return to Home Page
          </Link>
          <Link 
            href="/#gallery"
            className="block w-full py-3 border border-[#b19470] text-[#b19470] rounded-lg hover:bg-[#f8f5e6] transition duration-300"
          >
            View Our Gallery
          </Link>
          <Link
            href="/#booking"
            className="block w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 