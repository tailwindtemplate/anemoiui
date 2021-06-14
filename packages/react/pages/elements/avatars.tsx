import { Section } from "../../src";
import {Avatars} from "../../src/elements/avatars";
import {members} from "../../const";

export default function PreviewAvatars() {
    return (
        <div className="p-2">
            <div className="text-3xl my-8">Avatars</div>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Avatars members={members} newMessage={22} />
            </Section>

            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Avatars newMessage={22} />
            </Section>
        </div>
    );
}
