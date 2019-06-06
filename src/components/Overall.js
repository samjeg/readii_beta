import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

const imagePath = require('../../images/starNecklace.jpg');

class Overall extends Component {

    render() {
        return (
            <TouchableHighlight style={styles.overallStyle}>
                <Image 
                    source={imagePath} 
                    style={styles.imageStyle}
                /> 
            </TouchableHighlight>
        );
    }
}

const styles = {
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
        elevation: 0,
    },
    imageStyle: {
        height: '100%',
        width: '100%',
        borderWidth: 2,
        borderColor: '#000',
    }
};

export default Overall;

