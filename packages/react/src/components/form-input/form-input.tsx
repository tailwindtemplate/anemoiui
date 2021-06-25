import React from 'react'
import clsx from 'clsx'
import { ChevronDownIcon } from '@heroicons/react/outline'

type FormInput = {
    className?:string;
    firstNumber?: string;
    classFirstNumber?:string;
}

export const FormInput = ({ children, className, firstNumber, classFirstNumber}:React.PropsWithChildren<FormInput>) => {
    return (
        <div className={clsx('border border-black text-base rounded-2xl flex p-4', className)}>
            <div className={clsx('flex items-center', classFirstNumber)}>{firstNumber}<ChevronDownIcon className="w-4 h-4 m-0.5" /></div>
            {children}
        </div>
    )
}
