import React from 'react';
import { View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


const ChainContainer = (props) => {
	const { viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#42F4AD',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(10),
        width: vw(100),
        marginTop: vw(5),
        overflow: 'hidden',
	},
	textStyle: {
		fontSize: 18
	}
};

export default ChainContainer;

