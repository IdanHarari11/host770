import { sendContactFormEmail, sendBookingConfirmation, sendBookingNotification } from '@/lib/email';

/**
 * טיפול בבקשת POST לשליחת אימייל
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { type, name, email, message, phone, checkIn, checkOut, guests } = body;

    // בדיקת סוג הבקשה
    if (type === 'contact') {
      // שליחת אימייל מטופס יצירת קשר
      if (!name || !email || !message) {
        return Response.json({ success: false, error: 'חסרים שדות חובה' }, { status: 400 });
      }

      const result = await sendContactFormEmail(name, email, message);
      
      if (result.success) {
        return Response.json({ success: true, messageId: result.messageId });
      } else {
        return Response.json({ success: false, error: result.error }, { status: 500 });
      }
    } 
    else if (type === 'booking') {
      // שליחת אימייל מטופס הזמנה
      if (!name || !email || !phone || !checkIn || !checkOut || !guests) {
        return Response.json({ success: false, error: 'חסרים שדות חובה' }, { status: 400 });
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

      // שליחת אימייל ללקוח
      const customerResult = await sendBookingConfirmation(email, bookingDetails);
      
      // שליחת אימייל למנהל
      const adminResult = await sendBookingNotification(bookingDetails);

      if (customerResult.success && adminResult.success) {
        return Response.json({ 
          success: true, 
          customerMessageId: customerResult.messageId,
          adminMessageId: adminResult.messageId
        });
      } else {
        return Response.json({ 
          success: false, 
          error: customerResult.error || adminResult.error 
        }, { status: 500 });
      }
    } 
    else {
      return Response.json({ success: false, error: 'סוג אימייל לא חוקי' }, { status: 400 });
    }

  } catch (error) {
    console.error('שגיאה בטיפול בבקשת שליחת אימייל:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
} 