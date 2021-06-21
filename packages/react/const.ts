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
            { name: 'empty chat', url: '/sections/empty-chat' },
            { name: 'general tab', url: '/sections/general-tab' },
            { name: 'channel tab', url: '/sections/channel-tab' },
            { name: 'waiting list', url: '/sections/waiting-list' },
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
            { name: 'cards', url: '/components/cards' },
            { name: 'image list', url: '/components/image-list' },
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
                    { name: 'phone input', url: '/elements/inputs/phone-input' },
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
    avatar: {
        avatar: 'https://image.shutterstock.com/z/stock-photo-scene-of-the-wizard-reaching-hand-out-to-his-dragon-standing-on-the-rock-digital-art-style-1570031575.jpg'
    },
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
    'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/4/2/ao-1617362378837279707955.png',
    'https://file.tinnhac.com/resize/600x-/2021/01/06/20210106103234-3c13.jpg',
    'https://64.media.tumblr.com/e0114626b9ea8294ea5bbb551beb290e/a611a826f64318cb-62/s1280x1920/4c6b7e0229540856632a46601c932147744b79b7.jpg',
    'https://m.media-amazon.com/images/M/MV5BMGVjYTU2NjUtMmE3OS00YTlhLWFjYjEtZTA1ZTEwZDkyZTMyXkEyXkFqcGdeQXVyMTI0MDI3NzEw._V1_UY1200_CR752,0,630,1200_AL_.jpg',
    'https://otakukart.com/wp-content/uploads/2021/03/Jennie-BLACKPINK-1.jpg',
    'https://kenh14cdn.com/thumb_w/660/2020/8/18/main-qimg-223f8d2a5b6dc50a797c38494641067e-15977119524331043825659.jpg',
]

export const channels = [
    {
        title: 'Nana Lee',
        avatar: {
            avatar: 'https://media-cdn.laodong.vn/storage/newsportal/2020/10/2/841202/20200617123919-E0c6.jpg?w=414&h=276&crop=auto&scale=both'
        },
        content: 'Mình update tài liệu trên drive rồi nha.',
        time: '06/06',
        newMessage: 22,
    },
    {
        title: 'Quang Tran',
        avatar: {
            avatar: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/2/25/e19844439b3ed3fa3f9576bd0cf07c6d-16142287241965009923.jpg',
        },
        content: 'Sắp tết rồi có gặp nhau không?',
        time: '05/06',
        newMessage: 2,
    },
    {
        title: 'Doremi Phan',
        avatar: {
            avatar: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/1/16/e55583ef7c6259e3ec6e5da87fb45af2-1610806858271508975269.jpg',
        },
        content: 'Bạn: được nha.',
        time: '04/06',
    },
    {
        title: 'Huyen Le Ngoc Huyen 12 …',
        avatar: {
            avatar: 'https://media.ex-cdn.com/EXP/media.giadinhmoi.vn/files/content/2020/04/27/jennie-5-1523.jpg',
        },
        content: 'Bạn: Cảm ơn bạn nhiều nhé',
        time: '03/06',
    },
    {
        title: 'Charlie Madsen',
        avatar : {
            avatar: 'http://images6.fanpop.com/image/photos/42900000/Jennie-jennie-blackpink-42990319-720-720.jpg',
        },
        content: 'Bạn: Đã kiểm tra kế hoạch nhé, tất cả…',
        time: '02/06'
    },
    {
        title: 'Thai Tran Nguyen Van',
        avatar: {
            avatar: 'https://i2.wp.com/blackpinkupdate.com/wp-content/uploads/2020/02/4-BLACKPINK-Jennie-HERA-Glow-Lasting-Foundation.png?resize=730%2C800&ssl=1',
        },
        content: 'Hello, Phuong. Rất vui được trò chuyện',
        time: '01/06'
    },
    {
        title: 'Kinh doanh mua bán o…',
        avatar: {
            avatar: 'https://static-znews.zadn.vn/static/topic/person/jennie.jpg',
        },
        content: 'Giáng Sinh vui vẻ!',
        time: '30/05'
    },
]