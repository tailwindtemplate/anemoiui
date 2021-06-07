interface TabPans {
  controls?: any[],
  defaultActiveKey?: string,
  classTabPans?: string,
  classTabPansItems?: string,
}
export const TabPans: React.FC<TabPans> = ({ controls, classTabPans, defaultActiveKey, classTabPansItems, children }) => {
  return (
    <div className={classTabPans}>
      {
        controls?.map(({ tab, key }) => defaultActiveKey === key && (
          <div className={classTabPansItems} key={key}>
            {tab}
          </div>
        ))
      }
      {children}
    </div>
  )
};