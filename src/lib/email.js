import nodemailer from 'nodemailer';

/**
 * יצירת טרנספורטר עבור Nodemailer עם הגדרות Gmail SMTP
 */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

/**
 * פונקציה לשליחת אימייל
 * @param {string} to - כתובת המייל של הנמען
 * @param {string} subject - נושא האימייל
 * @param {string} html - תוכן האימייל ב-HTML
 * @returns {Promise} - הבטחה שמתקיימת כאשר האימייל נשלח
 */
export async function sendEmail({ to, subject, html }) {
  try {
    const result = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    });

    console.log(`אימייל נשלח ל-${to}: ${result.messageId}`);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('שגיאה בשליחת אימייל:', error);
    return { success: false, error: error.message };
  }
}

/**
 * פונקציה לשליחת אימייל אישור הזמנה
 * @param {string} to - כתובת המייל של הלקוח
 * @param {Object} bookingDetails - פרטי ההזמנה
 * @returns {Promise} - הבטחה שמתקיימת כאשר האימייל נשלח
 */
export async function sendBookingConfirmation(to, bookingDetails) {
  const subject = `אישור הזמנה - וילה אורית בגלבוע`;

  // יצירת תבנית HTML לאימייל אישור הזמנה
  const html = `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #333;">תודה על הזמנתך בוילה אורית בגלבוע!</h1>
      <p>שם: <strong>${bookingDetails.name}</strong></p>
      <p>תאריך הזמנה: ${new Date().toLocaleDateString('he-IL')}</p>
      
      <h2>פרטי ההזמנה שלך:</h2>
      <div style="background-color: #f8f8f8; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
        <p><strong>תאריך הגעה:</strong> ${bookingDetails.checkIn}</p>
        <p><strong>תאריך עזיבה:</strong> ${bookingDetails.checkOut}</p>
        <p><strong>מספר אורחים:</strong> ${bookingDetails.guests}</p>
        ${bookingDetails.message ? `<p><strong>הודעה:</strong> ${bookingDetails.message}</p>` : ''}
      </div>
      
      <p>קיבלנו את בקשת ההזמנה שלך, ובהקדם ניצור איתך קשר לאישור הזמינות ולהשלמת תהליך ההזמנה.</p>
      <p>אם יש לך שאלות נוספות בינתיים, אנא אל תהסס ליצור קשר בטלפון 054-3199489.</p>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
        <p>בברכה,<br>צוות וילה אורית בגלבוע</p>
        <p>טלפון: 054-3199489<br>אימייל: ${process.env.EMAIL_FROM}</p>
      </div>
    </div>
  `;

  return sendEmail({ to, subject, html });
}

/**
 * פונקציה לשליחת אימייל עם פרטי ההזמנה למנהל האתר
 * @param {Object} bookingDetails - פרטי ההזמנה
 * @returns {Promise} - הבטחה שמתקיימת כאשר האימייל נשלח
 */
export async function sendBookingNotification(bookingDetails) {
  const subject = `הזמנה חדשה - וילה אורית בגלבוע`;

  const html = `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; border-top: 4px solid #4caf50;">
        <h2 style="color: #333; margin-top: 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">הזמנה חדשה התקבלה!</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 140px;">שם מלא:</td>
            <td style="padding: 8px 0;">${bookingDetails.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">טלפון:</td>
            <td style="padding: 8px 0;">${bookingDetails.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">אימייל:</td>
            <td style="padding: 8px 0;"><a href="mailto:${bookingDetails.email}" style="color: #4caf50; text-decoration: none;">${bookingDetails.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">תאריך הגעה:</td>
            <td style="padding: 8px 0;">${bookingDetails.checkIn}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">תאריך עזיבה:</td>
            <td style="padding: 8px 0;">${bookingDetails.checkOut}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">מספר אורחים:</td>
            <td style="padding: 8px 0;">${bookingDetails.guests}</td>
          </tr>
        </table>
        
        ${bookingDetails.message ? `
        <div style="background-color: white; padding: 16px; border-radius: 4px; border-right: 3px solid #4caf50; margin-bottom: 20px;">
          <h3 style="margin-top: 0; color: #333;">הודעה מהלקוח:</h3>
          <div style="white-space: pre-line;">${bookingDetails.message.replace(/\n/g, '<br>')}</div>
        </div>
        ` : ''}
        
        <div style="font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0; padding-top: 12px; margin-top: 20px;">
          <p>הודעה זו נשלחה באופן אוטומטי מטופס ההזמנה באתר וילה אורית בגלבוע.</p>
          <p>תאריך: ${new Date().toLocaleDateString('he-IL', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </div>
    </div>
  `;

  return sendEmail({
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_FROM,
    subject,
    html
  });
}

/**
 * פונקציה לשליחת אימייל יצירת קשר
 * @param {string} name - שם השולח
 * @param {string} email - אימייל השולח
 * @param {string} message - הודעת השולח
 * @returns {Promise} - הבטחה שמתקיימת כאשר האימייל נשלח
 */
export async function sendContactFormEmail(name, email, message) {
  const subject = `הודעה חדשה מטופס יצירת קשר - ${name}`;

  const html = `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; border-top: 4px solid #4caf50;">
        <h2 style="color: #333; margin-top: 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">הודעה חדשה מטופס יצירת קשר</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 80px;">שם:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">אימייל:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #4caf50; text-decoration: none;">${email}</a></td>
          </tr>
        </table>
        
        <div style="background-color: white; padding: 16px; border-radius: 4px; border-right: 3px solid #4caf50; margin-bottom: 20px;">
          <h3 style="margin-top: 0; color: #333;">תוכן ההודעה:</h3>
          <div style="white-space: pre-line;">${message.replace(/\n/g, '<br>')}</div>
        </div>
        
        <div style="font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0; padding-top: 12px; margin-top: 20px;">
          <p>הודעה זו נשלחה מטופס יצירת הקשר באתר וילה אורית בגלבוע.</p>
          <p>תאריך: ${new Date().toLocaleDateString('he-IL', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </div>
    </div>
  `;

  // שליחת העתק למנהל האתר
  await sendEmail({
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_FROM,
    subject: `העתק: ${subject}`,
    html
  });

  // שליחת אישור ללקוח
  const confirmationHtml = `
    <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; border-top: 4px solid #4caf50;">
        <h2 style="color: #333; margin-top: 0;">תודה על פנייתך!</h2>
        <p>הודעתך התקבלה ונטפל בה בהקדם האפשרי.</p>
        
        <div style="background-color: white; padding: 16px; border-radius: 4px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333; font-size: 16px;">להלן פרטי הפנייה שלך:</h3>
          <p><strong>שם:</strong> ${name}</p>
          <p><strong>אימייל:</strong> ${email}</p>
          <p><strong>הודעה:</strong></p>
          <div style="white-space: pre-line; margin-top: 8px; padding: 10px; background-color: #f9f9f9; border-radius: 4px;">${message.replace(/\n/g, '<br>')}</div>
        </div>
        
        <p>נחזור אליך בהקדם האפשרי.</p>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
          <p>בברכה,<br>צוות וילה אורית בגלבוע</p>
          <p>טלפון: 054-3199489<br>אימייל: ${process.env.EMAIL_FROM}</p>
        </div>
      </div>
    </div>
  `;
  
  return sendEmail({
    to: email,
    subject: "פנייתך התקבלה - וילה אורית בגלבוע",
    html: confirmationHtml
  });
} 