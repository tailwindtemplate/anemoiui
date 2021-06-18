import {
    CheckCircleIcon,
    CheckIcon,
    ChevronDoubleRightIcon,
    DocumentReportIcon,
    ExclamationCircleIcon,
    ShoppingCartIcon,
    WifiIcon,
    GiftIcon,
    PrinterIcon,
    UserIcon,
    UserRemoveIcon
} from '@heroicons/react/outline'

export const dropdown = [
    { name: 'Edit', href: '#' },
    { name: 'Delete' },
    { name: 'Archive' }
]

export const menu = [
    { name: 'home', url: '/' },
    {
        name: 'pages',
        items: [
            { name: 'chat', url: '/pages/chat' },
            { name: 'welcome', url: '/pages/welcome' }
        ]
    },
    {
        name: 'sections',
        items: [
            { name: 'user profile', url: '/sections/user-profile' },
            { name: 'landing', url: '/sections/landing' },
            { name: 'app sidebar', url: '/sections/app-sidebar' },
            {name: 'modals',url: '/sections/modals'},
        ]
    },
    {
        name: 'components',
        items: [
            { name: 'modals', url: '/components/modals' },
            { name: 'tabs', url: '/components/tabs' },
            { name: 'carousel', url: '/components/carousel' },
            { name: 'popover', url: '/components/popover' },
            { name: 'forms', url: '/components/forms' },
            { name: 'messages', url: '/components/messages'},
            { name: 'cards', url: '/components/cards' }
        ],
    },
    {
        name: 'elements',
        items: [
            { name: 'dropdown', url: '/elements/dropdown' },
            {
                name: 'inputs',
                items: [
                    { name: 'autocomplete input', url: '/elements/inputs/autocomplete' },
                    { name: 'otp input', url: '/elements/inputs/otp-input' },
                    { name: 'number input', url: '/elements/inputs/number' },
                    { name: 'text input', url: '/elements/inputs/text' }
                ]
            },
            { name: 'avatar', url: '/elements/avatar' },
            { name: 'avatars', url: '/elements/avatars' },
            { name: 'buttons', url: '/elements/buttons' },
            { name: 'checkbox', url: '/elements/checkbox' },
            { name: 'radio', url: '/elements/radio' },
            { name: 'select', url: '/elements/select' },
            { name: 'text area', url: '/elements/text-area' },
            { name: 'image loader', url: '/elements/image-loader' },
            { name: 'badge', url: '/elements/badge' }
        ]
    },
    { name: 'document', url: '/documents' },
]

export const headerMenu = [
    { name: 'Home' },
    { name: 'About' },
    {
        name: 'Products'
    },
    {
        name: 'Contact'
    },
    { name: 'Help' }
]
// Default Data Tab;
export const tabItems = [
    {
        id: 'tab1',
        name: 'tab 1'
    },
    {
        id: 'tab2',
        name: 'tab 2'
    },
    {
        id: 'tab3',
        name: 'tab 3'
    },
]
// Default Data Popover
export const popover = [
    {
        name: 'Wifi',
        description: 'Wifi description',
        href: '##',
        Icon: WifiIcon,
    },
    {
        name: 'Shopping',
        description: 'Shopping description',
        href: '##',
        Icon: ShoppingCartIcon,
    },
    {
        name: 'Gift',
        description: 'Gift description ',
        href: '##',
        Icon: GiftIcon,
    },
    {
        name: 'Printer',
        description: 'Printer description',
        href: '##',
        Icon: PrinterIcon,
    },
]
// Default Data Carousel
export const carousel = [
    { item: '1' },
    { item: '2' },
    { item: '3' },
    { item: '4' },
    { item: '5' },
    { item: '6' },
]
export const carouselUser = [
    { id: '1',img:'https://tailwindcss.com/_next/static/media/guillermo-rauch.f9555769f9ff1d42057c689278bc0876.jpg' },
    { id: '2',img:'https://tailwindcss.com/_next/static/media/sara-vieira.53f08a9bc2787e4ee05e4678577a05fe.jpg' },
    { id: '3',img:'https://tailwindcss.com/_next/static/media/dacey-nolan.7993f9fd2980845e8f8c5f97dceddc49.jpg' },
    { id: '4',img:'https://tailwindcss.com/_next/static/media/gilbert-rabut-tsurwa.0500413b6d119725cf1a426bdeddb73f.jpg' },
    { id: '5',img:'https://tailwindcss.com/_next/static/media/madeline-campbell.9611e07a9b970083af13390783617d41.jpg' },
    { id: '6',img:'https://tailwindcss.com/_next/static/media/graeme-houston.2c9612cba96f5f65e7a0ca86dc64c2fc.jpg' },
    { id: '7',img:'https://tailwindcss.com/_next/static/media/sara-vieira.53f08a9bc2787e4ee05e4678577a05fe.jpg' },
    { id: '8',img:'https://tailwindcss.com/_next/static/media/madeline-campbell.9611e07a9b970083af13390783617d41.jpg' },
    { id: '9',img:'https://tailwindcss.com/_next/static/media/guillermo-rauch.f9555769f9ff1d42057c689278bc0876.jpg' },
]

