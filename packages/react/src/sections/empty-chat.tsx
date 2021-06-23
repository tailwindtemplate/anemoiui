import React from 'react'
import clsx from 'clsx'
import {Heading3, Subtitle2} from '../elements'

type EmptyChat = {
    Icon?: any
    title?: string
    content?: string
}
export const EmptyChat = ({ Icon, title, content }: EmptyChat) => {
    return (
        <div className={clsx('flex flex-col py-2 px-4 rounded-2xl bg-white items-center shadow-md')}>
            {Icon && <Icon className='w-16 h-16' />}
            <Heading3 className='my-2'>{title}</Heading3>
            <Subtitle2>{content}</Subtitle2>
        </div>
    )
}
