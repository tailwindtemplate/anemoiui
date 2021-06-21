import React, { useMemo, useState } from 'react'
import { members } from '../../const'
import { CheckIcon, SearchIcon, XIcon } from '@heroicons/react/outline'
import { Heading4 } from '../elements/typography'
import {Section} from '../layout'
import {Modal, UserCard} from '../components'
import {FileUploader, TextInput} from '../elements'

export default function ModalGroupAdd({open, setOpen}: any) {
    const [selectedUsers, setSelectedUsers] = useState<string[]>([])

    const confirm = useMemo(
        () => ({
            label: 'Create',
            onClick: () => setOpen(false),
            className: 'w-full',
        }),
        [],
    )
    const cancel = useMemo(
        () => ({
            label: 'Cancel',
            onClick: () => setOpen(false),
            className: 'w-full',
        }),
        [],
    )

    const selectContact = (contact: any) => {
        selectedUsers.find(item => item === contact)
            ? setSelectedUsers(selectedUsers.filter(item => item !== contact))
            : setSelectedUsers(prev => [...prev, contact])
    }

    const restContacts = members?.filter((item: any) => !selectedUsers.includes(item))
    const renderList = selectedUsers.length > 0 ? restContacts : members

    return (
        <Section narrow className="flex justify-center items-center bg-white">
            <Modal
                open={open}
                setOpen={setOpen}
                title="Create new group"
                confirm={confirm}
                cancel={cancel}
                footerType="center"
            >
                <div>
                    <div className="flex items-center">
                        <FileUploader id="groupAvatar" className="mx-2" />
                        <TextInput placeholder="Name your group" />
                    </div>
                    <div>
                        <TextInput placeholder="Search" className="my-4" LeftIcon={SearchIcon} RightIcon={XIcon} />
                        {selectedUsers.length > 0 && (
                            <div>
                                <Heading4>Selected</Heading4>
                                <div className='overflow-auto max-h-64'>
                                    {selectedUsers.map((item: any, index) => {
                                        return (
                                            <div className='flex items-center justify-between overflow-hidden w-full' key={index}>
                                                <UserCard
                                                    title={item.name}
                                                    avatar={{avatar: item.avatar}}
                                                    onClick={() => selectContact(item)}
                                                    className="cursor-pointer w-96"
                                                    isModal
                                                />
                                                <CheckIcon className='w-6 h-6 text-green-500' />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='mt-4'>
                        {renderList.length > 0 && (
                            <div>
                                <Heading4>Contact</Heading4>
                                <div className='overflow-auto max-h-64'>
                                    {renderList.map((item, index) => {
                                        return (
                                            <UserCard
                                                key={index}
                                                title={item.name}
                                                avatar={{avatar: item.avatar}}
                                                onClick={() => selectContact(item)}
                                                className="cursor-pointer max-w-xs"
                                                isModal
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Modal>
        </Section>
    )
}
