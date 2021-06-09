import { Layout, Header } from '../src';
import { PropsWithChildren } from 'react';
import { menu } from '../const';
import { NextSidebar } from './next-sidebar';

export const NextLayout = ({ children }: PropsWithChildren<any>) => {
    return (
        <Layout className="h-screen bg-gray-100 flex overflow-hidden">
            <NextSidebar />
            <div className="relative flex-1">
                <div className="flex-1 h-full overflow-auto">
                    {children}
                </div>
            </div>
        </Layout>
    )
}
