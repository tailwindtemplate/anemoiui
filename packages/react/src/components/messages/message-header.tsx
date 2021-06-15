import clsx from 'clsx';
import React from 'react';
import { Avatar } from '../../elements';

type MessageHeader = {
    name: string
    avatar: string
    isOwner?: boolean
}

export const MessageHeader = ({ name, avatar, isOwner }: MessageHeader) => {
    return (
        <div className={clsx('flex items-center', isOwner && 'flex-row-reverse')}>
            <Avatar className="hidden md:block rounded-full" src={avatar} size="sm" />
            <h3 className="md:mx-4">{name}</h3>
        </div>
    )
}
