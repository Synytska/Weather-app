import moment from 'moment';
import Image from 'next/image';
import { FC } from 'react';

import { WEATHER_ICON_URL } from '@/src/ui/constants/apiconstants';

interface IForWraper {
    dt: number;
    format?: string;
    icon?: string;
}

export const ForecastFirstWrap: FC<IForWraper> = ({ dt, format, icon }) => {
    const momentTime = (data: number) => {
        return moment.unix(data).format(format);
    };

    return (
        <>
            <div className="text-[18px]">{momentTime(dt)}</div>
            <Image width={50} height={50} alt="weather icon" src={`${WEATHER_ICON_URL}${icon}.png`} />
        </>
    );
};

