import React from 'react'
import clsx from 'clsx'
import { Header } from './header'

type Form = {
    title?:string;
    content?:string;
    className?: string;
    titleName?: string;
    contentName?: string;
}

export const Form = ({children, className, titleName, title, contentName, content}:React.PropsWithChildren<Form>) => {
    return (
        <div className={clsx('bg-white shadow-2xl rounded-3xl p-12 space-y-8', className)}>
            <div className={clsx('text-primary-500 text-5xl font-bold', titleName)}>{title}</div>
            <div className={clsx('text-xl text-justify', contentName)}>{content}</div>
            {children}
        </div>
    )
}

export const FormHeader = ({children, className, titleName, title, contentName, content}:React.PropsWithChildren<Form>) => {
    return (
        <div className={clsx('bg-white shadow-2xl rounded-3xl p-12 space-y-8', className)}>
            <Header text="Quay lại" />
            <div className={clsx('text-primary-500 text-5xl font-bold', titleName)}>{title}</div>
            <div className={clsx('text-xl text-justify', contentName)}>{content}</div>
            {children}
        </div>
    )
}
