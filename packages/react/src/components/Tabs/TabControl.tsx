import clsx from 'clsx';
interface TabControl {
  controls?: any[],
  defaultActiveKey?: string,
  setKeyTab: (defaultActiveKey?: string) => void,
  classTabControlItems?: string,
  classTabControl?: string,
  classActive?: string,
};
export const TabControl: React.FC<TabControl> = ({
  controls,
  defaultActiveKey,
  setKeyTab,
  classTabControl,
  classTabControlItems,
  classActive
}) => {
  return (
    <ul className={classTabControl}>
      {
        controls?.map(({ tab, key }) => (
          <li
            className={clsx(classTabControlItems, defaultActiveKey === key && classActive)}
            key={key}
            onClick={
              () => { setKeyTab(key) }}
          >
            { tab}
          </li>
        ))
      }
    </ul>
  )
};