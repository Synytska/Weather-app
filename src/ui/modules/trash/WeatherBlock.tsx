import { FC } from 'react';

interface IWeatherData {
    city?: string;
    temp?: number;
    feels?: number;
    weather?: string;
    icon?: string;
    hight?: number;
    low?: number;

}

export const WeatherBlock: FC<IWeatherData> = ({ city, temp, feels, weather, icon, hight, low }) => {
    return (
        <div className="border-solid w-[100%] bg-[#00361F] rounded-[20px] text-[white] p-6 h-[330px]">
            <div className="flex justify-between">
                <div>
                    <div className="gap-1 flex tracking-wide bg-[white] text-[black] rounded-full py-1 px-4 text-[14px] mb-6">
                        <img src="/loc.png" className="w-[20px]"></img>
                        <div>{city}</div>
                    </div>
                    <h1 className="text-[26px]">Weather</h1>
                    <p className="text-[14px]">Now</p>
                    <div className="pt-8">
                        <p className="text-[66px]">{temp} &#176;C</p>
                        <p className="text-[14px] capitalize">{weather}</p>
                        <p className="text-[14px]">Feels like: {feels}&#176;C</p>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                    <div className="flex flex-row">
                        <button type="submit" className="bg-[#002518] rounded-full px-4">
                            F
                        </button>
                        <button type="submit" className="bg-[white] text-[black] rounded-full px-4">
                            C
                        </button>
                    </div>
                    <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`}></img>
                    <div className="flex flex-row gap-4 text-[14px]">
                        <p>Hight: {hight}</p>
                        <p>Low: {low}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

