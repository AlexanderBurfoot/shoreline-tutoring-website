import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = process.env.PORT || 3001;

// --- Middleware ---
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:4173'],
    methods: ['POST'],
}));

// Rate limit: max 5 submissions per IP per 15 minutes
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: { error: 'Too many submissions. Please try again in a few minutes.' },
    standardHeaders: true,
    legacyHeaders: false,
});

// --- Microsoft Graph API (direct HTTP, no MSAL dependency) ---

let cachedToken = null;
let tokenExpiry = 0;

/**
 * Acquire an access token using OAuth 2.0 client credentials flow
 */
async function getGraphToken() {
    // Return cached token if still valid (with 5 min buffer)
    if (cachedToken && Date.now() < tokenExpiry - 300000) {
        return cachedToken;
    }

    const tokenUrl = `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/oauth2/v2.0/token`;

    const params = new URLSearchParams({
        client_id: process.env.AZURE_CLIENT_ID,
        client_secret: process.env.AZURE_CLIENT_SECRET,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials',
    });

    const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Token request failed (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    cachedToken = data.access_token;
    tokenExpiry = Date.now() + data.expires_in * 1000;
    return cachedToken;
}

/**
 * Send an email using Microsoft Graph API
 */
async function sendEmail({ to, subject, htmlBody, replyTo }) {
    const token = await getGraphToken();

    const message = {
        message: {
            subject,
            body: {
                contentType: 'HTML',
                content: htmlBody,
            },
            toRecipients: [{ emailAddress: { address: to } }],
            replyTo: replyTo ? [{ emailAddress: { address: replyTo } }] : undefined,
        },
        saveToSentItems: true,
    };

    const response = await fetch(
        `https://graph.microsoft.com/v1.0/users/${process.env.EMAIL_FROM}/sendMail`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        }
    );

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Graph API error (${response.status}): ${errorBody}`);
    }
}

// Verify Graph API connection on startup
getGraphToken()
    .then(() => console.log('✅ Microsoft Graph API authenticated. Ready to send emails'))
    .catch((err) => console.error('❌ Graph API authentication failed:', err.message));

// --- Contact form endpoint ---
app.post('/api/contact', contactLimiter, async (req, res) => {
    const { name, email, phone, subjects, message } = req.body;

    // Validation
    if (!name || !name.trim()) {
        return res.status(400).json({ error: 'Name is required.' });
    }
    if (!email || !email.trim()) {
        return res.status(400).json({ error: 'Email is required.' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    // Build the email
    const subjectsList = Array.isArray(subjects) && subjects.length > 0 ? subjects.join(', ') : '';
    const subjectLine = `New Trial Lesson Enquiry: ${name}${subjectsList ? ` (${subjectsList})` : ''}`;

    const htmlBody = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
            <div style="background: linear-gradient(135deg, #1a2332 0%, #243447 100%); padding: 32px; text-align: center;">
                <h1 style="color: #d4af37; margin: 0; font-size: 22px; font-weight: 600;">New Trial Lesson Enquiry</h1>
                <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0; font-size: 14px;">Submitted via shorelinetutoring.com.au</p>
            </div>
            <div style="padding: 32px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 140px;">Name</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1a2332; font-size: 15px;">${escapeHtml(name)}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1a2332; font-size: 15px;"><a href="mailto:${escapeHtml(email)}" style="color: #d4af37; text-decoration: none;">${escapeHtml(email)}</a></td>
                    </tr>
                    ${phone ? `
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1a2332; font-size: 15px;"><a href="tel:${escapeHtml(phone)}" style="color: #d4af37; text-decoration: none;">${escapeHtml(phone)}</a></td>
                    </tr>` : ''}
                    ${subjectsList ? `
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Subjects</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1a2332; font-size: 15px;">${escapeHtml(subjectsList)}</td>
                    </tr>` : ''}
                </table>
                ${message ? `
                <div style="margin-top: 24px;">
                    <p style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 8px;">Goals & Message</p>
                    <div style="background: #f9fafb; border-radius: 8px; padding: 16px; color: #1a2332; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</div>
                </div>` : ''}
            </div>
            <div style="padding: 16px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb; text-align: center;">
                <p style="margin: 0; color: #9ca3af; font-size: 12px;">Shoreline Tutoring: Contact Form</p>
            </div>
        </div>
    `;

    try {
        await sendEmail({
            to: process.env.EMAIL_TO || 'contact@shorelinetutoring.com.au',
            subject: subjectLine,
            htmlBody,
            replyTo: email,
        });

        console.log(`✅ Email sent for enquiry from ${name} (${email})`);
        res.json({ success: true, message: 'Your enquiry has been sent! We\'ll be in touch soon.' });
    } catch (err) {
        console.error('❌ Failed to send email:', err);
        res.status(500).json({ error: 'Something went wrong. Please try emailing us directly at contact@shorelinetutoring.com.au' });
    }
});

// --- HTML escaping utility ---
function escapeHtml(text) {
    if (!text) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// --- Start server / Export for Vercel ---
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Shoreline Tutoring API running on http://localhost:${PORT}`);
    });
}

export default app;
