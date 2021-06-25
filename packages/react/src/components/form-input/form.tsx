import React from 'react'
import clsx from 'clsx'
import {Header} from './header'
import {ChevronLeftIcon} from '@heroicons/react/outline'

type Form = {
    title?:string;
    content?:string;
    className?: string;
    titleName?: string;
    contentName?: string;
    header?:string;
    headerName?:string;
}

export const Form = ({children, className, titleName, title, contentName, content, headerName, header}:React.PropsWithChildren<Form>) => {
    return (
        <div className={clsx('bg-white shadow-3xl rounded-3xl p-12 space-y-8', className)}>
            <Header className={headerName}><ChevronLeftIcon className="w-4 h-4 text-gray-600"/>{header}</Header>
            <div className={clsx('text-primary-20 text-5xl font-bold', titleName)}>{title}</div>
            <div className={clsx('text-xl text-justify', contentName)}>{content}</div>
            {children}
        </div>
    )
}
