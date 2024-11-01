import { Pressable, StyleSheet, View } from "react-native";
import React, { FC } from "react";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import NoteType from "@/types/noteType";
import StarFilled from "@/components/icons/StarFilled";
import PinFilled from "@/components/icons/PinFilled";
import { useRouter } from "expo-router";
import useNotesStore from "@/stores/noteStore";


const NoteCard: FC<NoteType> = ({
    id,
    title,
    body,
    pinned,
    favorite,
    color,
    tags,
    locked,
    lastUpdated,
}) => {
    const router = useRouter();

    const { setSelectedNote } = useNotesStore();

    const cardBackground = useThemeColor({}, "card");
    const tint = useThemeColor({}, "tint");

    const cardText = locked ? "Note body hidden for privacy reasons" : body;

    const handleNotePress = () => {
        setSelectedNote({id, title, body, pinned, favorite, color, tags, locked,  lastUpdated})
        router.push("/notePreview");
    }

    return (
        <Pressable 
            onPress={handleNotePress} 
            style={({ pressed }) => [
                styles.container, 
                { backgroundColor: cardBackground},
                pressed && {opacity: 0.5}
            ]}
        >
            <View style={styles.header}>
                <View style={[{ flex: 1, flexDirection: "row", alignItems: "center", gap: 7}]}>
                    <ThemedText type="cardTitle" numberOfLines={1} ellipsizeMode="tail">
                        {title}
                    </ThemedText>
                    {pinned && <PinFilled size={20} color={tint} />}
                </View>
                    
                {favorite && <StarFilled size={15} color={tint} />}
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