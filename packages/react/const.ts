import {ShoppingCartIcon, WifiIcon, GiftIcon, PrinterIcon} from "@heroicons/react/outline";
export const dropdown = [
    { name: 'Edit', href: '#' },
    { name: 'Delete' },
    { name: 'Archive' }
]

export const menu = [
    { name: 'home', url: '/' },
    {
        name: 'components',
        items: [
            { name: 'modals', url: '/components/modals' },
            { name: 'tabs', url: '/components/tabs' },
            { name: 'carousel', url: '/components/carousel' },
            { name: 'popover', url: '/components/popover' }
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
            { name: 'buttons', url: '/elements/buttons' },
            { name: 'checkbox', url: '/elements/checkbox' },
            { name: 'radio', url: '/elements/radio' },
            { name: 'select', url: '/elements/select' },
            { name: 'text area', url: '/elements/text-area' }
        ]
    },
    { name: 'document', url: '/documents' },
]

export const headerMenu = [
  { name: "Home" },
  { name: "About" },
  {
    name: "Products"
  },
  {
    name: "Contact"
  },
  { name: "Help" }
];
// Default Data Tab;
export const tabItems = [
    {
        id: "tab1",
        name: "tab 1"
    },
    {
        id: "tab2",
        name: "tab 2"
    },
    {
        id: "tab3",
        name: "tab 3"
    },
];
// Default Data Popover
export const popover = [
    {
        name: "Wifi",
        description: "Wifi description",
        href: "##",
        Icon: WifiIcon,
    },
    {
        name: "Shopping",
        description: "Shopping description",
        href: "##",
        Icon: ShoppingCartIcon,
    },
    {
        name: "Gift",
        description: "Gift description ",
        href: "##",
        Icon: GiftIcon,
    },
    {
        name: "Printer",
        description: "Printer description",
        href: "##",
        Icon: PrinterIcon,
    },
];
// Default Data Carousel
export const carousel = [
    { item: "1" },
    { item: "2" },
    { item: "3" },
    { item: "4" },
    { item: "5" },
    { item: "6" },
];
export const carouselUser = [
    { id: "1",img:"https://tailwindcss.com/_next/static/media/guillermo-rauch.f9555769f9ff1d42057c689278bc0876.jpg" },
    { id: "2",img:"https://tailwindcss.com/_next/static/media/sara-vieira.53f08a9bc2787e4ee05e4678577a05fe.jpg" },
    { id: "3",img:"https://tailwindcss.com/_next/static/media/dacey-nolan.7993f9fd2980845e8f8c5f97dceddc49.jpg" },
    { id: "4",img:"https://tailwindcss.com/_next/static/media/gilbert-rabut-tsurwa.0500413b6d119725cf1a426bdeddb73f.jpg" },
    { id: "5",img:"https://tailwindcss.com/_next/static/media/madeline-campbell.9611e07a9b970083af13390783617d41.jpg" },
    { id: "6",img:"https://tailwindcss.com/_next/static/media/graeme-houston.2c9612cba96f5f65e7a0ca86dc64c2fc.jpg" },
    { id: "7",img:"https://tailwindcss.com/_next/static/media/sara-vieira.53f08a9bc2787e4ee05e4678577a05fe.jpg" },
    { id: "8",img:"https://tailwindcss.com/_next/static/media/madeline-campbell.9611e07a9b970083af13390783617d41.jpg" },
    { id: "9",img:"https://tailwindcss.com/_next/static/media/guillermo-rauch.f9555769f9ff1d42057c689278bc0876.jpg" },
];
