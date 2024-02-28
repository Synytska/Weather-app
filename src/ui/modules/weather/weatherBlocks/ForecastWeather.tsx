import moment from 'moment';

export const ForecastWeather = ({ data }: any) => {
    return (
        <div className="w-[100%] bg-[#00361F] rounded-[20px] text-[white] p-6 flex flex-col justify-between gap-6">
            <div>
                <h1 className="text-[26px]">Today/Week</h1>
            </div>
            <div className="flex flex-row w-full justify-between">
                {data.hourly.slice(0, 7).map((i: any) => (
                    <div className="border border-[#001A0E] border-solid bg-[#002F19] rounded-full py-4 px-2 flex flex-col gap-0.5 justify-center items-center">
                        <div className="text-[18px]">{moment.unix(i.dt).format('h A')}</div>
                        <img src={`http://openweathermap.org/img/wn/${i.weather[0].icon}.png`}></img>
                        <p className="text-[18px]">{Math.trunc(i.temp)} &#176;C</p>
                    </div>
                ))}
            </div>
            <div>
                <div className="flex flex-row justify-between bg-[#001A0E] rounded-[20px] items-center px-4">
                    <div>
                        <p className="text-[15px]">Tomorrow</p>
                        <p className="text-[14px] capitalize">{data.daily[1].weather[0].description}</p>
                    </div>
                    <p className="text-[36px]">{Math.trunc(data.daily[1].temp.max)} &#176;C</p>
                    <img src={`http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`}></img>
                </div>
            </div>
        </div>
    );
};

