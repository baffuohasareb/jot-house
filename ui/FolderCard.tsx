import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import Folder from "../assets/icons/folder-filled.svg";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

type FolderCardProps = {
    name: string;
    noteCount: number;
    onPress: () => void;
}

const FolderCard: FC<FolderCardProps> = ({
    name,
    noteCount,
    onPress
}) => {
    const cardBackground = useThemeColor({}, "card")
    return (
        <Pressable 
            onPress={onPress} 
            style={({ pressed }) => [
                styles.container, 
                {backgroundColor: cardBackground},
                pressed && { opacity: 0.5}
            ]}
        >
            <Folder />

            <View style={styles.textContainer}>
                <ThemedText type="cardTitle" numberOfLines={1} ellipsizeMode="tail">
                    {name}
                </ThemedText>
                <ThemedText type="cardText">{noteCount} notes</ThemedText>
            </View>
        </Pressable>
    )
}

export default FolderCard;

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 60,
        padding: 10,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    textContainer: {
        flex: 1
    }
})