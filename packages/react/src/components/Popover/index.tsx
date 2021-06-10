import { PropsWithChildren } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
// Check Type Props
type PopoverControl = {
  transform?: any
  namePopover?: string,
  Icon?: any,
  classIcon?: string,
  // class
  classNamePopover?: string,
  classPopover?: string,
  classPopoverPanel?: string,
  classPopoverButton?: string,
};

// Default Props
const Transform = {
  enter: "transition ease-out duration-200",
  enterFrom: "opacity-0 translate-y-1",
  enterTo: "opacity-100 translate-y-0",
  leave: "transition ease-in duration-150",
  leaveFrom: "opacity-100 translate-y-0",
  leaveTo: "opacity-0 translate-y-1"
};
const NamePopover = "Popover";
const ClassIcon = "ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition";
const ClassNamePopover = "text-gray-500 font-semibold";
const ClassPopover = "relative mt-8";
const ClassPopoverPanel = "absolute border z-10 transform  left-0	pt-2 rounded-lg shadow-xl	 mt-2 p-4";
const ClassPopoverButton = "text-gray-500 font-semibold inline-flex rounded-lg border group bg-orange-700 px-3 py-2 items-center items-center focus:outline-none rounded-lg border";
// Render
export const PopoverControl = ({
  transform = Transform,
  namePopover = NamePopover,
  classIcon = ClassIcon,
  Icon = ChevronDownIcon,
  // class
  classNamePopover = ClassNamePopover,
  classPopover = ClassPopover,
  classPopoverPanel = ClassPopoverPanel,
  classPopoverButton = ClassPopoverButton,
  children
}: PropsWithChildren<PopoverControl>) => {
  return (
    <Popover className={classPopover} >
      {
        () => (
          <div>
            <Popover.Button className={classPopoverButton} >
              <span className={classNamePopover}>{namePopover}</span>
              {Icon && <Icon className={classIcon} />}
            </Popover.Button>
            <Transition as={Fragment} {...transform}>
              <Popover.Panel className={classPopoverPanel}>
                {children}
              </Popover.Panel>
            </Transition>
          </div>
        )
      }
    </Popover>
  )
};
