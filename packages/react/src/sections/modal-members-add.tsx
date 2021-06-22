import React, { useMemo } from 'react'
import { members } from '../../const'
import { SearchIcon } from '@heroicons/react/outline'
import {Section} from '../layout'
import {Modal, UserCard} from '../components'
import {TextInput} from '../elements'

export const ModalMembersAdd = ({open, setOpen}: any) => {

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
                            <UserCard
                                key={index}
                                title={item.name}
                                avatar={{ avatar: item.avatar }}
                                className="cursor-pointer my-3"
                                isModal
                            />
                        )
                    })}
                </div>
            </Modal>
        </Section>
    )
}
