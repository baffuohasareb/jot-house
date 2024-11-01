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
import Ascending from "@/components/icons/Ascending";
import Descending from "@/components/icons/Descending";
import AllNotes from "@/ui/AllNotes";

const index = () => {
	const { active, setActive } = useHomeScreenContentStore();
	const { notes } = useNotesStore();
	const router = useRouter();
	const tint = useThemeColor({}, "tint");
	const text = useThemeColor({}, "text");
	const icon = useThemeColor({}, "icon");

	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [ascending, setAscending] = useState<boolean>(true);
	const [title, setTitle] = useState<boolean>(true);

	const toggleOrder = () => {
		ascending === true ? setAscending(false) : setAscending(true);
	}

	const toggleFilter = () => {
		title === true ? setTitle(false) : setTitle(true);
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

			<View style={[styles.header, {backgroundColor: tint}]}>
				<Pressable 
					onPress={() => setShowMenu(true)}
				>
					<Icon name="menu" size={20} color={icon} />
				</Pressable>

				<View style={styles.logo}>
					<ThemedText type="heading">
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

					<View style={styles.header}>
						<Pressable 
							onPress={toggleFilter}
							style={({ pressed }) => [
								styles.filter, 
								{ borderRightColor: text},
								pressed && { opacity: 0.6 }
							]}
						>	
							<ThemedText>
								{title ? "Title" : "Date"}
							</ThemedText>
						</Pressable>
						<Pressable 
							onPress={toggleOrder}
							style={({ pressed }) => pressed && { opacity: 0.6 }}
						>	
							{ascending ? (
								<Ascending color={text} size={20}/>
							) : (
								<Descending color={text} size={20}/>
							)}
						</Pressable>
					</View>
				</View>
			</View>

			{active === "All notes" && (
				<AllNotes/>
			)}
			
			{active === "Folders" && (
				<View>
					
				</View>
			)}
		</Container>
	)
}

export default index

const styles = StyleSheet.create({
	header: {
		paddingTop: 40, 
		paddingBottom: 20,
		paddingHorizontal: 10,
		flexDirection: "row",
		justifyContent: 'space-between',
		alignItems: "center"
	},
	logo: {
		flex: 1,
		alignItems: "center",
		marginRight: 30
	},
	filter: {
		paddingRight: 5,
		marginRight: 5,
		borderRightWidth: 1,
	}
})