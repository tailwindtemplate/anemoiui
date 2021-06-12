import { PopoverControl } from '../../src';
// Default Data Popover
import { popover } from '../../const';
export default function Popover() {
  return (
    <PopoverControl >
      {
        popover.map(({ name, href, Icon, description, classIcon }) => (
          <a
            key={name}
            href={href}
            className="flex items-center px-4 text-gray-900 text-gray-500 py-2 duration-150 ease-in-out rounded-lg transition hover:bg-gray-600 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
          >
            <Icon className={classIcon} aria-hidden="true" />
            <div
              className="ml-4"
            >
              <p className="text-sm font-semibold">
                {name}
              </p>
              <p className="text-sm">
                {description}
              </p>
            </div>
          </a>
        ))
      }
    </PopoverControl>
  )
};