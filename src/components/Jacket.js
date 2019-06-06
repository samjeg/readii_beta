import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';


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
		position: 'absolute',
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(41),
        width: vw(50),
        overflow: 'hidden',
        elevation: 10,
        borderColor: '#000',
        borderWidth: 2,
        marginTop: vh(30),
        marginHorizontal: vw(25),
	},
	textStyle: {
		fontSize: 18
	}
};

export default Jacket;

