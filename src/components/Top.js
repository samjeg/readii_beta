import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


const Top = () => {
	const { 
			textStyle, 
			tieStyle,
			overallStyle,
			wristStyle,
			topStyle, 
			viewStyle,
		} = styles; 

	return (
		<View style={viewStyle}>
			<TouchableHighlight style={tieStyle}>
				<Text style={textStyle}> Yo! </Text>
			</TouchableHighlight>
			<TouchableHighlight style={overallStyle}>
				<Text style={textStyle}> Yo! </Text>
			</TouchableHighlight>
			<TouchableHighlight style={topStyle}>
				<Text style={textStyle}> Yo! </Text>
			</TouchableHighlight>
			<TouchableHighlight style={wristStyle}>
				<Text style={textStyle}> Yo! </Text>
			</TouchableHighlight>
		</View>
	);
};

const styles = {
	tieStyle: {
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(40),
        width: vw(10),
        marginTop: vw(1),
        marginHorizontal: vw(5),
        overflow: 'hidden',
	},
	overallStyle: {
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(40),
        width: vw(30),
        marginTop: vw(1),
        overflow: 'hidden',
        marginRight: vw(5)
	},
	topStyle: {
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(40),
        width: vw(30),
        marginTop: vw(1),
        overflow: 'hidden',
        marginRight: vw(5)
	},
	wristStyle: {
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: vw(24),
        height: vw(17),
        width: vw(10),
        overflow: 'hidden',
        marginRight: vw(5)
	},
	viewStyle: {
		backgroundColor: '#F45C42',
		justifyContent: 'center',
		flexDirection: 'row',
        height: vw(41),
        width: vw(100),
        overflow: 'hidden'
	},
	textStyle: {
		fontSize: 18
	}
};

export default Top;

