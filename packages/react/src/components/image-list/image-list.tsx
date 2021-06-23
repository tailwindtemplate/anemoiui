import React from 'react'
import { avatars } from '../../const'
import { ImageItem } from './image-item'
import { Avatar, ImageLoader } from '../../elements'

export const ImageList = () => {
    const maxAvatar = 4
    const slice = avatars.slice(0, maxAvatar)
    return (
        <div>
            {avatars.length > 1 ? (
                <div className="flex justify-between w-full">
                    {slice.map((avatar, index) => {
                        return index == slice.length - 1 ? (
                            <Avatar src={avatar} className="w-48 h-48 rounded-3xl">
                                <div className="absolute w-full h-full left-0 right-0 bg-neutral-200 rounded-md z-10 flex items-center justify-center bg-opacity-20 text-white text-3xl font-medium">
                                    +{avatars.length - maxAvatar}
                                </div>
                            </Avatar>
                        ) : (
                            <ImageItem src={avatar} key={index} />
                        )
                    })}
                </div>
            ) : (
                <ImageLoader src={avatars[0]} className="bg-no-repeat bg-center max-w-xs rounded-3xl" imageStyle="cover" />
            )}
        </div>
    )
}
