import { Modal, Section, TextInput } from '../../src';
import { useMemo, useState } from 'react';

export default function ModalImageFocus() {
    const [toggle, setToggle] = useState(false);

    const confirm = useMemo(
        () => ({
            label: 'Add',
            onClick: () => setToggle(false),
            className: 'w-full',
        }),
        [],
    );
    const cancel = useMemo(
        () => ({
            label: 'Cancel',
            onClick: () => setToggle(false),
            className: 'w-full',
        }),
        [],
    );

    return (
        <Section narrow className="flex justify-center items-center bg-white">
            <button className="border p-2 rounded-md" onClick={() => setToggle(!toggle)}>
                Open modal
            </button>
            <Modal
                open={toggle}
                setOpen={setToggle}
                title="Rename conversation"
                confirm={confirm}
                cancel={cancel}
                footerType="center"
            >
                <div>
                    <div className="mb-4 text-center">Change conversation's name</div>
                    <TextInput placeholder="Change conversation name..." wrapperClassName="my-4" />
                </div>
            </Modal>
        </Section>
    );
}
