import { FC, MouseEventHandler } from 'react';

interface IButton {
    onClick: MouseEventHandler<HTMLElement>;
    text: string;
}

export const Button: FC<IButton> = ({ onClick, text }) => (
    <button className="hover:animate-pulse active:underline" onClick={onClick}>
        {text}
    </button>
);
