import React from 'react'
import {PlusCircleIcon, ThumbUpIcon} from '@heroicons/react/outline'
import {TextInput} from '../../elements'

export const ChannelTabFooter = () => {
    return (
        <div className="flex items-center bg-white m-2">
            <PlusCircleIcon className='w-6 h-6' />
            <TextInput className='border-none' />
            <ThumbUpIcon className="w-6 h-6" />
        </div>
    )
}
