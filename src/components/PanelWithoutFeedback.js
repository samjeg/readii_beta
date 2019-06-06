import React from 'react';
import { View, Image } from 'react-native';
// import { vw } from 'react-native-expo-viewport-units';


const PanelWithoutFeedback = ({ width, height, imagePath }) => {
	return (
		
		<View 
			style={styles(width, height).viewStyle}
		>
			<Image 
				style={styles(width, height).imageBackgroundStyle} 
				source={imagePath} 
			/>
		</View>
	);
};

let styles = function (wd, hgt) {
   return ({
		viewStyle: {
			width: wd,
			height: hgt,
			borderColor: '#000',
			justifyContent: 'center',
			alignItems: 'center',
			overflow: 'hidden'
		},
		imageBackgroundStyle: {
			width: '100%',
			height: '100%',
			borderWidth: 1,
		}
   });
 };

export default PanelWithoutFeedback;

