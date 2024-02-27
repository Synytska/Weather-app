import axios from 'axios';

import { DEFAULT_API_LINK, API_KEY } from '../constants/apiconstants';

export const FetchDefaultApi = async () => {
    try {
        let response = await axios.get(`${DEFAULT_API_LINK}&units=metric&APPID=${API_KEY}`);
        const data = response.data;
        return data; 
    } catch (error) {
        console.log(error);
    }
};