export const cardInfo = [
    { label: 'User', Icon: UserIcon },
    { label: 'User Name', info: 'Austin Wade' },
    { label: 'Email', info: 'austinwade@gmail.com' },
    { label: 'Remove', Icon: UserRemoveIcon }
]

export const textMessage = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc lacus, pellentesque id odio eu, tincidunt fermentum lectus. In tempor commodo libero a eleifend. Nunc tincidunt dignissim nisi, ut ullamcorper dolor malesuada id. In vehicula ante id eros consectetur, eget pellentesque risus scelerisque. In ac placerat mi. Praesent iaculis blandit mattis. Sed scelerisque, ipsum non maximus egestas, nulla lacus facilisis nulla, ac convallis velit ex dignissim metus. Nam imperdiet nisi nunc.'

const attachmentDoc = {
    type: 'doc',
    fileName: 'attachmentDoc.docx',
    content: 'content of attachmentDoc',
    size: '123456 Mb',
    url: 'doc.com',
}
const attachmentCustom = {
    type: 'custom doc',
    fileName: 'attachmentCustom.xyzattachment\nCustom.xyzattachmentCustom.xyz',
    content: 'content of attachment custom Doccontent of attachment custom Doc',
    Icon: DocumentReportIcon,
    forwardClick: () => console.log('attachment forward'),
    size: '123456 Mb',
    url: 'customdoc.com',
}
const attachmentLink = {
    type: 'link',
    fileName: 'Sunrise In The Office by Karim Nafatni',
    content: 'Sunrise In The Office by Karim Nafatni',
    image: 'https://image.shutterstock.com/z/stock-photo-scene-of-the-wizard-reaching-hand-out-to-his-dragon-standing-on-the-rock-digital-art-style-1570031575.jpg',
    hasDownload: false,
    beforeHeader: 'link.com/Sunrise_In_The_Office_by_Karim_Nafatni',
    url: 'link.com',
    onClick: () => console.log('link click')
}
export const attachments = [
    attachmentDoc,
    attachmentCustom,
    attachmentLink
]
export const user = {
    name: 'Christopher Campbell',
    avatar: 'https://image.shutterstock.com/z/stock-photo-scene-of-the-wizard-reaching-hand-out-to-his-dragon-standing-on-the-rock-digital-art-style-1570031575.jpg',
    email: 'christcampbell@gmail.com',
    count: 10
}
export const userCard = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    avatar: 'https://image.shutterstock.com/z/stock-photo-scene-of-the-wizard-reaching-hand-out-to-his-dragon-standing-on-the-rock-digital-art-style-1570031575.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    time: '30/05/2021'
}
export const textMessageItem = {
    type: 'text',
    message: textMessage,
    time: '21:21 21/01/2021'
}
export const attachmentMessageItem = {
    type: 'attachment',
    attachments,
    time: '22:22 22/02/2022'
}
export const statusItems = {
    seen: CheckCircleIcon,
    sent: CheckIcon,
    sending: ChevronDoubleRightIcon,
    error: ExclamationCircleIcon
}

export const avatars = [
    'https://pbs.twimg.com/profile_images/1355071311433883648/g68FvrJ1_400x400.jpg',
    'https://i.ytimg.com/vi/yxhJZrmVKaY/mqdefault.jpg',
    'https://pbs.twimg.com/profile_images/1355071311433883648/g68FvrJ1_400x400.jpg',
    'https://pbs.twimg.com/profile_images/1355071311433883648/g68FvrJ1_400x400.jpg',
    'https://pbs.twimg.com/profile_images/1355071311433883648/g68FvrJ1_400x400.jpg',
]

export const avatarDefault = [
    { 'id': 1, 'name': 'user 1', 'img': 'https://tailwindcss.com/_next/static/media/ryan-florence.34fb7796afb30db4ae598b06a00cbee3.jpg' },
    { 'id': 2, 'name': 'user 2', 'img': 'https://tailwindcss.com/_next/static/media/guillermo-rauch.f9555769f9ff1d42057c689278bc0876.jpg' },
    { 'id': 3, 'name': 'user 3', 'img': 'https://tailwindcss.com/_next/static/media/sara-vieira.53f08a9bc2787e4ee05e4678577a05fe.jpg' },
    { 'id': 4, 'name': 'user 4', 'img': 'https://tailwindcss.com/_next/static/media/dacey-nolan.7993f9fd2980845e8f8c5f97dceddc49.jpg' },
    { 'id': 5, 'name': 'user 5', 'img': 'https://tailwindcss.com/_next/static/media/gilbert-rabut-tsurwa.0500413b6d119725cf1a426bdeddb73f.jpg' },
    { 'id': 6, 'name': 'user 6', 'img': 'https://tailwindcss.com/_next/static/media/madeline-campbell.9611e07a9b970083af13390783617d41.jpg' }
]