import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

const imagePath = require('../../images/starNecklace.jpg');

class Top extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            topStyle: styles(this.props.elevation).topStyle,
            topImageStyle: styles(this.props.elevation).imageStyle,
        };
    }

    render() {
        return (
            <View style={this.state.topStyle}>
                {this.props.children}
            </View>
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

export default Top;

