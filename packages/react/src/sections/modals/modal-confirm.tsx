import React, {useMemo} from 'react'
import {Modal} from '../../components'

type ModalConfirm = {
    content?: string;
    open?: boolean;
    setOpen?: any;
}

export const ModalConfirm = ({open = false, setOpen, content}: ModalConfirm) => {
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
        <Modal
            open={open}
            setOpen={setOpen}
            title="Modal confirm"
            confirm={confirm}
            cancel={cancel}
            footerType="center"
        >
            <div className="text-center">{content}</div>
        </Modal>
    )
}
