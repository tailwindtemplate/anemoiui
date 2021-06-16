import React, { ReactNode, useMemo } from 'react'
import { Avatar, Avatars } from '../../elements'
import clsx from 'clsx'

type UserCard = {
    avatar?: string | string[]
    avatarChildren?: ReactNode
    title: string
    content?: string | Element
    time?: string
    className?: string
}
export const UserCard = ({ avatar = '', time, title, content, avatarChildren, className }: UserCard) => {
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
        <div className={clsx('flex py-2 px-4 items-center', className)}>
            {image}
            <div className="ml-4 flex justify-center flex-col truncate w-full">
                <div className="truncate text-lg font-bold">{title}</div>
                <div className="flex justify-between items-center mt-1">
                    <div className="truncate">{content}</div>
                    <div className="flex-shrink-0 ml-4 text-sm text-gray-400">{time}</div>
                </div>
            </div>
        </div>
    )
}
