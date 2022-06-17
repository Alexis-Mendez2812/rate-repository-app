import React from "react";
import { StyleSheet, View } from "react-native";
import Main from "./src/components/Main.jsx";
import { NativeRouter } from "react-router-native";


export default function App() {
	return (
		<NativeRouter>
			<Main/>	
		</NativeRouter>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		color: "#000",
		alignItems: "center",
		justifyContent: "center",
	},

});
