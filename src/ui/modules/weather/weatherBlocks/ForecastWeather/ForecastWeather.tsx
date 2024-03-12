import { useState } from 'react';
import { ForecastToday } from './ForecastToday';
import { ForecastWeek } from './ForecastWeek';

export const ForecastWeather = ({ data }: any) => {
    const [isToday, setIsToday] = useState<boolean>(true);

    const TodayOnClick = (isTrue: boolean) => {
        setIsToday(isTrue);
    };
    return (
        <div className="w-[100%] bg-[#00361F] rounded-[20px] text-[white] p-6 flex flex-col justify-between gap-6 xl:h-[400px]">
            <div className="text-[26px]">
                <button
                    className="hover:animate-pulse active:underline"
                    type="button"
                    onClick={() => TodayOnClick(true)}
                >
                    Today
                </button>
                /
                <button
                    className="hover:animate-pulse active:underline"
                    type="button"
                    onClick={() => TodayOnClick(false)}
                >
                    Week
                </button>
            </div>
            {isToday ? <ForecastToday data={data} /> : <ForecastWeek data={data} />}
        </div>
    );
};

