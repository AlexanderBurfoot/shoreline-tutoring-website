import type { ChangeEvent, Ref } from 'react';
import { isPlausiblePhoneNumber } from '../lib/phoneNumber';

/**
 * How firmly to point out a phone number that looks wrong: not at all while it
 * is first being typed, gently once the visitor leaves the field, and firmly
 * once they have tried to send the enquiry with it.
 */
export type PhoneAttention = 'none' | 'blurred' | 'submitted';

const PHONE_NOTE_ID = 'phone-note';
const PHONE_NOTE = "That number doesn't look quite right. Check it, or leave it blank and we'll email you.";

/** True for a number worth querying. A blank field is fine: the phone is optional. */
export const phoneLooksWrong = (phone: string) => phone.trim() !== '' && !isPlausiblePhoneNumber(phone);

/** Marks a field the enquiry can be sent without. */
export const OptionalTag = () => <span className="cta__label-optional">(optional)</span>;

type FieldChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

interface PhoneFieldProps {
    phone: string;
    attention: PhoneAttention;
    onChange: FieldChangeHandler;
    onBlur: () => void;
    inputRef: Ref<HTMLInputElement>;
}

const PhoneField = ({ phone, attention, onChange, onBlur, inputRef }: PhoneFieldProps) => {
    const showNote = attention !== 'none' && phoneLooksWrong(phone);
    const isFirm = showNote && attention === 'submitted';
    const tone = isFirm ? 'firm' : 'gentle';

    return (
        <div className="cta__input-group">
            <label htmlFor="phone" className="cta__label-text">
                Phone Number <OptionalTag />
            </label>
            <input
                type="tel"
                id="phone"
                ref={inputRef}
                className={`cta__input ${showNote ? `cta__input--${tone}` : ''}`}
                placeholder="0400 000 000"
                value={phone}
                onChange={onChange}
                onBlur={onBlur}
                aria-invalid={isFirm}
                aria-describedby={showNote ? PHONE_NOTE_ID : undefined}
            />
            {/* Always rendered so screen readers announce the note when it appears. */}
            <p id={PHONE_NOTE_ID} className={`cta__field-note cta__field-note--${tone}`} aria-live="polite">
                {showNote ? PHONE_NOTE : ''}
            </p>
        </div>
    );
};

interface ContactFieldsProps {
    values: { name: string; email: string; phone: string };
    onChange: FieldChangeHandler;
    phoneAttention: PhoneAttention;
    onPhoneBlur: () => void;
    phoneInputRef: Ref<HTMLInputElement>;
}

const ContactFields = ({ values, onChange, phoneAttention, onPhoneBlur, phoneInputRef }: ContactFieldsProps) => (
    <>
        <div className="cta__form-row cta__form-row--two">
            <div className="cta__input-group">
                <label htmlFor="name" className="cta__label-text">Your Name</label>
                <input type="text" id="name" className="cta__input" placeholder="John Smith" value={values.name} onChange={onChange} required />
            </div>
            <PhoneField
                phone={values.phone}
                attention={phoneAttention}
                onChange={onChange}
                onBlur={onPhoneBlur}
                inputRef={phoneInputRef}
            />
        </div>
        <div className="cta__input-group cta__input-group--full">
            <label htmlFor="email" className="cta__label-text">Email Address</label>
            <input type="email" id="email" className="cta__input" placeholder="john@example.com" value={values.email} onChange={onChange} required />
        </div>
    </>
);

export default ContactFields;
