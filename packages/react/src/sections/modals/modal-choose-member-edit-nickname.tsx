import React from 'react'
import { avatarDefault } from '../../const'
import { Modal } from '../../components/modal/'
import { UserCard } from '../../'
type ChooseMember = {
    open: boolean,
    setOpen: (e: boolean) => void
};
export const ModalChooseMemberEditNickname = ({ open, setOpen }: ChooseMember) => {
    const confirm = React.useMemo(() => ({
        label: 'Confirm',
        onClick: () => setOpen(false),
        className: 'w-full',
    }), [])
    return (
        <Modal setOpen={setOpen} open={open} title="Đổi biệt danh" confirm={confirm}>
            {
                avatarDefault.map(({ img, name, id }) => (
                    <UserCard avatar={{avatar: img}} title={name} key={id} className="mb-4" isModal />
                ))
            }
        </Modal>
    )
}