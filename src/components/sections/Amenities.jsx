'use client';

import { motion } from 'framer-motion';
import { 
  FaBed, FaWifi, 
  FaUtensils, FaCoffee, FaStore, FaDumbbell, FaHotel, FaStar, FaChargingStation, FaUsers, FaHandHoldingHeart, FaHome
} from 'react-icons/fa';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { useTranslation } from '@/hooks/useTranslation';

const Amenities = () => {
  const { t } = useTranslation();
  
  const amenities = [
    { icon: <FaUsers />, title: t('amenities.pool'), description: t('amenities.poolDesc') },
    { icon: <FaHome />, title: t('amenities.gym'), description: t('amenities.gymDesc') },
    { icon: <FaStar />, title: t('amenities.synagogue'), description: t('amenities.synagogueDesc') },
    { icon: <FaUtensils />, title: t('amenities.kosherMexican'), description: t('amenities.kosherMexicanDesc') },
    { icon: <FaCoffee />, title: t('amenities.kosherItalian'), description: t('amenities.kosherItalianDesc') },
    { icon: <FaStore />, title: t('amenities.kosherCafe'), description: t('amenities.kosherCafeDesc') },
    { icon: <FaBed />, title: t('amenities.upsStore'), description: t('amenities.upsStoreDesc') },
    { icon: <FaHandHoldingHeart />, title: t('amenities.superPharm'), description: t('amenities.superPharmDesc') },
    { icon: <FaWifi />, title: t('amenities.evParking'), description: t('amenities.evParkingDesc') },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  return (
    <Section 
      id="amenities" 
      title={t('amenities.title')}
      subtitle={t('amenities.specialNotice')}
      bgColor="bg-[#f0f4ff]"
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {amenities.map((amenity, index) => (
          <motion.div key={index} variants={item}>
            <Card>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl text-blue-600 mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Special Notice Section */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-center text-blue-600">{t('apartments.suitableFor')}</h3>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <p className="text-lg">
            {t('hero.description')}
          </p>
        </div>
      </motion.div>
    </Section>
  );
};

export default Amenities; 