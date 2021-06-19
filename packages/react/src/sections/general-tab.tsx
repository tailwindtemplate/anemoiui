import React, { useState } from 'react';
import { CheckCircleIcon, UsersIcon, SearchIcon, ChatIcon, DotsVerticalIcon, XIcon } from '@heroicons/react/outline';
import { Heading4, TextInput } from '../elements';
import { userCard } from '../../const';
import { UserCard } from '../components';
import clsx from 'clsx';
import {WaitingList} from "./general-tab/waiting-list";
import {ChatboxBody} from "./general-tab/chatbox-body";
import {ChatBoxFooter} from "./general-tab/chatbox-footer";

export const GeneralTab = () => {
    const [openListBox, setOpenListBox] = useState(false);
    const [openItemBox, setOpenItemBox] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const iconClassName = 'w-6 h-6 text-white cursor-pointer';
    const chats = [...Array(15).keys()];

    return (
        <div style={{ height: 'calc(100vh - 11rem)' }}>
            <div className="relative w-full h-full flex items-center justify-center space-x-4 bg-white p-4">
                <div
                    className="absolute bottom-4 right-0 w-10 h-10 bg-primary-400 rounded-l-3xl flex items-center justify-center cursor-pointer"
                    onClick={() => {
                        setOpenListBox(!openListBox);
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
                                    wrapperClassName="mx-1"
                                    closeOnClick={() => setShowSearch(false)}
                                />
                            ) : (
                                <div className="flex justify-between items-center w-full h-full mx-3">
                                    <Heading4 className="text-white">HaloMe</Heading4>
                                    <div className="flex">
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
                                {chats.map((item, index) => {
                                    return (
                                        <UserCard
                                            {...userCard}
                                            className="cursor-pointer"
                                            onClick={() => {
                                                setOpenListBox(!openListBox);
                                                setOpenItemBox(!openItemBox);
                                            }}
                                            key={index}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {openItemBox && (
                    <div className="absolute bottom-0 right-16 w-chat-box z-10 shadow-xl">
                        {/*Header*/}
                        <div className="flex justify-between bg-primary-600 rounded-t-2xl px-2">
                            <UserCard title="Hahalolo Can Tho" titleClassName="text-white" />
                            <div className="flex items-center">
                                <DotsVerticalIcon className={iconClassName} />
                                <XIcon className={iconClassName} onClick={() => setOpenItemBox(false)} />
                            </div>
                        </div>

                        {/*Body*/}
                        <ChatboxBody />

                        {/*Footer*/}
                        <ChatBoxFooter />
                    </div>
                )}


                <WaitingList />

            </div>
        </div>
    );
};
