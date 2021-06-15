import { ImageLoader, Section } from '../../src';
import { useState } from 'react';
import { Wrapper } from '../../src/components/modal/wrapper';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '@heroicons/react/outline';

export default function ModalImageFocus() {
    const [toggle, setToggle] = useState(false);

    return (
        <Section narrow className="flex justify-center items-center bg-white">
            <ImageLoader
                src="https://znews-photo.zadn.vn/w660/Uploaded/qfssu/2021_06_01/iu_dep_het_phan_thien_ha_1.jpg"
                onClick={() => setToggle(!toggle)}
                className="w-40 h-40 bg-no-repeat"
            />
            <Wrapper open={toggle} setOpen={setToggle}>
                <div className="relative">
                    <ImageLoader src="https://znews-photo.zadn.vn/w660/Uploaded/qfssu/2021_06_01/iu_dep_het_phan_thien_ha_1.jpg" />
                    <ChevronLeftIcon className="w-8 h-8 absolute left-0 bottom-1/2 cursor-pointer hover:text-neutral-800" />
                    <ChevronRightIcon className="w-8 h-8 absolute right-0 bottom-1/2 cursor-pointer hover:text-neutral-800" />
                    <XIcon className="w-8 h-8 absolute left-0 top-0 cursor-pointer hover:text-neutral-800" />
                </div>
            </Wrapper>
        </Section>
    );
}
