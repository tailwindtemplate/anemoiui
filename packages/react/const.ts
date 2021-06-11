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
            { name: 'tabs', url: '/components/tabs' },
            { name: 'forms', url: '/components/forms' }
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
