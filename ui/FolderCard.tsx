import { Pressable, StyleSheet, View } from "react-native";
import React, { FC } from "react";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import FolderFilled from "../components/icons/FolderFilled";
import { useRouter } from "expo-router";

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
    const router = useRouter();

    const cardBackground = useThemeColor({}, "card")
    const tint = useThemeColor({}, "tint");

    const handleCardPress = () => {
        router.push("/folderContent");
        onPress()
    }
    return (
        <Pressable 
            onPress={handleCardPress} 
            style={({ pressed }) => [
                styles.container, 
                {backgroundColor: cardBackground},
                pressed && { opacity: 0.5}
            ]}
        >
            <FolderFilled size={30} color={tint} />

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
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    textContainer: {
        flex: 1
    }
})