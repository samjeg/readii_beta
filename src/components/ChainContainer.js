import React from 'react';
import { View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import Chain from './Chain';


const ChainContainer = () => {
	const { viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			<Chain />
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

export default ChainContainer;

