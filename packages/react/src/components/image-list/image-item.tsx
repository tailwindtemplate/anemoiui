import React from 'react'
import {ImageLoader} from '../../elements'

export const ImageItem = ({src}: any) => {
    return (
        <ImageLoader src={src} className='bg-no-repeat bg-center w-48 h-48 rounded-3xl' imageStyle="cover" />
    )
}
