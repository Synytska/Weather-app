import axios, { AxiosError } from 'axios';

interface ServerResponseData {
    message: string;
}

export const FetchData = async <T>(request: any): Promise<T> => {
    try {
        const response = await axios(request);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError<ServerResponseData>;
        throw new Error(axiosError.response?.data.message || 'An error occurred while fetching the data');
    }
};
