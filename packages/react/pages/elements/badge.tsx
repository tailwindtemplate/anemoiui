import { Section, Badge, Heading2, Heading3 } from '../../src';

export default function PreviewBadge() {
    return (
        <div className="space-y-4">
            <Heading2>Badges</Heading2>
            <Heading3>Size XS</Heading3>
            <Section className="flex items-center justify-around bg-white">
                <Badge className='bg-red-400 text-white' size='xs' />
                <Badge className='bg-red-400 text-white' size='xs' count={2} />
                <Badge className='bg-red-400 text-white' size='xs' count={22} />
                <Badge className='bg-red-400 text-white' size='xs' count={222} />
                <Badge className='bg-red-400 text-white' size='xs' count={2222} />
            </Section>
            <Heading3>Size SM</Heading3>
            <Section className="flex items-center justify-around bg-white">
                <Badge className='bg-red-400 text-white' size='sm' />
                <Badge className='bg-red-400 text-white' size='sm' count={2} />
                <Badge className='bg-red-400 text-white' size='sm' count={22} />
                <Badge className='bg-red-400 text-white' size='sm' count={222} />
                <Badge className='bg-red-400 text-white' size='sm' count={2222} />
            </Section>
            <Heading3>Size MD</Heading3>
            <Section className="flex items-center justify-around bg-white">
                <Badge className='bg-red-400 text-white' />
                <Badge className='bg-red-400 text-white' count={2} />
                <Badge className='bg-red-400 text-white' count={22} />
                <Badge className='bg-red-400 text-white' count={222} />
                <Badge className='bg-red-400 text-white' count={2222} />
            </Section>
            <Heading3>Size LG</Heading3>
            <Section className="flex items-center justify-around bg-white">
                <Badge className='bg-red-400 text-white' size='lg' />
                <Badge className='bg-red-400 text-white' size='lg' count={2} />
                <Badge className='bg-red-400 text-white' size='lg' count={22} />
                <Badge className='bg-red-400 text-white' size='lg' count={222} />
                <Badge className='bg-red-400 text-white' size='lg' count={2222} />
            </Section>
            <Heading3>Size XL</Heading3>
            <Section className="flex items-center justify-around bg-white">
                <Badge className='bg-red-400 text-white' size='xl' />
                <Badge className='bg-red-400 text-white' size='xl' count={2} />
                <Badge className='bg-red-400 text-white' size='xl' count={22} />
                <Badge className='bg-red-400 text-white' size='xl' count={222} />
                <Badge className='bg-red-400 text-white' size='xl' count={2222} />
            </Section>
        </div>
    );
}
