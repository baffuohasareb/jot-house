import IconType from '@/types/iconType';
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

const Descending: FC<IconType> = ({ size, color }) => (
    <Svg width={size} height={(size * 19) / 17} viewBox="0 0 17 19" fill="none">
        <Path
            d="M3.74999 1.40625C3.74999 1.04383 4.01583 0.75 4.34374 0.75C4.67165 0.75 4.93749 1.04383 4.93749 1.40625V16.0094L6.69475 14.0672C6.92663 13.8109 7.30252 13.8109 7.53439 14.0672C7.76627 14.3235 7.76627 14.739 7.53439 14.9953L4.76356 18.0578C4.53168 18.3141 4.1558 18.3141 3.92392 18.0578L1.15309 14.9953C0.921207 14.739 0.921207 14.3235 1.15309 14.0672C1.38497 13.8109 1.76085 13.8109 1.99273 14.0672L3.74999 16.0094V1.40625ZM15.8229 2.9375C16.1508 2.9375 16.4167 3.23133 16.4167 3.59375C16.4167 3.95618 16.1508 4.25 15.8229 4.25H7.51041C7.1825 4.25 6.91666 3.95618 6.91666 3.59375C6.91666 3.23133 7.1825 2.9375 7.51041 2.9375H15.8229ZM13.25 7.09375C13.25 6.73133 12.9842 6.4375 12.6562 6.4375H7.51041C7.1825 6.4375 6.91666 6.73133 6.91666 7.09375C6.91666 7.45618 7.1825 7.75 7.51041 7.75H12.6562C12.9842 7.75 13.25 7.45618 13.25 7.09375ZM9.48957 9.9375C9.81748 9.9375 10.0833 10.2313 10.0833 10.5938C10.0833 10.9562 9.81748 11.25 9.48957 11.25H7.51041C7.1825 11.25 6.91666 10.9562 6.91666 10.5938C6.91666 10.2313 7.1825 9.9375 7.51041 9.9375H9.48957Z"
            fill={color}
        />
    </Svg>
);

export default Descending;
