import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


const Bottoms = () => {
	const { textStyle, viewStyle } = styles; 

	return (
		<TouchableHighlight style={viewStyle}>
			<Text style={textStyle}> Yo! </Text>
		</TouchableHighlight>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: vw(5),
        height: vw(28),
        width: vw(80),
        overflow: 'hidden',
	},
	textStyle: {
		fontSize: 18
	}
};

export default Bottoms;

