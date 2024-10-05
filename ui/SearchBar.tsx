import { StyleSheet, Text, TextInput, View } from "react-native"
import React, { FC } from "react";
import Search from "../components/icons/Search"
import { useThemeColor } from "@/hooks/useThemeColor";
import AddNoteButton from "./AddNoteButton";

type SearchBarProps = {
    placeholder: string;
}

const SearchBar: FC<SearchBarProps> = ({ placeholder }) => {
    const text = useThemeColor({}, "text");
    const tint = useThemeColor({}, "tint")
    return (
        <View style={styles.container}>
            <View style={[styles.searchBar, { borderColor: tint}]}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={text}
                    style={{ fontWeight: "200", color: text}}                
                />

                <Search  size={25} color={tint} />
            </View>

            <AddNoteButton/>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10
    },
    searchBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 7,
        marginVertical: 20,
        flex: 1
    }
})