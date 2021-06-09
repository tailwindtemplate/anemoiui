import { UserIcon } from '@heroicons/react/outline';
import TextInput from '../../../src/elements/inputs/text-input';
import {Section} from "../../../src";

export default function TextInputPage() {
    return (
        <Section narrow>
            <TextInput className="w-80" />
            <TextInput LeftIcon={UserIcon} className="w-80" />
            <TextInput LeftIcon={UserIcon} RightIcon={UserIcon} className="w-80" />
            <TextInput className="w-80" type="error" />
            <TextInput className="w-80" disabled />
        </Section>
    );
}
