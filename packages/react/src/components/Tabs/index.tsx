import { useState } from 'react';
import { TabControl } from './TabControl';
import { TabPans } from './TabPans';
interface Tabs {
  controls?: any | [],
  defaultActiveKey?: string,
  //TabControl
  classTabs?: string,
  classTabControlItems?: string,
  classTabControl?: string,
  classActive?: string,
  //TabPans
  classTabPans?: string,
  classTabPansItems?: string,
  childrenComponent?: Object,
};
export const Tabs: React.FC<Tabs> = ({
  controls,
  defaultActiveKey,
  //TabControl
  classTabs,
  classTabControlItems,
  classTabControl,
  classActive,
  //TabPans
  classTabPans,
  classTabPansItems,
  childrenComponent,
}) => {
  const [keyTabs, setKeyTab] = useState(defaultActiveKey);
  return (
    <div className={classTabs}>
      <TabControl
        controls={controls}
        defaultActiveKey={keyTabs}
        setKeyTab={setKeyTab}
        classActive={classActive}
        classTabControlItems={classTabControlItems}
        classTabControl={classTabControl}
      />
      <TabPans
        controls={controls}
        defaultActiveKey={keyTabs}
        classTabPans={classTabPans}
        classTabPansItems={classTabPansItems}
      >
        {childrenComponent}
      </TabPans>
    </div>
  )
};

