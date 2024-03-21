import axios from 'axios';
import { AxiosError } from 'axios';

import { ISearchData } from '../interfaces/interfaces';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../constants/apiconstants';

interface ServerResponseData {
    message: string;
}

export const FetchWeather = async (searchData: ISearchData, setCurWeather: Function) => {
    const [lat, lon] = searchData.value.split(' ');

    try {
        const currentWeatherResponse = await axios(
            `${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        const currentWeatherData = await currentWeatherResponse.data;

        setCurWeather({ city: searchData.label, ...currentWeatherData });
    } catch (error) {
        const axiosError = error as AxiosError<ServerResponseData>;
        throw new Error(axiosError.response?.data.message || 'An error occurred while fetching the data');
    }
};
