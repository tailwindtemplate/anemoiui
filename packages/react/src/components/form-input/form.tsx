import React from 'react'
import clsx from 'clsx'
import {ChevronLeftIcon} from '@heroicons/react/outline'
import { FormHeader } from '../../../src'

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
            <div className={clsx('text-primary-500 text-5xl font-bold font-body', titleName)}>{title}</div>
            <div className={clsx('text-xl text-justify font-body', contentName)}>{content}</div>
            {children}
        </div>
    )
}

export const FormInput = ({children, className, titleName, title, contentName, content}:React.PropsWithChildren<Form>) => {
    return (
        <div className={clsx('bg-white shadow-2xl rounded-3xl p-12 space-y-8', className)}>
            <FormHeader className='text-gray-500 flex'>
                <ChevronLeftIcon className='w-6 h-6 mr-2' />
                Quay lại
            </FormHeader>
            <div className={clsx('text-primary-500 text-5xl font-bold font-body', titleName)}>{title}</div>
            <div className={clsx('text-xl text-justify font-body', contentName)}>{content}</div>
            {children}
        </div>
    )
}
