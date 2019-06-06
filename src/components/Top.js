import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

const imagePath = require('../../images/starNecklace.jpg');

class Top extends Component {

    render() {
        return (
            <TouchableHighlight style={styles.topStyle}>
                <Image 
                    source={imagePath} 
                    style={styles.imageStyle}
                /> 
            </TouchableHighlight>
        );
    }
}

const styles = {
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
        elevation: 20,
    },
    imageStyle: {
        height: '100%',
        width: '100%',
        borderWidth: 2,
        borderColor: '#000',
    }
};

export default Top;

