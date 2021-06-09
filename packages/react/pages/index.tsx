import { useState } from 'react';
import Toggle from '../src/elements/inputs/toggle';
import { Carousel } from '../src/components/Carousel';
import { Tabs } from '../src/components/Tabs'
export default function Home() {
    const [toggle, setToggle] = useState(true)
    return (
        <div className="container mx-auto">

            <Tabs
                defaultActiveKey="1"
                controls={[
                    {
                        "tab": "tab 1",
                        "key": "1"
                    },
                    {
                        "tab": "tab 2",
                        "key": "2"
                    },
                    {
                        "tab": "tab 3",
                        "key": "3"
                    }
                ]}
                //TabControl
                classTabs='block p-4'
                classTabControl="flex p-4"
                classTabControlItems="px-4 cursor-pointer"
                classActive="active text-green-400"
                //TabPans
                classTabPans="grid lg:grid-cols-4 sm:grid-cols-3 grid-rows-2 gap-x-4 gap-y-8	grid-cols-2 p-4"
                classTabPansItems="p-4 border shadow-lg rounded transform duration-200 ease-in-out hover:scale-105"
            />


            {/* <Carousel
                data={[
                    { "item": "1" },
                    { "item": "2" },
                    { "item": "3" },
                    { "item": "4" },
                    { "item": "5" },
                    { "item": "6" }
                ]}
                classCarousel="carousel relative mt-4"
                classItemsCarousel="max-w-sm bg-gray-300 h-60"
                defaultCarousel={0}
                displayNextPrev={true}
                displayDots={true}
                classDots="flex px-10 justify-center"
                classItemDots="rounded-none	w-2	h-2 bg-gray-300	p-2 m-2 rounded-2xl	"
                activeDots="bg-black"
                autoplay={false}
                timeAutoplay={500}
                loopCarousel={true}
                slidesPerView={3}
                spacingPerView={15}
                snapMode="snap"
                iconLeft={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                }
                iconRight={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>}
            /> */}

        </div>
    )
};
