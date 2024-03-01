export const geoApiUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&namePrefix=';

export const headers = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_GEO_KEY,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
};

export const WEATHER_API_URL = process.env.NEXT_PUBLIC_API_URL;
export const DEFAULT_WEATHER_API_URL = 'https://api.openweathermap.org/data/3.0/onecall?lat=50.4333&lon=30.5167';
export const DEFAULT_FORECAST_API_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=Kyiv';
export const WEATHER_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
