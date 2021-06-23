import React, { PropsWithChildren } from 'react'

type TabPanel = {
    id: string
    active: string
    className?: string
}
export const TabPanel = ({ children, id, active, className }: PropsWithChildren<TabPanel>) => {
    if (id !== active) return null
    return (
        <div className={className}>
            {children}
        </div>
    )
}
