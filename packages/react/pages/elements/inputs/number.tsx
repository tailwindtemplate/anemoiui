import { Heading2, Heading3, NumberInput, Section } from '../../../src';

export default function NumberInputPage() {
    return (
        <div className="space-y-4">
            <Heading2>Number Input</Heading2>
            <Heading3>Default</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <NumberInput className="mt-2" />
            </Section>
            <Heading3>Primary</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <NumberInput type="primary" className="mt-2" />
            </Section>
            <Heading3>Error</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <NumberInput type="error" className="mt-2" />
            </Section>
            <Heading3>Custom Classname</Heading3>
            <Section className="flex items-center justify-center border bg-white">
                <NumberInput className="border-green-500 mt-2" />
            </Section>
        </div>
    );
}
