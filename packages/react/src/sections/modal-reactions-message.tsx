import React, { useMemo, useState } from 'react'
import { tabItems } from '../../const'
import {Modal, TabControl, TabPanel, UserCard} from '../components'
import {Section} from '../layout'

export const ModalReactionsMessage = ({open, setOpen}: any) => {
    const [active, setActive] = useState(tabItems[0].id)

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

    const reactionReact = <UserCard isModal className='bg-transparent' title='Christopher Campbell Christopher Campbell' avatar={{avatar: 'https://attach.setn.com/newsimages/2021/03/27/3084705-PH.jpg'}} content={<img className='w-6 h-6' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABhCAYAAADGBs+jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNDgyYTI0NC1jNzM5LWViNDktYTU4Yi04MDcwNTg4ZDBiN2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjBCOTE4Rjk5MTk2MTFFOUFCRjBBQ0VFNTMyRTk4QzEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjBCOTE4Rjg5MTk2MTFFOUFCRjBBQ0VFNTMyRTk4QzEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NmE3OGQxMDctMzFlYy1lZjQ4LWFhYWMtNjI1NTUxN2IzOTQzIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MjAxYjg1OGYtMmNjYy00ZjQ0LWEzMzgt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' />} />

    return (
        <Section narrow className="flex justify-center items-center bg-white">
            <Modal
                open={open}
                setOpen={setOpen}
                title="Message reactions"
                confirm={confirm}
                cancel={cancel}
                footerType="center"
            >
                <div className="p-4 mb-8 rounded">
                    <TabControl items={tabItems} active={active} onClick={setActive} />
                    <TabPanel id={tabItems[0].id} active={active} className='overflow-auto max-h-96'>
                        {reactionReact}
                    </TabPanel>
                    <TabPanel id={tabItems[1].id} active={active}>
                        {reactionReact}
                    </TabPanel>
                    <TabPanel id={tabItems[2].id} active={active}>
                        {reactionReact}
                    </TabPanel>
                </div>
            </Modal>
        </Section>
    )
}
