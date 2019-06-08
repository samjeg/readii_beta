import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


const WornButton = () => {
	const { outerCircleStyle, innerCircleStyle } = styles; 

	return (
		<View style={outerCircleStyle}>
			<TouchableOpacity 
				onPress={() => console.log('Worn button pressed')} 
				style={innerCircleStyle} 
			/>
		</View>
	);
};

const styles = {
	outerCircleStyle: {
		position: 'absolute',
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(14),
        width: vw(14),
        borderRadius: vw(14) / 2,
        marginLeft: vw(75),
        borderWidth: 2,
        borderColor: '#000',
        marginTop: vw(37),
        overflow: 'hidden',
	},
	innerCircleStyle: {
		backgroundColor: '#000',
        height: vw(12),
        width: vw(12),
        borderRadius: vw(12) / 2,
        borderWidth: 2,
        borderColor: '#000',
	},
	textStyle: {
		fontSize: 18
	}
};


//Make componenet available to other parts of the app
export default WornButton;

