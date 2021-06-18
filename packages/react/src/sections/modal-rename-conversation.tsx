import React, {useMemo} from 'react'
import {Section} from '../layout'
import {Modal} from '../components'
import {TextInput} from '../elements'

export default function ModalRenameConversation({open, setOpen}: any) {

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
                title="Rename conversation"
                confirm={confirm}
                cancel={cancel}
                footerType="center"
            >
                <div>
                    <div className="mb-4 text-center">Change conversation name</div>
                    <TextInput placeholder="Change conversation name..." wrapperClassName="my-4" />
                </div>
            </Modal>
        </Section>
    )
}
