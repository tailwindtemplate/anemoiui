import {Modal, Radio, Section, UserCard} from '@anemoiui/react'
import React, { useMemo, useState } from 'react'
import { members } from '../../const'

export default function ModalOwnerLeaveGroup({open, setOpen}: any) {
    const [visibility, setVisibility] = useState(false)

    const confirm = useMemo(
        () => ({
            label: 'Confirm',
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
                title="Options when leaving group"
                confirm={confirm}
                cancel={cancel}
                footerType="center"
            >
                <div>
                    <Radio
                        checked={!visibility}
                        onClick={() => setVisibility(false)}
                        label="Delete group"
                        className="justify-start mb-3"
                    />
                    <Radio
                        checked={visibility}
                        onClick={() => setVisibility(true)}
                        label="Transfer ownership"
                        className="justify-start"
                    />

                    {visibility && (
                        <div className="border-t-2 my-4">
                            <div className="text-neutral-700 font-medium mt-4">Members</div>
                            {members.map((item, index) => {
                                return (
                                    <UserCard
                                        key={index}
                                        title={item.name}
                                        avatar={item.avatar}
                                        className="cursor-pointer max-w-xs"
                                    />
                                )
                            })}
                        </div>
                    )}
                </div>
            </Modal>
        </Section>
    )
}