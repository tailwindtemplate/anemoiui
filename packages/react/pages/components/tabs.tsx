import { Section, TabControl, TabPanel } from '../../src';
import { useState } from 'react';
import clsx from 'clsx';
// Default Data Tab;
import { tabItems } from '../../const';
const titleClassName = "px-2 pb-4 transition-colors duration-200 text-gray-500 text-base";
const classNameChildren = "p-4";
const classGroundTab = "border p-4 mb-8 rounded";
// return
export default function Tabs() {
  const [activeBasic, setActiveBasic] = useState(tabItems[0].id);
  const [activePosition, setActivePosition] = useState(tabItems[0].id);
  const [position, setPosition] = useState('left');
  return (
    <div>
      <Section narrow>
        <div className={classGroundTab}>
          <h3 className={titleClassName}> Basic tab</h3>
          <TabControl items={tabItems} active={activeBasic} tabPosition="left" onClick={setActiveBasic}
          />
          <TabPanel id={tabItems[0].id} active={activeBasic}>
            <p className={classNameChildren}>text 1</p>
          </TabPanel>
          <TabPanel id={tabItems[1].id} active={activeBasic}>
            <p className={classNameChildren}>text 2</p>
          </TabPanel>
          <TabPanel id={tabItems[2].id} active={activeBasic}>
            <p className={classNameChildren}>text 3</p>
          </TabPanel>
        </div>
        <div className={classGroundTab}>
          <h3 className={titleClassName}> Tab position</h3>
          <ul className="flex pl-2 pb-4">
            <li onClick={() => setPosition('left')} className={clsx('border px-6 py-1 cursor-pointer', position === 'left' && 'text-blue-600 border-blue-300')}>Left</li>
            <li onClick={() => setPosition('center')} className={clsx('border px-6 py-1 cursor-pointer', position === 'center' && 'text-blue-600 border-blue-300')}>Center</li>
            <li onClick={() => setPosition('right')} className={clsx('border px-6 py-1 cursor-pointer', position === 'right' && 'text-blue-600 border-blue-300')}>Right</li>
          </ul>
          <TabControl items={tabItems} active={activePosition} tabPosition={position} onClick={setActivePosition}
          />
          <TabPanel id={tabItems[0].id} active={activePosition}>
            <p className={classNameChildren}>text 1</p>
          </TabPanel>
          <TabPanel id={tabItems[1].id} active={activePosition}>
            <p className={classNameChildren}>text 2</p>
          </TabPanel>
          <TabPanel id={tabItems[2].id} active={activePosition}>
            <p className={classNameChildren}>text 3</p>
          </TabPanel>
        </div>
      </Section>
    </div>
  )
};
