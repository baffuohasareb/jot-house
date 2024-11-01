import { Pressable, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { FC } from "react";
import { Modal } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Icon from "react-native-vector-icons/Feather";
import { useThemeColor } from "@/hooks/useThemeColor";

type InputModalProps = {
    visible: boolean;
    title: "save" | "rename";
    onClose: () => void;
    onSubmit: () => void;
}

const InputModal: FC<InputModalProps> = ({
    visible,
    title,
    onClose,
    onSubmit
}) => {
    const icon = useThemeColor({}, "text");
    const tint = useThemeColor({}, "tint");

    return (
        <Modal
            visible={visible}
            transparent
            style={styles.modal}
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.overlay}/>
            </TouchableWithoutFeedback>

            <ThemedView style={[styles.container, { borderColor: tint }]}>
                <View style={styles.header}>
                    <ThemedText type="cardTitle">
                        {title === "save" ? "Save note as PDF" : "Rename folder"}
                    </ThemedText>

                    <Pressable onPress={onClose}>
                        <Icon name="x" color={icon} size={20} />
                    </Pressable>
                </View>

                <View style={[styles.header, styles.input, { borderColor: tint }]}>
                    <TextInput
                        style={{ flex: 1 }}
                    />

                    <Pressable
                        onPress={onSubmit}
                    >
                        <Icon name="check" color={tint} size={20} />
                    </Pressable>
                </View>

                {title === "save" && (
                    <Pressable>
                        <ThemedText type="small">
                            Select location
                        </ThemedText>
                    </Pressable>
                )}
            </ThemedView>
        </Modal>
    )
}

export default InputModal

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: "#000000aa",
        flex: 1
    },
    container: {
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 20,
        position: "absolute",
        top: "40%"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    input: {
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        marginTop: 15
    },
    modal: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    }
})