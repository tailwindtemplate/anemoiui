import React from 'react'
import clsx from 'clsx'

type ButtonInput ={
    className?: string;
    text?:string;
    textName?:string;
}

export function ButtonInput ({children, className, textName, text}:React.PropsWithChildren<ButtonInput>) {
    return (
        <div className={clsx('bg-primary-20 rounded-2xl text-white text-center text-base p-4', className)}>
            <div className={clsx('', textName)}>{text}</div>
            {children}
        </div>
    )
}
