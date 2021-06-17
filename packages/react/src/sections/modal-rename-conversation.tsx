import { Modal, Section, TextInput } from '@anemoiui/react'
import React, {useMemo} from 'react'

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
            <button className="border p-2 rounded-md" onClick={() => setOpen(!open)}>
                Open modal
            </button>
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
