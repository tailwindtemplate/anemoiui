import React from 'react'
import { avatarDefault } from '../../const'
import { SearchIcon, XIcon } from '@heroicons/react/outline'
import { UserCard } from '../../'
import { TextInput } from '../../elements/inputs/text-input'
import { Modal } from '../../components/modal/'
type CreateNewMessage = {
    setOpen: (e: boolean) => void,
    open: boolean,
};
export const ModalCreateNewMessage = ({ setOpen, open }: CreateNewMessage) => {
    const confirm = React.useMemo(() => ({
        label: 'Create new',
        onClick: () => setOpen(false),
        className: 'w-full'
    }), [])
    const cancel = React.useMemo(() => ({
        label: 'Cancel',
        onClick: () => setOpen(false),
        className: 'w-full'
    }), [])
    return (
        <Modal title="Create new message" setOpen={setOpen} open={open} confirm={confirm} cancel={cancel} footerType="center">
            <TextInput LeftIcon={SearchIcon} RightIcon={XIcon} wrapperClassName="mb-4 w-full" placeholder="Search..." />
            {
                avatarDefault.map(({ img, name, id }) => (
                    <UserCard avatar={{avatar: img}} title={name} key={id}className="mb-4" isModal />
                ))
            }
        </Modal>
    )
}
