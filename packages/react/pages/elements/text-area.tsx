import {Section, Textarea} from '../../src';

export default function PreviewTextarea() {
    return (
        <Section narrow>
            <Textarea placeholder="Placeholder" />
            <Textarea placeholder="Placeholder" custom="border-primary-400" />
            <Textarea placeholder="Placeholder" type="PRIMARY" />
            <Textarea placeholder="Placeholder" type="ERROR" />
            <Textarea placeholder="Placeholder" helperText="Helper text" />
        </Section>
    );
}
