export const OtherCitiesWeather = ({ data }: any) => {
    return (
        <div className="flex flex-col justify-between pt-4">
            <h1 className="text-[28px]">Other Cities</h1>
            <div className="flex flex-row gap-4 justify-between text-[white] pt-3">
                <div className="bg-[#001A0E] rounded-[20px] px-4 pt-4 flex flex-col w-full justify- h-[27vh] ">
                    <p className="text-[36px]">20C</p>
                    <div className="flex flex-row justify-between items-center">
                        <div>
                            <p className="text-[15px]">City name</p>
                            <p className="text-[14px]">Sunny day</p>
                        </div>
                        <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}></img>
                    </div>
                </div>
                <div className="bg-[#001A0E] rounded-[20px] p-4 flex flex-row justify-between w-full">
                    <div>
                        <p className="text-[36px]">20C</p>
                        <p>City name</p>
                        <p>Sunny day</p>
                    </div>
                    <img
                        className="w-full"
                        src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
                    ></img>
                </div>
            </div>
        </div>
    );
};

