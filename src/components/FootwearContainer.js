import React from 'react';
import { Text, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


const FootwearContainer = (props) => {
	const { textStyle, viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{ props.footwearContainerText }</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#5CF442',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(30),
        width: vw(100),
        // marginVertical:5,
        overflow: 'hidden',
        // marginHorizontal: 10
	},
	textStyle: {
		fontSize: 18
	}
};

export default FootwearContainer;

