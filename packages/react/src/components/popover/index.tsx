import React, { PropsWithChildren, JSXElementConstructor } from 'react'
import { Popover, Transition, TransitionClasses, TransitionEvents } from '@headlessui/react'
// Check Type Props
type PopoverControl = {
  transitions?: TransitionClasses & TransitionEvents & { show?: boolean; appear?: boolean; },
  namePopover?: string,
  Icon?: JSXElementConstructor<any>,
  classIcon?: string,
  // class
  classNamePopover?: string,
  classPopover?: string,
  classPopoverPanel?: string,
  classPopoverButton?: string,
};
// Default Props
const Transitions = {
    enter: 'transition ease-out duration-200',
    enterFrom: 'opacity-0 translate-y-1',
    enterTo: 'opacity-100 translate-y-0',
    leave: 'transition ease-in duration-150',
    leaveFrom: 'opacity-100 translate-y-0',
    leaveTo: 'opacity-0 translate-y-1'
}
const ClassIcon = 'ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition'
const ClassNamePopover = 'text-gray-500 font-semibold'
const ClassPopover = 'relative'
const ClassPopoverPanel = 'absolute border z-10 transform left-0pt-2 rounded-lg shadow-xl mt-2 p-4'
const ClassPopoverButton = 'text-gray-500 font-semibold inline-flex rounded-lg border group bg-orange-700 px-3 py-2 items-center items-center focus:outline-none rounded-lg border'
// Render
export const PopoverControl = ({
    transitions = Transitions,
    namePopover,
    classIcon = ClassIcon,
    Icon,
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
                ({ open }) => (
                    <div>
                        <Popover.Button className={classPopoverButton} >
                            <span className={classNamePopover}>{namePopover}</span>
                            {Icon && <Icon className={classIcon} />}
                        </Popover.Button>
                        <Transition as="div" show={open} {...transitions}>
                            <Popover.Panel className={classPopoverPanel}>{children}</Popover.Panel>
                        </Transition>
                    </div>
                )
            }
        </Popover>
    )
}
