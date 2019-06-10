//Import librareis to make components
import React from 'react';
import { 
	Text,
	View, 
	ImageBackground,
	TouchableWithoutFeedback,
	TouchableOpacity, 
} from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

const checkedImage = require('../../images/checkedBackground.jpg');

//Make a component
const Header = (props) => {
	const { 
		textStyle, 
		text2Style,
		viewStyle, 
		onesieButtonOuter, 
		onesieButtonInner,
		dressButtonOuter,
		dressButtonInner,
		shareButton,
		logoTextStyle, 
		dressTextStyle,
		logoBackground
	} = styles; 

	return (
		<View style={viewStyle}>
			<ImageBackground 
				style={viewStyle}
				source={checkedImage}
			>
				<View style={logoBackground}>
					<Text style={logoTextStyle}>{ props.headerText }</Text>
				</View>
				<View style={shareButton}>
					<Text style={text2Style}>share</Text>
				</View>
				<View style={onesieButtonOuter}>
					<TouchableOpacity style={onesieButtonInner}>
						<Text style={textStyle}>onesie</Text>
					</TouchableOpacity>
				</View>
				<View style={dressButtonOuter}>
					<TouchableOpacity style={dressButtonInner}>
						<Text style={dressTextStyle}>dress|dungarees</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = {
	viewStyle: {
		position: 'absolute',
		backgroundColor: '#F45F42',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
        height: vw(15),
        width: vw(100),
        // marginVertical:5,
        overflow: 'hidden',
        // marginHorizontal: 10
	},
	textStyle: {
		fontSize: 18,
		color: '#FFF',
		textAlign: 'center',
	},
	dressTextStyle: {
		fontSize: 12,
		color: '#FFF',
		textAlign: 'center',
	},
	text2Style: {
		fontSize: 18,
		color: '#000',
		textAlign: 'center',
	},
	logoTextStyle: {
		fontSize: 22,
		color: 'orange',
		textAlign: 'center',
		// borderColor: '#000',
		// borderWidth: 2,
		// textShadowColor: '#000',
		// textShadowOffset: { width: 8, height: 8 },
		// elevation: 3,
		// backgroundColor: '#0000' 
		// invisible color
		// background color must be set
	},
	logoBackground: {
		height: vw(11),
        width: vw(20),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        borderRadius: (vw(11) + vw(20)) / 2,
        borderColor: '#FFF',
        borderWidth: 2,
	},
	shareButton: {
		height: vw(11),
        width: vw(20),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0000FF',
        borderRadius: (vw(11) + vw(20)) / 2,
		borderColor: '#000',
        borderWidth: 2,
	},
	onesieButtonOuter: {
		height: vw(11),
        width: vw(20),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF8000',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: (vw(11) + vw(20)) / 2,
	},
	onesieButtonInner: {
		height: vw(8),
        width: vw(18),
        backgroundColor: '#FF0000',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: (vw(8) + vw(18)) / 2,
        justifyContent: 'center',
        alignItems: 'center',
	},
	dressButtonOuter: {
		height: vw(11),
        width: vw(30),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#800080',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: (vw(11) + vw(25)) / 2,
	},
	dressButtonInner: {
		height: vw(8),
        width: vw(28),
        backgroundColor: '#000',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: (vw(8) + vw(18)) / 2,
        justifyContent: 'center',
        alignItems: 'center',
	}

};


//Make componenet available to other parts of the app
export default Header;

