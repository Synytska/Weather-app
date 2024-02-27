'use client';
import { useState, useEffect } from 'react';
// import { Search } from '../search/Search';
import { Test } from '../search/Test';
import { TestWeather } from '../search/TestWeather';
import { HighlightsBlock } from '../weather-block/HighlightsBlock/HighlightsBlock';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../search/api';
import { FetchDefaultApi } from '../../components/FetchDefaultApi';

export const Weather = () => {
    const [curWeather, setCurWeather] = useState<any>(null);
    const [curForecast, setCurForecast] = useState<any>(null);

    const handleonSearchChange = async (searchData: any) => {
        const [lat, lon] = searchData.value.split(' ');
        try {
            const currentWeatherResponse = await fetch(
                `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
            );
            const forecastResponse = await fetch(
                `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
            );

            const currentWeatherData = await currentWeatherResponse.json();
            const forecastData = await forecastResponse.json();

            setCurWeather({ city: searchData.label, ...currentWeatherData });
            setCurForecast({ city: searchData.label, ...forecastData });
            console.log(curWeather)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const defaultData = await FetchDefaultApi();
            setCurWeather({ city: defaultData.name, ...defaultData });
        };
        fetchData();
    }, []);

    return (
        <div className="my-[20px] mx-[30px]">
            {/* <Search /> */}
            <Test onSearchChange={handleonSearchChange} />
            {curWeather && (
                <div className="grid lg:grid-cols-2 gap-4 mt-8">
                    <TestWeather data={curWeather} />
                    <HighlightsBlock data={curWeather} />
                </div>
            )}
        </div>
    );
};

