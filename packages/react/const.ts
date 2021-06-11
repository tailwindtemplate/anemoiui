import {
  DocumentIcon, HomeIcon, TemplateIcon, ViewGridAddIcon, ShoppingCartIcon,
  WifiIcon,
  GiftIcon,
  PrinterIcon,
  ArchiveIcon, ChipIcon, DatabaseIcon
} from '@heroicons/react/outline';
export const dropdown = [
  { name: 'element 1', href: '#' },
  { name: 'element 2' },
  { name: 'element 3' }
]

export const menu = [
  { name: 'home', Icon: HomeIcon, url: '/' },
  {
    name: 'components',
    Icon: TemplateIcon,
    items: [
      { name: 'modals', url: '/components/modals' },
      { name: 'tabs', url: '/components/tabs' },
      { name: "popover", url: "/components/popover" },
      { name: "user profile", url: "/components/user-profile" },
      { name: "carousel", url: "/components/carousel" }
    ],
  },
  {
    name: 'elements',
    Icon: ViewGridAddIcon,
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
  { name: 'document', Icon: DocumentIcon, url: '/documents' },
]
// Default Data Tab;
export const tabItems = [
  {
    id: "tab1",
    name: "tab 1",
    icon: ArchiveIcon,
    classIcon: "w-4 h-4 mr-2",
    className: "p4 font-medium capitalize",
  },
  {
    id: "tab2",
    name: "tab 2",
    icon: ChipIcon,
    classIcon: "w-4 h-4 mr-2",
    className: "p4 font-medium capitalize",
  },
  {
    id: "tab3",
    name: "tab 3",
    icon: DatabaseIcon,
    classIcon: "w-4 h-4 mr-2",
    className: "p4 font-medium capitalize",
  },
];
// Default Data Popover
export const popover = [
  {
    name: "Wifi",
    description: "Wifi description",
    href: "##",
    Icon: WifiIcon,
    classIcon: "w-6 h-6",
  },
  {
    name: "Shopping",
    description: "Shopping description",
    href: "##",
    Icon: ShoppingCartIcon,
    classIcon: "w-6 h-6",
  },
  {
    name: "Gift",
    description: "Gift description ",
    href: "##",
    Icon: GiftIcon,
    classIcon: "w-6 h-6",
  },
  {
    name: "Printer",
    description: "Printer description",
    href: "##",
    Icon: PrinterIcon,
    classIcon: "w-6 h-6",
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
