import { Pressable, StyleSheet, Text, View } from "react-native";
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

const index = () => {
	const tint = useThemeColor({}, "tint");
	const background = useThemeColor({}, "background");

	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [content, setContent] = useState<"All notes" | "Favorites" | "Locked" | "Tags" | "Pinned" | "Folders">("Tags");

	return (
		<Container>
			<Sidebar 
				visible={showMenu}
				onClose={() => setShowMenu(false)}
			/>

			<View style={[{backgroundColor: tint, paddingTop: 30, paddingHorizontal: 10}]}>
				<Pressable 
					onPress={() => setShowMenu(true)}
				>
					<Icon name="menu" size={20} color={"#d9d9d9"} />
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
						{content === "Tags" ? (
							<TagsHeader tags={[]} />
						) : (
							<ThemedText type="heading">
								{content}
							</ThemedText>
						)}
					</View>

					<View>
						<ThemedText>Title</ThemedText>
					</View>
				</View>
			</View>
		</Container>
	)
}

export default index

const styles = StyleSheet.create({})