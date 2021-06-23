import React from 'react'
import { avatarDefault } from '../../../const'
import { Modal } from '../../components/modal/'
import { UserCard } from '../../'
type ChooseMember = {
    open: boolean,
    setOpen: (e: boolean) => void
};
export const ChooseMember = ({ open, setOpen }: ChooseMember) => {
    const confirm = React.useMemo(() => ({
        label: 'Confirm',
        onClick: () => setOpen(false),
        className: 'w-full rounded border py-1 px-4 font-semibold',
    }), [])
    return (
        <Modal setOpen={setOpen} open={open} title="Đổi biệt danh" confirm={confirm}>
            {
                avatarDefault.map(({ img, name, id }) => (
                    <UserCard avatar={img} title={name} key={id}className="mb-4" />
                ))
            }
        </Modal>
    )
}