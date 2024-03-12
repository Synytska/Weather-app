import axios from 'axios';
import { useEffect, useState } from 'react';

import { Icons } from '@/src/ui/components/Icons';

import { DUBAI_API_URL, NEW_YORK_API_URL, WEATHER_API_KEY } from '@/src/ui/constants/apiconstants';

export const OtherCitiesWeather = () => {
    const [dubaiWeather, setDubaiWeather] = useState<any>(null);
    const [newYorkWeather, setNewYorkWeather] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dubaiWeatherData = await axios(`${DUBAI_API_URL}&appid=${WEATHER_API_KEY}&units=metric`);
                const newYorkWeatherData = await axios(`${NEW_YORK_API_URL}&appid=${WEATHER_API_KEY}&units=metric`);
                setDubaiWeather({ city: 'Dubai, AE', ...dubaiWeatherData.data });
                setNewYorkWeather({ city: 'NYC, US', ...newYorkWeatherData.data });
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            {dubaiWeather && (
                <div className="flex flex-col justify-between pt-4">
                    <h1 className="text-[28px] xl:text-[38px] text-whiteM">Other Cities</h1>
                    <div className="flex flex-col md:flex-row gap-4 justify-between text-[white] pt-4 xl:pt-8">
                        <div className="bg-[#001A0E] rounded-[20px] p-7 w-full flex flex-row justify-between items-center">
                            <div>
                                <p className="text-[46px]">{Math.trunc(dubaiWeather.current.temp)} &#176;C</p>
                                <p className="text-[18px]">{dubaiWeather.city}</p>
                                <p className="text-[14px] capitalize">{dubaiWeather.current.weather[0].description}</p>
                            </div>

                            <Icons
                                currentStatus={dubaiWeather.current.weather[0].main}
                                className="w-[100px] h-[100px]"
                            />
                        </div>
                        <div className="bg-[#001A0E] rounded-[20px] p-7 w-full flex flex-row justify-between items-center">
                            <div>
                                <p className="text-[46px]">{Math.trunc(newYorkWeather.current.temp)} &#176;C</p>
                                <p className="text-[18px]">{newYorkWeather.city}</p>
                                <p className="text-[14px] capitalize">
                                    {newYorkWeather.current.weather[0].description}
                                </p>
                            </div>

                            <Icons
                                currentStatus={newYorkWeather.current.weather[0].main}
                                className="w-[100px] h-[100px]"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

