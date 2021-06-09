import { NumberInput } from '../../../src';

export default function NumberInputPage() {
    return (
        <div>
            <NumberInput />
            <NumberInput type="primary" />
            <NumberInput type="error" />
            <NumberInput className="border-green-500" />
        </div>
    );
}
