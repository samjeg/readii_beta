import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


const Jacket = () => {
	const { textStyle, viewStyle } = styles; 

	return (
		<TouchableHighlight style={viewStyle}>
			<Text style={textStyle}> Yo! </Text>
		</TouchableHighlight>
	);
};

const styles = {
	viewStyle: {
		// position: 'absolute',
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(60),
        width: vw(42.5),
        overflow: 'hidden',
        elevation: 10,
        borderColor: '#000',
        borderWidth: 2,
        marginTop: vw(43),
        marginLeft: vw(27.5),
	},
	textStyle: {
		fontSize: 18
	}
};

export default Jacket;

