import { Section, Message, Heading3, Heading2 } from '../../src';
import { attachmentMessageItem, statusItems, textMessageItem, user } from '../../const';

export default function MessagesPage() {
    return (
        <div className="space-y-4">
            <Heading2>Messages</Heading2>
            <Heading3>Normal text message</Heading3>
            <Section className="space-y-2 bg-white">
                <Message messageItem={textMessageItem} />
            </Section>
            <Heading3>Without bubble</Heading3>
            <Section className="space-y-2 bg-white">
                <Message isBubble={false} messageItem={textMessageItem} />
            </Section>
            <Heading3>With user (position start)</Heading3>
            <Section className="space-y-2 bg-white">
                <Message messageItem={textMessageItem} user={user} position="start" />
                <Message isBubble={false} messageItem={textMessageItem} user={user} position="start" />
            </Section>
            <Heading3>Is owner</Heading3>
            <Section className="space-y-2 bg-white">
                <Message isOwner messageItem={textMessageItem} user={user} position="start" />
            </Section>
            <Heading3>Position end</Heading3>
            <Section className="space-y-2 bg-white">
                <Message messageItem={textMessageItem} user={user} position="end" />
                <Message isOwner messageItem={textMessageItem} user={user} position="end" />
            </Section>
            <Heading3>Has status</Heading3>
            <Section className="space-y-2 bg-white">
                <Message messageItem={textMessageItem} status="seen" statusItems={statusItems} />
                <Message isOwner messageItem={textMessageItem} status="error" statusItems={statusItems} />
            </Section>
            <Heading3>Attachment Message</Heading3>
            <Section className="space-y-2 bg-white">
                <Message user={user} messageItem={attachmentMessageItem} position="start" status="seen" statusItems={statusItems} />
            </Section>
        </div>
    )
}
