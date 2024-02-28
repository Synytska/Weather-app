import moment from 'moment';

export const ForecastToday = ({ data }: any) => {
    return (
        <div className='flex flex-col gap-6'>
            <div className="flex flex-row w-full justify-between">
                {data.hourly.slice(0, 7).map((i: any) => (
                    <div className="border border-[#001A0E] border-solid bg-[#002F19] rounded-full px-2 py-4 flex flex-col gap-0.5 justify-center items-center">
                        <div className="text-[16px]">{moment.unix(i.dt).format('ha')}</div>
                        <img src={`http://openweathermap.org/img/wn/${i.weather[0].icon}.png`}></img>
                        <p className="text-[18px]">{Math.trunc(i.temp)} &#176;C</p>
                        <p>{i.weather[0].main}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-row justify-between bg-[#001A0E] rounded-[20px] items-center px-4">
                <div>
                    <p className="text-[15px]">Tomorrow</p>
                    <p className="text-[14px] capitalize">{data.daily[1].weather[0].description}</p>
                </div>
                <p className="text-[36px]">{Math.trunc(data.daily[1].temp.max)} &#176;C</p>
                <img src={`http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`}></img>
            </div>
        </div>
    );
};
