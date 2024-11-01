import { Image, StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import useNotesStore from "@/stores/noteStore";
import NoteCard from "./NoteCard";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

const AllNotes = () => {
    const { notes } = useNotesStore();
    const color = useColorScheme();
    const tint = useThemeColor({}, "tint");

    const lightFallback = require("../assets/images/no-notes-light.png");
    const darkFallback = require("../assets/images/no-notes-dark.png");

    return (
        <View>
            {notes.length === 0 ? (
                <View style={{ alignItems: "center"}}>
                    <View style={styles.imageContainer}>
                        <Image 
                            source={color === "light" ? lightFallback : darkFallback} 
                            style={styles.image}
                            resizeMode="contain"
                        />
                    </View>

                    <ThemedText type="heading" style={{ opacity: 0.5, marginTop: -40 }}>
                        Oops! There's nothing to display.
                    </ThemedText>
                </View>
            ) : (
                notes.map((note) => (
                    <View style={styles.container}>
                        <NoteCard
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            body={note.body}
                            favorite={note.favorite}
                            pinned={note.pinned}
                            locked={note.locked}
                            color={note.color}
                            lastUpdated={note.lastUpdated}
                        />
                    </View>
                ))
            )}
        </View>
    )
}

export default AllNotes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        gap: 10
    },
    imageContainer: {
        alignSelf: "center",
        width: "100%",
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%"
    }
})