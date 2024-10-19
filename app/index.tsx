import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import SearchBar from "@/ui/SearchBar";
import Container from "@/ui/Container";
import NoteCard from "@/ui/NoteCard";
import FolderCard from "@/ui/FolderCard";
import { Collapsible } from "@/components/Collapsible";
import TagsHeader from "@/ui/TagsHeader";
import Sidebar from "@/ui/Sidebar";
import { useThemeColor } from "@/hooks/useThemeColor";
import Icon from "react-native-vector-icons/Feather";
import useHomeScreenContentStore from "@/stores/homeScreenContentStore";
import useNotesStore from "@/stores/noteStore";
import NoteType from "@/types/noteType";
import { useRouter } from "expo-router";

const index = () => {
	const { active, setActive } = useHomeScreenContentStore();
	const { selectedNote, setSelectedNote } = useNotesStore();
	const router = useRouter();
	const tint = useThemeColor({}, "tint");
	const icon = useThemeColor({}, "icon");
	const background = useThemeColor({}, "background");

	const [showMenu, setShowMenu] = useState<boolean>(false);



	const note: NoteType = {
		id: 1,
		title: "Test",
		body: "This is just for testing purpose",
		pinned: true,
		favorite: true,
		locked: false,
		lastUpdated: "00000000",
		onPress() {
			setSelectedNote(this);
			router.push("/notePreview")
		},
	}

	return (
		<Container>
			<StatusBar
				barStyle="light-content"
				backgroundColor={tint}
				hidden={false}
				animated={true}
				translucent={true}
			/>

			<Sidebar 
				visible={showMenu}
				onClose={() => setShowMenu(false)}
			/>

			<View style={[{backgroundColor: tint, paddingTop: 30, paddingHorizontal: 10}]}>
				<Pressable 
					onPress={() => setShowMenu(true)}
				>
					<Icon name="menu" size={20} color={icon} />
				</Pressable>

				<View>
					<ThemedText>
						JotHouse
					</ThemedText>
				</View>
			</View>

			<View style={[{paddingHorizontal: 10}]}>
				<SearchBar placeholder="search notes, folders, and tags" />

				<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
					<View>
						{active === "Tags" ? (
							<TagsHeader tags={[]} />
						) : (
							<ThemedText type="heading">
								{active}
							</ThemedText>
						)}
					</View>

					<View>
						<ThemedText>Title</ThemedText>
					</View>
				</View>
			</View>

			<View>
				<NoteCard
					id={note.id}
					title={note.title}
					body={note.body}
					favorite={note.favorite}
					pinned={note.pinned}
					locked={note.locked}
					lastUpdated={note.lastUpdated}
					onPress={note.onPress}
				/>
			</View>
		</Container>
	)
}

export default index

const styles = StyleSheet.create({})