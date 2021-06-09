import { Section, TabControl, TabPanel } from '../../src';
import { useState } from 'react';

const tabItems = [
    { name: 'tab 1', id: 'tab1' },
    { name: 'tab 2', id: 'tab2' },
    { name: 'tab 3', id: 'tab3' }
]

export default function Tabs() {
    const [active, setActive] = useState(tabItems[0].id)
    return (
        <Section narrow>
            basic tab
            <TabControl items={tabItems} active={active} onClick={setActive} />
            <TabPanel id={tabItems[0].id} active={active}>
                text 1
            </TabPanel>
            <TabPanel id={tabItems[1].id} active={active}>
                text 2
            </TabPanel>
            <TabPanel id={tabItems[2].id} active={active}>
                text 3
            </TabPanel>
        </Section>
    )
}
