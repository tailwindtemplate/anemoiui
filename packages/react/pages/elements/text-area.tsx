import { Heading2, Heading3, Section, Textarea } from '../../src';

export default function PreviewTextarea() {
    return (
        <div className="space-y-4">
            <Heading2>Textarea</Heading2>

            <Heading3>Default</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Textarea placeholder="Placeholder" />
            </Section>

            <Heading3>Type: Primary</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Textarea placeholder="Placeholder" type="PRIMARY" />
            </Section>

            <Heading3>Type: error</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Textarea placeholder="Placeholder" type="ERROR" />
            </Section>

            <Heading3>With Helper text</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Textarea placeholder="Placeholder" helperText="Helper text" />
            </Section>

            <Heading3>Custom classname</Heading3>
            <Section className="flex items-center justify-center border bg-white">
                <Textarea placeholder="Placeholder" className="border-yellow-400" />
            </Section>
        </div>
    );
}
