import React, { useMemo, useState } from 'react'
import { reactionsSettingTabs } from '../../const'
import { Heading4 } from '../../elements/typography'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import {Section} from '../../layout'
import {Modal, TabControl, TabPanel} from '../../components'

export const ModalReactionsSetting = ({open, setOpen}: any) => {
    const [active, setActive] = useState(reactionsSettingTabs[0].id)

    const confirm = useMemo(
        () => ({
            label: 'Save',
            onClick: () => setOpen(false),
            className: 'w-full',
        }),
        [],
    )
    const cancel = useMemo(
        () => ({
            label: 'Cancel',
            onClick: () => setOpen(false),
            className: 'w-full',
        }),
        [],
    )

    const mockReactions = [...Array(40)].map((index)=><EmojiHappyIcon className='w-9 h-9 mr-2 my-2' key={index} />)
    return (
        <Section narrow className="flex justify-center items-center bg-white">
            <Modal
                open={open}
                setOpen={setOpen}
                title="Reactions setting"
                confirm={confirm}
                cancel={cancel}
                footerType="center"
            >
                <div>
                    <div>
                        <Heading4>Selected reactions(25/25)</Heading4>
                        <div className='flex flex-wrap'>{[...Array(25)].map((index)=><EmojiHappyIcon className='w-9 h-9 mr-2 my-2' key={index} />)}</div>
                    </div>
                    <div className='mt-4'>
                        <Heading4>Reactions list</Heading4>
                        {reactionsSettingTabs.map((item, index)=>{
                            return (
                                <TabPanel id={reactionsSettingTabs[index].id} active={active} className='flex flex-wrap' key={index}>
                                    {mockReactions}
                                </TabPanel>
                            )
                        })}
                        <TabControl items={reactionsSettingTabs} active={active} onClick={setActive} />
                    </div>
                </div>
            </Modal>
        </Section>
    )
}
