import React from 'react'
import { TextInput } from '../../elements/inputs/text-input'
import { Modal } from '../../components/modal/'
import { CardGround } from '../../components/'
type EditNickname = {
    open: boolean,
    setOpen: (e: boolean) => void
};
export const EditNickname = ({ open, setOpen }: EditNickname) => {
    // function
    const confirm = React.useMemo(() => ({
        label: 'Confirm',
        onClick: () => setOpen(false),
        className: 'w-full rounded border py-1 px-4 font-semibold',
    }), [])
    const cancel = React.useMemo(() => ({
        label: 'Cancel',
        onClick: () => setOpen(false),
        className: 'w-full rounded border py-1 px-4 font-semibold'
    }), [])
    return (
        <Modal setOpen={() => setOpen(false)} open={open} title="Đổi biệt danh" confirm={confirm} cancel={cancel}>
            <CardGround className="bg-white" name="What a lovely name" avatar="https:tailwindcss.com/_next/static/media/ryan-florence.34fb7796afb30db4ae598b06a00cbee3.jpg" />
            <p className="my-2">Mọi người trong cuộc trò chuyện sẽ nhìn thấy biệt danh này</p>
            <TextInput inputClassName="focus:border-red-500 bg-gray-100 text-gray-500 h-9" placeholder="Đổi biệt danh" />
        </Modal>
    )
}