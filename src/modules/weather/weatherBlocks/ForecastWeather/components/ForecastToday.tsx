import { FC } from 'react';

import { ForecastFirstWrap } from './ForecastFirstWrap';
import { ForecastSecondWrap } from './ForecastSecondWrap';

import { IForecastWeek, IForecastHour } from '@/src/common/interfaces/interfaces';
import { HOUR_FORMAT } from '../constants/forecastconst';
import { TODAY } from '@/src/common/constants/mainconstants';

export const ForecastToday: FC<IForecastWeek> = ({ daily, hourly }) => (
    <div className="wrapper_forecast">
        <div className="forecast_block">
            {hourly &&
                hourly.slice(0, 7).map((hour: IForecastHour) => (
                    <div key={hour.dt} className="forecast_main">
                        <ForecastFirstWrap dt={hour.dt} format={HOUR_FORMAT} icon={hour.weather[0].icon} />
                        <p className="text-[18px]">{Math.trunc(hour.temp)} &#176;C</p>
                        <p>{hour.weather[0].main}</p>
                    </div>
                ))} 
        </div>
        <ForecastSecondWrap main={daily[1].weather[0].main} max={daily[1].temp.max} day={TODAY} />
    </div>
);
