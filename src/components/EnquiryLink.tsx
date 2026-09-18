"use client";
import type { ReactNode } from 'react';
import { requestEnquiryFormat } from '../lib/enquiryFormat';

interface EnquiryLinkProps {
    /** The learning format to select in the enquiry form. */
    format: string;
    className?: string;
    children: ReactNode;
}

/** A link down to this page's enquiry form that arrives with a format already selected. */
const EnquiryLink = ({ format, className, children }: EnquiryLinkProps) => (
    <a href="#contact" className={className} onClick={() => requestEnquiryFormat(format)}>
        {children}
    </a>
);

export default EnquiryLink;
