import { useState, FC } from 'react';

import { ForecastToday } from './components/ForecastToday';
import { ForecastWeek } from './components/ForecastWeek';
import { Button } from '@/src/common/components/Button';

import { IForecastWeek } from '@/src/common/interfaces/interfaces';
import { TODAY, WEEK, SLASH } from '@/src/common/constants/mainconstants';

export const ForecastWeather: FC<IForecastWeek> = ({ daily, hourly }) => {
    const [isToday, setIsToday] = useState<boolean>(true);

    const TodayOnClick = (isTrue: boolean) => {
        setIsToday(isTrue);
    };
    return (
        <div className="wrapper bg-[#00361F] gap-6">
            <div className="text-[26px]">
                <Button onClick={() => TodayOnClick(true)} text={TODAY} />
                {SLASH}
                <Button onClick={() => TodayOnClick(false)} text={WEEK} />
            </div>
            {isToday ? <ForecastToday daily={daily} hourly={hourly} /> : <ForecastWeek daily={daily} />}
        </div>
    );
};
