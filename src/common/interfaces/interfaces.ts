import { WEATHER_TYPE } from '../constants/mainconstants';

export interface ISearchData {
    label: string;
    value: string;
}

export interface IFetchCurWeather {
    city: string;
    timezone: string;
    current: {
        dt: number;
        temp: number;
        feels_like: number;
        sunrise: number;
        sunset: number;
        wind_speed: number;
        humidity: number;
        weather: {
            description: string;
            main: WEATHER_TYPE;
        }[];
    };
    daily: {
        dt: number;
        temp: {
            max: number;
            min: number;
        };
        weather: {
            main: WEATHER_TYPE;
            icon: string;
        }[];
    }[];
    hourly: {
        dt: number;
        temp: number;
        weather: {
            icon: string;
            main: WEATHER_TYPE;
        }[];
    }[];
}

export interface IForecastHour {
    dt: number;
    temp: number;
    weather: {
        icon: string;
        main: WEATHER_TYPE;
    }[];
}
[];

export interface IForecastDay {
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
[];

export interface IForecastWeek {
    daily: IForecastDay[];
    hourly?: IForecastHour[];
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
