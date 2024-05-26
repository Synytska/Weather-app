import { FC, PropsWithChildren } from 'react';

import { Rubik } from 'next/font/google';

export const rubic = Rubik({ subsets: ['latin'], weight: ['400'], style: 'normal' });

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
    <div className={`${rubic.className} antialiased max-w-[1280px] mx-6 my-4 lg:mx-20 lg:my-12 `}>{children}</div>
);
