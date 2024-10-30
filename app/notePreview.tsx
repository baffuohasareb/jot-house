import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Container from "@/ui/Container";
import Icon from "react-native-vector-icons/Feather";
import { ThemedText } from "@/components/ThemedText";
import useNotesStore from "@/stores/noteStore";
import { useThemeColor } from "@/hooks/useThemeColor";
import EditNote from "@/components/icons/EditNote";
import { useRouter } from "expo-router";
import DropdownMenuButtonType from "@/types/dropdownMenuButtonType";
import DropDownMenu from "@/ui/DropDownMenu";
import MoveFolder from "@/components/icons/MoveFolder";
import Locked from "@/components/icons/Locked";
import Share from "@/components/icons/Share";
import Star from "@/components/icons/Star";
import Tag from "@/components/icons/Tag";
import Color from "@/components/icons/Color";
import Delete from "@/components/icons/Delete";

const notePreview = () => {
    const router = useRouter();
    const { selectedNote } = useNotesStore();

    const tint = useThemeColor({}, "tint");
    const text = useThemeColor({}, "text");
    const icon = useThemeColor({}, "icon");

    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const dropdownMenuButtons: DropdownMenuButtonType[] = [
        {
            icon: <MoveFolder color={text} size={20} />,
            title: "Move to folder",
            onPress: () => {
                console.log("Button pressed")
            },
        },
        {
            icon: <Locked color={text} size={20} />,
            title: "Lock",
            onPress: () => {
                
            },
        },
        {
            icon: <Share color={text} size={20} />,
            title: "Share",
            onPress: () => {
                
            },
        },
        {
            icon: <Star color={text} size={20} />,
            title: "Add to favorites",
            onPress: () => {
                
            },
        },
        {
            icon: <Tag color={text} size={20} />,
            title: "Tags",
            onPress: () => {
                
            },
        },
        {
            icon: <Color color={text} size={20} />,
            title: "Note color",
            onPress: () => {
                
            },
        },
        {
            icon: <Delete color={text} size={20} />,
            title: "Delete",
            onPress: () => {
                
            },
        },
    ]

    const toggleShowDropDown = () => {
        showDropDown ? setShowDropDown(false) : setShowDropDown(true);
    }

    const handleEditPress = () => {
        router.push("/editNote");
        console.log("Selected note:", selectedNote);
    }



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

                <Pressable onPress={toggleShowDropDown}>
                    <Icon name="more-vertical" size={20} color={icon} />
                </Pressable>

                <DropDownMenu
                    visible={showDropDown}
                    buttons={dropdownMenuButtons}
                    position={{
                        right: 30,
                        top: 50
                    }}
                    style={{zIndex: 2}}
                />
            </View>

            <View style={styles.main}>
                <ThemedText>
                    {selectedNote?.body || "This is the note content. I would have wanted to populate with some lorem text but I can't type everything. Peace out!"}
                </ThemedText>

                <Pressable 
                    onPress={handleEditPress}
                    style={[styles.fab, { backgroundColor: tint }]}
                >
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
        paddingTop: 10,
        zIndex: 1
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