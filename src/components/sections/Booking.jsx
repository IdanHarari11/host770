'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaWhatsapp, FaPhone, FaEnvelope, FaCheck, FaCalendarAlt } from 'react-icons/fa';
import Section from '../ui/Section';
import Button from '../ui/Button';
import BookingCountdown from './BookingCountdown';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { useTranslation } from '@/hooks/useTranslation';

const Booking = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '2',
    checkIn: '',
    checkOut: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);
    
    try {
      // Generate WhatsApp link with form data
      const whatsappLink = generateWhatsAppLink(formData);
      
      // Redirect to WhatsApp
      window.open(whatsappLink, '_blank');
      
      // Reset form after successful redirect
      setFormData({
        name: '',
        phone: '',
        email: '',
        guests: '2',
        checkIn: '',
        checkOut: '',
        message: '',
      });
      
    } catch (error) {
      console.error('Error processing form:', error);
      setSubmissionError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Section 
      id="booking" 
      title={t('nav.booking')}
      subtitle={t('hero.bookNow')}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg">
          <>
            <h3 className="text-xl font-bold mb-6">{t('contact.getInTouch')}</h3>
            
            {submissionError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-right">
                {submissionError}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="guests" className="block text-gray-700 mb-1">Number of Guests</label>
                  <div className="relative">
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaUsers className="text-gray-500" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="checkIn" className="block text-gray-700 mb-1">Arrival Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaCalendarAlt className="text-gray-500" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="checkOut" className="block text-gray-700 mb-1">Departure Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                      min={formData.checkIn || new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaCalendarAlt className="text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Add a message or question..."
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent"></div>
                    <span className="mr-2">{t('common.loading')}</span>
                  </div>
                ) : (
                  <>
                    <FaWhatsapp size={20} />
                    <span>{t('contact.sendMessage')}</span>
                  </>
                )}
              </Button>
            </form>
          </>
        </div>
        
        {/* Countdown & Contact Info */}
        <div className="flex flex-col gap-6">
          {/* Booking Countdown */}
          <BookingCountdown />
          
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">{t('contact.title')}</h3>
            <p className="text-gray-600 mb-6">
              {t('footer.description')}
            </p>
            
            <div className="space-y-3">
              <a 
                href="tel:+1XXXXXXXXXX" 
                className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="bg-blue-500 text-white p-2 rounded-full">
                  <FaPhone />
                </div>
                <span>{t('contact.phone')}</span>
              </a>
              
              <a 
                href="https://wa.me/1XXXXXXXXXX" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
              >
                <div className="bg-green-600 text-white p-2 rounded-full">
                  <FaWhatsapp />
                </div>
                <span>{t('contact.sendMessage')}</span>
              </a>
              
              <a 
                href="mailto:contact@host770.com" 
                className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
              >
                <div className="bg-red-500 text-white p-2 rounded-full">
                  <FaEnvelope />
                </div>
                <span>{t('contact.email')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Booking; 