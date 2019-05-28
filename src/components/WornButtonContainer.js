import React from 'react';
import { Text, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


const WornButtonContainer = (props) => {
	const { textStyle, viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{ props.wornButtonContainerText }</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F4DF42',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(15),
        width: vw(100),
        // marginVertical:5,
        overflow: 'hidden',
        // marginHorizontal: 10
	},
	textStyle: {
		fontSize: 18
	}
};


//Make componenet available to other parts of the app
export default WornButtonContainer;

