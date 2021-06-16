import { Badge, Heading2, Section, Avatars, Heading3 } from '../../src';
import { avatars } from "../../const";

export default function PreviewAvatars() {
    return (
        <div className="space-y-4">
            <Heading2>Avatars</Heading2>
            <Heading3>Plain</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Avatars />
            </Section>
            <Heading3>One Image</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Avatars avatars={[avatars[0]]} />
            </Section>
            <Heading3>More Images</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Avatars avatars={avatars} />
            </Section>
            <Heading3>Width default badge</Heading3>
            <Section className="mb-8 flex items-center justify-center space-x-4 border bg-white">
                <Avatars newMessage={22} />
                <Avatars avatars={avatars} newMessage={22} />
            </Section>
            <Heading3>With custom children</Heading3>
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
