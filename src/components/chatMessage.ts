/** One line of the chat transcript, as the window renders it. */
import type { KnowledgeLink } from '../data/chatbotKnowledge';
import type { ReplySource } from '../lib/chatbotConversation';

export interface ChatMessage {
    id: string;
    author: 'assistant' | 'visitor';
    text: string;
    link?: KnowledgeLink;
    /** Absent on the visitor's own messages. */
    source?: ReplySource;
}

/** Ids only need to be unique within one open chat, so a counter is enough. */
let messageCount = 0;

export function createMessage(message: Omit<ChatMessage, 'id'>): ChatMessage {
    messageCount += 1;
    return { id: `chat-${messageCount}`, ...message };
}
