import moment from 'moment';

export const ForecastWeather = ({ data }: any) => {
    return (
        <div className="border-solid w-[100%] bg-[#00361F] rounded-[20px] text-[white] p-6 flex flex-col justify-between gap-4">
            <div>
                <h1 className="text-[26px]">Today/Week</h1>
            </div>
            <div className="flex flex-row gap-4">
                {data.list.splice(0, 7).map((i: any) => (
                    <div className="border border-solid rounded-full p-1 flex flex-col items-center gap-0.5 justify-center">
                        <p>{moment.unix(i.dt).format('LLL')}</p>
                        <p className="text-[18px]">{i.main.temp}</p>
                    </div>
                ))}
                {/* <p className="text-[18px]">1pm</p>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}></img>
                    <p className="text-[18px]">20C</p> */}
                {/* <div className="border border-solid rounded-full p-2 flex flex-col items-center">
                    <p className="text-[22px]">1pm</p>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}></img>
                    <p className="text-[22px]">20C</p>
                </div>
                <div className="border border-solid rounded-full p-2 flex flex-col items-center">
                    <p className="text-[22px]">1pm</p>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}></img>
                    <p className="text-[22px]">20C</p>
                </div>
                <div className="border border-solid rounded-full p-2 flex flex-col items-center">
                    <p className="text-[22px]">1pm</p>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}></img>
                    <p className="text-[22px]">20C</p>
                </div>
                <div className="border border-solid rounded-full p-2 flex flex-col items-center">
                    <p className="text-[22px]">1pm</p>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}></img>
                    <p className="text-[22px]">20C</p>
                </div>
                <div className="border border-solid rounded-full p-2 flex flex-col items-center">
                    <p className="text-[22px]">1pm</p>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}></img>
                    <p className="text-[22px]">20C</p>
                </div>
                <div className="border border-solid rounded-full p-2 flex flex-col items-center">
                    <p className="text-[22px]">1pm</p>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}></img>
                    <p className="text-[22px]">20C</p>
                </div> */}
            </div>
            <div>
                <div className="flex flex-row justify-between bg-[#001A0E] rounded-[20px] items-center px-4">
                    <div>
                        <p className="text-[15px]">Tomorrow</p>
                        <p className="text-[14px]">Thunder</p>
                    </div>
                    <p className="text-[36px]">15 C</p>
                    {/* <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img> */}
                </div>
            </div>
        </div>
    );
};

