import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

const imagePath = require('../../images/starNecklace.jpg');

class OverallAlternate extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            overallStyle: styles(this.props.elevation).overallStyle,
            overallImageStyle: styles(this.props.elevation).imageStyle,
        };
    }

    setElevation() {
        this.props.onClick();
    }

    render() {
        return (
            <TouchableHighlight 
                style={this.state.overallStyle}
                onPress={() => this.setElevation()}
            >
                <Image 
                    source={imagePath} 
                    style={this.state.overallImageStyle}
                /> 
            </TouchableHighlight>
        );
    }
}

let styles = function (localElevation) {
    return ({
        overallStyle: {
            position: 'absolute',
            backgroundColor: '#5942F4',
            justifyContent: 'center',
            alignItems: 'center',
            height: vw(40),
            width: vw(30),
            marginTop: vw(53),
            marginLeft: vw(17.5),
            overflow: 'hidden',
            elevation: localElevation,
        },
        imageStyle: {
            height: '100%',
            width: '100%',
            borderWidth: 2,
            borderColor: '#000',
        }
    });
}

export default OverallAlternate;

