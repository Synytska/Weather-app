import moment from 'moment';
import Image from 'next/image';

import { Icons } from '@/src/ui/components/Icons';

export const ForecastToday = ({ data }: any) => (
    <div className="flex flex-col gap-6">
        <div className="flex flex-col xl:flex-row w-full justify-between">
            {data.hourly.slice(0, 7).map((i: any) => (
                <div className="bg-gradient-radial rounded-full px-2 xl:py-4 flex xl:flex-col gap-0.5 justify-between xl:justify-center items-center">
                    <div className="text-[16px]">{moment.unix(i.dt).format('ha')}</div>
                    <Image
                        width={50}
                        height={50}
                        alt="weather icon"
                        sizes="100vw"
                        src={`http://openweathermap.org/img/wn/${i.weather[0].icon}.png`}
                    />
                    <p className="text-[18px]">{Math.trunc(i.temp)} &#176;C</p>
                    <p>{i.weather[0].main}</p>
                </div>
            ))}
        </div>

        <div className="flex flex-row justify-between bg-[#001A0E] rounded-[20px] items-center p-4">
            <div>
                <p className="text-[15px]">Tomorrow</p>
                <p className="text-[14px] capitalize">{data.daily[1].weather[0].main}</p>
            </div>
            <p className="text-[36px]">{Math.trunc(data.daily[1].temp.max)} &#176;C</p>
            <Icons currentStatus={data.daily[1].weather[0].main} className="w-[80px] h-[80px]" />
        </div>
    </div>
);

