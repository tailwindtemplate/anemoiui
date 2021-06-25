import React from 'react'
import clsx from 'clsx'

type ButtonInput ={
    text?:string;
    className?:string;
}

export function ButtonInput ({children, className}:React.PropsWithChildren<ButtonInput>) {
    return (
        <div className={clsx('bg-primary-20 rounded-2xl text-white text-center text-base p-4', className)}>
            {children}
        </div>
    )
}
