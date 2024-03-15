import { FC, MouseEventHandler } from 'react';

enum BUTTON_TYPE {
    SUBMIT = 'submit',
    RESET = 'reset',
    BUTTON = 'button'
}

interface IButton {
    className?: string;
    type?: 'button';
    onClick: MouseEventHandler<HTMLElement>;
    text: string;
}

export const Button: FC<IButton> = ({ className, onClick, text }) => (
    <button className="hover:animate-pulse active:underline" onClick={onClick}>
        {text}
    </button>
);

