import { FlatList, StyleSheet, View, ViewStyle } from "react-native";
import React, { FC } from "react";
import DropdownMenuButtonType from "@/types/dropdownMenuButtonType";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "@/components/ThemedText";
import DropdownMenuButton from "./DropdownMenuButton";

type DropDownMenuType = {
    heading?: string;
    buttons: DropdownMenuButtonType[];
    visible: boolean;
    position?: {
        top?: number,
        right?: number,
        bottom?: number,
        left?: number,
    },
    style?: ViewStyle;
}

const DropDownMenu: FC<DropDownMenuType> = ({ heading, buttons, visible, position, style }) => {
    const text = useThemeColor({}, "text");
    const card = useThemeColor({}, "card");


    if (visible) {
        return (
            <View 
                style={[
                    styles.container, 
                    { 
                        backgroundColor: card,
                        top: position?.top,
                        right: position?.right,
                        bottom: position?.bottom,
                        left: position?.left
                    },
                    {...style}
                ]}
            >
                {heading && (
                    <ThemedText type="cardTitle">
                        {heading}
                    </ThemedText>
                )}
    
                <FlatList
                    data={buttons}
                    renderItem={({item}) => (
                        <DropdownMenuButton
                            icon={item.icon}
                            title={item.title}
                            onPress={item.onPress}
                        />
                    )}
                    keyExtractor={(item) => item.title.toString()}
                    ItemSeparatorComponent={() => <View style={[styles.separator, { backgroundColor: text }]} />}
                />
            </View>
        )
    }
}

export default DropDownMenu;

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        height: 1,
        marginVertical: 10,
        opacity: 0.2
    },
    container: {
        position: "absolute", 
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
        borderRadius: 10,
        padding: 10,
        gap: 20,
        zIndex: 1,
    }
})