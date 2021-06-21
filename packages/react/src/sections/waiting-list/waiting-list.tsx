import React from 'react'
import { WaitingItem } from './waiting-item'
import { channels } from '../../../const'
import {Avatar, Subtitle1} from '../../elements'
import { PopoverControl } from '../../components'
import {XIcon} from '@heroicons/react/outline'

type WaitingList = {
    className?: string;
}

export const WaitingList = ({className}: WaitingList) => {
    const maxQueue = 5
    if (channels.length < 1) return null

    const restChannels = channels.slice(maxQueue-1, channels.length)
    return (
        <div className={className}>
            {channels.slice(0, maxQueue).map((item, index) => {
                return index === channels.slice(0, maxQueue).length - 1 ? (
                    <PopoverControl
                        key={index}
                        classPopoverPanel='absolute -left-56 bottom-3'
                        avatarChildren={
                            <Avatar
                                size="sm"
                                src={item.avatar}
                                key={index}
                            >
                                <div className="absolute w-full h-full left-0 right-0 bg-neutral-200 rounded-md z-10 flex items-center justify-center bg-opacity-20 text-white font-bold">
                                    +{`${channels.length - maxQueue}`}
                                </div>
                            </Avatar>
                        }
                    >
                        <div className='w-48 bg-white rounded-md shadow-lg p-2 z-30'>
                            {restChannels.map((item, index)=>{
                                return (
                                    <div key={index} className='flex justify-between items-center whitespace-nowrap overflow-hidden p-1 cursor-pointer hover:text-primary-600'>
                                        <Subtitle1 className='truncate'>{item.title}</Subtitle1>
                                        <XIcon className='w-5 h-5' />
                                    </div>
                                )
                            })}
                        </div>
                    </PopoverControl>
                ) : (
                    <WaitingItem key={index} {...item} />
                )
            })}
        </div>
    )
}
