import React from 'react';

type TextMessage = {
    message: string;
}
export const TextMessage = ({ message }: TextMessage) => {
    return (
        <div className="break-all break-words">
            {message}
        </div>
    )
}
