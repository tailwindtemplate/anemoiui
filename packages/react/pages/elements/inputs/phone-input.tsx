import { Heading2, Heading3, PhoneInput, PhoneZone, Section } from '../../../src'
import { useState } from 'react'
import { CameraIcon, FlagIcon } from '@heroicons/react/outline'

const phoneZoneIcon: PhoneZone[] = [
    { id: 'vn', Icon: FlagIcon, title: '+84' },
    { id: 'en', Icon: CameraIcon, title: '+001' }
]

const phoneZone: PhoneZone[] = [
    { id: 'vn', title: '+84' },
    { id: 'en', title: '+001' }
]

export default function PhoneInputPage() {
    const [zoneIcon, setZoneIcon] = useState(phoneZoneIcon[0])
    const [zone, setZone] = useState(phoneZone[0])
    const [phone, setPhone] = useState('')
    return (
        <div className="space-y-4">
            <Heading2>Phone Number Input</Heading2>
            <Heading3>Default</Heading3>
            <Section className="bg-white flex justify-center">
                <PhoneInput className="w-60" onZoneSelect={setZoneIcon} phoneZone={zoneIcon} phoneData={phoneZoneIcon} onChange={setPhone} phone={phone} />
            </Section>
            <Heading3>No Icon</Heading3>
            <Section className="bg-white flex justify-center">
                <PhoneInput className="w-60" onZoneSelect={setZone} phoneZone={zone} phoneData={phoneZone} onChange={setPhone} phone={phone} />
            </Section>
            <Heading3>Disabled</Heading3>
            <Section className="bg-white flex justify-center">
                <PhoneInput disabled className="w-60" onZoneSelect={setZone} phoneZone={zone} phoneData={phoneZone} onChange={setPhone} phone={phone} />
            </Section>
        </div>
    )
}
