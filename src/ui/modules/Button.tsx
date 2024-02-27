import { ElementType, MouseEventHandler, ReactNode } from 'react';

enum BUTTON_TYPE {
    SUBMIT = 'submit',
    RESET = 'reset',
    BUTTON = 'button'
}

enum BUTTON_VARIANT {
    OUTLINE = 'outline',
    SECONDARY = 'secondary',
    GHOST = 'ghost',
    PRIMARY = ''
}

const DEFAULT_ELEMENT = 'button' as ElementType;

export type ButtonConstantsType = {
    type: typeof BUTTON_TYPE;
    variant: typeof BUTTON_VARIANT;
};

interface IButtonProps<T extends ElementType = typeof DEFAULT_ELEMENT> {
    children?: ReactNode;
    type?: BUTTON_TYPE;
    variant?: BUTTON_VARIANT;
    onClick?: MouseEventHandler<HTMLElement>;
    disabled?: boolean;
    className?: string;
    addonLeft?: string;
    addonRight?: string;
    as?: T;
}

const Button = ({
    children,
    type = BUTTON_TYPE.BUTTON,
    variant = BUTTON_VARIANT.PRIMARY,
    disabled = false,
    onClick,
    className,
    addonLeft,
    addonRight,
    as: Element = DEFAULT_ELEMENT as ElementType,
    ...otherProps
}: IButtonProps) => {
    return (
        <Element
            className={addonLeft ? 'm-24' : 'min-w-auto py-0 px-10px'}
            type={type}
            disabled={disabled}
            onClick={onClick}
            {...otherProps}
        >
            {addonLeft && <div>{addonLeft}</div>}

            {addonRight && <div>{addonRight}</div>}

            {children}
        </Element>
    );
};

export const BUTTON_CONSTANTS: ButtonConstantsType = {
    type: BUTTON_TYPE,
    variant: BUTTON_VARIANT
};

export default Object.assign(Button, BUTTON_CONSTANTS) as typeof Button & ButtonConstantsType;

