import React, { Component } from 'react';
import { View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import Header from '../../src/components/Header';
import OutfitHeader from '../../src/components/OutfitHeader';
import Chain from '../../src/components/Chain';
import WornButton from '../../src/components/WornButton';
import Bottoms from '../../src/components/Bottoms';
import Jacket from './Jacket';
import Tie from './Tie';
import Overall from './Overall';
import Top from './Top';
import Wrist from './Wrist';
import TopViewFootwear from './TopViewFootwear';
import SideViewFootwear from './SideViewFootwear';
import Ankle from './Ankle';
import JacketAlternate from './JacketAlternate';
import TopAlternate from './TopAlternate';
import OverallAlternate from './OverallAlternate';
import Panel from './Panel';
import PanelWithoutFeedback from './PanelWithoutFeedback';

const chainPic = require('../../images/starNecklace.jpg');
const jacketPic = require('../../images/jacket.jpg');
const jumperPic = require('../../images/jumper.jpg');
const tShirtPic = require('../../images/t_shirt.png');
const tiePic = require('../../images/tie.jpg');
const trousersPic = require('../../images/trousers.jpg');
const watchPic = require('../../images/watch.jpg');
const sideViewTrainerPic = require('../../images/sideViewTrainer.jpg');
const topViewTrainerPic = require('../../images/topViewTrainer.jpg');
const ankleBraceletPic = require('../../images/ankle_bracelet.png');


class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			renderAlternate: false
		};
	}

	render() {
		let first;
		let second;
		let third;
		
		if (!this.state.renderAlternate) {
			first = (<Jacket
						onClick={() =>
							this.setState({ 
								renderAlternate: true
							})
						} 
						elevation={0} 
			>
				<PanelWithoutFeedback
					height={vw(45)} 
					width={vw(42.5)} 
					imagePath={jacketPic} 
				/>
			</Jacket>); 
			second = (<Overall
						elevation={10}
			>
				<Panel
					height={vw(40)} 
					width={vw(30)} 
					imagePath={jumperPic}
					buttonMarginLeft={vw(60)} 
					symbolFontsize={vw(13)}
					symbolMarginTop={vw(10)}
					symbolMarginLeft={vw(8.5)}
					symbolWidth={vw(13)}
					symbolHeight={vw(14)}
				/>
			</Overall>);
			third = (<Top
						elevation={10}			 
			>
				<Panel
					height={vw(40)} 
					width={vw(30)} 
					imagePath={tShirtPic}
					buttonMarginLeft={vw(60)}
					symbolFontsize={vw(13)}
					symbolMarginTop={vw(10)}
					symbolMarginLeft={vw(8.5)}
					symbolWidth={vw(13)}
					symbolHeight={vw(14)}
				/>
			</Top>);								
		} else {
			first = (<OverallAlternate
						onClick={() =>
							this.setState({ 
								renderAlternate: false
							})
						}
						elevation={0} 
			>
				<PanelWithoutFeedback
					height={vw(40)} 
					width={vw(30)} 
					imagePath={jumperPic} 
				/>
			</OverallAlternate>); 
			second = (<TopAlternate
						onClick={() =>
							this.setState({ 
								renderAlternate: false
							})
						}
						elevation={0} 
			>
				<PanelWithoutFeedback
					height={vw(40)} 
					width={vw(30)} 
					imagePath={tShirtPic} 
				/>
			</TopAlternate>); 
			third = (<JacketAlternate 
						elevation={10}	
			>
				<Panel
					width={vw(42.5)} 
					height={vw(45)} 
					imagePath={jacketPic}
					buttonMarginLeft={vw(60)}
					symbolFontsize={vw(13.5)}
					symbolMarginTop={vw(13)}
					symbolMarginLeft={vw(14.7)}
					symbolWidth={vw(13)}
					symbolHeight={vw(14)} 
				/>
			</JacketAlternate>);
		}
		return (
			<View>
				<Header headerText={'Menu'} />
				<OutfitHeader outfitHeaderText={'Name of the item'} />
				<Chain>
					<Panel
						height={vw(9)} 
						width={vw(80)} 
						imagePath={chainPic} 
						buttonMarginLeft={vw(60)}
						symbolFontsize={vw(11)}
						symbolMarginTop={vw(-3.2)}
						symbolMarginLeft={vw(35)}
						symbolWidth={vw(11)}
						symbolHeight={vw(12)}
					/>
				</Chain>	
				<WornButton />
				<Tie>
					<Panel
						height={vw(40)} 
						width={vw(10)} 
						imagePath={tiePic}
						buttonMarginLeft={vw(60)}
						symbolFontsize={vw(12)}
						symbolMarginTop={vw(11)}
						symbolMarginLeft={vw(-0.9)}
						symbolWidth={vw(12)}
						symbolHeight={vw(13)} 
					/>
				</Tie>
				<Wrist>
					<Panel
						height={vw(17)} 
						width={vw(10)} 
						imagePath={watchPic}
						buttonMarginLeft={vw(60)} 
						symbolFontsize={vw(10)}
						symbolMarginTop={vw(1.5)}
						symbolMarginLeft={vw(0)}
						symbolWidth={vw(10)}
						symbolHeight={vw(11)}
					/>
				</Wrist>
				<Bottoms>
					<Panel
						height={vw(28)} 
						width={vw(80)} 
						imagePath={trousersPic} 
						buttonMarginLeft={vw(60)}
						symbolFontsize={vw(13)}
						symbolMarginTop={vw(5.5)}
						symbolMarginLeft={vw(35)}
						symbolWidth={vw(13)}
						symbolHeight={vw(14)}
					/>
				</Bottoms>
				<TopViewFootwear>
					<Panel
						height={vw(30)} 
						width={vw(25)} 
						imagePath={topViewTrainerPic}
						buttonMarginLeft={vw(60)}
						symbolFontsize={vw(13)}
						symbolMarginTop={vw(6)}
						symbolMarginLeft={vw(7)}
						symbolWidth={vw(13)}
						symbolHeight={vw(14)} 
					/>
				</TopViewFootwear>
				<SideViewFootwear>
					<Panel
						height={vw(30)} 
						width={vw(35)} 
						imagePath={sideViewTrainerPic} 
						buttonMarginLeft={vw(60)}
						symbolFontsize={vw(13)}
						symbolMarginTop={vw(6)}
						symbolMarginLeft={vw(11)}
						symbolWidth={vw(13)}
						symbolHeight={vw(14)}
					/>
				</SideViewFootwear>
				<Ankle>
					<Panel
						height={vw(10)} 
						width={vw(20)} 
						imagePath={ankleBraceletPic}
						buttonMarginLeft={vw(60)}
						symbolFontsize={vw(10)}
						symbolMarginTop={vw(-1.8)}
						symbolMarginLeft={vw(4.8)}
						symbolWidth={vw(10)}
						symbolHeight={vw(11)} 
					/>
				</Ankle>
				{ first }
				{ second }
				{ third }
			</View>
		);
	}
}

export default MainPage;


