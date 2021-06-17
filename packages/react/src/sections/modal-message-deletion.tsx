import { Modal, Radio, Section } from '@anemoiui/react'
import React, { useMemo, useState } from 'react'

export default function ModalMessageDeletion({open, setOpen}: any) {
    const [visibility, setVisibility] = useState(false)
    const isOwner = true

    const confirm = useMemo(
        () => ({
            label: 'Save',
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

    const content = isOwner ? (
        <div>
            <Radio
                checked={!visibility}
                onClick={() => setVisibility(false)}
                label="You will not see this message again, other member still see it"
                className="justify-start mb-3"
            />
            <Radio
                checked={visibility}
                onClick={() => setVisibility(true)}
                label="You will not see this message again, other member still see it"
                className="justify-start"
            />
        </div>
    ) : (
        <div className="w-60 text-center">You will not see this message again, other member still see it</div>
    )

    return (
        <Section narrow className="flex justify-center items-center bg-white">
            <button className="border p-2 rounded-md" onClick={() => setOpen(!open)}>
                Open modal
            </button>
            <Modal
                open={open}
                setOpen={setOpen}
                title="Message deletion"
                confirm={confirm}
                cancel={cancel}
                footerType="center"
            >
                <div className="w-full flex items-center justify-center">{content}</div>
            </Modal>
        </Section>
    )
}
