import { useState, useEffect } from 'react';
import axios from 'axios';

import { CityComponent } from './CityComponent';

import { IOtherWeatherData } from '@/src/ui/interfaces/interfaces';
import { DUBAI_API_URL, NEW_YORK_API_URL, WEATHER_API_KEY } from '@/src/ui/constants/apiconstants';

export const OtherCitiesWeather = () => {
    const [dubaiWeather, setDubaiWeather] = useState<IOtherWeatherData | null>(null);
    const [newYorkWeather, setNewYorkWeather] = useState<IOtherWeatherData | null>(null);

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
            {dubaiWeather && newYorkWeather && (
                <div className="flex flex-col justify-between pt-4">
                    <h1 className="text-[28px] xl:text-[38px] text-whiteM">Other Cities</h1>
                    <div className="flex flex-col md:flex-row gap-4 justify-between text-[white] pt-4 xl:pt-8">
                        <CityComponent
                            temp={Math.trunc(dubaiWeather.current.temp)}
                            city={dubaiWeather.city}
                            description={dubaiWeather.current.weather[0].description}
                            main={dubaiWeather.current.weather[0].main}
                        />
                        <CityComponent
                            temp={Math.trunc(newYorkWeather.current.temp)}
                            city={newYorkWeather.city}
                            description={newYorkWeather.current.weather[0].description}
                            main={newYorkWeather.current.weather[0].main}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

