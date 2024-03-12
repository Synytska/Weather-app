import moment from 'moment';
import Image from 'next/image';

import { Icons } from '@/src/ui/components/Icons';

export const ForecastWeek = ({ data }: any) => (
    <div className="flex flex-col gap-6">
        <div className="flex flex-col xl:flex-row w-full justify-between">
            {data.daily.slice(1).map((i: any) => (
                <div className="bg-gradient-radial rounded-full px-2 xl:py-4 flex xl:flex-col gap-0.5 justify-between xl:justify-center items-center">
                    <div className="text-[18px]">{moment.unix(i.dt).format('ddd')}</div>
                    <Image
                        width={50}
                        height={50}
                        alt="weather icon"
                        sizes="100vw"
                        src={`http://openweathermap.org/img/wn/${i.weather[0].icon}.png`}
                    />
                    <p>{Math.trunc(i.temp.min)} &#176;C</p>
                    <p>{Math.trunc(i.temp.max)} &#176;C</p>
                </div>
            ))}
        </div>
        <div>
            <div className="flex flex-row justify-between bg-[#001A0E] rounded-[20px] items-center p-4">
                <div>
                    <p className="text-[15px]">Today</p>
                    <p className="text-[14px] capitalize">{data.daily[0].weather[0].main}</p>
                </div>
                <p className="text-[36px]">{Math.trunc(data.daily[0].temp.max)} &#176;C</p>
                <Icons currentStatus={data.daily[0].weather[0].main} className="w-[80px] h-[80px]" />
            </div>
        </div>
    </div>
);

