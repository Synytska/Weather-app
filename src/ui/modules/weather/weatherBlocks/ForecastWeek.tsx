import moment from 'moment';

export const ForecastWeek = ({ data }: any) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-row w-full justify-between">
                {data.daily.slice(1).map((i: any) => (
                    <div className="border border-[#001A0E] border-solid bg-[#002F19] rounded-full py-4 px-2 flex flex-col gap-0.5 justify-center items-center">
                        <div className="text-[18px]">{moment.unix(i.dt).format('ddd')}</div>
                        <img src={`http://openweathermap.org/img/wn/${i.weather[0].icon}.png`}></img>
                        <p>{Math.trunc(i.temp.min)} &#176;C</p>
                        <p>{Math.trunc(i.temp.max)} &#176;C</p>
                    </div>
                ))}
            </div>
            <div>
                <div className="flex flex-row justify-between bg-[#001A0E] rounded-[20px] items-center px-4">
                    <div>
                        <p className="text-[15px]">Today</p>
                        <p className="text-[14px] capitalize">{data.daily[0].weather[0].description}</p>
                    </div>
                    <p className="text-[36px]">{Math.trunc(data.daily[0].temp.max)} &#176;C</p>
                    <img src={`http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`}></img>
                </div>
            </div>
        </div>
    );
};

