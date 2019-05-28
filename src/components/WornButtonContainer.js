import React from 'react';
import { View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import WornButton from './WornButton';

const WornButtonContainer = () => {
	const { viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			<WornButton />
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

