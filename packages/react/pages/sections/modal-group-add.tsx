import { FileUploader, Modal, Section, TextInput, UserCard } from '../../src';
import { useMemo, useState } from 'react';
import { members } from '../../const';
import { CheckIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import { Heading4 } from '../../src/elements/typography';

export default function ModalGroupAdd() {
    const [toggle, setToggle] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState([]);

    const confirm = useMemo(
        () => ({
            label: 'Create',
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

    const selectContact = (contact: any) => {
        selectedUsers.find(item => item === contact)
            ? setSelectedUsers(selectedUsers.filter(item => item !== contact))
            : setSelectedUsers(prev => [...prev, contact])
    };

    const restContacts = members.filter(item => !selectedUsers.includes(item))
    const renderList = selectedUsers.length > 0 ? restContacts : members

    return (
        <Section narrow className="flex justify-center items-center bg-white">
            <button className="border p-2 rounded-md" onClick={() => setToggle(!toggle)}>
                Open modal
            </button>
            <Modal
                open={toggle}
                setOpen={setToggle}
                title="Create new group"
                confirm={confirm}
                cancel={cancel}
                footerType="center"
            >
                <div>
                    <div className="flex items-center">
                        <FileUploader id="groupAvatar" className="mx-2" />
                        <TextInput placeholder="Name your group" />
                    </div>
                    <div>
                        <TextInput placeholder="Search" className="my-4" LeftIcon={SearchIcon} RightIcon={XIcon} />
                        {selectedUsers.length > 0 && (
                            <div>
                                <Heading4>Selected</Heading4>
                                <div className='overflow-auto max-h-64'>
                                    {selectedUsers.map((item, index) => {
                                        return (
                                            <div className='flex items-center justify-between' key={index}>
                                                <UserCard
                                                    title={item.name}
                                                    avatar={item.avatar}
                                                    onClick={() => selectContact(item)}
                                                    className="cursor-pointer"
                                                />
                                                <CheckIcon className='w-6 h-6 text-green-500' />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='mt-4'>
                        {renderList.length > 0 && (
                            <div>
                                <Heading4>Contact</Heading4>
                                <div className='overflow-auto max-h-64'>
                                    {renderList.map((item, index) => {
                                        return (
                                            <UserCard
                                                key={index}
                                                title={item.name}
                                                avatar={item.avatar}
                                                onClick={() => selectContact(item)}
                                                className="cursor-pointer max-w-xs"
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Modal>
        </Section>
    );
}
