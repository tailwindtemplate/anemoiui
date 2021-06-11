import { AttachmentsMessage, Section, TextMessage } from '../../src';
import { attachmentsMessage, textMessage } from '../../const';

export default function CardsPage() {
    return (
        <div>
            <Section>
                <div>Text message</div>
                <TextMessage message={textMessage} />
            </Section>
            <Section>
                <div>Attachment message</div>
                <AttachmentsMessage className="max-w-sm md:max-w-xl" attachments={attachmentsMessage} />
            </Section>
        </div>
    )
}
