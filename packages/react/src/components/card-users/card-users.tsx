import { createContext, ReactNode } from "react";

type CardContextProps = {
    children: ReactNode,
}

interface CardInterface {
    title: string,
    content: string,
    status: any,
    time: string,
    avatar: string,
}

const CardDefault = {
    title: 'Charlie Rhiel Madsen',
    content: 'Thong tin chinh...',
    status: '',
    time: '31/15/100',
    avatar: 'https://www.paratime.vn/wp-content/uploads/2019/09/timestudio.vn-headshot-eye-glasses-02.jpg',
}

export const CardContext = createContext<CardInterface>(CardDefault)

const CardContextProvider = ({ children }: CardContextProps ) => {

    return (
        <CardContext.Provider value = {CardDefault}>
            {children}
        </CardContext.Provider>
    )}

export default CardContextProvider;
