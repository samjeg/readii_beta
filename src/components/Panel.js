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
				buttonMarginTop,
				buttonMarginLeft,
				buttonHeight,
				buttonWidth,
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
						style={buttonStyles(buttonWidth, buttonHeight, 0, 0).buttonContainerStyle} 
					>
						<TouchableOpacity 
							style={buttonStyles(buttonWidth, buttonHeight, 0, 0).buttonStyle}
							onPress={() => console.log('Button pressed')}
						/>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback 
						style={buttonStyles(
												buttonWidth, 
												buttonHeight,
												buttonMarginLeft,
												buttonMarginTop 
						).buttonContainerStyle} 
					>
						<TouchableOpacity 
							style={buttonStyles(
												buttonWidth, 
												buttonHeight,
												buttonMarginLeft,
												buttonMarginTop 
							).buttonStyle} 
							onPress={() => console.log('Button pressed')}
						/>
					</TouchableWithoutFeedback>
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

let buttonStyles = function (wd, hgt, mrgnLft, mrgnTp) {
    return ({
		buttonContainerStyle: {
			position: 'absolute',	
			width: wd,
			height: hgt,
			overflow: 'hidden',
			marginTop: mrgnTp,
			marginLeft: mrgnLft,
			backgroundColor: '#F5942F4'
		},
		buttonStyle: {
			position: 'absolute',
			width: wd,
			height: hgt,
			marginTop: mrgnTp,
			marginLeft: mrgnLft,
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

