import { View, StyleSheet } from "react-native";
import React from "react";
import StyledText from "./StyledText";


const RepositoryItem = (props) => {
	return (
		<View key={props.id} style={styles.container}>
			<StyledText big bold>id: {props.id}</StyledText>
			<StyledText blue>FullName: {props.fullName}</StyledText>
			<StyledText bold >Description: {props.description}</StyledText>
			<StyledText blue>Lenguage:{props.lenguage}</StyledText>
			<StyledText small>ForksCount:{props.forksCount}</StyledText>
			<StyledText small>StargazersCount:{props.stargazersCount}</StyledText>
			<StyledText small>RatingAverage:{props.ratingAverage}</StyledText>
			<StyledText small>ReviewCount:{props.reviewCount}</StyledText>
		</View>
	);
};

export default RepositoryItem;

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 5,
		paddingTop: 5,
	}
});
