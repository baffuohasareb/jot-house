import { Image, StyleSheet, Text, useColorScheme, View } from "react-native";
import React, { useEffect, useState } from "react";
import useNotesStore from "@/stores/noteStore";
import NoteCard from "./NoteCard";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import useHomeScreenContentStore from "@/stores/homeScreenContentStore";
import NoteType from "@/types/noteType";

const AllNotes = () => {
    const { active } = useHomeScreenContentStore();
    const { notes } = useNotesStore();
    const color = useColorScheme();
    const tint = useThemeColor({}, "tint");

    const lightFallback = require("../assets/images/no-notes-light.png");
    const darkFallback = require("../assets/images/no-notes-dark.png");

    const [filteredNotes, setFilteredNotes] = useState<NoteType[]>(notes);

    const filterNotes = () => {
        if (active === "All notes") {
            setFilteredNotes(notes);
        } else if (active === "Locked") {
            setFilteredNotes(notes.filter(note => note.locked === true))
        } else if (active === "Favorites") {
            setFilteredNotes(notes.filter(note => note.favorite === true))
        } else if (active === "Pinned") {
            setFilteredNotes(notes.filter(note => note.pinned === true))
        } else if (active === "Tags") {
            // logic for rendering notes with selected tag
        } else if (active === "Folders") {
            // logic for rendering folders
        }
    };

    useEffect(() => {
        filterNotes();
        console.log("filtered notes:", filteredNotes);
    }, [active])

    return (
        <View>
            {filteredNotes.length === 0 ? (
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
                <View style={styles.container}>
                    {filteredNotes.map((note) => (
                        <NoteCard
                            key={note._id.toHexString()}
                            _id={note._id}
                            title={note.title}
                            content={note.content}
                            favorite={note.favorite}
                            pinned={note.pinned}
                            locked={note.locked}
                            color={note.color}
                            lastEdited={note.lastEdited}
                        />
                    ))}
                </View>
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
        justifyContent: "flex-start",
        gap: 15
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