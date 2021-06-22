import React from 'react'
import { Wrapper } from '../components/modal/wrapper'
import { ChevronLeftIcon, ChevronRightIcon, XIcon, ZoomInIcon, ZoomOutIcon, DotsVerticalIcon, ArrowNarrowLeftIcon, ArrowNarrowRightIcon, RefreshIcon } from '@heroicons/react/outline'
import {Section} from '../layout'
import clsx from 'clsx'
import {useImageFocus} from '../hooks/use-image-focus'

type ModalImageFocus = {
    urls?: any
    open?: boolean;
    setOpen?: any;
}

export const ModalImageFocus = ({open = false, setOpen, urls}: ModalImageFocus) => {

    const {
        index,
        updateMove,
        updateMoveByKey,
        rotateBack,
        restoreDefault,
        rotateForward,
        customStyle,
        zoomIn,
        zoomOut,
        onWheel,
        dependencyOnWheel,
        scale,
        canRestore,
        onDraggable,
    } = useImageFocus(urls, 0)
    const src = 'https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg'
    const iconClassName = 'w-12 h-12'

    React.useEffect(updateMove, [index])
    React.useEffect(onWheel, dependencyOnWheel)
    React.useEffect(onDraggable, [onDraggable])

    return (
        <Section narrow className="flex justify-center items-center bg-white">
            <Wrapper open={open} setOpen={setOpen} size='full'>
                <div style={{backgroundImage: `url("${src}")`}} className="relative w-screen h-screen bg-no-repeat bg-cover bg-center blur flex justify-center items-center">
                    <div className="z-20 absolute w-full h-full bg-neutral-800 opacity-80 top-0" />
                    <img src={src} className={clsx('z-20 max-w-3xl max-h-full p-4 select-none', scale >= 1.5 && 'cursor-pointer')} draggable={false} style={customStyle} />
                    {urls?.length > 1 && <ChevronLeftIcon onClick={() => updateMoveByKey(-1)} className={clsx('z-20 absolute left-4 bottom-1/2 cursor-pointer hover:text-neutral-800', iconClassName)} />}
                    {urls?.length > 1 && <ChevronRightIcon onClick={() => updateMoveByKey(1)} className={clsx('z-20 absolute right-4 bottom-1/2 cursor-pointer hover:text-neutral-800', iconClassName)} />}
                    <XIcon className={clsx('z-20 absolute top-8 left-8 cursor-pointer hover:text-neutral-800', iconClassName)} onClick={()=>setOpen(false)} />
                    <div className='flex justify-center items-center absolute z-20 absolute bottom-4 w-full'>
                        <ZoomInIcon className={clsx('mx-2', iconClassName)} onClick={zoomIn} />
                        <ZoomOutIcon className={clsx('mx-2', iconClassName)} onClick={zoomOut} />
                        <DotsVerticalIcon className={clsx('mx-2', iconClassName)} />
                        <ArrowNarrowLeftIcon className={clsx('mx-2', iconClassName)} onClick={rotateBack} />
                        <ArrowNarrowRightIcon className={clsx('mx-2', iconClassName)} onClick={rotateForward} />
                        <DotsVerticalIcon className={clsx('mx-2', iconClassName)} />
                        <RefreshIcon className={clsx('mx-2', iconClassName, !canRestore && 'cursor-not-allowed opacity-50 pointer-events-none')} onClick={canRestore ? restoreDefault : undefined} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
