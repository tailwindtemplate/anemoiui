import { CardGround, CardInfo, Section } from '../../src';
import { user } from '../../const';
import { BellIcon, CogIcon, MailIcon, MoonIcon, QrcodeIcon, StarIcon, UserCircleIcon } from '@heroicons/react/outline';

export default function UserProfilePage() {
    return (
        <Section className="bg-white">
            <div className="w-1/3 space-y-3">
                <CardGround {...user} />
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
        </Section>
    )
}
