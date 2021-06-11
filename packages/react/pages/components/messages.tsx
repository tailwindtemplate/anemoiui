import { Section, Message } from '../../src';
import { attachmentMessageItem, statusItems, textMessageItem, user } from '../../const';

export default function MessagesPage() {
    return (
        <div>
            <div>Text message</div>
            <Section className="space-y-2 bg-gray-100">
                <Message messageItem={textMessageItem} user={user} position="start" statusItems={statusItems} />
                <Message messageItem={textMessageItem} user={user} status="seen" statusItems={statusItems} />
                <Message messageItem={textMessageItem} user={user} position="end" status="error" statusItems={statusItems} />
                <Message messageItem={textMessageItem} user={user} position="start" status="sent" isOwner statusItems={statusItems} />
                <Message messageItem={textMessageItem} user={user} status="sending" isOwner statusItems={statusItems} />
                <Message messageItem={textMessageItem} user={user} position="end" status="error" isOwner statusItems={statusItems} />
            </Section>
            <div className="mt-4">Attachment Message</div>
            <Section className="space-y-2 bg-gray-100">
                <Message user={user} messageItem={attachmentMessageItem} position="start" status="seen" statusItems={statusItems} />
                <Message user={user} messageItem={attachmentMessageItem} position="start" status="error" isOwner statusItems={statusItems} />
            </Section>
        </div>
    )
}
