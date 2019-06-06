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
		position: 'absolute',
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
        height: vw(9),
        width: vw(80),
        marginHorizontal: vw(10),
        marginTop: vw(26),
        overflow: 'hidden',
	},
	imageStyle: {
		height: '100%',
		width: '100%',
		borderWidth: 2,
        borderColor: '#000',
	}
};

export default Chain;

