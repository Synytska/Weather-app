'use client';
import moment from 'moment';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { Search } from '../search/Search';
import { CurrentWeather } from './weatherBlocks/CurrentWeather';
import { HighlightsWeather } from './weatherBlocks/HighlightsWeather/HighlightsWeather';
import { ForecastWeather } from './weatherBlocks/ForecastWeather/ForecastWeather';
import { FetchWeather } from '../../components/FetchWeather';
import { DEFAULT_WEATHER_API_URL, WEATHER_API_KEY } from '../../constants/apiconstants';
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
        <div>
            <h1 className="text-whiteM pb-4">{moment().format('Do MMMM YYYY')}</h1>
            <Search onSearchChange={handleonSearchChange} />
            {curWeather && (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-8">
                    <div className="flex flex-col gap-4">
                        <CurrentWeather data={curWeather} />
                        <ForecastWeather data={curWeather} />
                    </div>
                    <div className='flex justify-between flex-col'>
                        <HighlightsWeather data={curWeather} />
                        <OtherCitiesWeather />
                    </div>
                </div>
            )}
        </div>
    );
};

