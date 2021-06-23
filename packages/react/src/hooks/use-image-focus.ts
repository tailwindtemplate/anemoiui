import * as React from 'react'
// import { useSelector } from 'react-redux';

export const useImageFocus = (urls: any, i = 0) => {
    // const {
    //     option: { link },
    // } = useSelector((state: any) => state.modal);
    // const { i, urls } = link;
    // const dependencies = [link, index];
    const [index, setIndex] = React.useState(i)

    // Rotate & zoom state
    const [rotation, setRotation] = React.useState(0)

    const [scale, setScale] = React.useState(1)
    const dependencyOnWheel = [scale]
    const [dragInfo, setDragInfo] = React.useState({ lastClientX: 0, lastClientY: 0, x: 0, y: 0 })
    const canRestore = rotation !== 0 || scale !== 1 || dragInfo.x || dragInfo.y
    const restoreDefault = () => {
        setScale(1)
        setRotation(0)
        setDragInfo({ lastClientX: 0, lastClientY: 0, x: 0, y: 0 })
    }

    // Rotate
    const rotateForward = () => setRotation(rotation + 90)
    const rotateBack = () => setRotation(rotation - 90)

    // Zoom in/out
    const zoomIn = () => setScale(scale < 4 ? scale + 0.25 : scale)

    const zoomOut = () => {
        setScale(scale > 1 ? scale - 0.25 : scale)
        if (scale === 1) setDragInfo({ lastClientX: 0, lastClientY: 0, x: 0, y: 0 })
    }

    const customStyle: any = {
        position: 'absolute',
        transform: `translate(50%, 50%) rotate(${rotation}deg) scale(${scale})`,
        right: dragInfo.x ? `calc(50% + ${dragInfo.x}px)` : '50%',
        bottom: dragInfo.y ? `calc(50% + ${dragInfo.y}px)` : '50%',
    }
    // Arrow left/right
    const updateMoveByKey = (value:any) => {
        switch (index + value) {
        case -1:
            setIndex(urls.length - 1)
            break
        case urls.length:
            setIndex(0)
            break
        default:
            setIndex(index + value)
            break
        }
        restoreDefault()
    }

    const callback = (e:any) => {
        switch (e.key) {
        case 'ArrowRight':
            updateMoveByKey(1)
            break
        case 'ArrowLeft':
            updateMoveByKey(-1)
            break
        }
    }

    const updateMove = () => {
        if (urls?.length > 1) {
            window.addEventListener('keydown', callback)

            return () => {
                window.removeEventListener('keydown', callback)
            }
        }
    }

    // onWheel
    const onWheel = () => {
        const callback = (event:any) => {
            if (event.wheelDeltaY > 0) {
                zoomIn()
            } else {
                zoomOut()
            }
        }
        window.addEventListener('wheel', callback)

        return () => {
            window.removeEventListener('wheel', callback)
        }
    }

    // onDrag
    const onDraggable = () => {
        const onMouseDown = ({ button, clientX, clientY }: any) => {
            if (button === 0 && scale >= 1.5) {
                // set start offset
                setDragInfo(old => ({ ...old, lastClientX: clientX, lastClientY: clientY }))
                window.addEventListener('mouseup', onMouseUp)
                window.addEventListener('mousemove', onMouseMove)
            }
        }

        const onMouseUp = () => {
            window.removeEventListener('mouseup', onMouseUp)
            window.removeEventListener('mousemove', onMouseMove)
        }

        const onMouseMove = ({ clientX, clientY }: any) => {
            setDragInfo(old => ({
                lastClientX: clientX,
                lastClientY: clientY,
                x: old.x - (clientX - old.lastClientX),
                y: old.y - (clientY - old.lastClientY),
            }))
        }
        window.addEventListener('mousedown', onMouseDown)

        return () => {
            window.removeEventListener('mousedown', onMouseDown)
        }
    }

    return {
        urls,
        index,
        updateMove,
        updateMoveByKey,
        rotateForward,
        rotateBack,
        customStyle,
        zoomIn,
        zoomOut,
        onWheel,
        dependencyOnWheel,
        scale,
        onDraggable,
        restoreDefault,
        canRestore,
    }
}
