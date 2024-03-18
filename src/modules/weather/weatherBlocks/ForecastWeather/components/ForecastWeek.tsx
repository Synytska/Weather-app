import { FC } from 'react';

import { ForecastFirstWrap } from './ForecastFirstWrap';
import { ForecastSecondWrap } from './ForecastSecondWrap';

import { IForecastWeek, IForecastDay } from '@/src/common/interfaces/interfaces';
import { TIME_FORMAT } from '../constants/forecastconst';
import { TOMORROW } from '@/src/common/constants/mainconstants';

export const ForecastWeek: FC<IForecastWeek> = ({ daily }) => (
    <div className="wrapper_forecast">
        <div className="forecast_block">
            {daily.slice(1).map((day: IForecastDay) => (
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
