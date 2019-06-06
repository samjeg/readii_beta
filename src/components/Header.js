//Import librareis to make components
import React from 'react';
import { Text, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


//Make a component
const Header = (props) => {
	const { textStyle, viewStyle } = styles; 

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{ props.headerText }</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		position: 'absolute',
		backgroundColor: '#F45F42',
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
export default Header;

