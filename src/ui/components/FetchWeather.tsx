import axios from 'axios';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../constants/apiconstants';

export const FetchWeather = async (searchData: any, setCurWeather: any, setCurForecast: any) => {
    const [lat, lon] = searchData.value.split(' ');
    try {
        const currentWeatherResponse = await axios(
            `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const forecastResponse = await axios(
            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        const currentWeatherData = await currentWeatherResponse.data;
        const forecastData = await forecastResponse.data;
        // console.log(forecastData);

        setCurWeather({ city: searchData.label, ...currentWeatherData });
        setCurForecast({ city: searchData.label, ...forecastData });
    } catch (error) {
        console.error(error);
    }
};
