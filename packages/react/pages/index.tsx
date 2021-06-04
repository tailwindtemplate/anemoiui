import { useMemo, useState } from 'react';
import { Modal } from '../src';

export default function Home() {
    const [toggle, setToggle] = useState(false)
    const confirm = useMemo(() => ({
        label: 'confirm',
        onClick: () => setToggle(false),
        className: 'w-full'
    }), [])
    const cancel = useMemo(() => ({
        label: 'cancel',
        onClick: () => setToggle(false),
        className: 'w-full'
    }), [])

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>open modal</button>
            <Modal theme="dark" open={toggle} setOpen={setToggle} title="title" content="content" confirm={confirm} cancel={cancel} footerType="center" />
        </div>
    )
}
