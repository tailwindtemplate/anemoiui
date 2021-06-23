import { Badge, Heading2, Section, Avatars, Heading3 } from '../../src';
import { avatars } from "../../src/const";

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
                <Avatars src={[avatars[0]]} />
            </Section>
            <Heading3>More Images</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Avatars src={avatars} />
            </Section>
            <Heading3>With default badge</Heading3>
            <Section className="mb-8 flex items-center justify-center space-x-4 border bg-white">
                <Avatars onClick={() => console.log('click')} newMessage={22} />
                <Avatars src={avatars} newMessage={22} />
            </Section>
            <Heading3>With custom children</Heading3>
            <Section className="mb-8 flex items-center justify-center space-x-4 border bg-white">
                <Avatars src={avatars} newMessage={22}>
                    <Badge position="top-right" className="bg-green-400" />
                </Avatars>
                <Avatars src={avatars}>
                    <Badge position="bottom-left" className="bg-yellow-400" count={11} />
                </Avatars>
            </Section>
        </div>
    );
}
