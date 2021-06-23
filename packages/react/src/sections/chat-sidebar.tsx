import React from 'react'
import { TextInput } from '../elements'
import { Carousel, UserCard } from '../components'
import { carouselUser, userCard } from '../const'
import { SearchIcon } from '@heroicons/react/outline'

export const ChatSidebar = () => {
    return (
        <div className="space-y-5 flex flex-col h-full">
            <div className="space-y-5 flex-shrink-0">
                <TextInput LeftIcon={SearchIcon} className="bg-white" />
                <div>Chat</div>
                <Carousel snapMode="free" classCarousel="rounded" slidesPerView={5} spacingPerView={0} rtlCarousel={false}>
                    {carouselUser.map(({ id, img }) => (
                        <div
                            key={id}
                            className="keen-slider__slide w-12 h-12 relative"
                        >
                            <div className="h-12 relative w-12 mr-4 ">
                                <p className="absolute top-0 right-0 bg-green-400 w-3 h-3 rounded-full border-white	border-2" />
                                <img className="rounded-full w-12 h-12" src={img} alt={img} />
                            </div>
                        </div>
                    ))}
                </Carousel>
                <div>Current Messages</div>
            </div>
            <div className="space-y-2 overflow-y-scroll flex-1 py-2 pr-2">
                <UserCard {...userCard} className="bg-primary-200 hover:bg-primary-100 cursor-pointer" />
                <UserCard {...userCard} className="hover:bg-primary-100 cursor-pointer" />
                <UserCard {...userCard} className="hover:bg-primary-100 cursor-pointer" />
                <UserCard {...userCard} className="hover:bg-primary-100 cursor-pointer" />
                <UserCard {...userCard} className="hover:bg-primary-100 cursor-pointer" />
                <UserCard {...userCard} className="hover:bg-primary-100 cursor-pointer" />
                <UserCard {...userCard} className="hover:bg-primary-100 cursor-pointer" />
            </div>
        </div>
    )
}
