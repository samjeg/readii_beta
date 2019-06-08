import React from 'react';
import { 
			ImageBackground, 
			Text, 
			TouchableOpacity, 
			View,
			TouchableWithoutFeedback
} from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


// const sadImagePath = require('./images/happy.png');

const Panel = ({ 
				width, 
				height, 
				imagePath,
				buttonMarginLeft,
				symbolFontsize, 
				symbolMarginTop, 
				symbolMarginLeft,
				symbolHeight, 
				symbolWidth 
	}) => {
	return (
		<View style={styles(width, height).viewStyle}>
			<ImageBackground 
				style={styles(width, height).imageBackgroundStyle} 
				source={imagePath}
			>
				<TouchableOpacity 
					onPress={() => console.log('Hello Page Image')} 
					style={styles(width, height).touchStyle}
				>
					<TouchableWithoutFeedback 
						style={buttonStyles(width, height, buttonMarginLeft).buttonContainerStyle} 
					>
						<TouchableOpacity 
							style={buttonStyles(width, height, buttonMarginLeft).buttonStyle}
							onPress={() => console.log('Button pressed')}
						/>
					</TouchableWithoutFeedback>
					{/*<TouchableWithoutFeedback 
						style={styles(width, height).buttonRightContainerStyle} 
					>
						<TouchableOpacity 
							style={styles(width, height).buttonRightStyle}
							onPress={() => console.log('Button pressed')}
						/>
					</TouchableWithoutFeedback>*/}
					<Text style={symbolStyles(
							symbolFontsize, 
							symbolMarginLeft,
							symbolMarginTop, 
							symbolWidth, 
							symbolHeight
						).symbolStyle}
					>
						☹
					</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
};


let styles = function (wd, hgt) {
   return ({
		imageBackgroundStyle: {
			width: wd,
			height: hgt,
			borderColor: '#000',
			justifyContent: 'center',
			alignItems: 'center',
		},
		viewStyle: {
			width: wd,
			height: hgt,
			borderWidth: 1,
			borderColor: '#000',
			justifyContent: 'center',
			alignItems: 'center',
			overflow: 'hidden',
		},
		touchStyle: {
			width: wd,
			height: hgt,
			borderColor: '#000',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			// position: 'absolute',
		}
   });
};

let buttonStyles = function (wd, hgt, mrgn) {
    return ({
		buttonContainerStyle: {
			position: 'absolute',	
			width: wd / 6,
			height: hgt / 3,
			// justifyContent: 'center',
			// alignItems: 'center',
			overflow: 'hidden',
			marginLeft: mrgn,
			backgroundColor: '#F5942F4'
		},
		buttonStyle: {
			width: wd / 6,
			height: hgt / 3,
			marginLeft: mrgn,
			backgroundColor: '#000',
		},
    });
};

let symbolStyles = function (font, marginLeft, marginTp, wd, hgt) {
    return ({
		symbolStyle: {
			position: 'absolute',	
			textAlign: 'center',
			textAlignVertical: 'top',
			marginStart: marginLeft,
			marginTop: marginTp,
			color: '#000',
			overflow: 'hidden',
			width: wd,
			height: hgt,
			fontSize: font,
		},
	});
};


export default Panel;

