import React from 'react'
import clsx from 'clsx'
// Check Type Props
type TabControl = {
  items: { name: string, id: string }[],
  active: string,
  classTabControl?: string,
  classActive?: string,
  classItemControl?: string,
  // Action
  onClick: (id: string) => void
};
// Default Props
const ClassTabControl = 'border-b border-gray-100 flex'
const ClassActive = 'bg-gray-200 text-blue-600 '
const ClassItemControl = 'rounded-t-md cursor-pointer px-4 py-2 flex items-center'
// Render
export const TabControl = ({
    items,
    active,
    classTabControl = ClassTabControl,
    classActive = ClassActive,
    classItemControl = ClassItemControl,
    // Action
    onClick
}: TabControl) => {
    return (
        <div className={classTabControl}>
            {
                items.map(({ name, id }) => (
                    <div
                        key={id}
                        onClick={() => onClick(id)}
                        className={clsx(classItemControl, active == id && classActive)}
                        style={{ marginBottom: -1 }}
                    >
                        {name}
                    </div>
                ))
            }
        </div>
    )
}
