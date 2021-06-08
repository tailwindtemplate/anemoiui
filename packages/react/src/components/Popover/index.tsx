import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react';
interface PopoverControl {
  data?: any[],
  transform?: Object
  namePopover?: string,
  iconPath?: string,
  classIcon?: string,
  // class
  classGroundNameDescription?: string,
  classHref?: string,
  classNameHref?: string,
  classDescription?: string,
  classNamePopover?: string,
  classPopover?: string,
  classPopoverPanel?: string,
  classPopoverButton?: string,
};
export const PopoverControl: React.FC<PopoverControl> = ({
  data,
  transform,
  namePopover,
  iconPath,
  classIcon,
  // class
  classGroundNameDescription,
  classHref,
  classNameHref,
  classDescription,
  classNamePopover,
  classPopover,
  classPopoverPanel,
  classPopoverButton,
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
                {
                  data?.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className={classHref}
                    >
                      <item.icon aria-hidden="true" />
                      <div
                        className={classGroundNameDescription}
                      >
                        <p className={classNameHref}>
                          {item.name}
                        </p>
                        <p className={classDescription}>
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))
                }
              </Popover.Panel>
            </Transition>
          </>
        )
      }
    </Popover>
  )
};
