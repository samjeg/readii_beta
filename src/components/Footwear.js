import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


const Footwear = () => {
	const { 
			textStyle, 
			viewStyle, 
			topViewStyle, 
			sideViewStyle, 
			ankleStyle 
		} = styles; 

	return (
		<View style={viewStyle}>
			<TouchableHighlight style={topViewStyle}>
				<Text style={textStyle}> Yo! </Text>
			</TouchableHighlight>
			<TouchableHighlight style={sideViewStyle}>
				<Text style={textStyle}> Yo! </Text>
			</TouchableHighlight>
			<TouchableHighlight style={ankleStyle}>
				<Text style={textStyle}> Yo! </Text>
			</TouchableHighlight>
		</View>
	);
};

const styles = {
	topViewStyle: {
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(30),
        width: vw(25),
        marginHorizontal: vw(5),
        marginTop: vw(1),
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#000',

	},
	sideViewStyle: {
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(30),
        width: vw(35),
        marginRight: vw(5),
        marginTop: vw(1),
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#000',

	},
	ankleStyle: {
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(10),
        width: vw(20),
        marginTop: vw(10),
        marginBottom: vw(5),
        marginLeft: vw(0),
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#000',

	},
	viewStyle: {
		backgroundColor: '#5CF442',
		justifyContent: 'center',
		flexDirection: 'row',
        height: vw(31),
        width: vw(100),
        overflow: 'hidden',
	},
	textStyle: {
		fontSize: 18
	}
};

export default Footwear;

