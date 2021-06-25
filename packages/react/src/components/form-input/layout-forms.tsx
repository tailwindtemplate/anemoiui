import React from 'react'
import clsx from 'clsx'

type LayoutForms = {
    className?:string;
}

export const LayoutForms = ({ children, className}:React.PropsWithChildren<LayoutForms>) => {
    return (
        <div className={clsx('flex justify-center items-center space-x-8 p-20', className)}>
            {children}
        </div>
    )
}
