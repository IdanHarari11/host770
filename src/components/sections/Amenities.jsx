'use client';

import { motion } from 'framer-motion';
import { 
  FaBed, FaBath, FaWifi, FaParking, FaTv, FaWater, 
  FaSnowflake, FaUtensils, FaCoffee, FaSwimmingPool, 
  FaWalking, FaTree, FaMountain
} from 'react-icons/fa';
import Section from '../ui/Section';
import Card from '../ui/Card';

const amenities = [
  { icon: <FaBed />, title: 'מיטות נוחות', description: 'מיטות איכותיות עם מזרנים אורתופדיים ומצעים רכים' },
  { icon: <FaWifi />, title: 'WiFi חופשי', description: 'אינטרנט מהיר וחזק בכל רחבי הווילה' },
  { icon: <FaSnowflake />, title: 'מיזוג אוויר', description: 'בכל החדרים והאזורים המשותפים' },
  { icon: <FaTv />, title: 'טלוויזיה חכמה', description: 'מסכי Smart TV עם נטפליקס וערוצי כבלים' },
  { icon: <FaSwimmingPool />, title: 'בריכה פרטית', description: 'בריכת שחייה עם נוף מרהיב להרים' },
  { icon: <FaUtensils />, title: 'מטבח מאובזר', description: 'מטבח מלא עם כל הציוד הנדרש לבישול ואירוח' },
  { icon: <FaCoffee />, title: 'מכונת קפה', description: 'מכונת אספרסו וקפסולות קפה מובחרות' },
  { icon: <FaBath />, title: 'מגבות ומוצרי טיפוח', description: 'מגבות רכות ומוצרי טיפוח איכותיים' },
  { icon: <FaParking />, title: 'חניה פרטית', description: 'חניה פרטית וצמודה ללא עלות' },
  { icon: <FaWater />, title: 'מים חמים 24/7', description: 'מים חמים זמינים תמיד במקלחות ובכיורים' },
  { icon: <FaWalking />, title: 'מסלולי טיול', description: 'גישה קלה למסלולי טיול נפלאים באזור' },
  { icon: <FaMountain />, title: 'נוף מרהיב', description: 'נוף פנורמי עוצר נשימה אל הרי הגלבוע' },
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
      title="מתקנים ושירותים"
      subtitle="כל מה שתצטרכו לחופשה מושלמת ב״וילה אורית״"
      bgColor="bg-[#f5f5f5]"
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
                <div className="text-4xl text-[#4caf50] mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Video Section */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-center">התרשמו מהוילה</h3>
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <video 
            controls 
            className="w-full h-auto"
            poster="/image/WhatsApp Image 2025-04-09 at 09.27.41 (1).jpeg"
          >
            <source src="/image/WhatsApp Video 2025-04-09 at 09.27.42.mp4" type="video/mp4" />
            הדפדפן שלך אינו תומך בתגית וידאו.
          </video>
        </div>
      </motion.div>
    </Section>
  );
};

export default Amenities; 