import { FC } from 'react';
import moment from 'moment';

import { InfoBlock } from './InfoBlock';

import {
    SUNRISE,
    SUNSET,
    WIND,
    HUMIDITY,
    KM,
    PROC,
    AM,
    PM,
    HOUR_FORMAT,
    HIGH_TITLE
} from './constants/highligthtsconstant';

interface IHighlights {
    current: {
        sunrise: number;
        sunset: number;
        wind_speed: number;
        humidity: number;
    };
}

export const HighlightsWeather: FC<IHighlights> = ({ current }) => {
    const sunrise = moment.unix(current.sunrise).format(HOUR_FORMAT);
    const sunset = moment.unix(current.sunset).format(HOUR_FORMAT);
    return (
        <>
            <div className="wrapper bg-gradient-radial">
                <h1 className="text-[26px]">{HIGH_TITLE}</h1>
                <div className="grid grid-cols-2 gap-5 mt-6">
                    <InfoBlock title={SUNRISE} info={sunrise} size={AM} />
                    <InfoBlock title={SUNSET} info={sunset} size={PM} />
                    <InfoBlock title={WIND} info={Math.trunc(current.wind_speed)} size={KM} />
                    <InfoBlock title={HUMIDITY} info={current.humidity} size={PROC} />
                </div>
            </div>
        </>
    );
};
