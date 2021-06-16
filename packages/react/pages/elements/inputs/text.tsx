import { UserIcon } from "@heroicons/react/outline";
import { TextInput, Section, Heading2, Heading3 } from '../../../src';

export default function TextInputPage() {
    return (
        <div className="space-y-4">
            <Heading2>Text Input</Heading2>

            <Heading3>Default</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <TextInput className="w-80" />
            </Section>

            <Heading3>Border Type: Error</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <TextInput className="w-80" borderType="error" />
            </Section>

            <Heading3>Left Icon</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <TextInput LeftIcon={UserIcon} className="w-80" />
            </Section>

            <Heading3>Left - Right icon</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <TextInput LeftIcon={UserIcon} RightIcon={UserIcon} className="w-80" />
            </Section>

            <Heading3>Disable</Heading3>
            <Section className="flex items-center justify-center border bg-white">
                <TextInput className="w-80" disabled />
            </Section>
        </div>
    );
}
