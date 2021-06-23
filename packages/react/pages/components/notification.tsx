import React from 'react'
import clsx from 'clsx'

import { carouselUser } from '../../const'
import { NotificationModal } from '../../src/components/notification-modal'
import { UserCard } from '../../src'
import { PopoverControl } from '../../src/'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { ChatAlt2Icon, CogIcon } from '@heroicons/react/outline'
import { FooterNotification, HeaderNotification } from '../../src/components/notification-modal'

export default function NotifiCation() {
    const [userId, setUserId] = React.useState<string>(null)
    const active = React.useCallback((id) => setUserId(id), [userId])
    const [tick, setTick] = React.useState<boolean>(false)
    const iconClassName ='text-gray-500 w-5 h-5 mr-2 cursor-pointer transform hover:text-gray-700'
    const footerClassName ='px-4 py-2 text-blue-500 text-sm text-sm cursor-pointer'
    return (
        <PopoverControl
            namePopover='Messenger'
            Icon={ChevronDownIcon}
            classPopoverPanel='mt-1'
        >
            <div className='border rounded-lg shadow-md bg-white w-96'>
                <HeaderNotification title='Messenger' className='border-b' titleClassName='text-lg font-semibold p-2'>
                    <CogIcon className={iconClassName} />
                    <ChatAlt2Icon className={iconClassName} />
                </HeaderNotification>
                <NotificationModal className='h-96 w-96'>
                    {carouselUser.map(({ id, img }) => (
                        <UserCard
                            content='utilities for controlling the radius of an element'
                            time='09:07'
                            className={clsx(
                                'rounded m-2 rounded-sm transform hover:bg-gray-100 cursor-pointer',
                                id === userId && 'bg-gray-200',
                                tick && 'bg-gray-200'
                            )}
                            avatar={{ avatar: img }}
                            title={id}
                            key={id}
                            onClick={() => active(id)}
                            avatarClassName='rounded-full'
                        />
                    ))}
                </NotificationModal>
                <FooterNotification className='border-t'>
                    <p className={footerClassName}>Mở bằng messenger</p>
                    <p
                        className={footerClassName}
                        onClick={() => {
                            setTick(!tick)
                            setUserId(null)
                        }}
                    >
                    Đánh dấu tất cả chưa đọc
                    </p>
                </FooterNotification>
            </div>
        </PopoverControl>
    )
}
