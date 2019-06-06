import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

const imagePath = require('../../images/starNecklace.jpg');

class Tie extends Component {

    render() {
        return (
            <TouchableHighlight style={styles.tieStyle}>
                <Image 
                    source={imagePath} 
                    style={styles.imageStyle}
                /> 
            </TouchableHighlight>
        );
    }
}

const styles = {
     tieStyle: {
        position: 'absolute',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        height: vw(40),
        width: vw(10),
        marginTop: vw(53),
        marginLeft: vw(5),
        overflow: 'hidden',
    },
    imageStyle: {
        height: '100%',
        width: '100%',
        borderWidth: 2,
        borderColor: '#000',
    }
};

export default Tie;

