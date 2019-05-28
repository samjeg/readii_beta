import React from 'react';
import { View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import Bottoms from './Bottoms';


const BottomsContainer = () => {
	const { viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			<Bottoms />
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#5942F4',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(35),
        width: vw(100),
        // marginVertical:5,
        overflow: 'hidden',
        // marginHorizontal: 10
	},
	textStyle: {
		fontSize: 18
	}
};

export default BottomsContainer;

