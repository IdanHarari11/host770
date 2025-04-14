'use client';

import { motion } from 'framer-motion';
import { 
  FaBed, FaWifi, 
  FaUtensils, FaCoffee, FaStore, FaDumbbell, FaHotel, FaStar, FaChargingStation
} from 'react-icons/fa';
import Section from '../ui/Section';
import Card from '../ui/Card';

const amenities = [
  { icon: <FaDumbbell />, title: 'Gym', description: 'Fully equipped fitness center for residents' },
  { icon: <FaWifi />, title: 'Free WiFi', description: 'High-speed internet access in all apartments' },
  { icon: <FaStar />, title: 'Synagogue', description: 'Convenient on-site synagogue' },
  { icon: <FaUtensils />, title: 'Kosher Mexican Restaurant', description: 'Authentic kosher Mexican cuisine in the building' },
  { icon: <FaUtensils />, title: 'Kosher Italian Restaurant', description: 'Delicious kosher Italian food just steps away' },
  { icon: <FaCoffee />, title: 'Kosher Café', description: 'Perfect spot for coffee and light kosher meals' },
  { icon: <FaStore />, title: 'UPS Store', description: 'Convenient shipping and business services' },
  { icon: <FaStore />, title: 'Super-Pharm', description: 'Pharmacy store in the building' },
  { icon: <FaChargingStation />, title: 'EV Parking', description: 'Electric vehicle charging stations available' },
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

const Amenities = () => {
  return (
    <Section 
      id="amenities" 
      title="Building Features"
      subtitle="🏢 In the New Building"
      bgColor="bg-[#f8f5e6]"
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
                <div className="text-4xl text-[#b19470] mb-4">{amenity.icon}</div>
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
        <h3 className="text-2xl font-bold mb-6 text-center text-[#b19470]">Ideal for Families & Hi-Tech Professionals</h3>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <p className="text-lg">
            The building includes <strong>15 fully furnished designer apartments</strong>, move-in ready for tenants.
          </p>
        </div>
      </motion.div>
    </Section>
  );
};

export default Amenities; 