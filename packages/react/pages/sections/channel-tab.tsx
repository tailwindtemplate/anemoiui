import { Section} from '../../src';
import {ChannelTab} from "../../src/sections/channel-tab";

export default function PreviewChannelTab() {
    return (
        <div className="space-y-4">
            <Section>
                <div style={{ height: 'calc(100vh - 11rem)' }}>
                    <div className="relative w-full h-full flex items-center justify-center space-x-4 bg-white p-4">
                        <ChannelTab className="absolute bottom-0 right-0" />
                    </div>
                </div>
            </Section>
        </div>
    );
}
