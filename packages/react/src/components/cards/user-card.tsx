import React, { ReactNode } from 'react'
import {AvatarLoader, Badge} from '../../elements'
import clsx from 'clsx'

type UserCard = {
    avatar?: AvatarLoader,
    avatarChildren?: ReactNode
    title: string
    content?: ReactNode
    time?: string
    className?: string
    onClick?: (e: any) => void
    isModal?: boolean;
    titleClassName?: string
    newMessage?: number
}
export const UserCard = ({ avatar, time, title, content, avatarChildren, className, onClick, isModal, titleClassName, newMessage }: UserCard) => {
    return (
        <div onClick={onClick} className={clsx('flex py-2 px-4 rounded-2xl items-center', !isModal && 'bg-white shadow-md', onClick && 'cursor-pointer', className)}>
            <AvatarLoader size="sm" className="flex-shrink-0" {...avatar}>
                {avatarChildren}
            </AvatarLoader>
            <div className="ml-4 flex justify-center flex-col truncate w-full">
                <div className="flex justify-between items-center">
                    <div className={clsx('truncate text-lg font-medium', titleClassName)}>{title}</div>
                    <div className="flex-shrink-0 ml-4 text-sm text-gray-400">{time}</div>
                </div>
                <div className="flex justify-between items-center mt-1">
                    <div className="truncate">{content}</div>
                    {newMessage && <Badge count={newMessage} className='bg-red-600 text-white' />}
                </div>
            </div>
        </div>
    )
}
