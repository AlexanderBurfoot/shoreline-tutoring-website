/**
 * The two emails an enquiry sends: the notification to Shoreline and the
 * confirmation back to the parent. Kept apart from the delivery code in
 * src/app/api/contact/route.ts so the wording can be read and tested on its own.
 */
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, SITE_URL } from './site';
import { VENUE_ADDRESS } from '../data/groupClassLaunch';

function escapeHtml(text: string) {
    if (!text) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/** One label and value row of the enquiry email, or nothing when the value is empty. */
function emailDetailRow(label: string, value: string) {
    if (!value) return '';
    return `
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">${escapeHtml(label)}</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1a2332; font-size: 15px;">${escapeHtml(value)}</td>
                    </tr>`;
}

/** Their own first name, escaped and capped, for the greeting. */
function greetingName(name: string) {
    const first = String(name).trim().split(/\s+/)[0] ?? '';
    return escapeHtml(first.slice(0, 40));
}

export interface EnquiryFields {
    enquiryLabel: string;
    name: string;
    email: string;
    phone: string;
    learningFormat: string;
    courseChoice: string;
    dayChoice: string;
    subjectsList: string;
    message: string;
}

/** The enquiry as it arrives in the Shoreline inbox. */
export function ownerEnquiryEmailHtml({ enquiryLabel, name, email, phone, learningFormat, courseChoice, dayChoice, subjectsList, message }: EnquiryFields) {
    return `        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
            <div style="background: linear-gradient(135deg, #1a2332 0%, #243447 100%); padding: 32px; text-align: center;">
                <h1 style="color: #EAC54D; margin: 0; font-size: 22px; font-weight: 600;">New ${escapeHtml(enquiryLabel)} Enquiry</h1>
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
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1a2332; font-size: 15px;"><a href="mailto:${escapeHtml(email)}" style="color: #EAC54D; text-decoration: none;">${escapeHtml(email)}</a></td>
                    </tr>
                    ${phone ? `
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1a2332; font-size: 15px;"><a href="tel:${escapeHtml(phone)}" style="color: #EAC54D; text-decoration: none;">${escapeHtml(phone)}</a></td>
                    </tr>` : ''}
                    ${emailDetailRow('Format', learningFormat)}
                    ${emailDetailRow('Course', courseChoice)}
                    ${emailDetailRow('Day', dayChoice)}
                    ${emailDetailRow('Subjects', subjectsList)}
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
}

/** One row of the "your enquiry" summary, or nothing when the value is empty. */
function summaryRow(label: string, value: string) {
    if (!value) return '';
    return `
                            <tr>
                                <td style="padding: 10px 16px; background: #ffffff; border-bottom: 1px solid #f0f1f3; color: #6b7280; font-size: 13px; width: 40%;">${escapeHtml(label)}</td>
                                <td style="padding: 10px 16px; background: #ffffff; border-bottom: 1px solid #f0f1f3; color: #1a2332; font-size: 14px; font-weight: 600;">${escapeHtml(value)}</td>
                            </tr>`;
}

/** One numbered step of "what happens next". */
function nextStepRow(position: number, title: string, text: string) {
    return `
                        <tr>
                            <td style="padding: 0 12px 16px 0; vertical-align: top; width: 34px;">
                                <div style="width: 26px; height: 26px; border-radius: 13px; background: #EAC54D; color: #1a2332; font-size: 13px; font-weight: 700; text-align: center; line-height: 26px;">${position}</div>
                            </td>
                            <td style="padding: 0 0 16px; vertical-align: top;">
                                <div style="color: #1a2332; font-size: 15px; font-weight: 600;">${title}</div>
                                <div style="color: #6b7280; font-size: 14px; line-height: 1.6;">${text}</div>
                            </td>
                        </tr>`;
}

export interface ConfirmationFields {
    name: string;
    learningFormat: string;
    subjectsList: string;
    courseChoice: string;
    dayChoice: string;
}

/**
 * The confirmation back to the parent, so they are not left wondering whether
 * the form worked, and so they have their own record of what they asked for.
 *
 * Deliberately echoes only their first name and the choices they ticked, never
 * their free-text message: the enquiry endpoint will send to any address given
 * to it, and a near-fixed body makes it useless for relaying content to someone
 * else. Laid out in tables with inline styles, which is what email clients
 * render reliably.
 */
export function parentConfirmationEmailHtml({ name, learningFormat, subjectsList, courseChoice, dayChoice }: ConfirmationFields) {
    const summary = [
        summaryRow('Learning format', learningFormat),
        summaryRow('Course', courseChoice),
        summaryRow('Preferred day', dayChoice),
        summaryRow('Subjects', subjectsList),
    ].join('');

    const isGroup = Boolean(courseChoice || dayChoice);
    const steps = [
        ['We read your enquiry', 'One of our tutors goes through your goals and the subjects you asked about.'],
        ['We get in touch', 'You will hear from us within 24 hours to arrange a time that suits you.'],
        isGroup
            ? ['Your first lesson is free', 'Sit in on a full class before you decide. No payment up front, and no obligation to continue.']
            : ['Your first lesson is free', 'Meet your tutor and see how a session runs. No payment up front, and no obligation to continue.'],
    ];

    return `
    <div style="background: #f4f5f7; padding: 24px 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; border: 1px solid #e5e7eb;">
            <tr>
                <td style="background: #1a2332; padding: 28px 32px; text-align: center;">
                    <img src="${SITE_URL}/Shoreline-Logo.png" width="190" alt="Shoreline Tutoring" style="display: block; margin: 0 auto 10px; width: 190px; max-width: 60%; height: auto;">
                    <!-- The logo file is the bird and book alone, so the name is set here. -->
                    <div style="color: #EAC54D; font-size: 12px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 16px;">Shoreline Tutoring</div>
                    <h1 style="color: #ffffff; margin: 0; font-size: 21px; font-weight: 600;">We are sending you this email to thank you for choosing Shoreline Tutoring, and to confirm we have your enquiry</h1>
                    <p style="color: #EAC54D; margin: 6px 0 0; font-size: 14px; letter-spacing: 0.4px;">We will reply within 24 hours</p>
                </td>
            </tr>
            <tr>
                <td style="padding: 32px 32px 8px; color: #1a2332; font-size: 15px; line-height: 1.7;">
                    <p style="margin: 0 0 16px;">Hi ${greetingName(name)},</p>
                    <p style="margin: 0 0 8px;">Thank you for getting in touch with Shoreline Tutoring. Here is what you asked about, so you have it on record.</p>
                </td>
            </tr>
            ${summary ? `
            <tr>
                <td style="padding: 8px 32px 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border: 1px solid #f0f1f3; border-radius: 10px; overflow: hidden; border-collapse: separate;">
                        <tr>
                            <td colspan="2" style="padding: 10px 16px; background: #fbf7e8; color: #8a6d0b; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">Your enquiry</td>
                        </tr>${summary}
                    </table>
                </td>
            </tr>` : ''}
            <tr>
                <td style="padding: 28px 32px 8px;">
                    <h2 style="font-size: 16px; margin: 0 0 16px; color: #1a2332;">What happens next</h2>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                        ${steps.map(([title, text], index) => nextStepRow(index + 1, title, text)).join('')}
                    </table>
                </td>
            </tr>
            <tr>
                <td style="padding: 8px 32px 28px; color: #1a2332; font-size: 15px; line-height: 1.7;">
                    <p style="margin: 0 0 20px;">Need us sooner? Call <a href="tel:${CONTACT_PHONE_E164}" style="color: #8a6d0b; font-weight: 600;">${CONTACT_PHONE_DISPLAY}</a> or simply reply to this email.</p>
                    <a href="${SITE_URL}" style="display: inline-block; background: #EAC54D; color: #1a2332; font-size: 15px; font-weight: 700; text-decoration: none; padding: 12px 26px; border-radius: 8px;">Visit our website</a>
                </td>
            </tr>
            <tr>
                <td style="padding: 20px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px; line-height: 1.7; text-align: center;">
                    <div style="color: #6b7280; font-weight: 600;">Shoreline Tutoring</div>
                    <div>In-person classes at ${VENUE_ADDRESS}, and online across Australia</div>
                    <div><a href="${SITE_URL}" style="color: #9ca3af;">shorelinetutoring.com.au</a> · <a href="mailto:${CONTACT_EMAIL}" style="color: #9ca3af;">${CONTACT_EMAIL}</a> · ${CONTACT_PHONE_DISPLAY}</div>
                    <div style="margin-top: 8px;">If you did not send this enquiry, you can ignore this email.</div>
                </td>
            </tr>
        </table>
    </div>
    `;
}
