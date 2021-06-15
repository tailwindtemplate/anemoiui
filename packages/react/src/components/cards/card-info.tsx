import React from 'react';
import { CardWrapper } from './card-wrapper';
import { InfoLine } from './info-line';

type CardInfo = {
    data: InfoLine[]
    className?: string
}

export const CardInfo = ({ data, className }: CardInfo) => {
    return (
        <CardWrapper className={className}>
            {data.map((item) => <InfoLine labelClassName="text-gray-400" {...item} />)}
        </CardWrapper>
    )
}
