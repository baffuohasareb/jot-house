import IconType from '@/types/iconType';
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

const PinFilled: FC<IconType> = ({ size, color }) => (
    <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
        <Path
            d="M7.77842 3.23239L5.76771 1.22166C5.21467 0.668633 4.28237 0.819924 3.93258 1.51946L2.91784 3.54899C2.8813 3.62207 2.8176 3.67793 2.74037 3.70461L1.00442 4.30429C0.640796 4.42992 0.534167 4.89283 0.806196 5.16487L2.09973 6.45842L0.250033 8.30812L0.25 8.75008H0.691975L2.54168 6.90033L3.83521 8.19392C4.10725 8.46592 4.57017 8.35929 4.69579 7.99567L5.2955 6.25971C5.32217 6.1825 5.37804 6.11879 5.45108 6.08225L7.48063 5.0675C8.18017 4.71771 8.33146 3.78542 7.77842 3.23239Z"
            fill={color}
        />
    </Svg>
);

export default PinFilled;

