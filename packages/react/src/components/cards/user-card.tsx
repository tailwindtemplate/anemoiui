import React, { ReactNode } from 'react'
import { AvatarLoader } from '../../elements'
import clsx from 'clsx'

type UserCard = {
    avatar?: string | string[]
    avatarChildren?: ReactNode
    title: string
    content?: ReactNode
    time?: string
    className?: string
    onClick?: (e: any) => void
    isModal?: boolean;
}
export const UserCard = ({ avatar = '', time, title, content, avatarChildren, className, onClick, isModal = false }: UserCard) => {
    return (
        <div onClick={onClick} className={clsx('flex py-2 px-4 rounded-2xl items-center', !isModal && 'bg-white shadow-md',onClick && 'cursor-pointer', className)}>
            <AvatarLoader size="sm" avatar={avatar} className="flex-shrink-0">
                {avatarChildren}
            </AvatarLoader>
            <div className="ml-4 flex justify-center flex-col truncate w-full">
                <div className="truncate text-lg font-medium text-neutral-800">{title}</div>
                <div className="flex justify-between items-center mt-1">
                    <div className="truncate">{content}</div>
                    <div className="flex-shrink-0 ml-4 text-sm text-gray-400">{time}</div>
                </div>
            </div>
        </div>
    )
}
