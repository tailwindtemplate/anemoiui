import { Heading2, Heading3, Radio, Section } from '../../src';
import { useState } from "react";

export default function PreviewRadio() {
    const [checked, setChecked] = useState(false);
    return (
        <div className="space-y-4">
            <Heading2>Radio</Heading2>

            <Heading3>Default</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Radio checked={checked} onClick={() => setChecked(true)} />
                <Radio checked={!checked} onClick={() => setChecked(false)} />
            </Section>

            <Heading3>Label - Caption (or every attribute)</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Radio
                    checked={checked}
                    onClick={() => setChecked(true)}
                    caption="Caption"
                    label="Label"
                />
                <Radio
                    checked={!checked}
                    onClick={() => setChecked(false)}
                    caption="Caption"
                    label="Label"
                />
            </Section>

            <Heading3>Disable</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Radio
                    checked={true}
                    onClick={() => setChecked(!checked)}
                    disabled={true}
                />
            </Section>

            <Heading3>Size SM</Heading3>
            <Section className="flex items-center justify-center border bg-white">
                <Radio checked={checked} onClick={() => setChecked(true)} size="SM" />
                <Radio checked={!checked} onClick={() => setChecked(false)} size="SM" />
            </Section>
        </div>
    );
}
