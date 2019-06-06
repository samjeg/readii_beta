import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

const imagePath = require('../../images/starNecklace.jpg');

class Ankle extends Component {

    render() {
        return (
            <TouchableHighlight style={styles.ankleStyle}>
                {this.props.children}
            </TouchableHighlight>
        );
    }
}

const styles = {
    ankleStyle: {
        position: 'absolute',
        backgroundColor: '#5942F4',
        justifyContent: 'center',
        alignItems: 'center',
        height: vw(10),
        width: vw(20),
        marginTop: vw(135),
        marginLeft: vw(75),
        overflow: 'hidden',
        // elevation: 20,
    },
    imageStyle: {
        height: '100%',
        width: '100%',
        borderWidth: 2,
        borderColor: '#000',
    }
};

export default Ankle;

