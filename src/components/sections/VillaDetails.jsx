'use client';

import { motion } from 'framer-motion';
import { FaBed, FaBath, FaUsers, FaSwimmingPool, FaUtensils, FaWifi, FaTemperatureHigh } from 'react-icons/fa';
import Section from '../ui/Section';
import Card from '../ui/Card';

const VillaDetails = () => {
  const units = [
    {
      name: 'יחידה 1 - הסוויטה המפוארת',
      image: '/image/WhatsApp Image 2025-04-09 at 09.25.33 (1).jpeg',
      desc: 'יחידה מרווחת המתאימה למשפחות עם נוף מדהים לגלבוע, בריכה פרטית וחצר מפנקת.',
      capacity: 12,
      bedrooms: 3,
      bathrooms: 2,
      features: [
        { icon: <FaBed />, text: '3 חדרי שינה מפוארים' },
        { icon: <FaBath />, text: '2 חדרי רחצה מאובזרים' },
        { icon: <FaSwimmingPool />, text: 'בריכה עם נוף' },
        { icon: <FaUtensils />, text: 'מטבח מאובזר במלואו' },
        { icon: <FaTemperatureHigh />, text: 'מזגן בכל חדר' },
        { icon: <FaWifi />, text: 'WiFi חופשי' },
      ]
    },
    {
      name: 'יחידה 2 - הסוויטה המשפחתית',
      image: '/image/WhatsApp Image 2025-04-09 at 09.25.30 (2).jpeg',
      desc: 'יחידה אינטימית וייחודית, מושלמת לזוגות, עם מרפסת פרטית ונוף פתוח לטבע.',
      capacity: 12,
      bedrooms: 3,
      bathrooms: 2,
      features: [
        { icon: <FaBed />, text: '3 חדרי שינה נעימים' },
        { icon: <FaBath />, text: '2 חדרי רחצה מאובזרים' },
        { icon: <FaSwimmingPool />, text: 'גישה לבריכה משותפת' },
        { icon: <FaUtensils />, text: 'מטבחון מאובזר' },
        { icon: <FaTemperatureHigh />, text: 'מזגן בכל חדר' },
        { icon: <FaWifi />, text: 'WiFi חופשי' },
      ]
    },
  ];

  return (
    <Section 
      id="villa-details" 
      title="היחידות שלנו"
      subtitle="בחרו את היחידה המתאימה לצרכים שלכם"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {units.map((unit, index) => (
          <motion.div
            key={unit.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="h-full flex flex-col">
              <div className="relative h-64 mb-4 overflow-hidden rounded-xl">
                <img 
                  src={unit.image} 
                  alt={unit.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-[#4caf50] shadow-md">
                  <div className="flex items-center gap-2">
                    <FaUsers />
                    <span>עד {unit.capacity} אנשים</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-[#4caf50]">{unit.name}</h3>
              <p className="text-gray-600 mb-4">{unit.desc}</p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <FaBed className="text-[#4caf50]" />
                  <span>{unit.bedrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaBath className="text-[#4caf50]" />
                  <span>{unit.bathrooms}</span>
                </div>
              </div>
              
              <div className="mt-auto">
                <h4 className="font-bold text-lg mb-2">מה מקבלים?</h4>
                <ul className="space-y-2">
                  {unit.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#4caf50]">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default VillaDetails; 