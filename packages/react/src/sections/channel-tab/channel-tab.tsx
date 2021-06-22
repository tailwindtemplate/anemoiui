import React, { useState } from 'react'
import { UserCard } from '../../components'
import { DotsVerticalIcon, XIcon } from '@heroicons/react/outline'
import {ChannelTabBody, ChannelTabFooter} from '../channel-tab'
import clsx from 'clsx'

type ChannelTab = {
    className?: string
}

export const ChannelTab = ({className}: ChannelTab) => {
    const [openItemBox, setOpenItemBox] = useState(true)
    const iconClassName = 'w-6 h-6 text-white cursor-pointer'
    if(!openItemBox) return null

    return (
        <div className={clsx('w-chat-box z-10 shadow-xl', className)}>
            {/*Header*/}
            <div className="flex justify-between bg-primary-600 rounded-t-2xl px-2">
                <UserCard title="Hahalolo Can Tho" titleClassName="text-white" avatar={{avatar: 'https://media.thongtindulich.hahalolo.com/files/thutrang/2020/10/03/mang-xa-hoi-hahalolo-3-1522.jpg'}} isModal />
                <div className="flex items-center">
                    <DotsVerticalIcon className={iconClassName} />
                    <XIcon className={iconClassName} onClick={() => setOpenItemBox(false)} />
                </div>
            </div>

            <ChannelTabBody />
            <ChannelTabFooter />
        </div>
    )
}
