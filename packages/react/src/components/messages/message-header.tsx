import clsx from 'clsx';
import React from 'react';

type MessageHeader = {
    name: string
    avatar: string
    isOwner?: boolean
}

export const MessageHeader = ({ name, avatar, isOwner }: MessageHeader) => {
    return (
        <div className={clsx('flex items-center', isOwner && 'flex-row-reverse')}>
            <img className="hidden md:block w-12 h-12 rounded-full" src={avatar} />
            <h3 className="md:mx-4">{name}</h3>
        </div>
    )
}
