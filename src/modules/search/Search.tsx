'use client';
import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

import { ISearchData } from '../../common/interfaces/interfaces';
import { FetchLoadOptions } from '../../common/api/FetchLoadOptions';

import customStyles from '@/src/styles/input-style';

export const Search = ({ onSearchChange }: { onSearchChange: Function }) => {
    const [search, setSearch] = useState<ISearchData | null>(null);

    const handleOnChange = (searchData: ISearchData | null) => {
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
            styles={customStyles}
        />
    );
};

