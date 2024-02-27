'use client';
import axios from 'axios';
import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiUrl, headers } from './api';

export const Test = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
        try {
            const response = await axios.get(`${geoApiUrl}${inputValue}`, { headers });
            const cities = response.data.data.map((city) => {
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

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };
    return (
        <AsyncPaginate
            placeholder="Search..."
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
};

