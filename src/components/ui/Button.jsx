'use client';

import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  withAnimation = true,
  ...props 
}) => {
  const baseClass = variant === 'primary' 
    ? 'button-primary' 
    : 'button-secondary';
  
  const buttonContent = (
    <button
      onClick={onClick}
      className={`${baseClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  if (withAnimation) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonContent}
      </motion.div>
    );
  }
  
  return buttonContent;
};

export default Button; 