//import library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';


//Create a component
const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'READII'} />
	</View>
);

// Register it to the device
AppRegistry.registerComponent('readii_beta', () => App);

