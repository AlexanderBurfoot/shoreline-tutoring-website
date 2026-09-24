"use client";
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import './ChatAssistant.css';
import ChatAssistantMessages from './ChatAssistantMessages';
import { createMessage, type ChatMessage } from './chatMessage';
import { findEntryById, knowledgeTopics } from '../data/chatbotKnowledge';
import { trackEvent } from '../lib/analytics';
import { MAX_QUESTION_LENGTH } from '../lib/chatbotFallback';
import { REDACTION_NOTICE, resolveQuestion } from '../lib/chatbotConversation';

/**
 * Archimedes is the cockatoo in the logo, and the launcher shows him, so the
 * greeting introduces him by name. It says what he is in the same breath: a
 * parent should never be left wondering whether they are talking to a person.
 */
const GREETING =
    "Hello! I'm Archimedes, the cockatoo from our logo. I can help with prices, subjects and " +
    'classes. Pick a topic or type a question.';

/** Sits next to the message box, where it is read rather than scrolled past. */
const PRIVACY_NOTICE = 'Please do not share names or personal details here.';

/** The bird from the logo, cut out of it so the two cannot diverge. */
const LAUNCHER_ICON = '/chat-bird.png';
const LAUNCHER_ICON_SIZE = 38;

const assistantMessage = (text: string) => createMessage({ author: 'assistant', text });

const ChatAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([assistantMessage(GREETING)]);
    const [openTopicId, setOpenTopicId] = useState<string | null>(null);
    const [isWaiting, setIsWaiting] = useState(false);
    const [draft, setDraft] = useState('');
    const messageListRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const append = useCallback((...added: ChatMessage[]) => {
        setMessages((current) => [...current, ...added]);
    }, []);

    /* The newest message is kept in view, including the waiting line. The list
       scrolls within itself, so the page behind the chat does not move. */
    useEffect(() => {
        const list = messageListRef.current;
        if (list) {
            list.scrollTop = list.scrollHeight;
        }
    }, [messages, isWaiting]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        inputRef.current?.focus();

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', closeOnEscape);
        return () => window.removeEventListener('keydown', closeOnEscape);
    }, [isOpen]);

    const toggleOpen = () => {
        const opening = !isOpen;
        setIsOpen(opening);
        if (opening) {
            trackEvent('chat_opened');
        }
    };

    /** A suggested question, answered from the site's own content. */
    const askSuggestion = (entryId: string) => {
        const entry = findEntryById(entryId);
        if (!entry) {
            return;
        }

        setOpenTopicId(null);
        append(
            createMessage({ author: 'visitor', text: entry.question }),
            createMessage({ author: 'assistant', text: entry.answer, link: entry.link, source: 'knowledge' }),
        );
        trackEvent('chat_answer', { source: 'knowledge', entry: entry.id });
    };

    const submitQuestion = async (event: React.FormEvent) => {
        event.preventDefault();
        const question = draft.trim();
        if (question.length === 0 || isWaiting) {
            return;
        }

        setDraft('');
        setOpenTopicId(null);
        setIsWaiting(true);

        const resolved = await resolveQuestion(question);
        const notice = resolved.redacted ? [assistantMessage(REDACTION_NOTICE)] : [];

        append(
            createMessage({ author: 'visitor', text: resolved.question }),
            ...notice,
            createMessage({
                author: 'assistant',
                text: resolved.reply.text,
                link: resolved.reply.link,
                source: resolved.reply.source,
            }),
        );
        setIsWaiting(false);
        trackEvent('chat_answer', { source: resolved.reply.source });
    };

    const openTopic = knowledgeTopics.find((topic) => topic.id === openTopicId);

    return (
        <>
            <button
                type="button"
                className="chat-assistant__launcher"
                onClick={toggleOpen}
                aria-expanded={isOpen}
                aria-controls="chat-assistant-panel"
            >
                <span className="sr-only">{isOpen ? 'Close chat' : 'Ask Archimedes'}</span>
                {isOpen ? (
                    <span className="chat-assistant__launcher-close" aria-hidden="true">&times;</span>
                ) : (
                    <Image
                        src={LAUNCHER_ICON}
                        alt=""
                        width={LAUNCHER_ICON_SIZE}
                        height={LAUNCHER_ICON_SIZE}
                        aria-hidden="true"
                    />
                )}
            </button>

            <div
                id="chat-assistant-panel"
                className={`chat-assistant ${isOpen ? 'chat-assistant--open' : ''}`}
                role="dialog"
                aria-label="Ask Archimedes"
                aria-hidden={!isOpen}
                hidden={!isOpen}
            >
                <div className="chat-assistant__header">
                    <p className="chat-assistant__title">Ask Archimedes</p>
                    <button type="button" className="chat-assistant__close" onClick={() => setIsOpen(false)}>
                        <span className="sr-only">Close chat</span>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <ChatAssistantMessages messages={messages} isWaiting={isWaiting} listRef={messageListRef} />

                <div className="chat-assistant__choices">
                    {openTopic
                        ? openTopic.entryIds.map((entryId) => (
                              <button
                                  key={entryId}
                                  type="button"
                                  className="chat-assistant__chip"
                                  onClick={() => askSuggestion(entryId)}
                              >
                                  {findEntryById(entryId)?.question}
                              </button>
                          ))
                        : knowledgeTopics.map((topic) => (
                              <button
                                  key={topic.id}
                                  type="button"
                                  className="chat-assistant__chip"
                                  onClick={() => setOpenTopicId(topic.id)}
                              >
                                  {topic.label}
                              </button>
                          ))}
                </div>

                <form className="chat-assistant__composer" onSubmit={submitQuestion}>
                    <label className="sr-only" htmlFor="chat-assistant-input">
                        Your question
                    </label>
                    <input
                        id="chat-assistant-input"
                        ref={inputRef}
                        className="chat-assistant__input"
                        value={draft}
                        onChange={(event) => setDraft(event.target.value)}
                        maxLength={MAX_QUESTION_LENGTH}
                        placeholder="Type a question"
                        autoComplete="off"
                    />
                    <button type="submit" className="chat-assistant__send" disabled={isWaiting}>
                        Send
                    </button>
                </form>

                <p className="chat-assistant__privacy">{PRIVACY_NOTICE}</p>
            </div>
        </>
    );
};

export default ChatAssistant;
