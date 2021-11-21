import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Main from "./scenes/Main";
import CameraImage from "./scenes/CameraImage";
import ImageCollection from "./scenes/ImageCollection"

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>

				<Stack.Screen name="Main" component={Main} options={{ headerShown: false, animation: "none" }} />
				<Stack.Screen name="CameraImage" component={CameraImage} options={{ headerShown: false, animation: "none" }} />
				<Stack.Screen name="ImageCollection" component={ImageCollection} options={{ headerShown: false, animation: "none" }} />

			</Stack.Navigator>
		</NavigationContainer>
	);
}