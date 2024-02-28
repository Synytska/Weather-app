'use client';
import { useState, useEffect } from 'react';

import { Search } from '../search/Search';
import { CurrentWeather } from './weatherBlocks/CurrentWeather';
import { HighlightsWeather } from './weatherBlocks/HighlightsWeather/HighlightsWeather';
import { ForecastWeather } from './weatherBlocks/ForecastWeather';
import { FetchDefaultWeather } from '../../components/FetchDefaultWeather';
import { FetchWeather } from '../../components/FetchWeather';
import { Fyi } from '../../components/Fyi';

export const Weather = () => {
    const [curWeather, setCurWeather] = useState<any>(null);
    const [curForecast, setCurForecast] = useState<any>(null);

    const handleonSearchChange = async (searchData: any) => {
        await FetchWeather(searchData, setCurWeather, setCurForecast);
    };

    useEffect(() => {
        const fetchData = async () => {
            const defaultData = await FetchDefaultWeather();
            if (defaultData) {
                setCurWeather({ city: defaultData.weather.name, ...defaultData.weather });
                setCurForecast(defaultData.forecast);
            } else {
                console.error('Failed to fetch default weather data');
            }
        };
        fetchData();
    }, []);

    return (
        <div className="my-[20px] mx-[30px]">
            <Search onSearchChange={handleonSearchChange} />
            {curWeather && curForecast && (
                <div className="grid lg:grid-cols-2 gap-4 mt-8">
                    <div className="flex flex-col gap-4">
                        <CurrentWeather data={curWeather} />
                        <ForecastWeather data={curForecast} />
                    </div>
                    <HighlightsWeather data={curWeather} />
                </div>
            )}
            {/* <Fyi/> */}
        </div>
    );
};

