import { MinusIcon } from "@heroicons/react/outline";
import { Checkbox, Heading2, Heading3, Section } from '../../src';
import { useState } from "react";

export default function PreviewCheckbox() {
    const [checked, setChecked] = useState(false);
    return (
        <div className="space-y-4">
            <Heading2>Checkbox</Heading2>

            <Heading3>Default</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Checkbox checked={checked} onClick={() => setChecked(!checked)} />
            </Section>

            <Heading3>Label - caption (or every attribute)</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Checkbox
                    checked={checked}
                    onClick={() => setChecked(!checked)}
                    label="Label"
                    caption="Caption"
                />
            </Section>

            <Heading3>Size SM</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Checkbox
                    checked={checked}
                    onClick={() => setChecked(!checked)}
                    size="SM"
                />
            </Section>

            <Heading3>Disable</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Checkbox checked={checked} onClick={() => setChecked(!checked)} disabled />
            </Section>

            <Heading3>Custom Icon</Heading3>
            <Section className="flex items-center justify-center border bg-white">
                <Checkbox
                    checked={checked}
                    onClick={() => setChecked(!checked)}
                    Icon={MinusIcon}
                />
            </Section>
        </div>
    );
}
