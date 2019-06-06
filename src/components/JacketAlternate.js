import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


class JacketAlternate extends Component {
	
	constructor(props) {
		super(props);
		this.state = { 
			jacketStyle: styles(this.props.elevation).viewStyle,
			jacketTextStyle: styles(this.props.elevation).textStyle,
		};
	}

	render() {
		return (
			<View style={this.state.jacketStyle}>
				{this.props.children}
			</View>
		);
	}
}

let styles = function (localElevation) {
	return ({
		viewStyle: {
			position: 'absolute',
			backgroundColor: '#FFF',
			justifyContent: 'center',
			alignItems: 'center',
			height: vw(45),
			width: vw(42.5),
			overflow: 'hidden',
			elevation: localElevation,
			borderColor: '#000',
			borderWidth: 2,
			marginTop: vw(43),
			marginLeft: vw(27.5),
		},
		textStyle: {
			fontSize: 18
		}
	});
};

export default JacketAlternate;

