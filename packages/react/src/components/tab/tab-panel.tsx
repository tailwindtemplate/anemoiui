import React, { PropsWithChildren } from 'react';

type TabPanel = {
    id: string
    active: string
}
export const TabPanel = ({ children, id, active }: PropsWithChildren<TabPanel>) => {
    if (id !== active) return null
    return (
        <div>
            {children}
        </div>
    )
}
