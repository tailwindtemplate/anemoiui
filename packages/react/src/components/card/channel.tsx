import React from 'react';

type Channel =  {
    title?: string
    content?: string
    time?: string
}

export const Channel = ({title, content, time}:React.PropsWithChildren<Channel>)=>{
    return (
        <div>
            <div>{title}</div>
            <div>{content} {time}</div>
        </div>
    );
};
