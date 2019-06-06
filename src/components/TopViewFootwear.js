import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

const imagePath = require('../../images/starNecklace.jpg');

class TopViewFootwear extends Component {

    render() {
        return (
            <TouchableHighlight style={styles.topViewFootwearStyle}>
                <Image 
                    source={imagePath} 
                    style={styles.imageStyle}
                /> 
            </TouchableHighlight>
        );
    }
}

const styles = {
    topViewFootwearStyle: {
        position: 'absolute',
        backgroundColor: '#5942F4',
        justifyContent: 'center',
        alignItems: 'center',
        height: vw(30),
        width: vw(25),
        marginTop: vw(126.5),
        marginLeft: vw(5),
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

export default TopViewFootwear;

