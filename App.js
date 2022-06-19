// import React from "react";
// import { NativeRouter } from "react-router-native";

// export default function App() {
	// 	return <NativeRouter><Main/></NativeRouter>
	
	// }
	
	import * as React from "react";
	import { Button, View } from "react-native";
	import { createDrawerNavigator } from "@react-navigation/drawer";
	import { NavigationContainer } from "@react-navigation/native";
	import Main from "./src/components/Main.jsx";
	
function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Button
				onPress={() => navigation.navigate("Notifications")}
				title="Go to notifications"
			/>
		</View>
	);
}

function NotificationsScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Button onPress={() => navigation.goBack()} title="Go back home" />
		</View>
	);
}

const Drawer = createDrawerNavigator();

const App=()=> {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={HomeScreen} />
				<Drawer.Screen name="Notifications" component={NotificationsScreen} />
				<Drawer.Screen name="Main" component={Main} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

export default  App