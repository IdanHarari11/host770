'use client';

import { motion } from 'framer-motion';
import Container from './Container';

const Section = ({ 
  children, 
  id, 
  title, 
  subtitle, 
  className = '',
  bgColor = 'bg-white',
  withAnimation = true,
}) => {
  const sectionContent = (
    <section id={id} className={`${bgColor} section-padding ${className}`}>
      <Container>
        {title && <h2 className="section-title">{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </Container>
    </section>
  );

  if (withAnimation) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {sectionContent}
      </motion.div>
    );
  }

  return sectionContent;
};

export default Section; 