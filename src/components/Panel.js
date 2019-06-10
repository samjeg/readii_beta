import React from 'react';
import { 
			ImageBackground, 
			Text, 
			TouchableOpacity, 
			View,
			TouchableWithoutFeedback
} from 'react-native';
// import { vw } from 'react-native-expo-viewport-units';

const Panel = ({ 
				width, 
				height, 
				imagePath,
				buttonMarginTop,
				buttonMarginLeft,
				buttonHeight,
				buttonWidth,
				panelLayout,
				panelType,
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
						style={buttonStyles(
							buttonWidth, 
							buttonHeight, 
							0, 
							0,
							panelLayout,
							panelType,
							true,
						).buttonContainerStyle} 
					>
						<TouchableOpacity 
							style={buttonStyles(
								buttonWidth, 
								buttonHeight, 
								0, 
								0,
								panelLayout,
								panelType,
								true,
							).buttonStyle}
							onPress={() => console.log('Button pressed')}
						>
							<View>
								<Text 
									style={buttonStyles(
										buttonWidth, 
										buttonHeight, 
										0, 
										0,
										panelLayout,
										panelType,
										true,
									).firstArrowStyle}
								>
									⤺
								</Text>
								<Text 
									style={buttonStyles(
										buttonWidth, 
										buttonHeight, 
										0, 
										0,
										panelLayout,
										panelType,
										true,
									).secArrowStyle}
								> 
									⤺
								</Text>
							</View>
						</TouchableOpacity>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback 
						style={buttonStyles(
												buttonWidth, 
												buttonHeight,
												buttonMarginLeft,
												buttonMarginTop,
												panelLayout,
												panelType, 
												false,
						).buttonContainerStyle} 
					>
						<TouchableOpacity 
							style={buttonStyles(
												buttonWidth, 
												buttonHeight,
												buttonMarginLeft,
												buttonMarginTop,
												panelLayout,
												panelType,
												false,
							).buttonStyle} 
							onPress={() => console.log('Button pressed')}
						>
							<Text
								style={buttonStyles(
												buttonWidth, 
												buttonHeight,
												buttonMarginLeft,
												buttonMarginTop,
												panelLayout,
												panelType,
												false,
								).optionStyle}
							>
								☰
							</Text> 
						</TouchableOpacity>
					</TouchableWithoutFeedback>
					<Text 
						style={symbolStyles(
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

let buttonStyles = function (
	wd, 
	hgt, 
	mrgnLft, 
	mrgnTp,
	panelLayout,
	panelType,
	isFirst,
	) {

	const rad = getButtonRadius(hgt, panelLayout, isFirst);
	const symblStyle = getSymbolStyle(hgt, panelType); 

    return ({
		buttonContainerStyle: {
			position: 'absolute',	
			width: wd,
			height: hgt,
			overflow: 'hidden',
			marginTop: mrgnTp,
			marginLeft: mrgnLft,
			borderTopRightRadius: rad.btnTpRgtRds,
			borderTopLeftRadius: rad.btnTpLftRds,
			borderBottomRightRadius: rad.btnBtmRgtRds,
			borderBottomLeftRadius: rad.btnBtmLftRds,
		},
		buttonStyle: {
			position: 'absolute',
			width: wd,
			height: hgt,
			marginTop: mrgnTp,
			marginLeft: mrgnLft,
			borderTopRightRadius: rad.btnTpRgtRds,
			borderTopLeftRadius: rad.btnTpLftRds,
			borderBottomRightRadius: rad.btnBtmRgtRds,
			borderBottomLeftRadius: rad.btnBtmLftRds,
			backgroundColor: '#4169E1',
			borderColor: '#000',
			borderWidth: 1,
			opacity: 0.9,
			overflow: 'hidden',
		},
		optionStyle: {
			position: 'absolute',	
			textAlign: 'center',
			textAlignVertical: 'top',
			color: '#000',
			overflow: 'hidden',
			marginTop: symblStyle.optionStyle.marginTop,
			marginStart: symblStyle.optionStyle.marginStart,
			width: symblStyle.optionStyle.width,
			height: symblStyle.optionStyle.height,
			fontSize: symblStyle.optionStyle.fontSize,
		},
		firstArrowStyle: {
			position: 'absolute',	
			textAlign: 'center',
			textAlignVertical: 'top',
			color: '#000',
			overflow: 'hidden',
			marginTop: symblStyle.firstArrowStyle.marginTop,
			marginStart: symblStyle.firstArrowStyle.marginStart,
			width: symblStyle.firstArrowStyle.width,
			height: symblStyle.firstArrowStyle.height,
			fontSize: symblStyle.firstArrowStyle.fontSize,
			// backgroundColor: '#FFF'
		},
		secArrowStyle: {
			position: 'absolute',	
			textAlign: 'center',
			textAlignVertical: 'top',
			color: '#000',
			overflow: 'hidden',
			marginTop: symblStyle.secArrowStyle.marginTop,
			marginStart: symblStyle.secArrowStyle.marginStart,
			width: symblStyle.secArrowStyle.width,
			height: symblStyle.secArrowStyle.height,
			fontSize: symblStyle.secArrowStyle.fontSize,
			transform: [{ rotate: '180deg' }],
		}
    });
};

const getSymbolStyle = function (hgt, panelType) {
	
	let symblStyle = {
		optionStyle: {
			marginTop: 0,
			marginStart: 0,
			width: hgt,
			height: hgt,
			fontSize: hgt / 2,
		},
		firstArrowStyle: {
			marginTop: -(hgt / 1.5),
			marginStart: -(hgt / 16),
			width: hgt,
			height: hgt,
			fontSize: hgt
		},
		secArrowStyle: {
			marginTop: hgt / 2.5,
			marginStart: -(hgt / 16),
			width: hgt,
			height: hgt,
			fontSize: hgt,
		}
	}; 

	if (panelType === 'tie') {
		symblStyle = {
			optionStyle: {
				marginTop: hgt / 8,
				marginStart: -(hgt / 22),
				width: hgt,
				height: hgt,
				fontSize: hgt / 2,
			},
			firstArrowStyle: {
				marginTop: -(hgt / 1.5),
				marginStart: -(hgt / 22),
				width: hgt,
				height: hgt,
				fontSize: hgt,
			},
			secArrowStyle: {
				marginTop: hgt / 2.5,
				marginStart: -(hgt / 22),
				width: hgt,
				height: hgt,
				fontSize: hgt,
			}
		}; 		
	} else if (panelType === 'wrist') {
		symblStyle = {
			optionStyle: {
				marginTop: -(hgt / 20),
				marginStart: hgt * 0.65,
				width: (hgt / 2) * 1.2,
				height: hgt,
				fontSize: (hgt / 2) * 1.2,
			},
			firstArrowStyle: {
				marginTop: -(hgt / 1.5),
				marginStart: hgt * 0.45,
				width: hgt,
				height: hgt * 1.2,
				fontSize: hgt,
			},
			secArrowStyle: {
				marginTop: hgt / 2.8,
				marginStart: hgt * 0.45,
				width: hgt,
				height: hgt * 1.2,
				fontSize: hgt,
			}
		}; 
	} else if (panelType === 'chain') {
		symblStyle = {
			optionStyle: {
				marginTop: hgt / 8,
				marginStart: hgt / 10,
				width: hgt,
				height: hgt,
				fontSize: hgt / 2,
			},
			firstArrowStyle: {
				marginTop: -(hgt / 1.8),
				marginStart: -(hgt / 22),
				width: hgt,
				height: hgt + 5,
				fontSize: hgt,
			},
			secArrowStyle: {
				marginTop: hgt / 2.5,
				marginStart: -(hgt / 22),
				width: hgt,
				height: hgt + 5,
				fontSize: hgt,
			}
		}; 	
	} else if (panelType === 'ankle') {
		symblStyle = {
			optionStyle: {
				marginTop: hgt / 5,
				marginStart: hgt / 10,
				width: hgt / 3,
				height: (hgt / 3) * 1.2,
				fontSize: hgt / 3,
			},
			firstArrowStyle: {
				marginTop: -(hgt / 12),
				marginStart: -(hgt / 20),
				width: hgt / 2,
				height: (hgt / 2) * 1.2,
				fontSize: hgt / 2,
			},
			secArrowStyle: {
				marginTop: hgt / 2.3,
				marginStart: -(hgt / 20),
				width: hgt / 2,
				height: (hgt / 2) * 1.2,
				fontSize: hgt / 2,
			}
		};
	} else {
		symblStyle = {
			optionStyle: {
				marginTop: 0,
				marginStart: 0,
				width: hgt,
				height: hgt,
				fontSize: hgt / 2,
			},
			firstArrowStyle: {
				marginTop: -(hgt / 1.5),
				marginStart: -(hgt / 16),
				width: hgt,
				height: hgt,
				fontSize: hgt
			},
			secArrowStyle: {
				marginTop: hgt / 2.5,
				marginStart: -(hgt / 16),
				width: hgt,
				height: hgt,				
				fontSize: hgt,
			}
		};
	}
	return symblStyle;
};

const getButtonRadius = function (height, panelLayout, isFirst) {
	let btnRadius = {
		btnTpRgtRds: 0,
		btnTpLftRds: 0,
		btnBtmRgtRds: 0,
		btnBtmLftRds: 0,
	}; 


	if (isFirst) {
		if (panelLayout === 'vertical') {
			btnRadius = {
				btnTpRgtRds: 0,
				btnTpLftRds: 0,
				btnBtmRgtRds: height / 2,
				btnBtmLftRds: height / 2,
			};	
		} else if (panelLayout === 'horizontal') {
			btnRadius = {
				btnTpRgtRds: height / 2,
				btnTpLftRds: 0,
				btnBtmRgtRds: height / 2,
				btnBtmLftRds: 0,
			};
		} else {
			btnRadius = {
				btnTpRgtRds: height / 8,
				btnTpLftRds: 0,
				btnBtmRgtRds: height / 1.4,
				btnBtmLftRds: height / 8,
			};
		}
	} else {
		if (panelLayout === 'vertical') {
			btnRadius = {
				btnTpRgtRds: height / 2,
				btnTpLftRds: height / 2,
				btnBtmRgtRds: 0,
				btnBtmLftRds: 0,
			};	
		} else if (panelLayout === 'horizontal') {
			btnRadius = {
				btnTpRgtRds: 0,
				btnTpLftRds: height / 2,
				btnBtmRgtRds: 0,
				btnBtmLftRds: height / 2,
			};
		} else {
			btnRadius = {
				btnTpRgtRds: 0,
				btnTpLftRds: height / 8,
				btnBtmRgtRds: height / 8,
				btnBtmLftRds: height / 1.4,
			};
		}
	}

	return btnRadius;
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

