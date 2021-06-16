export type UserInterface = {
    title: string
    content: string
    status: any
    time: string
    avatar: string
}

export const User = ({ title, content, status, time, avatar }: UserInterface) => {
    return (
        <body className="bg-gray-200 h-screen flex justify-center items-start">
                <div className="relative my-2.5 mx-4">
                    <img src={avatar} className="bg-gray-200 h-12 w-12 rounded-full"/>
                    <div className="bg-yellow-300 w-3 h-3 rounded-full absolute top-0 right-0 border border-white">{status}</div>
                </div>

                <div className="my-2.5 mr-4">
                    <div className="text-lg ">{title}</div>
                    <div className="text-gray-500 flex justify-between">
                        <p className="text-base text-left pt-2">{content}</p>
                        <p className="text-sm text-right pt-2.5 ">{time}</p>
                    </div>
                </div>
        </body>
    )
}
