//import library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import OutfitHeader from './src/components/OutfitHeader';


//Create a component
const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'READII'} />
		<OutfitHeader outfitHeaderText={'Name of the item'} />
	</View>
);

// Register it to the device
AppRegistry.registerComponent('readii_beta', () => App);

