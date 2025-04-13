'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Image from 'next/image';

const Location = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <Section 
      id="location" 
      title="Our Location"
      subtitle="Perfectly Located in Fort Lauderdale"
      bgColor="bg-[#f5f5f5]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Map */}
        <div className="order-2 lg:order-1">
          <div className="bg-white p-2 rounded-2xl shadow-lg overflow-hidden h-[350px] lg:h-full">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#b19470]"></div>
                </div>
              )}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.6525234180846!2d-80.19847462378226!3d26.067897497772182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a9cab8be2c25%3A0xb3b5dbe351e9eda3!2s2750%20Griffin%20Rd%2C%20Fort%20Lauderdale%2C%20FL%2033312!5e0!3m2!1sen!2sus!4v1665612345678!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
                title="Map location of Koosh Management Rental"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Info */}
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-2 text-xl mb-4">
            <FaMapMarkerAlt className="text-[#b19470] text-2xl" />
            <h3 className="font-bold">2750 Griffin Road, Fort Lauderdale</h3>
          </div>
          
          <p className="text-gray-600 mb-6">
            Koosh Management Rental is located in a prime area of Fort Lauderdale, offering convenient 
            access to local amenities. The property is ideally situated for both families and professionals, 
            with easy access to major highways, shopping centers, and entertainment venues.
          </p>
          
          <Button 
            onClick={() => window.open('https://maps.google.com/?q=2750+Griffin+Road+Fort+Lauderdale+FL', '_blank')}
            className="mb-8"
          >
            <div className="flex items-center gap-2">
              <FaDirections />
              <span>Get Directions</span>
            </div>
          </Button>
          
          <h3 className="text-xl font-bold mb-4 text-[#b19470]">Contact Information</h3>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <ul className="space-y-3">
              <li className="flex gap-2">
                <span className="font-bold">Contact:</span>
                <span>Jacob</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">Phone:</span>
                <span>954-319-7577</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">Email:</span>
                <span>Kooshmanagement@gmail.com</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">Address:</span>
                <span>2750 Griffin Road, Fort Lauderdale</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Location; 