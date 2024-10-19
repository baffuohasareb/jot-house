import IconType from '@/types/iconType';
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

const Undo: FC<IconType> = ({ size, color }) => (
    <Svg width={size} height={size} viewBox="0 0 18 20" fill={color}>
        <Path d="M0.75 0C1.1297 0 1.44349 0.28215 1.49315 0.64823L1.5 0.75V6.44L6.0743 1.88014C8.5163 -0.56181 12.4385 -0.62137 14.9526 1.70146L15.1385 1.88014C17.6415 4.38313 17.6415 8.4413 15.1385 10.9443L6.2933 19.7835C6.0003 20.0762 5.52558 20.0759 5.23269 19.783C4.93979 19.4901 4.94013 19.0151 5.23315 18.7223L14.0778 9.8836C15.995 7.96641 15.995 4.85801 14.0778 2.9408C12.2187 1.08169 9.2395 1.02535 7.3118 2.77248L7.1342 2.94156L2.562 7.5L8.25 7.50018C8.6297 7.50018 8.9435 7.78234 8.9932 8.1484L9 8.2502C9 8.6299 8.7178 8.9437 8.3518 8.9933L8.25 9.0002H0.75C0.3703 9.0002 0.0565098 8.718 0.00684977 8.352L0 8.2502V0.75C0 0.33579 0.33579 0 0.75 0Z" />
    </Svg>
);

export default Undo;