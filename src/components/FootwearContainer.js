import React from 'react';
import { View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import Footwear from './Footwear';

const FootwearContainer = () => {
	const { viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			<Footwear />
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#5CF442',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(31),
        width: vw(100),
        overflow: 'hidden',
	},
	textStyle: {
		fontSize: 18
	}
};

export default FootwearContainer;

