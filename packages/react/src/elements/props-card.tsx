import { createContext, ReactNode } from "react";

type ChannelContextProps = {
    children: ReactNode
}

interface ChannelInterface {
    title: string,
    chat: string,
    quantity: number,
    time: string,
    avatar: string,
}

const ChannelDefault ={
    title: 'Charlie Rhiel Madsen',
    chat: 'Thong tin chinh...',
    quantity: 10,
    time: '2 gio truoc',
    avatar: 'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatr-dep-cho-nu-anime.jpg',
}

export const ChannelContext = createContext<ChannelInterface>(ChannelDefault)

    const ChannelContextProvider = ({ children }: ChannelContextProps ) => {

    return (
        <ChannelContext.Provider value = {ChannelDefault}>
            {children}
        </ChannelContext.Provider>
    )}

export default ChannelContextProvider;

