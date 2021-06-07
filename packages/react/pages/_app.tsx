import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';
import { NextLayout } from '../next-src/next-layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextLayout>
            <Component {...pageProps} />
        </NextLayout>
    );
}
export default MyApp;
