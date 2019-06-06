import React from 'react';
import { View } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';


const JacketContainer = (props) => {
	const { viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	viewStyle: {
		position: 'absolute',
		backgroundColor: '#F45C42',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(41),
        width: vw(100),
        overflow: 'hidden',
        marginTop: vh(30),
        // zIndex: 10,
	},
	textStyle: {
		fontSize: 18
	}
};

export default JacketContainer;

