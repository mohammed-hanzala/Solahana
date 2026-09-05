import nodemailer from 'nodemailer';

/**
 * Creates reusable Nodemailer transporter instance using environment variables
 */
const createTransporter = () => {
  const host = process.env.SMTP_HOST || process.env.EMAIL_HOST || 'smtp.mailtrap.io';
  const port = parseInt(process.env.SMTP_PORT || process.env.EMAIL_PORT || '2525', 10);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    auth: {
      user,
      pass,
    },
  });
};

/**
 * Sends HTML Email with safe fallback logging
 */
export const sendEmail = async ({ to, subject, html, text }) => {
  try {
    const transporter = createTransporter();
    const from = process.env.EMAIL_FROM || 'SOLAHANA Advisory <advisory@solahana.com>';

    if (!transporter) {
      console.log(`\n[EMAIL SERVICE - MOCK MODE]`);
      console.log(`To: ${to}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${text || 'HTML Email Body'}\n`);
      return { success: true, mock: true };
    }

    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });

    console.log(`[EMAIL SERVICE] Email sent to ${to}: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`[EMAIL SERVICE ERROR] Failed to send email to ${to}:`, error.message);
    return { success: false, error: error.message };
  }
};

/**
 * Email Template: Consultation Booked Confirmation
 */
export const sendConsultationBookedEmail = async (booking) => {
  const dateFormatted = new Date(booking.preferredDate).toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const subject = `SOLAHANA Consultation Booked — ${booking.goal}`;
  const html = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #020B2D; padding: 40px 20px; color: #F8F7F3;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #071C48; border: 1px solid rgba(200, 162, 74, 0.3); border-radius: 16px; padding: 32px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
        <div style="text-align: center; margin-bottom: 24px;">
          <h1 style="color: #C8A24A; font-size: 26px; margin: 0; font-family: Georgia, serif;">SOLAHANA</h1>
          <p style="color: #BAC6DA; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; margin-top: 4px;">Wealth Advisory & Financial Planning</p>
        </div>
        <hr style="border: 0; border-top: 1px solid rgba(200, 162, 74, 0.2); margin: 20px 0;" />
        <p style="font-size: 16px;">Dear <strong>${booking.fullName}</strong>,</p>
        <p style="font-size: 14px; color: #E0E6ED; line-height: 1.6;">
          Thank you for requesting a 1-on-1 financial advisory session with SOLAHANA. Your booking request has been received and is currently under review by our wealth desk.
        </p>
        <div style="background-color: #020B2D; border: 1px solid rgba(200, 162, 74, 0.2); border-radius: 12px; padding: 20px; margin: 24px 0;">
          <h3 style="color: #C8A24A; margin-top: 0; font-size: 16px;">Session Details</h3>
          <p style="margin: 8px 0; font-size: 13px;"><strong>Goal:</strong> ${booking.goal}</p>
          <p style="margin: 8px 0; font-size: 13px;"><strong>Mode:</strong> ${booking.consultationMode}</p>
          <p style="margin: 8px 0; font-size: 13px;"><strong>Preferred Date:</strong> ${dateFormatted}</p>
          <p style="margin: 8px 0; font-size: 13px;"><strong>Preferred Time Slot:</strong> ${booking.preferredTime}</p>
          <p style="margin: 8px 0; font-size: 13px;"><strong>Status:</strong> <span style="color: #E8C878; font-weight: bold;">Pending Review</span></p>
        </div>
        <p style="font-size: 13px; color: #BAC6DA; line-height: 1.5;">
          Our dedicated wealth advisor will confirm your slot and send video meeting credentials shortly.
        </p>
        <div style="margin-top: 32px; font-size: 12px; color: #8899B5; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 16px;">
          SOLAHANA Financial Planning Pvt Ltd · Level 18, BKC Financial District, Mumbai 400051
        </div>
      </div>
    </div>
  `;

  return sendEmail({ to: booking.email, subject, html });
};

/**
 * Email Template: Consultation Confirmed
 */
export const sendConsultationConfirmedEmail = async (booking) => {
  const dateFormatted = new Date(booking.preferredDate).toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const subject = `SOLAHANA Consultation Confirmed — ${booking.goal}`;
  const html = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #020B2D; padding: 40px 20px; color: #F8F7F3;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #071C48; border: 1px solid rgba(200, 162, 74, 0.4); border-radius: 16px; padding: 32px;">
        <h1 style="color: #C8A24A; font-size: 24px; font-family: Georgia, serif;">Consultation Confirmed!</h1>
        <p style="font-size: 14px; color: #E0E6ED;">Dear <strong>${booking.fullName}</strong>,</p>
        <p style="font-size: 14px; color: #E0E6ED; line-height: 1.6;">
          Your financial advisory session for <strong>${booking.goal}</strong> has been officially confirmed by our wealth team.
        </p>
        <div style="background-color: #020B2D; border: 1px solid rgba(200, 162, 74, 0.3); border-radius: 12px; padding: 20px; margin: 20px 0;">
          <p style="margin: 6px 0; font-size: 13px;"><strong>Date:</strong> ${dateFormatted}</p>
          <p style="margin: 6px 0; font-size: 13px;"><strong>Time:</strong> ${booking.preferredTime}</p>
          <p style="margin: 6px 0; font-size: 13px;"><strong>Mode:</strong> ${booking.consultationMode}</p>
          ${booking.meetingLink ? `<p style="margin: 12px 0 6px 0; font-size: 13px;"><strong>Meeting Link:</strong> <a href="${booking.meetingLink}" style="color: #E8C878;">${booking.meetingLink}</a></p>` : ''}
        </div>
      </div>
    </div>
  `;

  return sendEmail({ to: booking.email, subject, html });
};

/**
 * Email Template: Consultation Cancelled
 */
export const sendConsultationCancelledEmail = async (booking) => {
  const subject = `SOLAHANA Consultation Cancelled — ${booking.goal}`;
  const html = `
    <div style="font-family: sans-serif; background-color: #020B2D; padding: 30px; color: #F8F7F3;">
      <div style="max-width: 550px; margin: 0 auto; background-color: #071C48; padding: 25px; border-radius: 12px; border: 1px solid rgba(200,162,74,0.3);">
        <h2 style="color: #EF4444;">Consultation Cancelled</h2>
        <p>Dear <strong>${booking.fullName}</strong>,</p>
        <p>Your consultation booking for <strong>${booking.goal}</strong> has been cancelled.</p>
        <p>If you'd like to reschedule, please visit your SOLAHANA portal or contact advisory@solahana.com.</p>
      </div>
    </div>
  `;

  return sendEmail({ to: booking.email, subject, html });
};
