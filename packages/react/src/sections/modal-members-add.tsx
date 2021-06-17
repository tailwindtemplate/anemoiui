import { Avatar, Modal, Section, TextInput } from '@anemoiui/react'
import React, { useMemo } from 'react'
import { members } from '../../const'
import { SearchIcon } from '@heroicons/react/outline'

export default function ModalMembersAdd({open, setOpen}: any) {

    const confirm = useMemo(
        () => ({
            label: 'Add',
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

    return (
        <Section narrow className="flex justify-center items-center bg-white">
            <button className="border p-2 rounded-md" onClick={() => setOpen(!open)}>
                Open modal
            </button>
            <Modal
                open={open}
                setOpen={setOpen}
                title="Members add"
                confirm={confirm}
                cancel={cancel}
                footerType="center"
            >
                <div className="overflow-hidden">
                    <TextInput LeftIcon={SearchIcon} />
                    {members.map((item, index) => {
                        return (
                            <div key={index} className="flex items-center my-4 w-full">
                                <Avatar src={item.avatar} isRounded size="sm" className="mr-4" />
                                <div className='text-neutral-800 truncate w-3/4'>{item.name}</div>
                            </div>
                        )
                    })}
                </div>
            </Modal>
        </Section>
    )
}
