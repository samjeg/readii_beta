import React, { Component } from 'react';
import { View } from 'react-native';
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
			/>); 
			second = (<Overall
						elevation={10}
			/>);
			third = (<Top
						elevation={10}			 
			/>);								
		} else {
			first = (<OverallAlternate
						onClick={() =>
							this.setState({ 
								renderAlternate: false
							})
						}
						elevation={0} 
			/>); 
			second = (<TopAlternate
						onClick={() =>
							this.setState({ 
								renderAlternate: false
							})
						}
						elevation={0} 
			/>); 
			third = (<JacketAlternate 
						elevation={10}	
			/>);
		}
		return (
			<View>
				<Header headerText={'Menu'} />
				<OutfitHeader outfitHeaderText={'Name of the item'} />
				<Chain />	
				<WornButton />
				<Tie />
				<Wrist />
				<Bottoms />
				<TopViewFootwear />
				<SideViewFootwear />
				<Ankle />
				{ first }
				{ second }
				{ third }
			</View>
		);
	}
}

export default MainPage;

