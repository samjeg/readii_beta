//Import librareis to make components
import React from 'react';
import { Text, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


//Make a component
const OutfitHeader = (props) => {
	const { textStyle, viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{ props.outfitHeaderText }</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#42C5F4',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(7.5),
        width: vw(100),
        // marginVertical:5,
        overflow: 'hidden',
        // marginHorizontal: 10
	},
	textStyle: {
		fontSize: 15
	}
};


//Make componenet available to other parts of the app
export default OutfitHeader;

