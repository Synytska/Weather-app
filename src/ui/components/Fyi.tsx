import axios from 'axios';
import { useState, useEffect } from 'react';

export const Fyi = () => {
    const [i, setI] = useState(null);

    const test = async () => {
        try {
            const prop = await axios.get(
                'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly&appid=5e1dbfef74af01c8468028e63b0db4cb'
            );
            const data = prop.data; // Виправлення тут
            setI(data);
            console.log(data.current.temp); // Тепер це повинно працювати
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    useEffect(() => {
        test();
    }, []);

    return (
        <>
            <p>Hello</p>
            <p>{i}</p>
        </>
    );
};
