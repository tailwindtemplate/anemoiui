import React from 'react'
import clsx from 'clsx'

type LayoutForms = {
    className?:string;
}

export const LayoutForms = ({ children, className}:React.PropsWithChildren<LayoutForms>) => {
    return (
        <div className={clsx('grid grid-cols-2 items-center h-full', className)}>
            {children}
        </div>
    )
}
