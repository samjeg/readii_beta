import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


class Jacket extends Component {
	
	constructor(props) {
		super(props);
		this.state = { 
			jacketStyle: styles(this.props.elevation).viewStyle,
			jacketTextStyle: styles(this.props.elevation).textStyle,
		};
	}

	setElevation() {
		console.log('jacket set elevation');
		this.props.onClick();
	}

	render() {
		return (
			<TouchableHighlight 
				style={this.state.jacketStyle}
				onPress={() => this.setElevation()}
			>
				{this.props.children}
			</TouchableHighlight>
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

export default Jacket;

