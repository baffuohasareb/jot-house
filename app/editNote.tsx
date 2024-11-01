import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Container from "@/ui/Container";
import useNotesStore from "@/stores/noteStore";
import { useThemeColor } from "@/hooks/useThemeColor";
import FormattingToolbar from "@/ui/FormattingToolbar";
import Icon from "react-native-vector-icons/Feather";
import InputModal from "@/ui/InputModal";

const editNote = () => {
    const { selectedNote } = useNotesStore();
    const textColor = useThemeColor({light: "#000", dark: "#fff"}, "text")

    const card = useThemeColor({}, "card");
    const icon = useThemeColor({}, "icon");
    const tint = useThemeColor({}, "tint");

    const [toolbarVisible, setToolbarVisible] = useState<boolean>(false);
    const [InputModalVisible, setInputModalVisible] = useState<boolean>(false)

    return (
        <Container paddingVertical={20}>
            <TextInput
                value={selectedNote?.title || "Note title"}
                style={[styles.title, { backgroundColor: card, fontWeight: "600", color: textColor }]}
            />

            <TextInput
                value={selectedNote?.title || "Note body"}
                style={[styles.body, { backgroundColor: card, color: textColor }]}
                onFocus={() => setToolbarVisible(true)}
                onBlur={() => setToolbarVisible(false)}
            />

            <View style={{ position: "absolute", width: "100%", bottom: 0, }}>
                <Pressable style={[styles.fab, { backgroundColor: tint }]}>
                    <Icon name="check" color={icon} size={25} />
                </Pressable>

                {toolbarVisible && <FormattingToolbar onSavePress={() => setInputModalVisible(true)} />}
            </View>

            <InputModal 
                visible={InputModalVisible}
                onClose={() => setInputModalVisible(false)}
                title="save"
                onSubmit={() => {}}
            />
        </Container>
    )
}

export default editNote

const styles = StyleSheet.create({
    title: {
        borderRadius: 20,
        padding: 10,
        margin: 10
    },
    body: {
        borderRadius: 20,
        padding: 10,
        flex: 1,
        textAlignVertical: "top",
        marginTop: 10,
        marginHorizontal: 10
    },
    fab: {
        bottom: 30,
        padding: 15,
        borderRadius: 100,
        flex: 0,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
        right: 20
    }
})