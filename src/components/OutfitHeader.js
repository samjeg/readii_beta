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
		position: 'absolute',
		backgroundColor: '#42C5F4',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(7.5),
        width: vw(100),
        overflow: 'hidden',
        marginTop: vw(15)
	},
	textStyle: {
		fontSize: 15
	}
};


//Make componenet available to other parts of the app
export default OutfitHeader;

