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

class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			renderAlternate: false,
			firstCircleElevation: 30,
			secondCircleElevation: 50,
			firstCircleAlterElevation: 50,
			secondCircleAlterElevation: 30
		};
	}

	render() {
		return (
			<View>
				<Header headerText={'Menu'} />
				<OutfitHeader outfitHeaderText={'Name of the item'} />
				<Chain />	
				<WornButton />
				<Tie />
				<Overall />
				<Top />
				<Wrist />
				<Bottoms />
				<TopViewFootwear />
				<SideViewFootwear />
				<Ankle />
				<Jacket />
			</View>
		);
	}
}

export default MainPage;

