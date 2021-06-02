import { useState } from 'react';
import clsx from 'clsx';
import { Switch } from '@headlessui/react';

type Toggle = {
    toggle?: boolean;
    setToggle?: (toggle: boolean) => void;
}

export default function Toggle({ toggle, setToggle }: Toggle) {
    const [enabled, setEnabled] = useState(false)
    const checked = toggle != undefined ? toggle : enabled
    const onChange = setToggle != undefined ? setToggle : setEnabled

    return (
        <Switch
            className={clsx(
                checked ? 'bg-primary-400' : 'bg-gray-200',
                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400'
            )}
            checked={checked}
            onChange={onChange}
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={clsx(
                    checked ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                )}
            />
        </Switch>
    )
}
