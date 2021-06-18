import React from 'react'
import { avatarDefault } from '../../../const'
import { Avatar } from '../..'
import { Modal } from '../../components/modal/'
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
            {avatarDefault.map(({ img, name, id }) => (
                <div className="flex mb-2 h-16 items-center border-b cursor-pointer font-semibold text-gray-400 hover:text-gray-500 capitalize" key={id}>
                    <Avatar src={img} type="src" isRounded size="sm" /><p className="px-2">{name}</p>
                </div>
            ))}
        </Modal>
    )
}