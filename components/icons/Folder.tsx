import IconType from '@/types/iconType';
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

const Folder: FC<IconType> = ({ size, color }) => (
    <Svg width={size} height={size} viewBox="0 0 20 18" fill="none">
        <Path
            d="M1.5 3.25V5H6.12868C6.32759 5 6.51836 4.92098 6.65901 4.78033L8.1893 3.25L6.65901 1.71967C6.51836 1.57902 6.32759 1.5 6.12868 1.5H3.25C2.2835 1.5 1.5 2.2835 1.5 3.25ZM0 3.25C0 1.45507 1.45507 0 3.25 0H6.12868C6.72542 0 7.29771 0.23705 7.71967 0.65901L9.5607 2.5H16.75C18.5449 2.5 20 3.95507 20 5.75V14.75C20 16.5449 18.5449 18 16.75 18H3.25C1.45507 18 0 16.5449 0 14.75V3.25ZM1.5 6.5V14.75C1.5 15.7165 2.2835 16.5 3.25 16.5H16.75C17.7165 16.5 18.5 15.7165 18.5 14.75V5.75C18.5 4.7835 17.7165 4 16.75 4H9.5607L7.71967 5.84099C7.29771 6.26295 6.72542 6.5 6.12868 6.5H1.5Z"
            fill={color}
        />
    </Svg>
);

export default Folder;
