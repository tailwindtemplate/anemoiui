import { Section } from '../src';
import { NextLayout } from '../next-src/next-layout';

export default function Home() {
    return (
        <NextLayout>
            <Section narrow>
                Welcome to ANEMOIUI
            </Section>
        </NextLayout>
    )
}
