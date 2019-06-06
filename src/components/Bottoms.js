import React, { Component } from 'react';
import { View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

class Bottoms extends Component {
 

	render() {
		return (
			<View style={styles.viewStyle}>
				{this.props.children}
			</View>
		);
	}
}

const styles = {
	viewStyle: {
		position: 'absolute',
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: vw(97),
        height: vw(28),
        width: vw(80),
        marginHorizontal: vw(10),
        borderWidth: 2,
        borderColor: '#000',
    },
	textStyle: {
		fontSize: 18
	}
};

export default Bottoms;

