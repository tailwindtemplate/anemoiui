import { Button, Heading2, Heading3, Section } from '../../src';
import { BellIcon } from '@heroicons/react/outline'

export default function PreviewButton() {
    return (
        <div className="space-y-4">
            <Heading2>Buttons</Heading2>
            <Heading3>Size XS -{">"} XL</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white space-x-4">
                <Button title="Button" type="primary" size="xs" />
                <Button title="Button" type="primary" size="sm" />
                <Button title="Button" type="primary" />
                <Button title="Button" type="primary" size="lg" />
                <Button title="Button" type="primary" size="xl" />
                <Button type="primary">
                    <BellIcon className="w-7 h-7" />
                </Button>
            </Section>

            <Heading3>Type: secondary</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white space-x-4">
                <Button title="Button" type="secondary" />
                <Button type="secondary">
                    <BellIcon className="w-6 h-6" />
                </Button>
            </Section>

            <Heading3>Type: gradient</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white space-x-4">
                <Button title="Button" type="gradient" />
                <Button type="gradient">
                    <BellIcon className="w-6 h-6" />
                </Button>
            </Section>

            <Heading3>Custom classname</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white space-x-4">
                <Button title="Button" size="xs" className="bg-neutral-50" />
                <Button title="Button" size="xs" className="bg-neutral-100" />
                <Button title="Button" size="xs" className="bg-neutral-200" />
                <Button title="Button" size="xs" className="bg-neutral-300" />
                <Button title="Button" size="xs" className="bg-neutral-400" />
                <Button size="" className="bg-neutral-400 hover:bg-neutral-100 rounded-full p-2">
                    <BellIcon className="w-4 h-4" />
                </Button>
            </Section>

            <Heading3>Disable</Heading3>
            <Section className="flex items-center justify-center border bg-white space-x-4">
                <Button title="Button" size="xl" type="primary" disabled />
                <Button type="secondary" disabled>
                    <BellIcon className="w-7 h-7" />
                </Button>
                <Button type="gradient" disabled>
                    <BellIcon className="w-7 h-7" />
                </Button>
            </Section>
        </div>
    );
}
