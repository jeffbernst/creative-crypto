import React from 'react';
import Spinner from 'react-spinkit';
import {connect} from "react-redux";

import './newsfeed.css';

import {Tweet} from './tweet';
import {getCurrentNewsfeed} from "../actions";

class Newsfeed extends React.Component {
	componentDidMount() {
		this.props.getCurrentNewsfeed();
	}

	render() {
		if (this.props.loadingNewsfeed) {
			return <Spinner />;
		}

		if (this.props.error) {
			return <strong>{this.props.error}</strong>;
		}

		const tweets = this.props.newsfeed.map((tweet, index) => {
			return <Tweet fullText={tweet.fullText} timeSinceTweeted={tweet.timeSinceTweeted}/>;
		});

		const firstTenTweets = tweets.slice(0, 9);

		return (
			<div className="newsfeed">
				<div className="newsfeed-title-bar">NEWSFEED</div>
				{firstTenTweets}
				<a href="http://twitter.com/creative_crypto"><div className="newsfeed-bottom-bar">VIEW ON TWITTER</div></a>
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