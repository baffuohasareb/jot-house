import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddNote from '@/components/icons/AddNote'
import { useThemeColor } from '@/hooks/useThemeColor'
import { useRouter } from 'expo-router'

const AddNoteButton = () => {
    const tint = useThemeColor({}, "tint");
    const router = useRouter();

    return (
        <Pressable 
            onPress={() => {
                router.push("/editNote");
            }}
            style={[styles.container, { backgroundColor: tint }]}>
            <AddNote size={25} color={"#ffffff"} />
        </Pressable>
    )
}

export default AddNoteButton

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15
    }
})