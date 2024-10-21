import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useThemeColor } from "@/hooks/useThemeColor";
import HandDraw from "../components/icons/HandDraw";
import CheckedBox from "../components/icons/CheckedBox";
import TextFormat from "../components/icons/TextFormat";
import DecreaseFont from "../components/icons/DecreaseFont";
import IncreaseFont from "../components/icons/IncreaseFont";
import Undo from "../components/icons/Undo";
import Redo from "../components/icons/Redo";
import { ThemedText } from "../components/ThemedText";
import DropdownMenuButtonType from "@/types/dropdownMenuButtonType";
import DropDownMenu from "./DropDownMenu";

const TextOptions = () => {
    const text = useThemeColor({}, "text");
    const card = useThemeColor({}, "card");
    const background = useThemeColor({}, "background");

    return (
        <View style={[styles.formatContainer, { backgroundColor: card }]}>
            <ThemedText type="cardTitle">
                Text Options
            </ThemedText>

            <View style={{ gap: 10}}>
                <View style={styles.rowGroup}>
                    <View style={[styles.rowGroup, styles.formatGroup, { backgroundColor: background, gap: 15 }]}>
                        <Pressable>
                            <Icon name="list" size={25} color={text} />
                        </Pressable>
                        <Pressable>
                            <Icon name="list" size={25} color={text} />
                        </Pressable>
                    </View>
                    
                    <View style={[styles.rowGroup, styles.formatGroup, { backgroundColor: background, gap: 15 }]}>
                        <Pressable>
                            <Icon name="align-left" size={25} color={text} />
                        </Pressable>
                        <Pressable>
                            <Icon name="align-center" size={25} color={text} />
                        </Pressable>
                        <Pressable>
                            <Icon name="align-right" size={25} color={text} />
                        </Pressable>
                    </View>
                </View>
                
                <View style={[styles.rowGroup, { justifyContent: "space-between"}]}>
                    <View style={[styles.rowGroup, styles.formatGroup, { backgroundColor: background }]}>
                        <Pressable>
                            <Icon name="bold" size={25} color={text} />
                        </Pressable>
                        <Pressable>
                            <Icon name="italic" size={25} color={text} />
                        </Pressable>
                        <Pressable>
                            <Icon name="underline" size={25} color={text} />
                        </Pressable>
                        <Pressable>
                            <Icon name="list" size={25} color={text} />
                        </Pressable>
                    </View>

                    <View style={[styles.rowGroup, styles.formatGroup, { backgroundColor: background }]}>
                        <Pressable>
                            <Icon name="list" size={25} color={text} />
                        </Pressable>
                        <Pressable>
                            <Icon name="list" size={25} color={text} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

const FormattingToolbar = () => {
    const text = useThemeColor({}, "text");
    const tint = useThemeColor({}, "tint");
    const card = useThemeColor({}, "card");

    const dropdownMenuButtons: DropdownMenuButtonType[] = [
        {
            icon: <Icon name="image" color={text} size={20} />,
            title: "Image",
            onPress: () => {
                console.log("Button pressed")
            },
        },
        {
            icon: <Icon name="file-text" color={text} size={20} />,
            title: "PDF",
            onPress: () => {
                
            },
        },
        {
            icon: <Icon name="mic" color={text} size={20} />,
            title: "Voice recording",
            onPress: () => {
                
            },
        },
        {
            icon: <Icon name="headphones" color={text} size={20} />,
            title: "Audio file",
            onPress: () => {
                
            },
        },
    ]

    const [showTextOptions, setShowTextOptions] = useState<boolean>(false);
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const [activeButtonStyle, setActiveButtonStyle] = useState<ViewStyle>({backgroundColor: tint});


    const handleFormatPress = () => {
        if (showTextOptions) {
            setShowTextOptions(!showTextOptions);
        } else {
            setShowDropDown(false);
            setShowTextOptions(true)
        }
    }
    
    const handleAttachPress = () => {
        if (showDropDown) {
            setShowDropDown(false);
        } else {
            setShowTextOptions(false)
            setShowDropDown(true);
        }
    }

    return (
        <View style={[styles.container, { borderColor: tint, backgroundColor: card }]}>
            {showTextOptions && <TextOptions />}
            <DropDownMenu
                visible={showDropDown}
                buttons={dropdownMenuButtons}
                heading="Attach file"
                position={{
                    right: 50,
                    bottom: 60
                }}
            />
            <Pressable
                style={styles.button}
            >
                <Icon name="mic" color={text} size={20} />
            </Pressable>

            <Pressable
                style={styles.button}
            >
                <HandDraw color={text} size={20} />
            </Pressable>

            <Pressable
                style={styles.button}
            >
                <CheckedBox color={text} size={20} />
            </Pressable>

            <Pressable 
                style={[styles.button, showTextOptions && activeButtonStyle]}
                onPress={handleFormatPress}
            >
                <TextFormat color={text} size={20} />
            </Pressable>

            <Pressable
                style={styles.button}
            >
                <DecreaseFont color={text} size={20} />
            </Pressable>

            <Pressable
                style={styles.button}
            >
                <IncreaseFont color={text} size={20} />
            </Pressable>

            <Pressable
                onPress={handleAttachPress}
                style={[styles.button, showDropDown && activeButtonStyle]}
            >
                <Icon name="paperclip" color={text} size={20} />
            </Pressable>

            <Pressable
                style={styles.button}
            >
                <Undo color={text} size={20} />
            </Pressable>

            <Pressable
                style={styles.button}
            >
                <Redo color={text} size={20} />
            </Pressable>

            <Pressable
                style={styles.button}
            >
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
    },
    rowGroup: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    formatContainer: { 
        position: "absolute", 
        bottom: 60,
        left: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
        borderRadius: 10,
        padding: 10,
        gap: 20
    },
    formatGroup: {
        borderRadius: 5,
        gap: 5,
        padding: 5
    },
    button: {
        borderRadius: 5,
        padding: 5,
    }
})