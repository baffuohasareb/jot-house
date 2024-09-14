import { StyleSheet, Text, TextInput, View } from "react-native"
import React, { FC } from "react";

type SearchBarProps = {
    placeholder: string;
}

const SearchBar: FC<SearchBarProps> = ({ placeholder }) => {
    return (
        <View>
            <TextInput
                placeholder="Search notes, folders, and tags"
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})