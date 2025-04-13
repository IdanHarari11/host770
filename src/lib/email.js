import nodemailer from 'nodemailer';

/**
 * Create transporter for Nodemailer with Gmail SMTP settings
 */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

/**
 * Function to send email
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject
 * @param {string} html - Email content in HTML
 * @returns {Promise} - Promise resolved when email is sent
 */
export async function sendEmail({ to, subject, html }) {
  try {
    const result = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    });

    console.log(`Email sent to ${to}: ${result.messageId}`);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Function to send booking confirmation email
 * @param {string} to - Customer email address
 * @param {Object} bookingDetails - Booking details
 * @returns {Promise} - Promise resolved when email is sent
 */
export async function sendBookingConfirmation(to, bookingDetails) {
  const subject = `Booking Confirmation - Koosh Management Rental`;

  // Create HTML template for booking confirmation email
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #333;">Thank you for your booking at Koosh Management Rental!</h1>
      <p>Name: <strong>${bookingDetails.name}</strong></p>
      <p>Booking Date: ${new Date().toLocaleDateString('en-US')}</p>
      
      <h2>Your Booking Details:</h2>
      <div style="background-color: #f8f8f8; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
        <p><strong>Check-in Date:</strong> ${bookingDetails.checkIn}</p>
        <p><strong>Check-out Date:</strong> ${bookingDetails.checkOut}</p>
        <p><strong>Number of Guests:</strong> ${bookingDetails.guests}</p>
        ${bookingDetails.message ? `<p><strong>Message:</strong> ${bookingDetails.message}</p>` : ''}
      </div>
      
      <p>We have received your booking request and we will contact you shortly to confirm availability and complete the booking process.</p>
      <p>If you have any questions in the meantime, please don't hesitate to contact us at 954-319-7577.</p>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
        <p>Best regards,<br>Koosh Management Rental Team</p>
        <p>Phone: 954-319-7577<br>Email: ${process.env.EMAIL_FROM}</p>
        <p>Address: 2750 Griffin Road, Fort Lauderdale</p>
      </div>
    </div>
  `;

  return sendEmail({ to, subject, html });
}

/**
 * Function to send booking notification email to admin
 * @param {Object} bookingDetails - Booking details
 * @returns {Promise} - Promise resolved when email is sent
 */
export async function sendBookingNotification(bookingDetails) {
  const subject = `New Booking - Koosh Management Rental`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; border-top: 4px solid #b19470;">
        <h2 style="color: #333; margin-top: 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">New Booking Received!</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 140px;">Full Name:</td>
            <td style="padding: 8px 0;">${bookingDetails.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0;">${bookingDetails.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${bookingDetails.email}" style="color: #b19470; text-decoration: none;">${bookingDetails.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Check-in Date:</td>
            <td style="padding: 8px 0;">${bookingDetails.checkIn}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Check-out Date:</td>
            <td style="padding: 8px 0;">${bookingDetails.checkOut}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Number of Guests:</td>
            <td style="padding: 8px 0;">${bookingDetails.guests}</td>
          </tr>
        </table>
        
        ${bookingDetails.message ? `
        <div style="background-color: white; padding: 16px; border-radius: 4px; border-left: 3px solid #b19470; margin-bottom: 20px;">
          <h3 style="margin-top: 0; color: #333;">Message from customer:</h3>
          <div style="white-space: pre-line;">${bookingDetails.message.replace(/\n/g, '<br>')}</div>
        </div>
        ` : ''}
        
        <div style="font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0; padding-top: 12px; margin-top: 20px;">
          <p>This message was sent automatically from the booking form on the Koosh Management Rental website.</p>
          <p>Date: ${new Date().toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
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
 * Function to send contact form email
 * @param {string} name - Sender name
 * @param {string} email - Sender email
 * @param {string} message - Sender message
 * @returns {Promise} - Promise resolved when email is sent
 */
export async function sendContactFormEmail(name, email, message) {
  const subject = `New Message from Contact Form - ${name}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; border-top: 4px solid #b19470;">
        <h2 style="color: #333; margin-top: 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">New Message from Contact Form</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 80px;">Name:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #b19470; text-decoration: none;">${email}</a></td>
          </tr>
        </table>
        
        <div style="background-color: white; padding: 16px; border-radius: 4px; border-left: 3px solid #b19470; margin-bottom: 20px;">
          <h3 style="margin-top: 0; color: #333;">Message Content:</h3>
          <div style="white-space: pre-line;">${message.replace(/\n/g, '<br>')}</div>
        </div>
        
        <div style="font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0; padding-top: 12px; margin-top: 20px;">
          <p>This message was sent from the contact form on the Koosh Management Rental website.</p>
          <p>Date: ${new Date().toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </div>
    </div>
  `;

  // Send copy to site admin
  await sendEmail({
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_FROM,
    subject: `Copy: ${subject}`,
    html
  });

  // Send confirmation to customer
  const confirmationHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; border-top: 4px solid #b19470;">
        <h2 style="color: #333; margin-top: 0;">Thank you for your message!</h2>
        <p>Your message has been received and we will respond as soon as possible.</p>
        
        <div style="background-color: white; padding: 16px; border-radius: 4px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333; font-size: 16px;">Here are the details of your inquiry:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="white-space: pre-line; margin-top: 8px; padding: 10px; background-color: #f9f9f9; border-radius: 4px;">${message.replace(/\n/g, '<br>')}</div>
        </div>
        
        <p>We will get back to you as soon as possible.</p>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
          <p>Best regards,<br>Koosh Management Rental Team</p>
          <p>Phone: 954-319-7577<br>Email: ${process.env.EMAIL_FROM}</p>
          <p>Address: 2750 Griffin Road, Fort Lauderdale</p>
        </div>
      </div>
    </div>
  `;
  
  return sendEmail({
    to: email,
    subject: "Your message has been received - Koosh Management Rental",
    html: confirmationHtml
  });
} 