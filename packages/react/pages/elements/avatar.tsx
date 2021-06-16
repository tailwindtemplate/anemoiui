import { Avatar, Status, Section, Badge, Heading2, Heading3 } from '../../src';

export default function PreviewAvatar() {
    return (
        <div className="space-y-4">
            <Heading2>Avatars</Heading2>
            <Heading3>Size XS -{">"} BASE</Heading3>
            <Section className="mb-8 flex items-center justify-around border bg-white">
                <Avatar size="xs" />
                <Avatar size="sm" />
                <Avatar />
            </Section>

            <Heading3>Short name</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Avatar name="YN" />
            </Section>

            <Heading3>Custom position</Heading3>
            <Section className="mb-8 flex items-center justify-around border bg-white">
                <Avatar name="YN">
                    <Badge count={2} position={'top-right'} className='bg-red-500 text-white' />
                </Avatar>

                <Avatar name="YN">
                    <Badge count={22} position={'bottom-right'} className='bg-red-500 text-white' />
                </Avatar>
            </Section>

            <Heading3>Has new message</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    newMessage={22}
                    type="src"
                    isRounded
                >
                    <Badge count={2222} position={'bottom-right'} className='bg-red-500 text-white' />
                </Avatar>
            </Section>

            <Heading3>Has extension</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Avatar
                    size="sm"
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    hasExtension
                    type="src"
                    isRounded
                />
            </Section>

            <Heading3>Add avatar</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Avatar size="sm" type="add-avatar" isRounded />
            </Section>

            <Heading3>Status</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    type="src"
                >
                    <Status className="-top-1 -right-1" />
                </Avatar>
            </Section>

            <Heading3>Border</Heading3>
            <Section className="flex items-center justify-center border bg-white">
                <Avatar
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    size="xs"
                    type="src"
                    hasBorder
                />
            </Section>
        </div>
    );
}
