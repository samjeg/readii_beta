//import library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import OutfitHeader from './src/components/OutfitHeader';
import ChainContainer from './src/components/ChainContainer';
import WornButtonContainer from './src/components/WornButtonContainer';
import TopContainer from './src/components/TopContainer';
import BottomsContainer from './src/components/BottomsContainer';
import FootwearContainer from './src/components/FootwearContainer';


//Create a component
const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Menu'} />
		<OutfitHeader outfitHeaderText={'Name of the item'} />
		<ChainContainer chainContainerText={'Chain Container'} />
		<WornButtonContainer wornButtonContainerText={'Worn Button Container'} />
		<TopContainer topContainerText={'Top Container'} />
		<BottomsContainer bottomsContainerText={'Bottoms Container'} />
		<FootwearContainer footwearContainerText={'Footwear Container'} />
	</View>
);

// Register it to the device
AppRegistry.registerComponent('readii_beta', () => App);

