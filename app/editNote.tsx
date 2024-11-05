import "react-native-get-random-values";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";
import Container from "@/ui/Container";
import useNotesStore from "@/stores/noteStore";
import { useThemeColor } from "@/hooks/useThemeColor";
import FormattingToolbar from "@/ui/FormattingToolbar";
import Icon from "react-native-vector-icons/Feather";
import InputModal from "@/ui/InputModal";
import { addNote } from "@/services/realm/noteActions";
import { useRouter } from "expo-router";

const editNote = () => {
    const router = useRouter();
    const { selectedNote } = useNotesStore();
    const textColor = useThemeColor({light: "#000", dark: "#fff"}, "text")

    const card = useThemeColor({}, "card");
    const icon = useThemeColor({}, "icon");
    const tint = useThemeColor({}, "tint");

    const [toolbarVisible, setToolbarVisible] = useState<boolean>(false);
    const [InputModalVisible, setInputModalVisible] = useState<boolean>(false);
    const [heading, setHeading] = useState<string>("My second day at school");
    const [body, setBody] = useState<string>("My last day at school was not a very interesting one. I got caned by my teacher and I peed on myself. I was so embarrased for what happended. I called to tell my mom, and she called the teacher to tell him not to cane me again because I was already afraid of him, and doing that will not make me like him so much. Thank you. The end!");

    const handleDonePress = () => {
        addNote(heading, body);
        router.replace("/");
    }

    return (
        <Container paddingVertical={20}>
            <TextInput
                value={selectedNote?.title || heading}
                style={[styles.title, { backgroundColor: card, fontWeight: "600", color: textColor }]}
            />

            <TextInput
                value={selectedNote?.title || body}
                style={[styles.body, { backgroundColor: card, color: textColor }]}
                onFocus={() => setToolbarVisible(true)}
                onBlur={() => setToolbarVisible(false)}
            />

            <View style={{ position: "absolute", width: "100%", bottom: 0, }}>
                <Pressable 
                    onPress={handleDonePress}
                    style={[styles.fab, { backgroundColor: tint }]}
                >
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