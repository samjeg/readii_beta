import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

const imagePath = require('../../images/starNecklace.jpg');

class Wrist extends Component {

    render() {
        return (
            <TouchableHighlight style={styles.wristStyle}>
                <Image 
                    source={imagePath} 
                    style={styles.imageStyle}
                /> 
            </TouchableHighlight>
        );
    }
}

const styles = {
    wristStyle: {
        position: 'absolute',
        backgroundColor: '#5942F4',
        justifyContent: 'center',
        alignItems: 'center',
        height: vw(17),
        width: vw(10),
        marginTop: vw(76),
        marginLeft: vw(82.5),
        overflow: 'hidden',
    },
    imageStyle: {
        height: '100%',
        width: '100%',
        borderWidth: 2,
        borderColor: '#000',
    }
};

export default Wrist;

