import React from 'react';
import { View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


const WornButton = () => {
	const { viewStyle } = styles; 

	return (
		<View style={viewStyle} />
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(14),
        width: vw(14),
        borderRadius: vw(14) / 2,
        marginLeft: vw(75),
        overflow: 'hidden',
	},
	textStyle: {
		fontSize: 18
	}
};


//Make componenet available to other parts of the app
export default WornButton;

