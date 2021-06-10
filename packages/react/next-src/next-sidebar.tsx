import { Sidebar } from '../src';
import clsx from 'clsx';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { menu } from '../const';

const ToggleList = ({ name, items, Icon, loop }) => {
    const [show, setShow] = useState(false)
    const ShowIcon = useMemo(() => show ? ChevronRightIcon : ChevronDownIcon, [show])
    const list = useMemo(() => <SidebarList items={items} className="ml-9" loop={loop + 1} />, [items])
    return (
        <div>
            <div className={clsx('flex cursor-pointer p-2 capitalize items-center', loop == 0 ? 'font-medium' : 'text-sm')} onClick={() => setShow(!show)}>
                {name}
                <ShowIcon className="w-4 -h4 ml-auto" />
            </div>
            {show ? list : null}
        </div>
    )
}

const ListItem = ({ name, Icon = null, url = '', items = null, loop }) => {
    const { push, pathname } = useRouter()
    const onClick = () => push(url, url, { shallow: true })
    if (items) return <ToggleList items={items} name={name} Icon={Icon} loop={loop} />
    return (
        <div onClick={onClick} className={clsx('flex p-2 hover:text-primary-900 hover:font-bold cursor-pointer items-center rounded-md capitalize', pathname == url && 'text-primary-800 hover:text-primary-900 hover:font-bold', loop == 0 ? 'font-medium' : 'text-sm')}>
            {name}
        </div>
    )
}

const SidebarList = ({ items, className = '', loop = 0 }) => {
    return (
        <div className={clsx('space-y-1', className)}>
            {items.map((item, index) => <ListItem {...item} key={`${item.name}-${index}`} loop={loop} />)}
        </div>
    )
}

export const NextSidebar = () => {
    return (
        <Sidebar className="md:w-64 mr-4 p-2 text-text">
            <div className="space-y-1">
                <SidebarList items={menu} />
            </div>
        </Sidebar>
    )
}
