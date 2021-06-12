import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import {Button} from "elements";
import clsx from "clsx";

type Form = {
    title: string;
    description: string;
    hasHeader?: boolean;
    className?: string;
};

export const Form = ({ title, description, children, hasHeader, className }: React.PropsWithChildren<Form>) => {
    return (
        <div className={clsx('bg-white rounded-xl w-288 md:w-560 border shadow-md p-6 md:p-14', className)}>
            {hasHeader && (
                <div className='flex justify-between items-center'>
                    <ChevronLeftIcon className='w-6 h-6 hover:text-primary-600 cursor-pointer' />
                    <div className='flex justify-between items-center'>
                        <span className='text-gray-500 text-xs'>Chưa có tài khoản?</span>
                        <Button title='Đăng ký' className='p-0 text-xs hover:text-primary-600' size='xs' />
                    </div>
                </div>
            )}
            <form className='flex flex-col'>
                <h1 className={clsx('text-2xl md:text-4xl', hasHeader ? 'my-1 md:my-6' : '')}>{title}</h1>
                <div className="text-xs md:text-lg my-2 md:my-5 text-gray-500">{description}</div>
                {children}
            </form>
        </div>
    );
};
