import { sendContactFormEmail, sendBookingConfirmation, sendBookingNotification } from '@/lib/email';

/**
 * Handle POST request to send email
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { type, name, email, message, phone, checkIn, checkOut, guests } = body;

    // Check request type
    if (type === 'contact') {
      // Send email from contact form
      if (!name || !email || !message) {
        return Response.json({ success: false, error: 'Required fields are missing' }, { status: 400 });
      }

      const result = await sendContactFormEmail(name, email, message);
      
      if (result.success) {
        return Response.json({ success: true, messageId: result.messageId });
      } else {
        return Response.json({ success: false, error: result.error }, { status: 500 });
      }
    } 
    else if (type === 'booking') {
      // Send email from booking form
      if (!name || !email || !phone || !checkIn || !checkOut || !guests) {
        return Response.json({ success: false, error: 'Required fields are missing' }, { status: 400 });
      }

      const bookingDetails = {
        name,
        email,
        phone,
        checkIn,
        checkOut,
        guests,
        message: message || ''
      };

      // Send email to customer
      const customerResult = await sendBookingConfirmation(email, bookingDetails);
      
      // Send email to admin
      const adminResult = await sendBookingNotification(bookingDetails);

      if (customerResult.success && adminResult.success) {
        return Response.json({ 
          success: true, 
          customerMessageId: customerResult.messageId,
          adminMessageId: adminResult.messageId,
          bookingDetails
        });
      } else {
        return Response.json({ 
          success: false, 
          error: customerResult.error || adminResult.error 
        }, { status: 500 });
      }
    } 
    else {
      return Response.json({ success: false, error: 'Invalid email type' }, { status: 400 });
    }

  } catch (error) {
    console.error('Error handling email send request:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
} 