import { StyleSheet, Text, TextInput, View } from "react-native"
import React, { FC } from "react";
import Search from "../assets/icons/search.svg"
import { useThemeColor } from "@/hooks/useThemeColor";

type SearchBarProps = {
    placeholder: string;
}

const SearchBar: FC<SearchBarProps> = ({ placeholder }) => {
    const color = useThemeColor({}, "tint");
    return (
        <View style={[styles.container, { borderColor: color}]}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={color}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 7
    }
})