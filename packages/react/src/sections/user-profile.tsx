import React from 'react'
import { CardGround, CardInfo } from '../components'
import { BellIcon, CogIcon, MailIcon, MoonIcon, QrcodeIcon, StarIcon, UserCircleIcon } from '@heroicons/react/outline'

export const UserProfile = () => {
    return (
        <div className="w-full h-full space-y-3">
            <CardGround
                name='Christopher Campbell'
                avatar='https://image.shutterstock.com/z/stock-photo-scene-of-the-wizard-reaching-hand-out-to-his-dragon-standing-on-the-rock-digital-art-style-1570031575.jpg'
                email='christcampbell@gmail.com'
                count={10}
            />
            <CardInfo data={[
                { label: 'QR code', Icon: QrcodeIcon },
                { label: 'User name', info: 'Christopher Campbell' },
                { label: 'Gender', info: 'Female' },
                { label: 'Birthday', info: '30/01/1990' },
            ]} />
            <CardInfo data={[
                { label: 'Status', Icon: StarIcon },
                { label: 'Change Profile', Icon: UserCircleIcon },
            ]} />
            <CardInfo data={[
                { label: 'Setting', Icon: CogIcon },
                { label: 'Display', Icon: MoonIcon },
                { label: 'Notification', Icon: BellIcon },
            ]} />
            <CardInfo data={[{ label: 'Storage', Icon: MailIcon }]} />
        </div>
    )
}
