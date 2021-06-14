import { Badge, Section } from '../../src';
import { Avatars } from "../../src/elements/avatars";
import { avatars } from "../../const";

export default function PreviewAvatars() {
    return (
        <div className="p-2">
            <div className="text-3xl my-8">Avatars</div>
            <div>Plain</div>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Avatars />
            </Section>
            <div>One Image</div>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Avatars avatars={[avatars[0]]} />
            </Section>
            <div>More Images</div>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Avatars avatars={avatars} />
            </Section>
            <div>Width default badge</div>
            <Section className="mb-8 flex items-center justify-center space-x-4 border bg-white">
                <Avatars newMessage={22} />
                <Avatars avatars={avatars} newMessage={22} />
            </Section>
            <div>With custom children</div>
            <Section className="mb-8 flex items-center justify-center space-x-4 border bg-white">
                <Avatars avatars={avatars} newMessage={22}>
                    <Badge position="top-right" className="bg-green-400" />
                </Avatars>
                <Avatars avatars={avatars}>
                    <Badge position="bottom-left" className="bg-yellow-400" count={11} />
                </Avatars>
            </Section>
        </div>
    );
}
