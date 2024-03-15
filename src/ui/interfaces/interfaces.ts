import { WEATHER_TYPE } from '../constants/mainconstants';

interface IForecastHour {
    dt: number;
    temp: number;
    weather: {
        icon: string;
        main: WEATHER_TYPE;
    }[];
}

interface IForecastDay {
    dt: number;
    temp: {
        min: number;
        max: number;
    };
    weather: {
        main: WEATHER_TYPE;
        icon: string;
    }[];
}

export interface IForecastWeek {
    hourly: IForecastHour[];
    daily: IForecastDay[];
}

export interface IOtherWeatherData {
    city: string;
    current: {
        temp: number;
        weather: {
            description: string;
            main: WEATHER_TYPE;
        }[];
    };
}
