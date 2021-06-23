import clsx from 'clsx'

import { carouselUser } from '../../const'
import { UserCard } from '../../src'
import { PopoverControl } from '../../src/'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { ChatAlt2Icon, CogIcon } from '@heroicons/react/outline'
import { FooterNotification, HeaderNotification } from '../../src/components/notification-modal'
import { useCallback, useState } from 'react';

export default function Notification() {
    const [userId, setUserId] = useState<string>(null)
    const active = useCallback((id) => setUserId(id), [userId])
    const [tick, setTick] = useState<boolean>(false)
    const iconClassName ='text-gray-500 w-5 h-5 mr-2 cursor-pointer transform hover:text-gray-700'
    const footerClassName ='px-4 py-2 text-blue-500 text-sm text-sm cursor-pointer'
    return (
        <PopoverControl
            namePopover='Messenger'
            Icon={ChevronDownIcon}
            classPopoverPanel='flex flex-col border z-10 transform left-0pt-2 rounded-lg shadow-xl mt-2 w-96 h-96 overflow-hidden'
        >
            <HeaderNotification title='Messenger' className='border-b' titleClassName='text-lg font-semibold p-2'>
                <CogIcon className={iconClassName} />
                <ChatAlt2Icon className={iconClassName} />
            </HeaderNotification>
            <div className='bg-white overflow-y-auto flex-1'>
                {carouselUser.map(({ id, img }) => (
                    <UserCard
                        content='utilities for controlling the radius of an element'
                        time='09:07'
                        className={clsx(
                            'rounded m-2 rounded-sm transform hover:bg-gray-100 cursor-pointer flex-1',
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
            </div>
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
        </PopoverControl>
    )
}