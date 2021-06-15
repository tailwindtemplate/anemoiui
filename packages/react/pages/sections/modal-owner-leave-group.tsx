import { Avatar, Modal, Radio, Section } from '../../src';
import { useMemo, useState } from 'react';
import { members } from '../../const';

export default function ModalOwnerLeaveGroup() {
    const [toggle, setToggle] = useState(false);
    const [visibility, setVisibility] = useState(false);

    const confirm = useMemo(
        () => ({
            label: 'Confirm',
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
                title="Options when leaving group"
                confirm={confirm}
                cancel={cancel}
                footerType="center"
            >
                <div>
                    <Radio
                        checked={!visibility}
                        onClick={() => setVisibility(false)}
                        label="Delete group"
                        className="justify-start mb-3"
                    />
                    <Radio
                        checked={visibility}
                        onClick={() => setVisibility(true)}
                        label="Transfer ownership"
                        className="justify-start"
                    />

                    {visibility && (
                        <div className="border-t-2 my-4">
                            <div className="text-neutral-700 font-medium mt-4">Members</div>
                            {members.map((item, index) => {
                                return (
                                    <div key={index} className="flex items-center my-4">
                                        <Avatar src={item.avatar} isRounded size="sm" className="mr-4" />
                                        <div>{item.name}</div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </Modal>
        </Section>
    );
}
