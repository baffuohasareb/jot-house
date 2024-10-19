import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "@/ui/Container";
import Icon from "react-native-vector-icons/Feather";
import { ThemedText } from "@/components/ThemedText";
import useNotesStore from "@/stores/noteStore";
import { useThemeColor } from "@/hooks/useThemeColor";
import EditNote from "@/components/icons/EditNote";

const notePreview = () => {
    const { selectedNote } = useNotesStore();

    const tint = useThemeColor({}, "tint");
    const icon = useThemeColor({}, "icon");
    return (
        <Container>
            <View style={[styles.header, {backgroundColor: tint}]}>
                <Pressable>
                    <Icon name="arrow-left" size={20} color={icon} />
                </Pressable>

                <View style={{ alignItems: "center"}}>
                    <ThemedText type="heading" style={{ color: icon}}>
                        {selectedNote?.title || "Note title"}
                    </ThemedText>
                    <ThemedText type="cardText" style={{ color: icon}}>
                        {selectedNote?.title || "path/to/note/destination"}
                    </ThemedText>
                </View>

                <Pressable>
                    <Icon name="more-vertical" size={20} color={icon} />
                </Pressable>
            </View>

            <View style={styles.main}>
                <ThemedText>
                    {selectedNote?.body || "This is the note content. I would have wanted to populate with some lorem text but I can't type everything. Peace out!"}
                </ThemedText>

                <Pressable style={[styles.fab, { backgroundColor: tint }]}>
                    <EditNote size={25} color={icon} />
                </Pressable>
            </View>
        </Container>
    )
}

export default notePreview;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 30,
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    main: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10
    },
    fab: {
        position: "absolute",
        right: 30,
        bottom: 30,
        padding: 15,
        borderRadius: 100
    },
    pressed: {
        opacity: 0.6
    }
})