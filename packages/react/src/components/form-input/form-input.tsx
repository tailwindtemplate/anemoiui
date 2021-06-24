import React from 'react'
import clsx from 'clsx'
import { ChevronDownIcon } from '@heroicons/react/outline'

type FormInput = {
    className?:string;
}

export const FormInput = ({ children, className}:React.PropsWithChildren<FormInput>) => {
    return (
        <div className={clsx('border border-black text-base rounded-2xl flex p-4', className)}>
            <div className="flex items-center">+84<ChevronDownIcon className="w-4 h-4 m-0.5" /></div>
            {children}
        </div>
    )
}
