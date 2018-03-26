import React from 'react';
import {Link} from "react-router-dom";
// import {getCurrentPrice} from "../actions/index";
// import {connect} from 'react-redux';

import './nav-bar.css';

export class NavBar extends React.Component {
	state = {
		steemPrice: 0,
		steemDirection: '\u2303',
		sbdPrice: 0,
		sbdDirection: '\u2303'
	};

	async componentDidMount() {
		const steemPriceData = await this.getPrice('steem');
		const steemDirection = parseFloat(steemPriceData[0].percent_change_1h) < 0 ? '\u2304' : '\u2303';
		const steemPrice = parseFloat(steemPriceData[0].price_usd).toFixed(2);

		const sbdPriceData = await this.getPrice('steem-dollars');
		const sbdDirection = parseFloat(sbdPriceData[0].percent_change_1h) < 0 ? '\u2304' : '\u2303';
		const sbdPrice = parseFloat(sbdPriceData[0].price_usd).toFixed(2);

		this.setState({
			steemPrice,
			steemDirection,
			sbdPrice,
			sbdDirection
		})
	}

	async getPrice(name) {
		const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/${name}/`);
		const data = await response.json();
		return data;
	}

	render() {
		return (
			<nav className="nav-container">
				<div className="nav-content">
					<Link to={'/'}><div className="nav-title">the creative crypto</div></Link>
					<div className="nav-right">
						<div className="steem-price">
							<span className="steem-label">STEEM</span> {this.state.steemDirection} $ {this.state.steemPrice}
						</div>
						<div className="sbd-price">
							<span className="sbd-label">SBD</span> {this.state.sbdDirection} $ {this.state.sbdPrice}
						</div>
						{/*<div className="question-button">?</div>*/}
					</div>
				</div>
			</nav>
		)
	}
}

// const mapDispatchToProps = {
// 	getCurrentPrice
// };
//
// export const ConnectedNavBar = connect(mapDispatchToProps)(NavBar);