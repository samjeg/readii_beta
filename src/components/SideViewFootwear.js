import React, { Component } from 'react';
import { TouchableHighlight, Image } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

const imagePath = require('../../images/starNecklace.jpg');

class SideViewFootwear extends Component {

    render() {
        return (
            <TouchableHighlight style={styles.sideViewFootwearStyle}>
                {this.props.children}
            </TouchableHighlight>
        );
    }
}

const styles = {
    sideViewFootwearStyle: {
        position: 'absolute',
        backgroundColor: '#5942F4',
        justifyContent: 'center',
        alignItems: 'center',
        height: vw(30),
        width: vw(35),
        marginTop: vw(126.5),
        marginLeft: vw(35),
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

export default SideViewFootwear;

