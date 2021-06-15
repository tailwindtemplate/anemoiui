import React, { ReactNode, useMemo } from 'react';
import { Avatar } from 'elements';
import { Avatars } from 'elements/avatars';

type UserCard = {
    avatar?: string | string[]
    avatarChildren?: ReactNode
    title: string
    content?: string
    time?: string
}
export const UserCard = ({ avatar = '', time, title, content, avatarChildren }: UserCard) => {
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
        <div className="flex py-2 px-4 rounded-full bg-white items-center shadow-md">
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
