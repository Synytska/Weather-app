import { FC } from 'react';

import { Icons } from '@/src/ui/components/Icons';

import { WEATHER_TYPE } from '@/src/ui/constants/mainconstants';

interface ISecWrap {
    main: WEATHER_TYPE;
    max: number;
    day: string;
}
export const ForecastSecondWrap: FC<ISecWrap> = ({ main, max, day }) => {
    return (
        <div className="forecast_details">
            <div>
                <p className="t15">{day}</p>
                <p className="t14Cap">{main}</p>
            </div>
            <p className="t36">{Math.trunc(max)} &#176;C</p>
            <Icons currentStatus={main} className="w-[80px] h-[80px]" />
        </div>
    );
};

