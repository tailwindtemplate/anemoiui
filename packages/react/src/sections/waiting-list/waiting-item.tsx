import React from 'react'
import {Avatar, Body2, Subtitle1} from '../../elements'
import { XIcon } from '@heroicons/react/outline'

type WaitingItem = {
    avatar: string;
    name?: string;
    lastMessage?: string;
}

export const WaitingItem = ({avatar, name, lastMessage}: WaitingItem) => {

    return (
        <div className='relative group cursor-pointer'>
            <Avatar src={avatar} size='sm' wrapperClassName='my-4' />
            <XIcon className='absolute -top-1 -left-1 w-4 h-4 bg-white rounded-full p-0.5 hover:text-primary-600' />

            <div className='w-40 rounded-md bg-white shadow-sm overflow-hidden p-2 flex flex-col opacity-0 group-hover:opacity-100 absolute right-16 top-0'>
                <Subtitle1 className='truncate'>{name}</Subtitle1>
                <Body2 className='truncate'>{lastMessage}</Body2>
            </div>
        </div>
    )
}
