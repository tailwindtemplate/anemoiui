import React, { ReactNode, useMemo } from 'react'
import { Avatar, Avatars } from '../../elements'
import clsx from 'clsx'

type UserCard = {
    avatar?: string | string[]
    avatarChildren?: ReactNode
    title: string
    content?: ReactNode
    time?: string
    className?: string
    onClick?: () => void
}
export const UserCard = ({ avatar = '', time, title, content, avatarChildren, className, onClick }: UserCard) => {
    const image = useMemo(() => Array.isArray(avatar) ? (
        <Avatars avatars={avatar} className="flex-shrink-0">
            {avatarChildren}
        </Avatars>
    ) : (
        <Avatar size="sm" src={avatar} isRounded className="flex-shrink-0">
            {avatarChildren}
        </Avatar>
    ), [avatar])
    return (
        <div className={clsx('flex py-2 items-center overflow-hidden', className)} onClick={onClick}>
            {image}
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
