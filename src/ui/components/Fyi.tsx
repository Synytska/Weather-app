'use client'
import axios from 'axios';
import { useState } from 'react';

export const Fyi = () => {
    const [i, setI] = useState(null);
    const test = async () => {
        try {
            const test = await axios.get(
                'api.openweathermap.org/data/2.5/forecast/daily?q=Kyiv&appid=5e1dbfef74af01c8468028e63b0db4cb'
            );
            setI(test.data)
            console.log(test.data);
        } catch (error) {
            console.log(error);
            return null;
        }
    };
    return(<><p>Hello</p>
    <p>{i}</p></>)
};

