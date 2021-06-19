import { Section} from '../../src';
import {GeneralTab} from "../../src/sections/general-tab";

export default function PreviewGeneralTab() {
    return (
        <div className="space-y-4">
            <Section>
                <GeneralTab />
            </Section>
        </div>
    );
}
