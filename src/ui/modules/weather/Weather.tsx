'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { Search } from '../search/Search';
import { CurrentWeather } from './weatherBlocks/CurrentWeather';
import { HighlightsWeather } from './weatherBlocks/HighlightsWeather/HighlightsWeather';
import { ForecastWeather } from './weatherBlocks/ForecastWeather';
import { FetchWeather } from '../../components/FetchWeather';
import { DEFAULT_WEATHER_API_URL, WEATHER_API_KEY } from '../../constants/apiconstants';
import { Fyi } from '../../components/Fyi';
import { OtherCitiesWeather } from './weatherBlocks/OtherCitiesWeather';

export const Weather = () => {
    const [curWeather, setCurWeather] = useState<any>(null);

    const handleonSearchChange = async (searchData: any) => {
        await FetchWeather(searchData, setCurWeather);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const defaultWeather = await axios(`${DEFAULT_WEATHER_API_URL}&appid=${WEATHER_API_KEY}&units=metric`);
                setCurWeather({ city: 'Kyiv, UA', ...defaultWeather.data });
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="my-[20px] mx-[30px]">
            <Search onSearchChange={handleonSearchChange} />
            {curWeather && (
                <div className="grid lg:grid-cols-2 gap-4 mt-8">
                    <div className="flex flex-col gap-4">
                        <CurrentWeather data={curWeather} />
                        <ForecastWeather data={curWeather} />
                    </div>
                    <div>
                        <HighlightsWeather data={curWeather} />
                        {/* <OtherCitiesWeather data={curWeather} /> */}
                    </div>
                </div>
            )}
            {/* <Fyi/> */}
        </div>
    );
};

