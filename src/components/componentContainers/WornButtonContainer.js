import React from 'react';
import { View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

const WornButtonContainer = (props) => {
	const { viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F4DF42',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(15),
        width: vw(100),
        zIndex: 0,
        overflow: 'hidden',
	},
	textStyle: {
		fontSize: 18
	}
};


//Make componenet available to other parts of the app
export default WornButtonContainer;

