import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Sidebar = {
    className?: string
}
export const Sidebar = ({ children, className }: PropsWithChildren<Sidebar>) => {
    return (
        <div className={clsx('h-full overflow-y-auto', className)}>
            {children}
        </div>
    )
}
