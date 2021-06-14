import { UserGroupIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import { ChannelContext } from "./props-card";

const Channel = () => {
    const { title, chat, quantity, time, avatar = '' } = useContext(ChannelContext)
    return (
        <body className="bg-gray-200 h-screen">
            <div className="bg-white rounded-3xl flex items-center">
                <div className="relative my-2.5 mx-4">
                    <img src={avatar} className="bg-gray-200 h-12 w-12 rounded-full"/>
                    <div className="bg-yellow-300 px-0.5 text-xs rounded-lg absolute bottom-0 left-0">{quantity}</div>
                </div>
                <div className="my-2.5 mr-4">
                    <div className="text-lg">{title}</div>
                    <div className="text-gray-500 flex justify-items-stretch">
                        <div className="text-base pr-2 mt-2">{chat}</div>
                        <div className="text-sm	mt-2.5">{time}</div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Channel;
