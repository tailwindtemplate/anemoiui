import React from 'react';
import { WaitingItem } from './waiting-item';
import { waitingList } from '../../../const';
import {Avatar, Subtitle1} from '../../elements';
import { PopoverControl } from '../../components';
import {XIcon} from "@heroicons/react/outline";

export const WaitingList = () => {
    const maxQueue = 5;
    if (waitingList.length < 1) return null;

    const restChannels = waitingList.slice(maxQueue-1, waitingList.length)

    return (
        <div className="fixed bottom-32 right-28">
            {waitingList.slice(0, maxQueue).map((item, index) => {
                return index === waitingList.slice(0, maxQueue).length - 1 ? (
                    <PopoverControl
                        classPopoverPanel='absolute -left-48 bottom-3'
                        avatarChildren={
                            <Avatar
                                size="sm"
                                name={`+${waitingList.length - waitingList.slice(0, maxQueue).length}`}
                                src={item.avatar}
                                key={index}
                            >
                                <div className="absolute w-full h-full left-0 right-0 bg-neutral-200 rounded-md z-10 flex items-center justify-center bg-opacity-20 text-white font-bold">
                                    +1
                                </div>
                            </Avatar>
                        }
                    >
                        <div className='w-40 bg-white rounded-md shadow-lg p-2 z-30'>
                            {restChannels.map((item, index)=>{
                                return (
                                    <div key={index} className='flex justify-between items-center whitespace-nowrap overflow-hidden cursor-pointer m-1 hover:text-primary-600'>
                                        <Subtitle1 className='truncate'>{item.name}</Subtitle1>
                                        <XIcon className='w-6 h-6' />
                                    </div>
                                )
                            })}
                        </div>
                    </PopoverControl>
                ) : (
                    <WaitingItem key={index} {...item} />
                );
            })}
        </div>
    );
};
