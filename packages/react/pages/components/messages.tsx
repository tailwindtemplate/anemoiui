import { Section, Message } from '../../src';
import { attachmentMessageItem, statusItems, textMessageItem, user } from '../../const';

export default function MessagesPage() {
    return (
        <div>
            <div>Normal text message</div>
            <Section className="space-y-2 bg-gray-100">
                <Message messageItem={textMessageItem} />
            </Section>
            <div className="mt-4">Without bubble</div>
            <Section className="space-y-2 bg-gray-100">
                <Message isBubble={false} messageItem={textMessageItem} />
            </Section>
            <div className="mt-4">With user (position start)</div>
            <Section className="space-y-2 bg-gray-100">
                <Message messageItem={textMessageItem} user={user} position="start" />
                <Message isBubble={false} messageItem={textMessageItem} user={user} position="start" />
            </Section>
            <div className="mt-4">Is owner</div>
            <Section className="space-y-2 bg-gray-100">
                <Message isOwner messageItem={textMessageItem} user={user} position="start" />
            </Section>
            <div className="mt-4">Position end</div>
            <Section className="space-y-2 bg-gray-100">
                <Message messageItem={textMessageItem} user={user} position="end" />
                <Message isOwner messageItem={textMessageItem} user={user} position="end" />
            </Section>
            <div className="mt-4">Has status</div>
            <Section className="space-y-2 bg-gray-100">
                <Message messageItem={textMessageItem} status="seen" statusItems={statusItems} />
                <Message isOwner messageItem={textMessageItem} status="error" statusItems={statusItems} />
            </Section>
            <div className="mt-4">Attachment Message</div>
            <Section className="space-y-2 bg-gray-100">
                <Message user={user} messageItem={attachmentMessageItem} position="start" status="seen" statusItems={statusItems} />
            </Section>
        </div>
    )
}
