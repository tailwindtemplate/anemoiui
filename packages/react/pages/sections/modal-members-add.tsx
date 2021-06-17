import { Avatar, Modal, Section, TextInput } from '../../src';
import { useMemo, useState } from 'react';
import { members } from '../../const';
import { SearchIcon } from '@heroicons/react/outline';

export default function ModalMembersAdd() {
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
                title="Members add"
                confirm={confirm}
                cancel={cancel}
                footerType="center"
            >
                <div className="overflow-hidden">
                    <TextInput LeftIcon={SearchIcon} />
                    {members.map((item, index) => {
                        return (
                            <div key={index} className="flex items-center my-4 w-full">
                                <Avatar src={item.avatar} isRounded size="sm" className="mr-4" />
                                <div className='text-neutral-800 truncate w-3/4'>{item.name}</div>
                            </div>
                        );
                    })}
                </div>
            </Modal>
        </Section>
    );
}
