import { Layout } from '../src';
import { PropsWithChildren } from 'react';
import { Header } from '../src/layout/header';
import { menu } from '../const';

export const NextLayout = ({ children }: PropsWithChildren<any>) => {
    return (
        <Layout className="bg-gray-100">
            <Header mainNavigation={menu} />
            {children}
        </Layout>
    )
}
