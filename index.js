//import library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import MainPage from './src/components/MainPage';

const App = () => (
	<View>
		<MainPage />
	</View>
);

// Register it to the device
AppRegistry.registerComponent('readii_beta', () => App);

