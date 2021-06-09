import { UserIcon } from '@heroicons/react/outline';
import TextInput from '../../../src/elements/inputs/text-input';

export default function TextInputPage() {
    return (
        <div>
            <TextInput className="w-80" />
            <TextInput LeftIcon={UserIcon} className="w-80" />
            <TextInput LeftIcon={UserIcon} RightIcon={UserIcon} className="w-80" />
            <TextInput className="w-80" type="error" />
            <TextInput className="w-80" disabled />
        </div>
    );
}
