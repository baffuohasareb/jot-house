import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC, useState } from "react";
import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";

type TagsHeaderProps = {
    tags: string[];
}

const TagsHeader: FC<TagsHeaderProps> = ({
    tags=[]
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [heading, setHeading] = useState<string>(tags[0]);

    const handleTagPress = (tag: string) => {
        setHeading(tag);
        setIsOpen(false);  
    }

    const Separator = () => <View style={styles.separator}/>

    return (
        <Collapsible title={heading ? ("#" + heading) : "No tags"} isOpen={isOpen} setIsOpen={setIsOpen}>
            {tags.length > 0 && (
                <FlatList
                    data={tags}
                    renderItem={({ item }) => (
                        <Pressable 
                            style={({ pressed }) => [
                                styles.tag,
                                pressed && { opacity: 0.5 }
                            ]}
                            onPress={() => handleTagPress(item)}
                        >
                            <ThemedText>#{item}</ThemedText>
                        </Pressable>
                    )}
                    keyExtractor={(item) => item.toString()}
                    style={styles.tagList}
                    ItemSeparatorComponent={Separator}
                />
            )}
        </Collapsible>
    )
}

export default TagsHeader

const styles = StyleSheet.create({
    tagList: {
        width: 150
    },
    separator: {
        height: 1,
    },
    tag: {
        marginVertical: 5,
    }
})
