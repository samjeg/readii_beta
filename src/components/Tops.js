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
        borderWidth: 2,
        borderColor: '#000',
        // zIndex: 0,
	},
	overallStyle: {
		// position: 'absolute',
		backgroundColor: '#5942F4',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(40),
        width: vw(30),
        marginTop: vw(1),
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#000',
        marginRight: vw(5),
        elevation: 20,
	},
	topStyle: {
		// position: 'absolute',
		backgroundColor: '#5CF442',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(40),
        width: vw(30),
        marginTop: vw(1),
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#000',
        marginRight: vw(5),
        elevation: 20,
	},
	wristStyle: {
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: vw(24),
        height: vw(17),
        width: vw(10),
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#000',
        // zIndex: 0,
        marginRight: vw(5)
	},
	viewStyle: {
		backgroundColor: '#F45C42',
		justifyContent: 'center',
		flexDirection: 'row',
        height: vw(41),
        width: vw(100),
        // zIndex: 0,
        overflow: 'hidden'
	},
	textStyle: {
		fontSize: 18
	}
};

export default Top;

