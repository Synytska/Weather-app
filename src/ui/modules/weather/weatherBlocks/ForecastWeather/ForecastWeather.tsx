import { useState, FC } from 'react';

import { ForecastToday } from './components/ForecastToday';
import { ForecastWeek } from './components/ForecastWeek';
import { Button } from '@/src/ui/components/Button';

import { TODAY, WEEK, SLASH } from '@/src/ui/constants/mainconstants';
import { IForecastWeek } from '@/src/ui/interfaces/interfaces';

export const ForecastWeather: FC<IForecastWeek> = ({ hourly, daily }) => {
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
            {isToday ? <ForecastToday hourly={hourly} daily={daily} /> : <ForecastWeek hourly={hourly} daily={daily} />}
        </div>
    );
};

