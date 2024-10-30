import IconType from '@/types/iconType';
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

const Color: FC<IconType> = ({ size, color }) => (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <Path
            d="M1.83885 3.85764C4.77986 -0.0579715 10.8685 -1.19736 15.2028 1.49752C19.4826 4.15853 21.0566 9.2746 19.3037 14.0749C17.6485 18.6075 13.2873 20.4033 10.144 18.1233C8.9666 17.2692 8.5101 16.1985 8.2895 14.4595L8.1841 13.4715L8.1387 13.0741C8.016 12.14 7.82762 11.7216 7.43435 11.5024C6.89876 11.2038 6.54213 11.1969 5.83887 11.4694L5.48775 11.615L5.30902 11.693C4.29524 12.1332 3.62085 12.2879 2.76786 12.1092L2.56761 12.062L2.40407 12.0154C-0.38489 11.1512 -0.79798 7.36827 1.83885 3.85764ZM2.82307 10.5741L2.94598 10.6105L3.07993 10.6414C3.519 10.7283 3.89425 10.6558 4.51695 10.3995L5.11912 10.1423C6.32126 9.6494 7.10436 9.6012 8.1646 10.1921C9.0822 10.7036 9.4399 11.4897 9.6223 12.8518L9.6755 13.3109L9.7297 13.8427L9.7768 14.2651C9.9489 15.6263 10.2617 16.3556 11.0248 16.9091C13.3001 18.5595 16.5592 17.2175 17.8947 13.5604C19.411 9.4082 18.0688 5.04581 14.4107 2.77137C10.7365 0.486899 5.5123 1.46453 3.03822 4.75848C0.96343 7.52082 1.21791 10.038 2.82307 10.5741ZM14.0476 8.5797C13.8689 7.91288 14.2646 7.22746 14.9314 7.04878C15.5983 6.87011 16.2837 7.26583 16.4624 7.93267C16.6411 8.5995 16.2453 9.2849 15.5785 9.4636C14.9117 9.6423 14.2262 9.2465 14.0476 8.5797ZM14.5421 12.0684C14.3635 11.4015 14.7592 10.7161 15.426 10.5374C16.0929 10.3588 16.7783 10.7545 16.957 11.4213C17.1356 12.0882 16.7399 12.7736 16.0731 12.9523C15.4062 13.1309 14.7208 12.7352 14.5421 12.0684ZM12.0691 5.57703C11.8904 4.9102 12.2861 4.22478 12.9529 4.0461C13.6198 3.86742 14.3052 4.26315 14.4839 4.92998C14.6625 5.59681 14.2668 6.28224 13.6 6.46091C12.9331 6.63959 12.2477 6.24386 12.0691 5.57703ZM12.0406 14.5754C11.8619 13.9086 12.2576 13.2232 12.9245 13.0445C13.5913 12.8658 14.2767 13.2615 14.4554 13.9284C14.6341 14.5952 14.2383 15.2806 13.5715 15.4593C12.9047 15.638 12.2192 15.2422 12.0406 14.5754ZM8.5436 4.60544C8.365 3.9386 8.7607 3.25318 9.4275 3.07451C10.0944 2.89583 10.7798 3.29156 10.9585 3.95839C11.1371 4.62522 10.7414 5.31064 10.0746 5.48932C9.4077 5.668 8.7223 5.27227 8.5436 4.60544Z"
            fill={color}
        />
    </Svg>
);

export default Color;