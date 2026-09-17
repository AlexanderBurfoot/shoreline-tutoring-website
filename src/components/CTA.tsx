"use client";
import {
    useEffect,
    useState,
    type ChangeEvent,
    type Dispatch,
    type FormEvent,
    type ReactNode,
    type SetStateAction,
} from 'react';
import { useRouter } from 'next/navigation';
import './CTA.css';
import ChoiceChips, { type ChoiceOption } from './ChoiceChips';
import { trackAdsConversion, trackEvent } from '../lib/analytics';
import {
    CLASS_PREFERENCE_KEY,
    GROUP_CLASS_DAYS,
    GROUP_FORMAT,
    LEARNING_FORMATS,
    COURSES,
    VENUE_ADDRESS,
    VENUE_MAP_URL,
    type ClassPreference,
} from '../data/groupClassLaunch';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '../lib/site';

interface FormData {
    name: string;
    email: string;
    phone: string;
    format: string;
    subjects: string[];
    /** A MathsCourse id, asked only for group enquiries. */
    course: string;
    /** A GroupClassDay id, asked only for group enquiries. */
    day: string;
    message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const SUBJECTS = [
    'English', 'Mathematics', 'Physics', 'Chemistry', 'Economics',
    'Business Studies', 'Selective High School Exam', 'Opportunity Classes Exam', 'NAPLAN Preparation', 'Other',
];

const toOptions = (values: string[]): ChoiceOption[] => values.map((value) => ({ value, label: value }));

const FORMAT_OPTIONS = toOptions(LEARNING_FORMATS);
const SUBJECT_OPTIONS = toOptions(SUBJECTS);
const COURSE_OPTIONS: ChoiceOption[] = COURSES.map((course) => ({ value: course.id, label: course.shortName }));
const DAY_OPTIONS: ChoiceOption[] = GROUP_CLASS_DAYS.map((day) => ({ value: day.id, label: day.shortLabel }));

const emptyForm = (format: string): FormData => ({
    name: '',
    email: '',
    phone: '',
    format,
    subjects: [],
    course: '',
    day: '',
    message: '',
});

/** For single-choice questions: picking the chosen option again clears it. */
const toggleSingle = (current: string, value: string) => (current === value ? '' : value);

/** "A, B or C" */
const joinWithOr = (items: string[]) =>
    items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`;

/**
 * The course and day picked in the launch popup. Read once and cleared, and
 * validated against the real options so a stale or malformed value is ignored.
 * Returns null when nothing was picked, or when storage is unavailable.
 */
function readClassPreference(): ClassPreference | null {
    if (typeof window === 'undefined') return null;
    try {
        const stored = sessionStorage.getItem(CLASS_PREFERENCE_KEY);
        sessionStorage.removeItem(CLASS_PREFERENCE_KEY);
        if (!stored) return null;
        const parsed = JSON.parse(stored) as Partial<ClassPreference>;
        return {
            course: COURSES.find((course) => course.id === parsed.course)?.id ?? null,
            day: GROUP_CLASS_DAYS.find((day) => day.id === parsed.day)?.id ?? null,
        };
    } catch {
        return null;
    }
}

/**
 * Pre-selects the popup's choice when the form mounts. Applied after mount
 * rather than during render, so the server and client agree on the initial
 * form. The popup always navigates to the group page, whose form mounts fresh.
 */
function useClassPreference(setFormData: Dispatch<SetStateAction<FormData>>) {
    useEffect(() => {
        const applyPreference = () => {
            const preference = readClassPreference();
            if (!preference) return;
            setFormData((prev) => ({
                ...prev,
                format: GROUP_FORMAT,
                course: preference.course ?? prev.course,
                day: preference.day ?? prev.day,
            }));
        };

        applyPreference();
    }, [setFormData]);
}

interface MissingChoice {
    message: string;
    /** Reported with the enquiry_failed event. */
    reason: string;
}

/** The first choice still needed before this enquiry can be sent, or null. */
function findMissingChoice(form: FormData): MissingChoice | null {
    if (form.format !== GROUP_FORMAT) {
        return form.subjects.length === 0
            ? { message: 'Please select at least one subject of interest.', reason: 'no_subject_selected' }
            : null;
    }
    if (!form.course) {
        const courses = joinWithOr(COURSE_OPTIONS.map((option) => option.label));
        return { message: `Please choose a course: ${courses}.`, reason: 'no_course_selected' };
    }
    if (!form.day) {
        const days = joinWithOr(DAY_OPTIONS.map((option) => option.label));
        return { message: `Please choose ${days}.`, reason: 'no_day_selected' };
    }
    return null;
}

/**
 * What the enquiry route receives. A group enquiry names the course and day
 * instead of subjects, so the email says which class to place the student in.
 */
function buildPayload(form: FormData, honeypot: string) {
    const isGroup = form.format === GROUP_FORMAT;
    const course = COURSES.find((option) => option.id === form.course);
    const day = GROUP_CLASS_DAYS.find((option) => option.id === form.day);

    return {
        name: form.name,
        email: form.email,
        phone: form.phone,
        format: form.format,
        subjects: isGroup ? [] : form.subjects,
        course: isGroup && course ? `Year 12 ${course.name}` : '',
        day: isGroup && day ? day.shortLabel : '',
        message: form.message,
        company: honeypot,
    };
}

/**
 * Analytics payload for an enquiry. Deliberately excludes name, email, phone
 * and message: the data layer is readable by Google Tag Manager and anything
 * installed through it, so no personal detail goes into it.
 */
function analyticsShape(form: FormData) {
    const isGroup = form.format === GROUP_FORMAT;
    return {
        learning_format: form.format || 'unspecified',
        subject_count: isGroup ? 0 : form.subjects.length,
        ...(isGroup
            ? { group_course: form.course || 'unspecified', group_day: form.day || 'unspecified' }
            : {}),
    };
}

interface ContactFieldsProps {
    form: FormData;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ContactFields = ({ form, onChange }: ContactFieldsProps) => (
    <>
        <div className="cta__form-row cta__form-row--two">
            <div className="cta__input-group">
                <label htmlFor="name" className="cta__label-text">Your Name</label>
                <input type="text" id="name" className="cta__input" placeholder="John Smith" value={form.name} onChange={onChange} required />
            </div>
            <div className="cta__input-group">
                <label htmlFor="phone" className="cta__label-text">Phone Number</label>
                <input type="tel" id="phone" className="cta__input" placeholder="0400 000 000" value={form.phone} onChange={onChange} />
            </div>
        </div>
        <div className="cta__input-group cta__input-group--full">
            <label htmlFor="email" className="cta__label-text">Email Address</label>
            <input type="email" id="email" className="cta__input" placeholder="john@example.com" value={form.email} onChange={onChange} required />
        </div>
    </>
);

const SuccessNotice = () => (
    <div className="cta__success">
        <div className="cta__success-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        </div>
        <h3 className="cta__success-title">Redirecting...</h3>
        <p className="cta__success-message">Your enquiry has been sent successfully.</p>
    </div>
);

const ErrorNotice = ({ message }: { message: string }) => (
    <div className="cta__error">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
        <span>{message}</span>
    </div>
);

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => (
    <button
        type="submit"
        className={`btn btn-primary cta__submit ${isSubmitting ? 'cta__submit--loading' : ''}`}
        disabled={isSubmitting}
    >
        {isSubmitting ? (
            <>
                <span className="cta__spinner"></span>
                Sending...
            </>
        ) : (
            <>
                Book Your Free Session
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </>
        )}
    </button>
);

const ContactOptions = () => (
    <div className="cta__contact-options">
        <p className="cta__or">Or reach out directly</p>
        <div className="cta__options">
            <a href={`tel:${CONTACT_PHONE_E164}`} className="cta__option">
                <span className="cta__option-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                </span>
                <span>{CONTACT_PHONE_DISPLAY}</span>
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="cta__option">
                <span className="cta__option-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                </span>
                <span>{CONTACT_EMAIL}</span>
            </a>
            <a href={VENUE_MAP_URL} target="_blank" rel="noopener noreferrer" className="cta__option">
                <span className="cta__option-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                </span>
                <span>{VENUE_ADDRESS}</span>
            </a>
        </div>
    </div>
);

interface CTAProps {
    /** Format selected when the form loads, on pages about a single format. */
    defaultFormat?: string;
    /** Small label above the heading. */
    label?: string;
    /** Heading; defaults to the general enquiry heading. */
    title?: ReactNode;
    /** Line under the heading; defaults to the general enquiry description. */
    description?: ReactNode;
}

const CTA = ({ defaultFormat = '', label = 'Start Your Journey', title, description }: CTAProps) => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>(() => emptyForm(defaultFormat));
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    // Honeypot: hidden from real users; bots that fill it are rejected server-side.
    const [honeypot, setHoneypot] = useState('');
    useClassPreference(setFormData);

    const isGroupEnquiry = formData.format === GROUP_FORMAT;
    const update = (changes: (prev: FormData) => Partial<FormData>) =>
        setFormData((prev) => ({ ...prev, ...changes(prev) }));

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        update(() => ({ [id]: value }));
    };
    const handleSubjectToggle = (subject: string) => update((prev) => ({
        subjects: prev.subjects.includes(subject)
            ? prev.subjects.filter((s) => s !== subject)
            : [...prev.subjects, subject],
    }));

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        const enquiryShape = analyticsShape(formData);
        trackEvent('enquiry_submitted', enquiryShape);

        const missing = findMissingChoice(formData);
        if (missing) {
            setStatus('error');
            setErrorMessage(missing.message);
            trackEvent('enquiry_failed', { ...enquiryShape, reason: missing.reason });
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(buildPayload(formData, honeypot)),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong.');
            }

            setStatus('success');
            // Fired here rather than on /thank-you so a visitor who bookmarks
            // that page cannot inflate the count.
            trackEvent('enquiry_success', enquiryShape);
            trackAdsConversion();
            setFormData(emptyForm(defaultFormat));
            router.push('/thank-you');
        } catch (err) {
            setStatus('error');
            setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try emailing us directly.');
            trackEvent('enquiry_failed', { ...enquiryShape, reason: 'submission_error' });
        }
    };

    return (
        <section className="cta section" id="contact">
            <div className="cta__background">
                <div className="cta__pattern"></div>
            </div>

            <div className="container">
                <div className="cta__content">
                    <span className="cta__label">{label}</span>
                    <h2 className="cta__title">
                        {title ?? (
                            <>
                                Ready to Unlock Your
                                <span className="cta__title-accent"> Academic Potential!</span>
                            </>
                        )}
                    </h2>
                    <p className="cta__description">
                        {description ?? 'Book a free session today, one-on-one or in a small group, and discover how our exclusive, individualised approach can transform your academic journey. Limited spots available.'}
                    </p>

                    {status === 'success' ? (
                        <SuccessNotice />
                    ) : (
                        <form className="cta__form" onSubmit={handleSubmit}>
                            {/* Honeypot field: visually hidden, ignored by humans, filled by bots. */}
                            <input
                                type="text"
                                name="company"
                                className="cta__honeypot"
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                                value={honeypot}
                                onChange={(e) => setHoneypot(e.target.value)}
                            />
                            <ContactFields form={formData} onChange={handleChange} />
                            <ChoiceChips
                                label="How would you like to learn?"
                                options={FORMAT_OPTIONS}
                                isSelected={(value) => formData.format === value}
                                onToggle={(value) => update((prev) => ({ format: toggleSingle(prev.format, value) }))}
                            />
                            {/* Group classes are Year 12 only and each course is its own
                                class, so the course and day say which class to place the
                                student in, and asking for subjects would duplicate that. */}
                            {isGroupEnquiry ? (
                                <>
                                    <ChoiceChips
                                        label="Which Year 12 course?"
                                        options={COURSE_OPTIONS}
                                        isSelected={(value) => formData.course === value}
                                        onToggle={(value) => update((prev) => ({ course: toggleSingle(prev.course, value) }))}
                                    />
                                    <ChoiceChips
                                        label="Which day suits?"
                                        options={DAY_OPTIONS}
                                        isSelected={(value) => formData.day === value}
                                        onToggle={(value) => update((prev) => ({ day: toggleSingle(prev.day, value) }))}
                                    />
                                </>
                            ) : (
                                <ChoiceChips
                                    label="Subjects of Interest"
                                    options={SUBJECT_OPTIONS}
                                    isSelected={(value) => formData.subjects.includes(value)}
                                    onToggle={handleSubjectToggle}
                                />
                            )}
                            <div className="cta__input-group cta__input-group--full">
                                <label htmlFor="message" className="cta__label-text">Tell us about your goals</label>
                                <textarea
                                    id="message"
                                    className="cta__input cta__textarea"
                                    placeholder="Share your academic goals and any specific areas you'd like to improve..."
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            {status === 'error' && <ErrorNotice message={errorMessage} />}
                            <SubmitButton isSubmitting={status === 'submitting'} />
                        </form>
                    )}

                    <ContactOptions />
                </div>
            </div>
        </section>
    );
};

export default CTA;
