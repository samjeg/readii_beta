import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

const imagePath = require('../../images/starNecklace.jpg');

class TopAlternate extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            topStyle: styles(this.props.elevation).topStyle,
            topImageStyle: styles(this.props.elevation).imageStyle,
        };
    }

    setElevation() {
        this.props.onClick();
    }

    render() {
        return (
            <TouchableHighlight 
                style={this.state.topStyle}
                onPress={() => this.setElevation()}
            >
                <Image 
                    source={imagePath} 
                    style={this.state.topImageStyle}
                /> 
            </TouchableHighlight>
        );
    }
}

let styles = function (localElevation) {
    return ({
        topStyle: {
            position: 'absolute',
            backgroundColor: '#5942F4',
            justifyContent: 'center',
            alignItems: 'center',
            height: vw(40),
            width: vw(30),
            marginTop: vw(53),
            marginLeft: vw(50),
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

export default TopAlternate;

