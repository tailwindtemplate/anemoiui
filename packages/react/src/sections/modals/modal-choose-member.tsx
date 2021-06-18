import React from 'react'
import { PencilIcon } from '@heroicons/react/outline'
import { avatarDefault } from '../../../const'
import { Avatar } from '../..'
import { Footer } from '../../components/modal/footer'
import { Wrapper } from '../../components/modal/wrapper'
import { Header } from '../../components/modal/header'
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
        <Wrapper setOpen={setOpen} open={open}>
            <Header label="Đổi biệt danh" labelClassName="font-semibold	text-xl text-black" iconClassName="w-9 h-9 mb-4 text-green-400" Icon={PencilIcon} />
            {avatarDefault.map(({ img, name, id }) => (
                <div className="flex mb-2 h-16 items-center border-b cursor-pointer font-semibold text-gray-400 hover:text-gray-500 capitalize" key={id}>
                    <Avatar src={img} type="src" isRounded size="sm" /><p className="px-2">{name}</p>
                </div>
            ))}
            <Footer confirm={confirm} />
        </Wrapper>
    )
}