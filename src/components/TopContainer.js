import React from 'react';
import { View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import Top from './Top';


const TopContainer = () => {
	const { viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			<Top />
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F45C42',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(41),
        width: vw(100),
        overflow: 'hidden',
	},
	textStyle: {
		fontSize: 18
	}
};

export default TopContainer;

