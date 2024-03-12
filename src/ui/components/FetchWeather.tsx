import axios from 'axios';

import { WEATHER_API_KEY, WEATHER_API_URL } from '../constants/apiconstants';

export const FetchWeather = async (searchData: any, setCurWeather: any) => {
    const [lat, lon] = searchData.value.split(' ');

    try {
        const currentWeatherResponse = await axios(
            `${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        const currentWeatherData = await currentWeatherResponse.data;
        console.log(currentWeatherData);

        setCurWeather({ city: searchData.label, ...currentWeatherData });
    } catch (error) {
        console.error(error);
    }
};

