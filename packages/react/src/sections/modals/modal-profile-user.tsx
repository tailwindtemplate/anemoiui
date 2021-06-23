import React, { useMemo } from 'react'
import { infoProfiles } from '../../const'
import {Section} from '../../layout'
import {Modal} from '../../components'
import {Avatar} from '../../elements'

export const ModalProfileUser = ({open, setOpen}: any) => {

    const confirm = useMemo(
        () => ({
            label: 'View profile',
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

    return (
        <Section narrow className="flex justify-center items-center bg-white">
            <Modal
                open={open}
                setOpen={setOpen}
                title="Profile user"
                confirm={confirm}
                cancel={cancel}
                footerType="center"
            >
                <div>
                    <div className="w-full flex justify-center items-center">
                        <Avatar
                            size='lg'
                            isRounded
                            src={
                                'https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg'
                            }
                        />
                    </div>
                    {infoProfiles.map(({ title, value }) => (
                        <div key={title} className="flex justify-between my-2">
                            <div className="subtitle2 text-neutral-800">{title}</div>
                            <div>{value}</div>
                        </div>
                    ))}
                </div>
            </Modal>
        </Section>
    )
}
