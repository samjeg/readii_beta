import React from 'react';
import { Text, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


const ChainContainer = (props) => {
	const { textStyle, viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{ props.chainContainerText }</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#42F4AD',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(10),
        width: vw(100),
        marginTop: vw(5),
        // marginVertical:5,
        overflow: 'hidden',
        // marginHorizontal: 10
	},
	textStyle: {
		fontSize: 18
	}
};


//Make componenet available to other parts of the app
export default ChainContainer;

