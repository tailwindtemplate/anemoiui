import { PopoverControl } from '../../src';
//Icon
import { ShoppingCartIcon, WifiIcon, GiftIcon, PrinterIcon } from '@heroicons/react/outline';
// Default Data Popover
const popover = [
  {
    name: 'Wifi',
    description: 'Wifi description',
    href: '##',
    icon: WifiIcon,
    classIcon: "w-6 h-6"
  },
  {
    name: 'Shopping',
    description: 'Shopping description',
    href: '##',
    icon: ShoppingCartIcon,
    classIcon: "w-6 h-6"
  },
  {
    name: 'Gift',
    description: 'Gift description ',
    href: '##',
    icon: GiftIcon,
    classIcon: "w-6 h-6"
  },
  {
    name: 'Printer',
    description: 'Printer description',
    href: '##',
    icon: PrinterIcon,
    classIcon: "w-6 h-6"
  }
];
export default function Popover() {

  return (
    <PopoverControl>
      {
        popover.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center px-4 text-gray-900 text-gray-500 py-2 transition duration-150 ease-in-out rounded-lg hover:bg-gray-600 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
          >
            <item.icon className={item.classIcon} aria-hidden="true" />
            <div
              className="ml-4"
            >
              <p className="text-sm font-semibold  ">
                {item.name}
              </p>
              <p className="text-sm  ">
                {item.description}
              </p>
            </div>
          </a>
        ))
      }
    </PopoverControl>
  )
};