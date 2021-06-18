import React from 'react'
import { avatarDefault } from '../../../const'
import { SearchIcon, XIcon } from '@heroicons/react/outline'
import { UserCard } from '../../'
import { TextInput } from '../../elements/inputs/text-input'
import { Modal } from '../../components/modal/'
type CreateNewMessage = {
    setOpen: (e: boolean) => void,
    open: boolean,
};
export const CreateNewMessage = ({ setOpen, open }: CreateNewMessage) => {
    const confirm = React.useMemo(() => ({
        label: 'Create new',
        onClick: () => setOpen(false),
        className: 'w-full rounded border py-1 px-4 font-semibold'
    }), [])
    const cancel = React.useMemo(() => ({
        label: 'Cancel',
        onClick: () => setOpen(false),
        className: 'w-full rounded border py-1 px-4 font-semibold'
    }), [])
    return (
        <Modal title="Create new message" setOpen={setOpen} open={open} confirm={confirm} cancel={cancel} >
            <TextInput LeftIcon={SearchIcon} RightIcon={XIcon} className="mb-4" />
            {
                avatarDefault.map(({ img, name, id }) => (
                    <UserCard avatar={img} title={name} key={id}className="mb-4" />
                ))
            }
        </Modal>
    )
}
