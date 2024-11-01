import { FC, ReactNode } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { View, ScrollView, ViewStyle, StyleSheet, TouchableWithoutFeedback, Keyboard, FlatList } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
    headerShown?: boolean
    paddingHorizontal?: number
    paddingVertical?: number
    contentContainerStyle?: ViewStyle
    showsVerticalScrollIndicator?: boolean
    showsHorizontalScrollIndicator?: boolean
    justifyContent?: "space-around" | "space-between" | "center" | "space-evenly" | "flex-end" | "flex-start"
    style?: ViewStyle
    children?: ReactNode
}

const Container: FC<Props> = ({
    headerShown = false,
    paddingHorizontal,
    paddingVertical,
    contentContainerStyle = {},
    showsVerticalScrollIndicator = false,
    showsHorizontalScrollIndicator = false,
    justifyContent = "flex-start",
    style,
    children
}) => {

    const { bottom } = useSafeAreaInsets();
    const backgroundColor = useThemeColor({}, "background");


    const ContentRender = () => (
        <View style={[styles.container, { backgroundColor, paddingHorizontal, paddingVertical, justifyContent }, style]}>
            {children}
        </View>
    );

    if (headerShown) return <ContentRender />;

    return (
        <SafeAreaProvider style={[styles.container, { paddingTop: paddingVertical, paddingBottom: bottom, backgroundColor }]}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <FlatList
                        data={[1]}
                        renderItem={() => <ContentRender />}
                    />
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensures full height
    }
});

export default Container;
