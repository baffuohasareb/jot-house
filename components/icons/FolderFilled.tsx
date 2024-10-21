import IconType from '@/types/iconType';
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

const FolderFilled: FC<IconType> = ({ size, color }) => (
    <Svg width={size} height={size} viewBox="0 0 45 41" fill={color}>
        <Path 
            d="M3.75 13.6667V10.6771C3.75 7.61074 6.47826 5.125 9.84375 5.125H15.2413C16.3602 5.125 17.4332 5.52996 18.2244 6.25081L21.0938 8.86512L16.2356 13.2914C15.9719 13.5317 15.6142 13.6667 15.2413 13.6667H3.75ZM3.75 16.2292V30.3229C3.75 33.3892 6.47826 35.875 9.84375 35.875H35.1562C38.5217 35.875 41.25 33.3892 41.25 30.3229V14.9479C41.25 11.8816 38.5217 9.39583 35.1562 9.39583H24.4888L18.2244 15.1034C17.4332 15.8242 16.3602 16.2292 15.2413 16.2292H3.75Z" 
            fill={color}
        />
    </Svg>
);

export default FolderFilled;