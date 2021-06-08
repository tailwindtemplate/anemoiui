import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react';
interface PopoverControl {
  transform?: Object
  namePopover?: string,
  iconPath?: string,
  classIcon?: string,
  // class
  classNamePopover?: string,
  classPopover?: string,
  classPopoverPanel?: string,
  classPopoverButton?: string,
};
export const PopoverControl: React.FC<PopoverControl> = ({
  transform,
  namePopover,
  iconPath,
  classIcon,
  // class
  classNamePopover,
  classPopover,
  classPopoverPanel,
  classPopoverButton,
  children
}) => {
  return (
    <Popover className={classPopover} >
      {
        () => (
          <>
            <Popover.Button
              className={classPopoverButton}
            >
              <span className={classNamePopover}>{namePopover}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classIcon}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d={iconPath} clipRule="evenodd" />
              </svg>
            </Popover.Button>
            <Transition
              as={Fragment}
              {...transform}
            >
              <Popover.Panel className={classPopoverPanel}>
                {children}
              </Popover.Panel>
            </Transition>
          </>
        )
      }
    </Popover>
  )
};
