import { FC } from 'react';

import { ForecastFirstWrap } from './ForecastFirstWrap';
import { ForecastSecondWrap } from './ForecastSecondWrap';

import { TIME_FORMAT, WEATHER_TYPE } from '../constants/forecastconst';
import { TOMORROW } from '@/src/ui/constants/mainconstants';
import { IForecastWeek } from '@/src/ui/interfaces/interfaces';

// interface IForecastDay {
//     dt: number;
//     temp: {
//         min: number;
//         max: number;
//     };
//     weather: {
//         main: WEATHER_TYPE;
//         icon: string;
//     }[];
// }

// interface IForecastWeek {
//     daily: IForecastDay[];
// }

export const ForecastWeek: FC<IForecastWeek> = ({ daily }) => {
    return (
        <div className="wrapper_forecast">
            <div className="forecast_block">
                {daily.slice(1).map((day: any) => (
                    <div key={day.dt} className="forecast_main">
                        <ForecastFirstWrap dt={day.dt} format={TIME_FORMAT} icon={day.weather[0].icon} />
                        <p>{Math.trunc(day.temp.min)} &#176;C</p>
                        <p>{Math.trunc(day.temp.max)} &#176;C</p>
                    </div>
                ))}
            </div>
            <ForecastSecondWrap main={daily[0].weather[0].main} max={daily[0].temp.max} day={TOMORROW} />
        </div>
    );
};

