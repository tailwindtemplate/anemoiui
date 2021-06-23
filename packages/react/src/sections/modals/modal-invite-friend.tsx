import React, { useMemo, useState } from 'react'
import { QrcodeIcon, SearchIcon, XIcon, DocumentDuplicateIcon } from '@heroicons/react/outline'
import { members } from '../../const'
import { Heading4 } from '../../elements/typography'
import {Modal, UserCard} from '../../components'
import {Button, TextInput} from '../../elements'
import {Section} from '../../layout'

export type CardUserItem = {
    title?: any;
    avatar?: string;
}

export const CardUserItem = ({title, avatar}: CardUserItem) => {
    const [isInvited, setInvited] = useState(false)
    return (
        <div className='flex justify-between items-center overflow-hidden'>
            <UserCard
                title={title}
                avatar={{avatar: avatar}}
                isModal
                className='w-96 my-3'
            />
            <Button title={isInvited ? 'Invited' : 'Invite'} type={isInvited ? 'secondary' : 'primary'} size='sm' onClick={()=>setInvited(!isInvited)} />
        </div>
    )
}

export const ModalInviteFriend = ({open, setOpen}: any) => {
    const [link, setLink] = useState('https://www.youtube.com/')

    const cancel = useMemo(
        () => ({
            label: 'Cancel',
            onClick: () => setOpen(false),
            className: 'w-full',
        }),
        [],
    )

    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(link)
    }
    return (
        <Section narrow className="flex justify-center items-center bg-white">
            <Modal
                open={open}
                setOpen={setOpen}
                title="Invite friend"
                cancel={cancel}
                footerType="center"
            >
                <div className='flex flex-col justify-center items-center'>
                    <QrcodeIcon className='text-neutral-700 w-24 h-24' />
                    <TextInput placeholder="Search" LeftIcon={SearchIcon} RightIcon={XIcon} wrapperClassName="my-4 w-full" />
                    <div className='flex flex-col w-full my-4'>
                        {members?.map((item, index) => {
                            return (
                                <CardUserItem title={item.name} avatar={item.avatar} key={index} />
                            )
                        })}
                    </div>
                    <div className='flex flex-col justify-start items-start w-full border-t-2 my-2 py-4'>
                        <Heading4>Send invitation link to friends</Heading4>
                        <div className='flex justify-between items-center w-full mt-2'>
                            <TextInput value={link} wrapperClassName="w-full" />
                            <DocumentDuplicateIcon className='w-8 h-8 ml-4 cursor-pointer hover:text-primary-600' onClick={copyCodeToClipboard} />
                        </div>
                    </div>
                </div>
            </Modal>
        </Section>
    )
}
