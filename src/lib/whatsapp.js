/**
 * Function to generate WhatsApp link with prefilled message containing booking details
 * @param {Object} bookingDetails - Booking details
 * @returns {string} - WhatsApp URL with prefilled message
 */
export function generateWhatsAppLink(bookingDetails) {
  const phoneNumber = '19543197577'; // Phone number to send the message to
  
  // Create structured message with all booking details
  const message = `
New Booking from Koosh Management Rental System:

Full Name: ${bookingDetails.name}
Phone: ${bookingDetails.phone}
Email: ${bookingDetails.email}
Check-in Date: ${bookingDetails.checkIn}
Check-out Date: ${bookingDetails.checkOut}
Number of Guests: ${bookingDetails.guests}
${bookingDetails.message ? `Message: ${bookingDetails.message}` : ''}

Sent via the booking form on our website.
  `;
  
  // Create WhatsApp link with encoded message
  const encodedMessage = encodeURIComponent(message.trim());
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  return whatsappLink;
} 