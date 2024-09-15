import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import SearchBar from "@/ui/SearchBar";
import Container from "@/ui/Container";
import NoteCard from "@/ui/NoteCard";
import FolderCard from "@/ui/FolderCard";
import { Collapsible } from "@/components/Collapsible";
import TagsHeader from "@/ui/TagsHeader";

const index = () => {
	return (
		<Container style={{ flexDirection: "row", flexWrap: "wrap", gap: 4}}>
			<NoteCard
				title="My first day at Opoku Ware"
				body="lorerm ipsum dolor sit amet, consectutur aadipiscing elit, sed do eusmod tempor incididunt ut labareoklj lorerm ipsum dolor sit amet, consectutur aadipiscing elit, sed do eusmod tempor incididunt ut labareoklj lorerm ipsum dolor sit amet, consectutur aadipiscing elit, sed do eusmod tempor incididunt ut labareoklj lorerm ipsum dolor sit amet, consectutur aadipiscing elit, sed do eusmod tempor incididunt ut labareoklj"
				pinned={true}
				favorite={true}
				locked={false}
				color="#fec120"
				lastUpdated="01/05/2024"
				onPress={() => {}}
			/>
			
			<NoteCard
				title="My first day at Opoku Ware School"
				body="lorerm ipsum dolor sit amet, consectutur aadipiscing elit, sed do eusmod tempor incididunt ut labareoklj lorerm ipsum dolor sit amet, consectutur aadipiscing elit, sed do eusmod tempor incididunt ut labareoklj lorerm ipsum dolor sit amet, consectutur aadipiscing elit, sed do eusmod tempor incididunt ut labareoklj lorerm ipsum dolor sit amet, consectutur aadipiscing elit, sed do eusmod tempor incididunt ut labareoklj"
				pinned={true}
				favorite={true}
				locked={true}
				color="#cc0000"
				lastUpdated="01/05/2024"
				onPress={() => {}}
			/>

			<FolderCard 
				name="CCI Sunday Service"
				noteCount={12}
				onPress={() => {}}
			/>
			
			<FolderCard 
				name="CCI Sunday Service"
				noteCount={12}
				onPress={() => {}}
			/>

			<TagsHeader tags={["chillings", "electronics", "religion", "sports", "seminars"]} />
		</Container>
	)
}

export default index

const styles = StyleSheet.create({})