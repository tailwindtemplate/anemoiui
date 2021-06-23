import { ChatLayout } from '../../next-src/chat-layout';
import { ChannelHeader, MessageInput, ChannelMessages } from '../../src';
import { attachmentMessageItem, textMessageItem, user } from '../../src/const';

const messages = [
    {
        messageItem: textMessageItem,
        user,
        position: 'start'
    },
    {
        messageItem: attachmentMessageItem,
        user,
        position: 'start'
    },
    {
        messageItem: textMessageItem,
        user,
        position: 'start'
    }
]

export default function ChatPage() {
    return (
        <ChatLayout>
            <ChannelHeader avatar="" name="Channel Name" />
            <ChannelMessages messages={messages} />
            <MessageInput />
        </ChatLayout>
    )
}
