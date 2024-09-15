import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

type NoteCardProps = {
    title: string;
    body: string;
    pinned: boolean;
    favorite: boolean;
    color?: string;
    locked: boolean;
    lastUpdated: string;
    onPress: () => void;
}

const NoteCard: FC<NoteCardProps> = ({
    title,
    body,
    pinned,
    favorite,
    color,
    locked,
    lastUpdated,
    onPress
}) => {
    const cardBackground = useThemeColor({}, "card");
    const tint = useThemeColor({}, "tint");

    const cardText = locked ? "Note body hidden for privacy reasons" : body

    return (
        <Pressable 
            onPress={onPress} 
            style={({ pressed }) => [
                styles.container, 
                { backgroundColor: cardBackground},
                pressed && {opacity: 0.5}
            ]}
        >
            <View style={styles.header}>
                <View style={{ flex: 1}}>
                    <ThemedText type="cardTitle" numberOfLines={1} ellipsizeMode="tail">
                        {title}
                    </ThemedText>
                </View>

                <View style={styles.iconsContainer}>
                    {pinned && <ThemedText type="small" style={{ color: tint}}>P</ThemedText>}
                    {favorite && <ThemedText type="small" style={{ color: tint, marginLeft: 5}}>S</ThemedText>}
                </View>
            </View>

            <View>
                <ThemedText type="cardText" numberOfLines={4} ellipsizeMode="tail" style={locked && { color: "#908f8f"}}>
                    {cardText}
                </ThemedText>
            </View>

            <View style={styles.header}>
                <ThemedText type="small">
                    Last updated: {lastUpdated}
                </ThemedText>

                <View style={[styles.color, {backgroundColor: `${color}`}]}/>
            </View>
        </Pressable>
    )
}

export default NoteCard

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 140,
        borderRadius: 20,
        padding: 10,
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 8,
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
        maxWidth: 40,
    },
    color: {
        width: 10,
        height: 10,
        borderRadius:20
    }
})