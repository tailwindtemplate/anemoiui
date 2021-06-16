import { Modal, Section, TabControl, TabPanel } from '../../src';
import { useMemo, useState } from 'react';
import { reactionsSettingTabs } from "../../const";
import { Heading4 } from "../../src/elements/typography";
import { EmojiHappyIcon } from '@heroicons/react/outline'

export default function ModalReactionsSetting() {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(reactionsSettingTabs[0].id);

    const confirm = useMemo(
        () => ({
            label: 'View profile',
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

    const mockReactions = [...Array(40)].map((item)=><EmojiHappyIcon className='w-9 h-9 mr-2 my-2' key={item} />);
    return (
        <Section narrow className="flex justify-center items-center bg-white">
            <button className="border p-2 rounded-md" onClick={() => setToggle(!toggle)}>
                Open modal
            </button>
            <Modal
                open={toggle}
                setOpen={setToggle}
                title="Reactions setting"
                confirm={confirm}
                cancel={cancel}
                footerType="center"
            >
                <div>
                    <div>
                        <Heading4>Selected reactions(6/25)</Heading4>
                        <div className='flex flex-wrap'>{[...Array(25)].map((index)=><EmojiHappyIcon className='w-9 h-9 mr-2 my-2' key={index} />)}</div>
                    </div>
                    <div className='mt-4'>
                        <Heading4>Reactions list</Heading4>
                        {reactionsSettingTabs.map((item, index)=>{
                            return (
                                <TabPanel id={reactionsSettingTabs[index].id} active={active} className='flex flex-wrap'>
                                    {mockReactions}
                                </TabPanel>
                            )
                        })}
                        <TabControl items={reactionsSettingTabs} active={active} onClick={setActive} />
                    </div>
                </div>
            </Modal>
        </Section>
    );
}
