import { FC } from 'react';

interface IWeatherInfo {
    title?: string;
    info?: number | string;
    size?: string;
}

export const InfoBlock: FC<IWeatherInfo> = ({ title, info, size }) => (
    <div className="background rounded-[20px] p-5">
        <p className="text-[16px] uppercase text-[white] pb-4">{title}</p>
        <p className="text-[28px] md:text-[36px]">
            {info}
            <span className="text-[18px] md:text-[22px]">{size}</span>
        </p>
    </div>
);
