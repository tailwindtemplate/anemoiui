import React from 'react';
import clsx from 'clsx';

type TabControl = {
    items: { name: string, id: string }[]
    active: string
    onClick: (id: string) => void
}

export const TabControl = ({ items, active, onClick }: TabControl) => {
    return (
        <div className="border-b flex border-gray-100">
            {items.map(({ name, id }) => (
                <div key={id} onClick={() => onClick(id)} className={clsx('rounded-t-md cursor-pointer p-4', active == id && 'bg-gray-100' )} style={{ marginBottom: -1 }}>
                    {name}
                </div>
            ))}
        </div>
    )
}
