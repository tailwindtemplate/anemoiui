import React, { useState } from 'react'
import { CheckCircleIcon, UsersIcon, SearchIcon, ChatIcon, DotsVerticalIcon, XIcon, PlusCircleIcon, ThumbUpIcon } from '@heroicons/react/outline'
import { Heading4, TextInput } from '../elements'
import {attachmentMessageItem, textMessageItem, user, userCard} from '../../const'
import { UserCard } from '../components'
import clsx from 'clsx'
import {ChannelMessages} from './channel-messages'

export const ChatBoxes = () => {
    const [openListBox, setOpenListBox] = useState(false)
    const [openItemBox, setOpenItemBox] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const iconClassName = 'w-6 h-6 text-white cursor-pointer'

    const messages = [
        {
            messageItem: textMessageItem,
            user,
            position: 'start'
        },
        {
            messageItem: attachmentMessageItem,
            user,
            position: 'start'
        },
        {
            messageItem: textMessageItem,
            user,
            position: 'start'
        }
    ]
    return (
        <div style={{ height: 'calc(100vh - 11rem)' }}>
            <div className="relative w-full h-full flex items-center justify-center space-x-4 bg-white p-4">
                <div
                    className="absolute bottom-4 right-0 w-10 h-10 bg-primary-400 rounded-l-3xl flex items-center justify-center cursor-pointer"
                    onClick={() => {
                        setOpenListBox(!openListBox)
                    }}
                >
                    <CheckCircleIcon className={iconClassName} />
                </div>
                {openListBox && (
                    <div className="absolute bottom-0 right-16 w-chat-box z-20">
                        {/*Header*/}
                        <div className="flex justify-between items-center rounded-t-2xl bg-primary-500 h-16">
                            {showSearch ? (
                                <TextInput
                                    LeftIcon={SearchIcon}
                                    RightIcon={XIcon}
                                    className="bg-white"
                                    wrapperClassName='mx-1'
                                    closeOnClick={() => setShowSearch(false)}
                                />
                            ) : (
                                <div className='flex justify-between items-center w-full h-full mx-2'>
                                    <Heading4 className="text-white">HaloMe</Heading4>
                                    <div className="flex">
                                        <UsersIcon className={clsx('mx-1', iconClassName)} />
                                        <ChatIcon className={clsx('mx-1', iconClassName)} />
                                        <SearchIcon
                                            className={clsx('mx-1', iconClassName)}
                                            onClick={() => setShowSearch(!showSearch)}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/*Body*/}
                        <div className="shadow-lg p-2 overflow-auto max-h-chat-box bg-white">
                            <Heading4 className="text-neutral-800">Chat</Heading4>
                            <div>
                                <UserCard
                                    {...userCard}
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setOpenListBox(!openListBox)
                                        setOpenItemBox(!openItemBox)
                                    }}
                                />
                                <UserCard {...userCard} className="cursor-pointer" />
                                <UserCard {...userCard} className="cursor-pointer" />
                                <UserCard {...userCard} className="cursor-pointer" />
                                <UserCard {...userCard} className="cursor-pointer" />
                                <UserCard {...userCard} className="cursor-pointer" />
                                <UserCard {...userCard} className="cursor-pointer" />
                                <UserCard {...userCard} className="cursor-pointer" />
                                <UserCard {...userCard} className="cursor-pointer" />
                                <UserCard {...userCard} className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                )}

                {openItemBox && (
                    <div className="absolute bottom-0 right-16 w-chat-box z-10 shadow-xl">
                        {/*Header*/}
                        <div className="flex justify-between bg-primary-600 rounded-t-2xl px-2">
                            <UserCard title="Hahalolo Can Tho" titleClassName='text-white' />
                            <div className="flex items-center">
                                <DotsVerticalIcon className={iconClassName} />
                                <XIcon className={iconClassName} onClick={()=>setOpenItemBox(false)} />
                            </div>
                        </div>

                        {/*Body*/}
                        <div className='h-chat-box overflow-auto bg-primary-50'>
                            <ChannelMessages messages={messages} />
                        </div>

                        {/*Footer*/}
                        <div className="flex items-center bg-white m-2">
                            <PlusCircleIcon className='w-6 h-6' />
                            <TextInput className='border-none' />
                            <ThumbUpIcon className="w-6 h-6" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
