import React from 'react';

import './newsfeed.css';
import {connect} from "react-redux";

import {getCurrentNewsfeed} from "../actions";

class Newsfeed extends React.Component {
	componentDidMount() {
		this.props.getCurrentNewsfeed();
	}

	render() {
		return (
			<div className="newsfeed">
				newsfeed
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