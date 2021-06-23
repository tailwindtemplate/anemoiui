import React, { JSXElementConstructor, useRef } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { useOutsideClick } from '../../hooks/use-outside-click'
import { SelectItem } from './select-item'

export type Select = {
    value: any & { id: string }
    onSelect: (v: any & { id: string }) => void
    disabled?: boolean
    data: any & { id: string }[]
    className?: string
    LeftIcon?: JSXElementConstructor<any>
    leftIconClassname?: string
    UpIcon?: JSXElementConstructor<any>
    DownIcon?: JSXElementConstructor<any>
    selectIconClassName?: string
    Item?: JSXElementConstructor<any>
    itemClassName?: string
    itemSelectedClassName?: string
    selectClassName?: string
    suggestionsClassName?: string
};

export function Select<T = typeof SelectItem>({
    value,
    onSelect,
    disabled,
    data,
    className = 'p-2 focus:border-primary-600 hover:border-primary-400 border rounded-md',
    UpIcon = ChevronUpIcon,
    DownIcon = ChevronDownIcon,
    selectIconClassName = 'w-5 h-5',
    itemClassName = 'hover:bg-primary-100 hover:text-white p-2',
    LeftIcon,
    leftIconClassname = 'mr-2 w-5 h-5',
    selectClassName,
    itemSelectedClassName = 'bg-primary-200',
    Item = SelectItem,
    suggestionsClassName = 'bottom-0 right-0 translate-y-full bg-white w-full max-h-40 border mt-4 rounded-xl shadow-lg',
}: Select) {
    const ref = useRef<HTMLDivElement>(null)
    const [open, setOpen] = React.useState(false)

    const handleSelect = (v: any) => {
        setOpen(!open)
        onSelect(v)
    }

    useOutsideClick(ref, () => open && setOpen(false))

    return (
        <div
            ref={ref}
            className={clsx(
                'relative flex justify-between items-center',
                className,
                disabled && 'disable',
            )}
            onClick={() => setOpen(!open)}
        >
            {LeftIcon && <LeftIcon className={clsx(leftIconClassname)} />}
            <Item className={selectClassName} {...value} />
            {open ? (
                <UpIcon className={clsx(selectIconClassName)} />
            ) : (
                <DownIcon className={clsx(selectIconClassName)} />
            )}
            {open && (
                <div className={clsx('transform absolute z-10 overflow-auto', suggestionsClassName)}>
                    {data.map((item: any, index: number) => (
                        <Item key={index} className={clsx(itemClassName, item.id == value.id && itemSelectedClassName)} onClick={() => handleSelect(item)} {...item} />
                    ))}
                </div>
            )}
        </div>
    )
}
