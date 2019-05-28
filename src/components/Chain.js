import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

const imagePath = require('../../images/starNecklace.jpg');

class Chain extends Component {

	render() {
		return (
			<TouchableHighlight style={styles.viewStyle}>
				<Image 
					source={imagePath} 
					style={styles.imageStyle}
				/> 
			</TouchableHighlight>
		);
	}
} 

const styles = {
	viewStyle: {
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(9),
        width: vw(80),
        // marginVertical:5,
        overflow: 'hidden',
        // marginHorizontal: 10
	},
	imageStyle: {
		height: '100%',
		width: '100%'
	}
};

export default Chain;

