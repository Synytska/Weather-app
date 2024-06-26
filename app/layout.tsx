import type { Metadata } from 'next';

import { BackgroundLayout } from '@/src/common/components/BackgroundLayout';
import { BaseLayout } from '@/src/common/components/BaseLayout';

export const metadata: Metadata = {
    title: 'Weather App',
    description: 'Modern Weather App'
};
import '@/src/styles/index.css';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-black">
                <div className="bg-sky w-full bg-no-repeat bg-center bg-cover">
                    <BackgroundLayout />
                    <BaseLayout>{children}</BaseLayout>
                </div>
            </body>
        </html>
    );
}

