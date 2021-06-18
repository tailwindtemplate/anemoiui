import React from 'react'
import { Avatar } from '../..'
import { TextInput } from '../../elements/inputs/text-input'
import { Modal } from '../../components/modal/'
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
            <div className="mt-6 mb-2">
                <div className="text-center mb-2">
                    <Avatar type="src" isRounded size="md" className="m-auto" src="https:tailwindcss.com/_next/static/media/ryan-florence.34fb7796afb30db4ae598b06a00cbee3.jpg" />
                    <h2 className="py-3 font-semibold text-xl text-gray-900">User 1</h2>
                    <p className="pb-2">Mọi người trong cuộc trò chuyện sẽ nhìn thấy biệt danh này</p>
                </div>
                <TextInput inputClassName="focus:border-red-500 bg-gray-100 text-gray-500 h-9" placeholder="Đổi biệt danh" />
            </div>
        </Modal>
    )
}