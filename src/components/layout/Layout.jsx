import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { isRTL } = useLanguage();

  // Return a consistent layout structure
  return (
    <div 
      className={`min-h-screen flex flex-col ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 