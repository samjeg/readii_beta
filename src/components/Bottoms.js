import React from 'react';
import { Text, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

const Bottoms = () => {
	const { textStyle, viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			<Text style={textStyle}> Dude </Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		position: 'absolute',
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: vw(97),
        height: vw(28),
        width: vw(80),
        marginHorizontal: vw(10),
        borderWidth: 2,
        borderColor: '#000',
    },
	textStyle: {
		fontSize: 18
	}
};

export default Bottoms;

