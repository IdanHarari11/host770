'use client';

import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  icon, 
  title, 
  subtitle,
  className = '',
  withAnimation = true,
  ...props 
}) => {
  const cardContent = (
    <div 
      className={`card ${className}`} 
      {...props}
    >
      {icon && (
        <div className="text-[#4caf50] text-4xl mb-4">
          {icon}
        </div>
      )}
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
      {children}
    </div>
  );

  if (withAnimation) {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
};

export default Card; 