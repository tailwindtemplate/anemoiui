import React from 'react'
import clsx from 'clsx'

type InputKey = {
    className?:string
    numberKey?:string
    number?:number
}

export function InputKey ({children, className, numberKey, number}:React.PropsWithChildren<InputKey>) {
    return (
        <div className={clsx('flex justify-center space-x-8', className)}>
            <input className={clsx('w-8 text-center border-b-2 border-gray-500', numberKey)}>{number}</input>
            <input className={clsx('w-8 text-center border-b-2 border-gray-500', numberKey)}>{number}</input>
            <input className={clsx('w-8 text-center border-b-2 border-gray-500', numberKey)}>{number}</input>
            <input className={clsx('w-8 text-center border-b-2 border-gray-500', numberKey)}>{number}</input>
            <input className={clsx('w-8 text-center border-b-2 border-gray-500', numberKey)}>{number}</input>
            <input className={clsx('w-8 text-center border-b-2 border-gray-500', numberKey)}>{number}</input>
            {children}
        </div>
    )
}
