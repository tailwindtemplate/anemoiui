import { Section} from '../../src';
import {ChatBoxes} from "../../src/sections/chat-boxes";

export default function PreviewChatBoxes() {
    return (
        <div className="space-y-4">
            <Section>
                <ChatBoxes />
            </Section>
        </div>
    );
}
