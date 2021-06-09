import {NumberInput, Section} from '../../../src';

export default function NumberInputPage() {
    return (
        <Section narrow>
            <NumberInput />
            <NumberInput type="primary" />
            <NumberInput type="error" />
            <NumberInput className="border-green-500" />
        </Section>
    );
}
