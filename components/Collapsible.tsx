import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

export function Collapsible({ 
  children, 
  title, 
  isOpen, 
  setIsOpen 
}: PropsWithChildren & { title: string, isOpen: boolean, setIsOpen: (value: boolean) => void }) {

	const background = useThemeColor({}, "card");
	const theme = useColorScheme() ?? 'light';

	return (
		<ThemedView>
			<Pressable
				style={styles.heading}
				onPress={() => setIsOpen(!isOpen)}
			>
				<Ionicons
					name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
					size={18}
					color={theme === 'light' ? Colors.light.text : Colors.dark.text}
				/>
				<ThemedText type="heading">{title}</ThemedText>
			</Pressable>

			{isOpen && children && <View style={[styles.content, { backgroundColor: background}]}>{children}</View>}
		</ThemedView>
	);
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
	borderRadius: 20,
	shadowColor: "#000",
	shadowOffset: {
		width: -2,
		height: 4
	},
	shadowOpacity: 0.25,
	elevation: 5,
	paddingVertical: 10,
	paddingHorizontal: 12
  },
});
