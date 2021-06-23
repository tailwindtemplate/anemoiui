import { useState } from 'react';
import { Heading2, Section, TabControl, TabPanel } from '../../src';
import { tabItems } from '../../src/const';
export default function Tabs() {
  const [active, setActive] = useState(tabItems[0].id);
  return (
    <div>
      <Heading2>Tabs</Heading2>
      <Section className='flex justify-center items-center bg-white'>
        <div className="w-full rounded">
          <TabControl items={tabItems} active={active} onClick={setActive} />
          <TabPanel id={tabItems[0].id} active={active}>
            <p className="p-4">text 1</p>
          </TabPanel>
          <TabPanel id={tabItems[1].id} active={active}>
            <p className="p-4">text 2</p>
          </TabPanel>
          <TabPanel id={tabItems[2].id} active={active}>
            <p className="p-4">text 3</p>
          </TabPanel>
        </div>
      </Section>
    </div>
  )
};
