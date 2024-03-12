import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { FC } from 'react';

import { ICONS } from '../constants/icons';

interface IconsProps {
    currentStatus: keyof typeof ICONS;
    className?: string;
}

export const Icons: FC<IconsProps> = ({ currentStatus, className }) => {
    let icon = ICONS[currentStatus] || '';

    return (
        <Player autoplay loop src={icon} className={className}>
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
    );
};

