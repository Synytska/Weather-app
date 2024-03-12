import moment from 'moment';

import { InfoBlock } from './InfoBlock';

import { SUNRISE, SUNSET, WIND, HUMIDITY, KM, PROC, AM, PM } from './constants/highligthtsconstant';

export const HighlightsWeather = ({ data }: any) => {
    const sunrise = moment.unix(data.current.sunrise).format('hh:mm');
    const sunset = moment.unix(data.current.sunset).format('hh:mm');
    return (
        <>
            <div className="w-[100%] bg-gradient-radial rounded-[20px] text-whiteM p-7">
                <h1 className="text-[26px]">Today's Highlight</h1>
                <div className="grid grid-cols-2 gap-5 mt-6">
                    <InfoBlock title={SUNRISE} info={sunrise} size={AM} />
                    <InfoBlock title={SUNSET} info={sunset} size={PM} />
                    <InfoBlock title={WIND} info={Math.trunc(data.current.wind_speed)} size={KM} />
                    <InfoBlock title={HUMIDITY} info={data.current.humidity} size={PROC} />
                </div>
            </div>
        </>
    );
};

