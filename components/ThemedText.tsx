import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'heading' | 'cardTitle' | 'cardText' | 'small';
};

export function ThemedText({
    style,
    lightColor,
    darkColor,
    type = 'default',
    ...rest
}: ThemedTextProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <Text
			style={[
				{ color },
				type === 'default' ? styles.default : undefined,
				type === 'heading' ? styles.heading : undefined,
				type === 'cardTitle' ? styles.cardTitle : undefined,
				type === 'cardText' ? styles.cardText : undefined,
				type === 'small' ? styles.small : undefined,
				style,
			]}
			{...rest}
        />
    );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  cardTitle: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '600',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  cardText: {
    fontSize: 12,
    lineHeight: 15
  },
  small: {
    lineHeight: 20,
    fontSize: 10,
    color: '#908f8f',
  },
});
