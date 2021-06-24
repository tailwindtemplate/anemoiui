import React from 'react'
import clsx from 'clsx'

type Header = {
    className?: string;
}
export const Header = ({children, className}:React.PropsWithChildren<Header> ) => {
    return (
        <div className={clsx('text-gray-400 text-base flex items-center', className)}>
            {children}
        </div>
    )
}
