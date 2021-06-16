import { Section, Badge, Heading2, Heading3 } from '../../src';

export default function PreviewBadge() {
    return (
        <div className="space-y-4">
            <Heading2>Badges</Heading2>
            <Heading3>Size XS -{">"} BASE</Heading3>
            <Section className="mb-8 flex items-center justify-around border bg-primary-50">
                <Badge className='bg-red-400 text-white' count={2} />
                <Badge className='bg-red-400 text-white' count={22} />
                <Badge className='bg-red-400 text-white' count={222} />
                <Badge className='bg-red-400 text-white' count={1000} />
            </Section>
        </div>
    );
}
