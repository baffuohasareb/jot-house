import IconType from '@/types/iconType';
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

const StarFilled: FC<IconType> = ({ size, color }) => (
    <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
        <Path
            d="M4.8434 0.68033C5.11164 0.136833 5.88665 0.136827 6.15489 0.68033L7.43214 3.26826L10.2881 3.68325C10.8879 3.77041 11.1273 4.5075 10.6933 4.93054L8.62673 6.94495L9.11461 9.7894C9.21704 10.3868 8.59006 10.8423 8.05359 10.5602L5.49914 9.21729L2.94471 10.5602C2.40825 10.8423 1.78125 10.3868 1.8837 9.7894L2.37156 6.94495L0.304972 4.93054C-0.129038 4.5075 0.110454 3.77041 0.710242 3.68325L3.5662 3.26826L4.8434 0.68033Z"
            fill={color}
        />
    </Svg>
);

export default StarFilled;
