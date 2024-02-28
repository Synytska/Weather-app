'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_LINK, API_KEY } from '../../constants/apiconstants';
import { useDebouncedCallback } from 'use-debounce';
import { WeatherBlock } from './WeatherBlock';
import { HighlightsBlock } from '../weather/weatherBlocks/HighlightsWeather/HighlightsWeather';
import { FetchDefaultApi } from '../../components/FetchDefaultWeather';
import { formatWeatherData } from './FormatWeatherData';

export const Search = () => {
    const [value, setValue] = useState<string>('');
    const [data, setData] = useState<any>({});

    const fetchWeather = async (input: string) => {
        try {
            let response = await axios.get(`${API_LINK}${input}&units=metric&APPID=${API_KEY}`);
            console.log(response.data);
            setData(formatWeatherData(response.data));
        } catch (error) {
            console.log(error);
        }
    };

    const debouncedFetchWeather = useDebouncedCallback(fetchWeather, 600);

    const handleOnChange = (input: string) => {
        setValue(input);
        debouncedFetchWeather(input);
    };

    useEffect(() => {
        const fetchData = async () => {
            const defaultData = await FetchDefaultApi();
            setData(formatWeatherData(defaultData));
        };
        fetchData();
    }, []);

    return (
        <div>
            <input
                placeholder="Type to search..."
                value={value}
                onChange={(e) => handleOnChange(e.target.value)}
                className="w-[400px] bg-[#00361F] rounded-full py-3 px-10 text-[white]"
            ></input>
            <div className="grid lg:grid-cols-2 gap-4 mt-8">
                <WeatherBlock
                    city={data.name}
                    temp={data.temp}
                    feels={data.feels}
                    weather={data.weather}
                    icon={data.icon}
                    hight={data.hight}
                    low={data.low}
                />

                <HighlightsBlock wind={data.wind} humidity={data.humidity} />
                <WeatherBlock city={data.name} temp={data.temp} feels={data.feels} weather={data.weather} />
            </div>
        </div>
    );
};

