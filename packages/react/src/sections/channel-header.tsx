import React from 'react'
import { Avatar } from '../elements'
import { InformationCircleIcon } from '@heroicons/react/outline'

type ChannelHeader = {
    avatar: string
    name: string
}
export const ChannelHeader = ({ avatar, name }: ChannelHeader) => {
    return (
        <div className="flex items-center px-4 py-2.5 mt-4 bg-white rounded-full flex-shrink-0">
            <Avatar isRounded size="sm" src={avatar} />
            <h2 className="text-lg font-medium ml-4">{name}</h2>
            <InformationCircleIcon className="ml-auto w-8 h-8"/>
        </div>
    )
}
