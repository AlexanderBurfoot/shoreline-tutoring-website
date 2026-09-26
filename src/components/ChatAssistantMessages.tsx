"use client";
import Link from 'next/link';
import type { RefObject } from 'react';

import type { ChatMessage } from './chatMessage';

interface ChatAssistantMessagesProps {
    messages: ChatMessage[];
    /** True while the AI fallback is being asked, so a waiting line is shown. */
    isWaiting: boolean;
    /** The scrolling element, which the window keeps pinned to the newest message. */
    listRef: RefObject<HTMLDivElement | null>;
}

/**
 * Shown under an answer the model chose rather than keyword matching. The
 * wording is the site's own either way, so the caveat is about the match being
 * wrong, not the answer being invented.
 */
const AI_LABEL = 'AI matched your question to this answer. Ask our team if it is not what you meant.';

const ChatAssistantMessages = ({ messages, isWaiting, listRef }: ChatAssistantMessagesProps) => (
    <div className="chat-assistant__messages" ref={listRef} aria-live="polite" aria-atomic="false">
        {messages.map((message) => (
            <div
                key={message.id}
                className={`chat-assistant__message chat-assistant__message--${message.author}`}
            >
                <p className="chat-assistant__bubble">{message.text}</p>

                {message.link && (
                    <Link className="chat-assistant__answer-link" href={message.link.href}>
                        {message.link.label}
                    </Link>
                )}

                {message.source === 'ai' && <p className="chat-assistant__ai-label">{AI_LABEL}</p>}
            </div>
        ))}

        {isWaiting && (
            <p className="chat-assistant__waiting" role="status">
                Looking into that...
            </p>
        )}
    </div>
);

export default ChatAssistantMessages;
