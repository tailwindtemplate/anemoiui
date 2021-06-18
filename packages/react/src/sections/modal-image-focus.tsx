import React from 'react'
import { Wrapper } from '../components/modal/wrapper'
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '@heroicons/react/outline'
import {Section} from '../layout'
import {ImageLoader} from '../elements'

export default function ModalImageFocus({open, setOpen}: any) {

    return (
        <Section narrow className="flex justify-center items-center bg-white">
            <Wrapper open={open} setOpen={setOpen}>
                <div className="relative">
                    <ImageLoader src="https://znews-photo.zadn.vn/w660/Uploaded/qfssu/2021_06_01/iu_dep_het_phan_thien_ha_1.jpg" />
                    <ChevronLeftIcon className="w-8 h-8 absolute left-0 bottom-1/2 cursor-pointer hover:text-neutral-800" />
                    <ChevronRightIcon className="w-8 h-8 absolute right-0 bottom-1/2 cursor-pointer hover:text-neutral-800" />
                    <XIcon className="w-8 h-8 absolute left-0 top-0 cursor-pointer hover:text-neutral-800" onClick={()=>setOpen(false)} />
                </div>
            </Wrapper>
        </Section>
    )
}
