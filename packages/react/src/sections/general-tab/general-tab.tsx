import React, { useState } from 'react'
import { CheckCircleIcon, UsersIcon, SearchIcon, ChatIcon, XIcon } from '@heroicons/react/outline'
import {Badge, Heading4, TextInput} from '../../elements'
import {channels} from '../../../const'
import { UserCard } from '../../components'
import clsx from 'clsx'

export const GeneralTab = () => {
    const [openListBox, setOpenListBox] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const iconClassName = 'w-6 h-6 text-white cursor-pointer'

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
                        <div className="flex justify-between items-center rounded-t-3xl bg-primary-500 h-16">
                            {showSearch ? (
                                <TextInput
                                    LeftIcon={SearchIcon}
                                    RightIcon={XIcon}
                                    className="bg-white mx-1"
                                    closeOnClick={() => setShowSearch(false)}
                                />
                            ) : (
                                <div className="flex justify-between items-center w-full h-full mx-3">
                                    <Heading4 className="text-white">HaloMe</Heading4>
                                    <div className="flex">
                                        <XIcon className={clsx('mx-1.5', iconClassName)} />
                                        <UsersIcon className={clsx('mx-1.5', iconClassName)} />
                                        <ChatIcon className={clsx('mx-1.5', iconClassName)} />
                                        <SearchIcon
                                            className={clsx('mx-1.5', iconClassName)}
                                            onClick={() => setShowSearch(!showSearch)}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/*Body*/}
                        <div className="shadow-lg p-3 overflow-auto max-h-chat-box bg-white">
                            <Heading4 className="text-neutral-800">Chat</Heading4>
                            <div>
                                {channels.map((item, index) => {
                                    return (
                                        <UserCard
                                            {...item}
                                            className="cursor-pointer"
                                            onClick={() => {
                                                setOpenListBox(!openListBox)
                                            }}
                                            key={index}
                                            avatarChildren={<Badge position="top-right" className="bg-green-400" size='xs' />}
                                            isModal
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
