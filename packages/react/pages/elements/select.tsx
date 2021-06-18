import { UserIcon } from "@heroicons/react/outline";
import { Heading2, Heading3, Section, Select } from '../../src';
import { useState } from 'react'

const data = [
    {
        id: "run",
        title: "Running"
    },
    {
        id: "skate",
        title: "Skating"
    },
    {
        id: "board",
        title: "Snow boarding"
    },
    {
        id: "swim",
        title: "Swimming"
    }
];
const dataImage = [
    {
        id: "run",
        title: "Running",
        avatar: 'https://tailwindcss.com/_next/static/media/guillermo-rauch.f9555769f9ff1d42057c689278bc0876.jpg'
    },
    {
        id: "skate",
        title: "Skating",
        avatar: 'https://tailwindcss.com/_next/static/media/guillermo-rauch.f9555769f9ff1d42057c689278bc0876.jpg'
    },
    {
        id: "board",
        title: "Snow boarding",
        avatar: 'https://tailwindcss.com/_next/static/media/guillermo-rauch.f9555769f9ff1d42057c689278bc0876.jpg'
    },
    {
        id: "swim",
        title: "Swimming",
        avatar: 'https://tailwindcss.com/_next/static/media/guillermo-rauch.f9555769f9ff1d42057c689278bc0876.jpg'
    }
];

export default function PreviewSelect() {
    const [value, onSelect] = useState(data[0])
    const [value1, onSelect1] = useState(dataImage[0])
    return (
        <div className="space-y-4">
            <Heading2>Select</Heading2>
            <Heading3>Default</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Select data={data} value={value} onSelect={onSelect} />
            </Section>
            <Heading3>Disable</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Select disabled data={data} value={value} onSelect={onSelect} />
            </Section>
            <Heading3>Has icon</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Select LeftIcon={UserIcon} data={data} value={value} onSelect={onSelect} />
            </Section>
            <Heading3>Has image</Heading3>
            <Section className="mb-8 flex items-center justify-center border bg-white">
                <Select data={dataImage} value={value1} onSelect={onSelect1} />
            </Section>
        </div>
    );
}
