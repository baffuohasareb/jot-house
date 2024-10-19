import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import Icon from "react-native-vector-icons/Feather";
import { useThemeColor } from "@/hooks/useThemeColor";
import HandDraw from "./icons/HandDraw";
import CheckedBox from "./icons/CheckedBox";
import TextFormat from "./icons/TextFormat";
import DecreaseFont from "./icons/DecreaseFont";
import IncreaseFont from "./icons/IncreaseFont";
import Undo from "./icons/Undo";
import Redo from "./icons/Redo";

const FormattingToolbar = () => {
    const text = useThemeColor({}, "text");
    const tint = useThemeColor({}, "tint");
    const card = useThemeColor({}, "card");

    return (
        <View style={[styles.container, { borderColor: tint, backgroundColor: card }]}>
            <Pressable>
                <Icon name="mic" color={text} size={20} />
            </Pressable>
            <Pressable>
                <HandDraw color={text} size={20} />
            </Pressable>
            <Pressable>
                <CheckedBox color={text} size={20} />
            </Pressable>
            <Pressable>
                <TextFormat color={text} size={20} />
            </Pressable>
            <Pressable>
                <DecreaseFont color={text} size={20} />
            </Pressable>
            <Pressable>
                <IncreaseFont color={text} size={20} />
            </Pressable>
            <Pressable>
                <Icon name="paperclip" color={text} size={20} />
            </Pressable>
            <Pressable>
                <Undo color={text} size={20} />
            </Pressable>
            <Pressable>
                <Redo color={text} size={20} />
            </Pressable>
            <Pressable>
                <Icon name="save" color={text} size={20} />
            </Pressable>
        </View>
    )
}

export default FormattingToolbar

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 3,
        borderBottomWidth: 3,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 10
    }
})