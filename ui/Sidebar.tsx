import { Modal, Pressable, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React, { FC } from "react";
import { ThemedView } from "@/components/ThemedView";
import Note from "../components/icons/Note";
import Star from "../components/icons/Star";
import Locked from "../components/icons/Locked";
import Tag from "../components/icons/Tag";
import Pin from "../components/icons/Pin";
import Folder from "../components/icons/Folder";
import { ThemedText } from "@/components/ThemedText";
import Icon from "react-native-vector-icons/Feather";
import { useThemeColor } from "@/hooks/useThemeColor";

type SidebarProps = {
    visible: boolean;
    onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ visible, onClose}) => {
    const tint  = useThemeColor({}, "tint");
    const text  = useThemeColor({}, "text");

    const handleItemPress = () => {
        onClose();
    }
    return (
        <Modal
            transparent={true}
            visible={visible}
            style={{ position: "absolute" }}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}/>
            </TouchableWithoutFeedback>
            <ThemedView style={styles.menuContainer}>
                <View 
                    style={[styles.menuItem, { justifyContent: "space-between"}]}
                >
                    <ThemedText type="heading">JotHouse</ThemedText>
                    <Icon name="x" size={25} color={tint} onPress={onClose} />
                </View>

                <Pressable 
                    style={({ pressed }) => [
                        styles.menuItem,
                        pressed && { opacity: 0.5 }
                    ]}
                    onPress={handleItemPress}
                >
                    <Note size={20} color={text} />
                    <ThemedText type="cardTitle" style={{ fontSize: 16 }}>All notes</ThemedText>
                </Pressable>

                <Pressable 
                    style={({ pressed }) => [
                        styles.menuItem,
                        pressed && { opacity: 0.5 }
                    ]}
                    onPress={handleItemPress}
                >
                    <Star size={20} color={text}/>
                    <ThemedText type="cardTitle">Favorites</ThemedText>
                </Pressable>
                
                <Pressable 
                    style={({ pressed }) => [
                        styles.menuItem,
                        pressed && { opacity: 0.5 }
                    ]}
                    onPress={handleItemPress}
                >
                    <Locked size={20} color={text}/>
                    <ThemedText type="cardTitle">Locked</ThemedText>
                </Pressable>

                <Pressable 
                    style={({ pressed }) => [
                        styles.menuItem,
                        pressed && { opacity: 0.5 }
                    ]}
                    onPress={handleItemPress}
                >
                    <Tag size={20} color={text}/>
                    <ThemedText type="cardTitle">Tags</ThemedText>
                </Pressable>

                <Pressable 
                    style={({ pressed }) => [
                        styles.menuItem,
                        pressed && { opacity: 0.5 }
                    ]}
                    onPress={handleItemPress}
                >
                    <Pin size={20} color={text}/>
                    <ThemedText type="cardTitle">Pinned</ThemedText>
                </Pressable>
                
                <Pressable 
                    style={({ pressed }) => [
                        styles.menuItem,
                        pressed && { opacity: 0.5 }
                    ]}
                    onPress={handleItemPress}
                >
                    <Folder size={20} color={text} />
                    <ThemedText type="cardTitle">Folders</ThemedText>
                </Pressable>
            </ThemedView>

        </Modal>
    )
}

export default Sidebar

const styles = StyleSheet.create({
    menuContainer: {
        width: "70%",
        height: "100%",
        paddingHorizontal: 15,   
        position: "absolute"
    },
    overlay: {
        width: "100%",
        height: "100%",
        backgroundColor: "#000000aa"
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginVertical: 5,
        paddingVertical: 10,
    },
})