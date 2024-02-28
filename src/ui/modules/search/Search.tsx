'use client';
import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

import { FetchLoadOptions } from '../../components/FetchLoadOptions';

export const Search = ({ onSearchChange }: { onSearchChange: Function }) => {
    const [search, setSearch] = useState<string>('');

    const handleOnChange = (searchData: any) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };
    return (
        <AsyncPaginate
            placeholder="Search..."
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={FetchLoadOptions}
        />
    );
};

