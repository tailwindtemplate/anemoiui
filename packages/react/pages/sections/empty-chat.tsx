import { Section} from '../../src';
import {EmptyChat} from "../../src/sections/empty-chat";
import { ExclamationCircleIcon } from '@heroicons/react/outline';

export default function PreviewEmptyChat() {
    return (
        <div className="space-y-4">
            <Section>
                <EmptyChat title='Sorry' content='No result found :(' Icon={ExclamationCircleIcon} />
            </Section>
        </div>
    );
}
