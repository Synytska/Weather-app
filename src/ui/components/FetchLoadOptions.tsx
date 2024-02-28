import axios from 'axios';
import { geoApiUrl, headers } from '../constants/apiconstants';

interface City {
    latitude: number;
    longitude: number;
    name: string;
    countryCode: string;
}

export const FetchLoadOptions = async (inputValue: string) => {
    try {
        const response = await axios.get(`${geoApiUrl}${inputValue}`, { headers });
        const cities = response.data.data.map((city: City) => {
            return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`
            };
        });
        return {
            options: cities
        };
    } catch (error) {
        console.error(error);
        return {
            options: [],
            error: 'Failed to load options'
        };
    }
};

