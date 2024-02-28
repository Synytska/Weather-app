import axios from 'axios';

import { DEFAULT_WEATHER_API_URL, DEFAULT_FORECAST_API_URL, WEATHER_API_KEY } from '../constants/apiconstants';

export const FetchDefaultWeather = async () => {
    try {
        const weather_response = await axios.get(`${DEFAULT_WEATHER_API_URL}&units=metric&APPID=${WEATHER_API_KEY}`);
        const forecast_response = await axios.get(`${DEFAULT_FORECAST_API_URL}&units=metric&APPID=${WEATHER_API_KEY}`);

        const data = {
            weather: weather_response.data,
            forecast: forecast_response.data
        };

        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

