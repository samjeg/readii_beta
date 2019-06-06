import React from 'react';
import { View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


const TopContainer = (props) => {
	const { viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			{props.children}
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
        zIndex: 0,
	},
	textStyle: {
		fontSize: 18
	}
};

export default TopContainer;

