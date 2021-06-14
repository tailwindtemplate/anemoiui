import {Section, Badge} from "../../src";

export default function PreviewBadge() {
    return (
        <div className="p-2 mb-20">
            <div className="text-3xl">Badges</div>
            Size XS -{">"} BASE
            <Section className="mb-8 flex items-center justify-around border bg-white">
                <Badge className='bg-red-400 text-white' count={2} />
                <Badge className='bg-red-400 text-white' count={22} />
                <Badge className='bg-red-400 text-white' count={222} />
            </Section>
        </div>
    );
}
