import nodemailer from 'nodemailer';
import type { QuoteRequest } from '@shared/schema';

// Email configuration
const createTransporter = () => {
  // Check if we have email credentials
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.warn('Email credentials not configured. Email notifications will not work.');
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

export async function sendQuoteRequestEmail(quoteRequest: QuoteRequest): Promise<boolean> {
  const transporter = createTransporter();
  
  if (!transporter) {
    console.warn('Email transporter not available - skipping email notification');
    return false;
  }

  const emailContent = `
New Quote Request - Hampson & Mealey

Customer Details:
- Name: ${quoteRequest.name}
- Email: ${quoteRequest.email}
- Phone: ${quoteRequest.phone}

Move Details:
- Property Type: ${quoteRequest.propertyType || 'Not specified'}
- Move From: ${quoteRequest.moveFrom || 'Not specified'}
- Move To: ${quoteRequest.moveTo || 'Not specified'}
- Preferred Move Date: ${quoteRequest.moveDate || 'Not specified'}

Additional Information:
${quoteRequest.additionalInfo || 'None provided'}

Quote Request ID: ${quoteRequest.id}
Submitted: ${new Date(quoteRequest.createdAt).toLocaleString('en-GB')}

Please contact the customer to provide a quote for their removal needs.
`;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: 'kye@hampsonmealey.co.uk',
      subject: `New Quote Request from ${quoteRequest.name}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    });

    console.log(`Quote request email sent successfully for ${quoteRequest.name}`);
    return true;
  } catch (error) {
    console.error('Failed to send quote request email:', error);
    return false;
  }
}

export async function sendCustomerConfirmationEmail(quoteRequest: QuoteRequest): Promise<boolean> {
  const transporter = createTransporter();
  
  if (!transporter) {
    return false;
  }

  const confirmationContent = `
Dear ${quoteRequest.name},

Thank you for your quote request with Hampson & Mealey Limited.

We have received your enquiry and will contact you shortly to discuss your removal needs and provide you with a competitive fixed-cost quote.

Your Quote Request Details:
- Property Type: ${quoteRequest.propertyType || 'Not specified'}
- Move From: ${quoteRequest.moveFrom || 'Not specified'}
- Move To: ${quoteRequest.moveTo || 'Not specified'}
- Preferred Move Date: ${quoteRequest.moveDate || 'Not specified'}

If you have any urgent questions, please don't hesitate to contact us:
- Preston: 01772 283 818
- Mobile: 07508 884 834

Best regards,
Hampson & Mealey Limited
Reliable and reputable removals company based in Lancashire
`;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: quoteRequest.email,
      subject: 'Quote Request Received - Hampson & Mealey',
      text: confirmationContent,
      html: confirmationContent.replace(/\n/g, '<br>'),
    });

    console.log(`Confirmation email sent to ${quoteRequest.email}`);
    return true;
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    return false;
  }
}