import React from 'react';
import {connect} from "react-redux";

import './newsfeed.css';

import {getCurrentNewsfeed} from "../actions";

class Newsfeed extends React.Component {
	render() {
		return (
			<div className="newsfeed">
				<a className="twitter-timeline"
					 data-height="1240"
					 href="https://twitter.com/creative_crypto?ref_src=twsrc%5Etfw">
				</a>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		newsfeed: state.newsfeed,
		loadingNewsfeed: state.loadingNewsfeed
	};
}

const mapDispatchToProps = {
	getCurrentNewsfeed
};

export const ConnectedNewsfeed = connect(mapStateToProps, mapDispatchToProps)(Newsfeed);