import React from 'react'
import clsx from 'clsx'
import {ChevronLeftIcon} from '@heroicons/react/outline'

type Header = {
    className?: string;
    textHeader?: string;
    text?: string;
}
export const Header = ({className, textHeader, text}:React.PropsWithChildren<Header> ) => {
    return (
        <div className={clsx('text-gray-400 text-base flex items-center', className)}>
            <ChevronLeftIcon className="w-4 h-4 text-gray-600"/>
            <div className={clsx('', textHeader)}>{text}</div>
        </div>
    )
}
