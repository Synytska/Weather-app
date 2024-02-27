import { FC } from 'react';

interface IWeatherInfo {
    title?: string;
    info?: number | string;
    size?: string;
}

export const InfoBlock: FC<IWeatherInfo> = ({ title, info, size }) => {
    return (
        <div className="bg-[#001A0E] rounded-[20px] p-5 h-[160px]">
            <p className="text-[16px] uppercase text-[white] pb-4">{title}</p>
            <p className="text-[36px]">
                {info}
                <span className="text-[22px]">{size}</span>
            </p>
            {/* <p className="text-[22px]">Moderate</p> */}
        </div>
    );
};

