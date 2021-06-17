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
    UpIcon?: JSXElementConstructor<any>
    DownIcon?: JSXElementConstructor<any>
    selectIconClassName?: string
    Item?: JSXElementConstructor<any>
    itemClassName?: string
    itemSelectedClassName?: string
    selectClassName?: string
};

export function Select<T = typeof SelectItem>({
    value,
    onSelect,
    disabled,
    data,
    className,
    UpIcon = ChevronUpIcon,
    DownIcon = ChevronDownIcon,
    selectIconClassName = 'w-5 h-5',
    itemClassName = 'hover:bg-primary-100 hover:text-white p-2',
    LeftIcon,
    selectClassName,
    itemSelectedClassName = 'bg-primary-200',
    Item = SelectItem,
}: Select) {
    const ref = useRef<HTMLDivElement>(null)
    const [open, setOpen] = React.useState(false)

    const handleSelect = (v: any) => {
        setOpen(!open)
        onSelect(v)
    }

    const disableStyle = disabled ? 'cursor-not-allowed opacity-50 select-none pointer-events-none' : ''
    useOutsideClick(ref, () => open && setOpen(false))

    return (
        <div
            ref={ref}
            className={clsx(
                'relative border rounded-md flex justify-between items-center p-2 focus:border-primary-600 hover:border-primary-400 text-sm',
                className,
                disableStyle
            )}
            onClick={() => setOpen(!open)}
        >
            {LeftIcon && <LeftIcon className={clsx('mr-2 w-5 h-5')} />}
            <Item className={selectClassName} {...value} />
            {open ? (
                <UpIcon className={clsx(selectIconClassName)} />
            ) : (
                <DownIcon className={clsx(selectIconClassName)} />
            )}
            {open && (
                <div className="transform absolute bottom-0 right-0 translate-y-full z-10 bg-white w-full overflow-auto max-h-40 border mt-4 rounded-xl shadow-lg">
                    {data.map((item: any, index: number) => (
                        <Item key={index} className={clsx(itemClassName, item.id == value.id && itemSelectedClassName)} onClick={() => handleSelect(item)} {...item} />
                    ))}
                </div>
            )}
        </div>
    )
}
