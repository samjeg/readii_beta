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

const Panel = ({ width, height, imagePath, symbolFontsize, symbolMarginTop, symbolHeight, symbolWidth }) => {
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
					{/* <TouchableWithoutFeedback 
					// 	style={styles(width, height).buttonContainerStyle} 
					// >
					// 	<TouchableOpacity 
					// 		style={styles(width, height).buttonStyle}
					// 		onPress={() => console.log('Button pressed')}
					// 	/>
					// </TouchableWithoutFeedback>*/}
					<Text style={symbolStyles(
							symbolFontsize, 
							symbolMarginTop, 
							symbolWidth, 
							symbolHeight
						).imageStyle}
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
			alignItems: 'center',
			position: 'absolute',
		},
		buttonContainerStyle: {
			width: wd,
			height: hgt / 3,
			justifyContent: 'center',
			alignItems: 'center',
			overflow: 'hidden'
		},
		buttonStyle: {
			width: wd,
			height: hgt / 3,
			backgroundColor: '#000',
		},
   });
};

let symbolStyles = function (font, mrgn, wd, hgt) {
    return ({
		imageStyle: {
			position: 'absolute',	
			textAlign: 'center',
			textAlignVertical: 'top',
			color: '#000',
			overflow: 'hidden',
			marginTop: mrgn,	
			width: wd,
			height: hgt,
			fontSize: font,
		},
	});
};


export default Panel;

