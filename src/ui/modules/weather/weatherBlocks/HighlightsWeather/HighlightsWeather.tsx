import moment from 'moment';

import { InfoBlock } from './InfoBlock';

import { SUNRISE, SUNSET, WIND, HUMIDITY, KM, PROC } from './constants/highligthtsconstant';

export const HighlightsWeather = ({ data }: any) => {
    const sunrise = moment.unix(data.sys.sunrise).format('hh:mm A');
    const sunset = moment.unix(data.sys.sunset).format('hh:mm A');
    return (
        <>
            <div className="w-[100%] bg-[#00361F] rounded-[20px] text-[white] p-6 h-[450px]">
                <h1 className="text-[26px]">Today's Highlight</h1>
                <div className="grid grid-cols-2 gap-5 mt-6">
                    <InfoBlock title={SUNRISE} info={sunrise} />
                    <InfoBlock title={SUNSET} info={sunset} />
                    <InfoBlock title={WIND} info={Math.trunc(data.wind.speed)} size={KM} />
                    <InfoBlock title={HUMIDITY} info={data.main.humidity} size={PROC} />
                </div>
            </div>
        </>
    );
};

