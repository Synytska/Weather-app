export const OtherCitiesWeather = ({ data }: any) => {
    return (
        <div className="w-full">
            <h1>Other Cities</h1>
            <div className="flex flex-row gap-4 justify-between text-[white]">
                <div className="bg-[#001A0E] rounded-[20px] p-4 flex flex-row justify-between w-full">
                    <div>
                        <p>20C</p>
                        <p>City name</p>
                        <p>Sunny day</p>
                    </div>
                    <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}></img>
                </div>
                <div className="bg-[#001A0E] rounded-[20px] p-4 flex flex-row justify-between w-full">
                    <div>
                        <p>20C</p>
                        <p>City name</p>
                        <p>Sunny day</p>
                    </div>
                    <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}></img>
                </div>
            </div>
        </div>
    );
};

