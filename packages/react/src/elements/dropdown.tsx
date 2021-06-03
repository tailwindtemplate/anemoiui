import React from "react";

type Button = {
    title?: any;
}

export default function Dropdown({ title, children }: React.PropsWithChildren<Button>) {
    const [active, setActive] = React.useState(false);
    return (
        <div>
            <div className='cursor-pointer' onClick={()=> setActive(!active)}>{title}</div>
            {active && <div className='bg-neutral-100 rounded p-2 shadow'>
                {children}
            </div>}
        </div>
    )
}
