import { useMemo, useState } from 'react';
import { Modal, Section } from '../../src';

export default function ModalsPage() {
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
        <div className='p-2'>
            <div className='text-3xl'>Modals</div>
            <Section narrow className='flex justify-center items-center'>
                <button className='border p-2 rounded-md' onClick={() => setToggle(!toggle)}>Open modal</button>
                <Modal open={toggle} setOpen={setToggle} title="What is Lorem Ipsum" confirm={confirm} cancel={cancel} footerType="center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Modal>
            </Section>
        </div>
    )
}
