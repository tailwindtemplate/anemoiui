import React from 'react'
import { avatarDefault } from '../../../const'
import { ChatIcon, SearchIcon, XIcon } from '@heroicons/react/outline'
import { Footer } from '../../components/modal/footer'
import { Avatar } from '../..'
import { Header } from '../../components/modal/header'
import { Wrapper } from '../../components/modal/wrapper'
import { TextInput } from '../../elements/inputs/text-input'
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
        <Wrapper setOpen={setOpen} open={open}>
            <Header label="Create new message" labelClassName="font-semibold text-xl text-black" Icon={ChatIcon} iconClassName="w-9 h-9 mb-4 text-green-400" />
            <TextInput LeftIcon={SearchIcon} RightIcon={XIcon} className="mb-4" />
            {avatarDefault.map(({ img, name, id }) => (
                <div className="flex mb-2 h-16 items-center border-b cursor-pointer font-semibold text-gray-400 hover:text-gray-500 capitalize" key={id}>
                    <Avatar src={img} type="src" isRounded size="sm" />
                    <p className="px-2">{name}</p>
                </div>
            ))}
            <Footer confirm={confirm} cancel={cancel} />
        </Wrapper>
    )
}
