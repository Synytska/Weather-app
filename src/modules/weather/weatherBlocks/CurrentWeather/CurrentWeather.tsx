import { FC } from 'react';
import Image from 'next/image';
import moment from 'moment-timezone';

import { Icons } from '@/src/common/components/Icons';
import { truncateOutput } from '@/src/common/utils/truncateOutput';

import { ISearchData } from '@/src/common/interfaces/interfaces';
import { WEATHER_TYPE } from '@/src/common/constants/mainconstants';
import { WEATHER, NOW, CURR_TIME_FORM, FEELS_LIKE } from './constants/currentconstants';

interface ICurrStatus {
    city: ISearchData['label'];
    timezone: string;
    current: {
        dt: number;
        temp: number;
        feels_like: number;
        weather: {
            description: string;
            main: WEATHER_TYPE;
        }[];
    };
    daily: {
        temp: {
            max: number;
            min: number;
        };
    }[];
}

export const CurrentWeather: FC<ICurrStatus> = ({ city, timezone, current, daily }) => {
    const cityTrunc = truncateOutput(city, 7);
    return (
        <div className="wrapper bg-gradient-radial">
            <div className="flex flex-row justify-between items-start">
                <div>
                    <div className="gap-1 flex flex-nowrap tracking-wide bg-whiteM text-blackM rounded-full py-1 px-4 text-[14px] mb-6">
                        <Image src="/loc.png" width={20} height={20} alt="location" className="max-h-[20px]"></Image>
                        <div>{cityTrunc}</div>
                    </div>
                    <h1 className="text-[26px] capitalize">{WEATHER}</h1>
                    <p className="text-[14px]">{NOW}</p>
                </div>
                <div className="text-whiteM pb-4 text-[18px]">Time: {moment.unix(current.dt).tz(timezone).format(CURR_TIME_FORM)}</div>
            </div>

            <div className="flex justify-between items-center">
                <div>
                    <p className="text-[44px] lg:text-[66px]">{Math.trunc(current.temp)} &#176;C</p>
                    <p className="text-[14px] capitalize">{current.weather[0].description}</p>
                    <p className="text-[14px]">
                        {FEELS_LIKE}
                        {Math.trunc(current.feels_like)}&#176;C
                    </p>
                </div>
                <div className="flex flex-col items-end mt-[-40px]">
                    <Icons
                        currentStatus={current.weather[0].main}
                        className="w-[120px] h-[120px] md:w-[180px] md:h-[180px]"
                    />
                    <div className="flex flex-row gap-4 text-[14px]">
                        <p>Hight: {Math.trunc(daily[0].temp.max)}</p>
                        <p>Low: {Math.trunc(daily[0].temp.min)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
