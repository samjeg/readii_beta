import React from 'react';
import { Text, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


const TopContainer = (props) => {
	const { textStyle, viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{ props.topContainerText }</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F45C42',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(40),
        width: vw(100),
        // marginVertical:5,
        overflow: 'hidden',
        // marginHorizontal: 10
	},
	textStyle: {
		fontSize: 18
	}
};

export default TopContainer;

