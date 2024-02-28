export const formatWeatherData = (data : any) => {
    return {
        name: data.name,
        temp: Math.round(data.main.temp), 
        feels: Math.round(data.main.feels_like),
        weather: data.weather[0].description,
        icon: data.weather[0].icon,
        hight: Math.round(data.main.temp_max),
        low: Math.round(data.main.temp_min),
        wind: Math.round(data.wind.speed),
        humidity: data.main.humidity
    };
};
