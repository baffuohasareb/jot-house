import { Pressable, StyleSheet } from "react-native";
import React, { FC } from "react";
import { ThemedText } from "@/components/ThemedText";
import DropdownMenuButtonType from "@/types/dropdownMenuButtonType";


const DropdownMenuButton: FC<DropdownMenuButtonType> = ({
    icon,
    title,
    onPress
}) => {
    return (
        <Pressable
            onPress={onPress}
            style={styles.container}
        >
            {icon}
            <ThemedText>
                {title}
            </ThemedText>
        </Pressable>
    )
}

export default DropdownMenuButton

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingRight: 40
    }
})