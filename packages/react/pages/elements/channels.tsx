import { useContext } from "react";
import { ChannelContext } from "../../src/elements/props-card";

const Channels = () => {
    const { title, chat, quantity, time, avatar = '' } = useContext(ChannelContext)
    return (
        <body className="bg-gray-100 h-screen flex justify-center items-start">
        <div className="absolute top-0 left-0 ">Channels messenger</div>
            <div className="bg-white m-4 rounded-3xl flex items-center">
                <div className="relative my-2.5 mx-4">
                    <img src={avatar} className="bg-gray-200 h-12 w-12 rounded-full"/>
                    <p className="bg-primary-40 text-center px-1 text-xs rounded-lg absolute bottom-0 left-0 border border-white-2">{quantity}</p>
                </div>
                <div className="my-2.5 mr-4">
                    <div className="text-lg">{title}</div>
                    <div className="text-gray-500 flex justify-between">
                        <div className="text-base pr-2.5 mt-2">{chat}</div>
                        <div className="text-sm	mt-2.5">{time}</div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Channels;
