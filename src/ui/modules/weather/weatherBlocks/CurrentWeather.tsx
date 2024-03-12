import Image from 'next/image';

import { Icons } from '@/src/ui/components/Icons';

const moment = require('moment-timezone');

export const CurrentWeather = ({ data }: any) => (
    <div className="border-solid w-[100%] bg-gradient-radial rounded-[20px] text-whiteM p-6 md:h-[330px] flex flex-col justify-between">
        <div className="flex flex-row justify-between items-start">
            <div>
                <div className="gap-1 flex flex-nowrap tracking-wide bg-whiteM text-blackM rounded-full py-1 px-4 text-[14px] mb-6">
                    <Image src="/loc.png" width={20} height={20} alt="location" className="max-h-[20px]"></Image>
                    <div>{data.city.length <= 7 ? data.city : data.city.slice(0, 7) + '...'}</div>
                </div>
                <h1 className="text-[26px]">Weather</h1>
                <p className="text-[14px]">Now</p>
            </div>
            <div className="text-whiteM pb-4">{moment.unix(data.current.dt).tz(data.timezone).format('HH:mm a')}</div>
        </div>

        <div className="flex justify-between items-center">
            <div>
                <p className="text-[44px] lg:text-[66px]">{Math.trunc(data.current.temp)} &#176;C</p>
                <p className="text-[14px] capitalize">{data.current.weather[0].description}</p>
                <p className="text-[14px]">Feels like: {Math.trunc(data.current.feels_like)}&#176;C</p>
            </div>
            <div className="flex flex-col items-end mt-[-40px]">
                <Icons
                    currentStatus={data.current.weather[0].main}
                    className="w-[120px] h-[120px] md:w-[180px] md:h-[180px]"
                />
                <div className="flex flex-row gap-4 text-[14px]">
                    <p>Hight: {Math.trunc(data.daily[0].temp.max)}</p>
                    <p>Low: {Math.trunc(data.daily[0].temp.min)}</p>
                </div>
            </div>
        </div>
    </div>
);

