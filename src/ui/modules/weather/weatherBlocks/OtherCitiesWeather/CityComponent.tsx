import { FC } from 'react';

import { Icons } from '@/src/ui/components/Icons';

import { WEATHER_TYPE } from '@/src/ui/constants/mainconstants';

interface ICityComponent {
    temp: number;
    city: string;
    description: string;
    main: WEATHER_TYPE;
}

export const CityComponent: FC<ICityComponent> = ({ temp, city, description, main }) => {
    return (
        <div className="bg-[#001A0E] rounded-[20px] p-7 w-full flex flex-row justify-between items-center">
            <div>
                <p className="text-[46px]">{temp} &#176;C</p>
                <p className="text-[18px]">{city}</p>
                <p className="text-[14px] capitalize">{description}</p>
            </div>

            <Icons currentStatus={main} className="w-[100px] h-[100px]" />
        </div>
    );
};

