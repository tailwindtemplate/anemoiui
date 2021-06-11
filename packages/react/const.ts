import { DocumentReportIcon } from '@heroicons/react/outline';

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
            { name: 'cards', url: '/components/cards'}
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

export const textMessage = "Mình giới thiệu với bạn một số thông tin về thành phố chúng ta sắp đến. Cần Thơ là một thành phố trực thuộc trung ương của Việt Nam, là thành phố hiện đại và phát triển nhất ở Đồng bằng sông Cửu Long, Cần Thơ hiện là đô thị loại I, là trung tâm kinh tế, văn hóa, xã hội, y tế và giáo dục của vùng Đồng bằng sông Cửu Long, là thành phố trung tâm cấp vùng và cấp quốc gia cùng với Đà Nẵng, Hải Phòng. (đã chỉnh sửa)"

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
  fileName: '1 chiếc link',
  content: 'content of 1 chiếc link',
  image: 'https://image.shutterstock.com/z/stock-photo-scene-of-the-wizard-reaching-hand-out-to-his-dragon-standing-on-the-rock-digital-art-style-1570031575.jpg',
  hasDownload: false,
  url: 'link.com',
}
export const attachmentsMessage = [
    attachmentDoc,
    attachmentCustom,
    attachmentLink
]
