import clsx from 'clsx';
// Component
// import { TabPanel } from './tab-panel';

// Check Type Props
type TabControl = {
  items: { name: string, id: string, icon: any, classIcon: string, className: string }[],
  active: string,
  classTabControl?: string,
  classActive?: string,
  classItemControl?: string,
  tabPosition?: 'left' | 'right' | 'center' | string,
  // Action
  onClick: (id: string) => void,
  onChange?: (id: string, name: string) => void
};
// Default Props
const ClassTabControl = "border-b border-gray-100";
const ClassActive = "bg-gray-200 text-blue-600 ";
const ClassItemControl = "rounded-t-md cursor-pointer px-4 py-2 flex items-center	";
// Function
const TabPosition = (position: string) => {
  switch (position) {
    case "left": return 'flex justify-start';
    case "center": return 'flex justify-center';
    case "right": return 'flex justify-end';
    default: return 'flex justify-start';
  }
};
// Render
export const TabControl = ({
  items,
  active,
  classTabControl = ClassTabControl,
  classActive = ClassActive,
  classItemControl = ClassItemControl,
  tabPosition = 'left',
  // Action
  onClick,
  onChange
}: TabControl) => {

  return (
    <div className={`${classTabControl} ${TabPosition(tabPosition)}`}>
      {
        items.map((i) => (
          <div
            key={i.id}
            onClick={() => { onClick(i.id); onChange && onChange(i.id, i.name) }}
            className={clsx(classItemControl, active == i.id && classActive)}
            style={{ marginBottom: -1 }}
          >
            <i.icon className={i.classIcon} /> <span className={i.className}>{i.name}</span>
          </div>
        ))
      }

    </div>
  )
};
