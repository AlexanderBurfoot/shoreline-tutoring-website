import { useId } from 'react';

export interface ChoiceOption {
    value: string;
    label: string;
}

interface ChoiceChipsProps {
    label: string;
    options: ChoiceOption[];
    isSelected: (value: string) => boolean;
    onToggle: (value: string) => void;
}

/**
 * A labelled row of toggle chips, used for each multiple-choice question in the
 * enquiry form. The row is a named group so screen readers announce the
 * question along with each option.
 */
const ChoiceChips = ({ label, options, isSelected, onToggle }: ChoiceChipsProps) => {
    const labelId = useId();

    return (
        <div className="cta__input-group cta__input-group--full" role="group" aria-labelledby={labelId}>
            <span id={labelId} className="cta__label-text">{label}</span>
            <div className="cta__subjects-grid">
                {options.map((option) => {
                    const isActive = isSelected(option.value);
                    return (
                        <button
                            key={option.value}
                            type="button"
                            className={`cta__subject-chip ${isActive ? 'cta__subject-chip--active' : ''}`}
                            onClick={() => onToggle(option.value)}
                            aria-pressed={isActive}
                        >
                            {isActive && <span className="cta__chip-check">✓</span>}
                            {option.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ChoiceChips;
