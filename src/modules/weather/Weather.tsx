'use client';
import moment from 'moment';
import { useState, useEffect } from 'react';

import { Search } from '../search/Search';
import { CurrentWeather } from './weatherBlocks/CurrentWeather/CurrentWeather';
import { HighlightsWeather } from './weatherBlocks/HighlightsWeather/HighlightsWeather';
import { ForecastWeather } from './weatherBlocks/ForecastWeather/ForecastWeather';
import { OtherCitiesWeather } from './weatherBlocks/OtherCitiesWeather/OtherCitiesWeather';
import { FetchData } from '@/src/common/api/FetchData';

import { IFetchCurWeather, ISearchData } from '../../common/interfaces/interfaces';
import { DEFAULT_WEATHER_API_URL, WEATHER_API_KEY, WEATHER_API_URL } from '../../common/constants/apiconstants';
import { WHOLE_DATE } from '@/src/common/constants/mainconstants';

export const Weather = () => {
    const [curWeather, setCurWeather] = useState<IFetchCurWeather | null>(null);

    const handleonSearchChange = async (searchData: ISearchData) => {
        const [lat, lon] = searchData.value.split(' ');
        const weather: IFetchCurWeather = await FetchData<IFetchCurWeather>(
            `${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        setCurWeather({ ...weather, city: searchData.label });
    };

    useEffect(() => {
        const fetchData = async () => {
            const defaultWeather = await FetchData<IFetchCurWeather>(
                `${DEFAULT_WEATHER_API_URL}&appid=${WEATHER_API_KEY}&units=metric`
            );
            setCurWeather({ ...defaultWeather, city: 'Kyiv, UA' });
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-whiteM pb-4 text-[18px]">{moment().format(WHOLE_DATE)}</h1>
            <Search onSearchChange={handleonSearchChange} />

            {curWeather && (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-8">
                    <div className="flex flex-col gap-4">
                        <CurrentWeather {...curWeather} />
                        <ForecastWeather daily={curWeather.daily} hourly={curWeather.hourly} />
                    </div>
                    <div className="flex justify-between flex-col">
                        <HighlightsWeather current={curWeather.current} />
                        <OtherCitiesWeather />
                    </div>
                </div>
            )}
        </div>
    );
};
