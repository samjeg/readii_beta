import React from 'react';
import { View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

const BottomsContainer = (props) => {
	const { viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			{props.children}
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
        overflow: 'hidden',
	},
	textStyle: {
		fontSize: 18
	}
};

export default BottomsContainer;

