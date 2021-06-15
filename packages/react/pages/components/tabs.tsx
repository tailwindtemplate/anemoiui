import { useState } from 'react';
//Component
import { Section, TabControl, TabPanel } from '../../src';
// Default Data Tab;
import { tabItems } from '../../const';
const titleClassName = "px-2 pb-4 transition-colors duration-200 text-gray-500 text-base";
const childrenClassName = "p-4";
const groundTabClassName = "border p-4 mb-8 rounded";
// return
export default function Tabs() {
  const [active, setActive] = useState(tabItems[0].id);
  return (
    <div>
      <Section narrow className='bg-white'>
        <div className={groundTabClassName}>
          <h3 className={titleClassName}>Basic tab</h3>
          <TabControl items={tabItems} active={active} onClick={setActive} />
          <TabPanel id={tabItems[0].id} active={active}>
            <p className={childrenClassName}>text 1</p>
          </TabPanel>
          <TabPanel id={tabItems[1].id} active={active}>
            <p className={childrenClassName}>text 2</p>
          </TabPanel>
          <TabPanel id={tabItems[2].id} active={active}>
            <p className={childrenClassName}>text 3</p>
          </TabPanel>
        </div>
      </Section>
    </div>
  )
};
