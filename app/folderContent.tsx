import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Container from "@/ui/Container";
import Delete from "@/components/icons/Delete";
import MoveFolder from "@/components/icons/MoveFolder";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import useNotesStore from "@/stores/noteStore";
import DropdownMenuButtonType from "@/types/dropdownMenuButtonType";
import DropDownMenu from "@/ui/DropDownMenu";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/Feather";
import SearchBar from "@/ui/SearchBar";
import Ascending from "@/components/icons/Ascending";
import Descending from "@/components/icons/Descending";
import InputModal from "@/ui/InputModal";

const folderContent = () => {
    const router = useRouter();
    const { selectedNote } = useNotesStore();

    const tint = useThemeColor({}, "tint");
    const text = useThemeColor({}, "text");
    const icon = useThemeColor({}, "icon");

    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    const [foldersSort, setFoldersSort] = useState<{filter?: string, order?: string}>({
        filter: "Name",
        order: "ascending"
    });
    const [notesSort, setNotesSort] = useState<{filter?: string, order?: string}>({
        filter: "Title",
        order: "ascending"
    });
	

	const toggleOrder = (group: string) => {
        if(group === "folders"){
            foldersSort.order === "ascending" ? 
            setFoldersSort({...foldersSort, order: "descending"}) : 
            setFoldersSort({...foldersSort, order: "ascending",});
        } else {
            notesSort.order === "ascending" ? 
            setNotesSort({...notesSort, order: "descending"}) : 
            setNotesSort({...notesSort, order: "ascending"});
        }
	}

	const toggleFilter = (group: string) => {
		if(group === "folders"){
            foldersSort.filter === "Name" ? 
            setFoldersSort({...foldersSort, filter: "Date"}) : 
            setFoldersSort({...foldersSort, filter: "Name"});
        } else {
            notesSort.filter === "Title" ? 
            setNotesSort({...notesSort, filter: "Date"}) : 
            setNotesSort({...notesSort, filter: "Title"});
        }
	}

    const dropdownMenuButtons: DropdownMenuButtonType[] = [
        {
            icon: <MoveFolder color={text} size={20} />,
            title: "New folder",
            onPress: () => {
                console.log("Button pressed")
            },
        },
        {
            icon: <MoveFolder color={text} size={20} />,
            title: "Move folder",
            onPress: () => {
                console.log("Button pressed")
            },
        },
        {
            icon: <Icon name="edit-3" color={text} size={20} />,
            title: "Rename",
            onPress: () => {
                setShowModal(true);
                setShowDropDown(false);
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
            <View style={styles.header}>
                <Pressable>
                    <Icon name="arrow-left" size={20} color={text} />
                </Pressable>

                <View style={{ alignItems: "center"}}>
                    <ThemedText type="heading" style={{ color: text }}>
                        {selectedNote?.title || "Folder name"}
                    </ThemedText>
                    <ThemedText type="cardText" style={{ color: text}}>
                        {selectedNote?.title || "path/to/folder/destination"}
                    </ThemedText>
                </View>

                <Pressable onPress={toggleShowDropDown}>
                    <Icon name="more-vertical" size={20} color={text} />
                </Pressable>

                <DropDownMenu
                    visible={showDropDown}
                    buttons={dropdownMenuButtons}
                    position={{
                        right: 30,
                        top: 50
                    }}
                    style={{zIndex: 2}}
                    onClose={() => setShowDropDown(false)}
                />
            </View>

            <InputModal
                visible={showModal}
                title="rename"
                onClose={() => setShowModal(false)}
                onSubmit={() => {}}
            />

            <SearchBar
                placeholder="Search for notes and folders"
            />

            
            {/* Folders */}
            <View>
                <View>
                    <View style={[styles.sectionHeader, { marginVertical: 10}]}>
                        <ThemedText type="heading">
                            Folders
                        </ThemedText>

                        <View style={styles.header}>
                            <Pressable 
                                onPress={() => toggleFilter("folders")}
                                style={({ pressed }) => [
                                    styles.filter, 
                                    { borderRightColor: text},
                                    pressed && { opacity: 0.6 }
                                ]}
                            >	
                                <ThemedText>
                                    {foldersSort.filter}
                                </ThemedText>
                            </Pressable>
                            <Pressable 
                                onPress={() => toggleOrder("folders")}
                                style={({ pressed }) => pressed && { opacity: 0.6 }}
                            >	
                                {foldersSort.order === "ascending" ? (
                                    <Ascending color={text} size={20}/>
                                ) : (
                                    <Descending color={text} size={20}/>
                                )}
                            </Pressable>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", gap: 15 }}>
                    
                </View>
            </View>
            
            
            {/* Notes */}
            <View>
                <View>
                    <View style={[styles.sectionHeader, { marginVertical: 10}]}>
                        <ThemedText type="heading">
                            Notes
                        </ThemedText>

                        <View style={styles.header}>
						<Pressable 
							onPress={() => toggleFilter("notes")}
							style={({ pressed }) => [
								styles.filter, 
								{ borderRightColor: text},
								pressed && { opacity: 0.6 }
							]}
						>	
							<ThemedText>
								{notesSort.filter}
							</ThemedText>
						</Pressable>
						<Pressable 
							onPress={() => toggleOrder("notes")}
							style={({ pressed }) => pressed && { opacity: 0.6 }}
						>	
							{notesSort.order === "ascending" ? (
                                    <Ascending color={text} size={20}/>
                                ) : (
                                    <Descending color={text} size={20}/>
                                )}
						</Pressable>
					</View>
                    </View>
                </View>

                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", gap: 15 }}>
                    
                </View>
            </View>
        </Container>
    )
}

export default folderContent

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 30,
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 5
    },
    filter: {
		paddingRight: 5,
		marginRight: 5,
		borderRightWidth: 1,
	}
})