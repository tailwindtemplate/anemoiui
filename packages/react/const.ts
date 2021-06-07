import { DocumentIcon, HomeIcon, TemplateIcon, ViewGridAddIcon } from '@heroicons/react/outline';

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
            { name: 'tabs', url: '/components/tabs' }
        ],
    },
    {
        name: 'elements',
        Icon: ViewGridAddIcon,
        items: [
            { name: 'dropdown', url: '/elements/dropdown' },
            { name: 'otp input', url: '/elements/otp-input' }
        ]
    },
    { name: 'document', Icon: DocumentIcon, url: '/documents' },
]
